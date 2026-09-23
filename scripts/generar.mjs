// Genera los artefactos de /dist para consumo por IA:
// - dist/indice.json: metadatos de cada documento (para RAG o selección de contexto)
// - dist/contexto-completo.md: todo el conocimiento en un único archivo (para pegar en un prompt)
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { ROOT, loadDocs } from "./lib.mjs";

const docs = await loadDocs();
const distDir = path.join(ROOT, "dist");
await mkdir(distDir, { recursive: true });

const index = {
  nombre: "atencion-humana",
  generado: new Date().toISOString().slice(0, 10),
  documentos: docs.map((d) => ({
    id: d.data?.id,
    titulo: d.title,
    tipo: d.data?.tipo,
    ruta: d.rel,
    tags: d.data?.tags || [],
    relacionados: d.data?.relacionados || [],
    fuentes_clave: d.data?.fuentes_clave || [],
    palabras: d.body.split(/\s+/).filter(Boolean).length,
  })),
};
await writeFile(path.join(distDir, "indice.json"), JSON.stringify(index, null, 2) + "\n");

// La guía para IA va primero porque actúa como instrucciones.
const ordered = [...docs].sort((a, b) =>
  a.data?.tipo === "instrucciones" ? -1 : b.data?.tipo === "instrucciones" ? 1 : a.rel.localeCompare(b.rel)
);
const full = [
  "# Contexto completo: atención humana",
  "",
  "> Archivo generado automáticamente con `npm run build`. No editar a mano; edita los archivos de `knowledge/`.",
  "",
  ...ordered.map((d) => `<!-- fuente: ${d.rel} | id: ${d.data?.id} -->\n\n${d.body.trim()}\n`),
].join("\n");
await writeFile(path.join(distDir, "contexto-completo.md"), full);

console.log(`✓ Generados dist/indice.json y dist/contexto-completo.md (${docs.length} documentos).`);
