# Atención humana · Base de conocimiento para IA

[![Validar conocimiento](https://github.com/USUARIO/atencion-humana/actions/workflows/validar.yml/badge.svg)](https://github.com/USUARIO/atencion-humana/actions/workflows/validar.yml)
[![Licencia: CC BY 4.0](https://img.shields.io/badge/licencia-CC%20BY%204.0-blue.svg)](LICENSE)

Base de conocimiento modular, en Markdown, sobre cómo funciona la atención humana según la psicología cognitiva y la neurociencia. Está pensada para servir de contexto a modelos de IA (prompts de sistema, RAG, agentes) y a personas que diseñan interfaces, animaciones, contenidos o experiencias de aprendizaje.

Cada afirmación lleva un **nivel de evidencia** y una **cita** a estudios revisados por pares.

## Estructura

```
atencion-humana/
├── knowledge/                  # Fuente de verdad: todo el conocimiento
│   ├── 00-guia-ia/             # Instrucciones para la IA (prompt de sistema)
│   ├── 01-fundamentos/         # Glosario y mapa conceptual
│   ├── 02-conceptos/           # Un archivo por área de la atención
│   ├── 03-aplicaciones/        # UX/UI, motion, aprendizaje, productividad
│   └── 04-fuentes/             # Bibliografía APA con claves
├── dist/                       # Generado: índice JSON y contexto en un solo archivo
├── templates/                  # Plantillas para añadir conceptos nuevos
├── scripts/                    # Validación y generación (Node, sin dependencias)
├── .github/                    # CI, plantillas de issues y PR
├── llms.txt                    # Mapa del repositorio para agentes de IA
└── CITATION.cff                # Cómo citar este repositorio
```

## Contenido

| Documento | Qué cubre |
|---|---|
| [Guía para la IA](knowledge/00-guia-ia/guia-para-ia.md) | Reglas de uso, niveles de evidencia, mitos a corregir |
| [Glosario](knowledge/01-fundamentos/glosario.md) | Definiciones con el término en inglés |
| [Mapa conceptual](knowledge/01-fundamentos/mapa-conceptual.md) | Diagrama y tabla de relaciones |
| [Modelos generales](knowledge/02-conceptos/01-modelos-generales.md) | Redes de Posner, redes dorsal/ventral, historia de selección |
| [Atención selectiva](knowledge/02-conceptos/02-atencion-selectiva.md) | Filtro, integración de rasgos, competencia sesgada, carga |
| [Límites de capacidad](knowledge/02-conceptos/03-limites-de-capacidad.md) | Ceguera atencional, parpadeo atencional, doble tarea |
| [Atención sostenida](knowledge/02-conceptos/04-atencion-sostenida.md) | Vigilancia, fluctuaciones, mente errante |
| [Multitarea y mitos](knowledge/02-conceptos/05-multitarea-y-mitos.md) | Multitarea mediática, "8 segundos" |
| [Aplicaciones](knowledge/03-aplicaciones/aplicaciones.md) | Recomendaciones prácticas justificadas |
| [Bibliografía](knowledge/04-fuentes/bibliografia.md) | 24 referencias con enlaces |

## Niveles de evidencia

| Etiqueta | Significado |
|---|---|
| **[A]** | Robusta y replicada |
| **[B]** | Bien respaldada, con matices o debate teórico |
| **[C]** | Mixta, emergente o de causalidad incierta |
| **[MITO]** | Popular pero sin respaldo empírico |
| **[INFERENCIA]** | Aplicación práctica derivada, no probada directamente |

## Cómo usarlo con una IA

1. **Prompt completo:** copia [`dist/contexto-completo.md`](dist/contexto-completo.md) en el contexto del modelo. La guía para IA va al principio.
2. **Prompt de sistema ligero:** usa solo [`knowledge/00-guia-ia/guia-para-ia.md`](knowledge/00-guia-ia/guia-para-ia.md) y añade los conceptos que necesites.
3. **RAG / agentes:** indexa `knowledge/` por archivo o por sección (`##`). Usa [`dist/indice.json`](dist/indice.json) para filtrar por `tags`, `tipo` o `relacionados`.
4. **Agentes que leen repositorios:** [`llms.txt`](llms.txt) describe qué leer y en qué orden.

## Desarrollo

Requiere Node.js 18 o superior. No hay dependencias que instalar.

```bash
npm run validate   # comprueba frontmatter, ids, enlaces y citas
npm run build      # regenera dist/
npm run check      # ambas cosas
```

La validación se ejecuta automáticamente en cada push y pull request (ver [`.github/workflows/validar.yml`](.github/workflows/validar.yml)).

## Contribuir

Lee [CONTRIBUTING.md](CONTRIBUTING.md). En resumen: cada afirmación necesita una fuente revisada por pares y una etiqueta de evidencia, y los conceptos nuevos parten de [`templates/plantilla-concepto.md`](templates/plantilla-concepto.md).

## Hoja de ruta

- [ ] Memoria de trabajo y atención
- [ ] Emoción y sesgos atencionales
- [ ] Entrenamiento atencional y mindfulness
- [ ] Desarrollo y envejecimiento de la atención
- [ ] TDAH (enfoque informativo, no diagnóstico)
- [ ] Ceguera al cambio
- [ ] Atención auditiva y multisensorial
- [ ] Versión en inglés

## Aviso

Este contenido es divulgativo y de apoyo al diseño. No sustituye la evaluación de un profesional sanitario ni debe usarse para diagnosticar.

## Licencia

Contenido bajo [Creative Commons Atribución 4.0 Internacional (CC BY 4.0)](LICENSE). Los estudios citados pertenecen a sus autores y editoriales; aquí solo se resumen y enlazan.
