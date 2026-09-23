// Utilidades compartidas: lectura de archivos Markdown y frontmatter YAML simple.
// Sin dependencias externas: el frontmatter admite `clave: valor` y listas `[a, b]`.
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
export const KNOWLEDGE_DIR = path.join(ROOT, "knowledge");

export async function listMarkdown(dir = KNOWLEDGE_DIR) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await listMarkdown(full)));
    else if (entry.name.endsWith(".md")) files.push(full);
  }
  return files.sort();
}

export function parseFrontmatter(text) {
  const match = text.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return { data: null, body: text };
  const data = {};
  for (const line of match[1].split("\n")) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/);
    if (!kv) continue;
    const [, key, raw] = kv;
    const value = raw.trim();
    data[key] = value.startsWith("[") && value.endsWith("]")
      ? value.slice(1, -1).split(",").map((s) => s.trim()).filter(Boolean)
      : value;
  }
  return { data, body: text.slice(match[0].length) };
}

export async function loadDocs() {
  const files = await listMarkdown();
  return Promise.all(
    files.map(async (file) => {
      const text = await readFile(file, "utf8");
      const { data, body } = parseFrontmatter(text);
      const title = (body.match(/^#\s+(.+)$/m) || [])[1] || path.basename(file, ".md");
      return { file, rel: path.relative(ROOT, file).split(path.sep).join("/"), data, body, title };
    })
  );
}

// Claves de la bibliografía con el formato: - **Clave2020** — ...
export function bibliographyKeys(docs) {
  const bib = docs.find((d) => d.data?.id === "bibliografia");
  if (!bib) return new Set();
  return new Set([...bib.body.matchAll(/^- \*\*([A-Za-z]+\d{4}[a-z]?)\*\*/gm)].map((m) => m[1]));
}
