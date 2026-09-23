// Valida la base de conocimiento:
// - frontmatter con campos obligatorios
// - ids únicos
// - `relacionados` apunta a ids existentes
// - `fuentes_clave` existe en la bibliografía
// - enlaces relativos a archivos existentes
import { existsSync } from "node:fs";
import path from "node:path";
import { loadDocs, bibliographyKeys } from "./lib.mjs";

const REQUIRED = ["id", "tipo", "tags"];
const TIPOS = ["indice", "instrucciones", "mapa", "glosario", "concepto", "aplicacion", "fuentes"];

const docs = await loadDocs();
const errors = [];
const ids = new Map();
const bibKeys = bibliographyKeys(docs);

for (const doc of docs) {
  if (!doc.data) { errors.push(`${doc.rel}: falta el frontmatter YAML`); continue; }
  for (const field of REQUIRED) {
    if (!doc.data[field] || (Array.isArray(doc.data[field]) && !doc.data[field].length)) {
      errors.push(`${doc.rel}: falta el campo "${field}"`);
    }
  }
  if (doc.data.tipo && !TIPOS.includes(doc.data.tipo)) {
    errors.push(`${doc.rel}: tipo "${doc.data.tipo}" no válido (${TIPOS.join(", ")})`);
  }
  if (ids.has(doc.data.id)) errors.push(`${doc.rel}: id duplicado "${doc.data.id}" (también en ${ids.get(doc.data.id)})`);
  ids.set(doc.data.id, doc.rel);
}

for (const doc of docs) {
  if (!doc.data) continue;
  for (const rel of doc.data.relacionados || []) {
    if (!ids.has(rel)) errors.push(`${doc.rel}: "relacionados" apunta a un id inexistente "${rel}"`);
  }
  for (const key of doc.data.fuentes_clave || []) {
    if (!bibKeys.has(key)) errors.push(`${doc.rel}: la fuente "${key}" no está en la bibliografía`);
  }
  for (const [, target] of doc.body.matchAll(/\]\(([^)]+)\)/g)) {
    if (/^(https?:|mailto:|#)/.test(target)) continue;
    const resolved = path.resolve(path.dirname(doc.file), target.split("#")[0]);
    if (!existsSync(resolved)) errors.push(`${doc.rel}: enlace roto -> ${target}`);
  }
}

if (errors.length) {
  console.error(`✗ ${errors.length} error(es):\n` + errors.map((e) => `  - ${e}`).join("\n"));
  process.exit(1);
}
console.log(`✓ ${docs.length} documentos válidos, ${bibKeys.size} referencias bibliográficas.`);
