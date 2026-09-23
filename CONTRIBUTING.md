# Guía de contribución

Gracias por ayudar a mejorar esta base de conocimiento. El objetivo es que una IA pueda confiar en ella, así que el rigor es la prioridad.

## Principios

1. **Toda afirmación relevante lleva fuente.** Preferentemente artículos revisados por pares, revisiones sistemáticas o metaanálisis. Evita blogs y divulgación sin referencias.
2. **Toda afirmación lleva etiqueta de evidencia:** `[A]`, `[B]`, `[C]`, `[MITO]` o `[INFERENCIA]` (ver el README).
3. **Separa hallazgo y aplicación.** Lo que se deriva para UX, educación o productividad se marca como `[INFERENCIA]`.
4. **No inventes cifras.** Si citas un número, debe aparecer en la fuente enlazada.
5. **Sin contenido clínico diagnóstico.**

## Añadir un concepto nuevo

1. Copia [`templates/plantilla-concepto.md`](templates/plantilla-concepto.md) en `knowledge/02-conceptos/` con el siguiente número libre, por ejemplo `06-memoria-de-trabajo.md`.
2. Rellena el frontmatter:
   - `id`: único, en minúsculas y con guiones.
   - `tipo`: uno de `indice`, `instrucciones`, `mapa`, `glosario`, `concepto`, `aplicacion`, `fuentes`.
   - `tags`: palabras clave para la recuperación.
   - `relacionados`: ids de otros documentos.
   - `fuentes_clave`: claves de la bibliografía.
3. Añade las referencias nuevas a [`knowledge/04-fuentes/bibliografia.md`](knowledge/04-fuentes/bibliografia.md) con el formato `- **Apellido2020** — Referencia APA. [Enlace](url)`.
4. Añade los términos nuevos al [glosario](knowledge/01-fundamentos/glosario.md) y las relaciones al [mapa conceptual](knowledge/01-fundamentos/mapa-conceptual.md).
5. Enlázalo desde la tabla de contenido del [README](README.md).
6. Ejecuta `npm run check` y confirma que no hay errores.

## Convenciones de estilo

- Español neutro. Términos técnicos en inglés entre paréntesis la primera vez.
- Un `#` por archivo (el título); secciones con `##` para facilitar la división en fragmentos.
- Cada sección debe entenderse por sí sola: la IA puede recuperarla aislada.
- Citas en el texto como `(Autor, año)` o `(Autor y Autor, año)`; con tres o más autores, `(Autor et al., año)`.

## Commits

Se recomienda [Conventional Commits](https://www.conventionalcommits.org/es/):

- `feat(conceptos): añade memoria de trabajo`
- `fix(fuentes): corrige DOI de Pashler (1994)`
- `docs: actualiza README`
- `chore: regenera dist`

## Pull requests

Rellena la plantilla del PR. Los cambios en `knowledge/` deben incluir el `dist/` regenerado (`npm run build`).
