---
id: atencion-humana-index
tipo: indice
version: 1.0
actualizado: 2026-09-23
idioma: es
---

# Ecosistema de conocimiento: la atención humana

Base de conocimiento modular sobre cómo funciona la atención humana desde la psicología cognitiva y la neurociencia. Está diseñada para servir como contexto a una IA (RAG, prompts de sistema, agentes) y a personas que diseñan productos, interfaces, contenidos o experiencias de aprendizaje.

## Cómo está organizado

| Archivo | Contenido | Cuándo cargarlo |
|---|---|---|
| [ia/guia-para-ia.md](ia/guia-para-ia.md) | Reglas de uso, niveles de evidencia, mitos a evitar | Siempre, como prompt de sistema |
| [mapa-conceptual.md](mapa-conceptual.md) | Relaciones entre conceptos (diagrama) | Para razonar conexiones |
| [glosario.md](glosario.md) | Definiciones breves de todos los términos | Consultas de definición |
| [conceptos/01-modelos-generales.md](conceptos/01-modelos-generales.md) | Redes atencionales, control voluntario vs. captura | Preguntas de "qué es la atención" |
| [conceptos/02-atencion-selectiva.md](conceptos/02-atencion-selectiva.md) | Filtro, integración de rasgos, competencia sesgada, carga | Distracción, foco, búsqueda visual |
| [conceptos/03-limites-de-capacidad.md](conceptos/03-limites-de-capacidad.md) | Ceguera atencional, parpadeo atencional, cuello de botella | Qué se nos escapa y por qué |
| [conceptos/04-atencion-sostenida.md](conceptos/04-atencion-sostenida.md) | Vigilancia, fluctuaciones, mente errante | Fatiga, concentración prolongada |
| [conceptos/05-multitarea-y-mitos.md](conceptos/05-multitarea-y-mitos.md) | Multitarea mediática, "8 segundos" | Afirmaciones populares |
| [aplicaciones/aplicaciones.md](aplicaciones/aplicaciones.md) | UX/UI, motion design, aprendizaje, productividad | Casos prácticos |
| [fuentes/bibliografia.md](fuentes/bibliografia.md) | Referencias APA con enlaces | Verificar y citar |

## Convenciones

- Cada archivo empieza con un bloque YAML (`id`, `tags`, `relacionados`) para facilitar la indexación y la recuperación por fragmentos.
- Las afirmaciones llevan una etiqueta de evidencia (definida en [ia/guia-para-ia.md](ia/guia-para-ia.md)):
  - **[A]** Robusta y replicada.
  - **[B]** Bien respaldada, con matices o debate teórico.
  - **[C]** Mixta, emergente o de causalidad incierta.
  - **[MITO]** Popular pero sin respaldo empírico.
  - **[INFERENCIA]** Aplicación práctica derivada de la evidencia, no probada directamente.
- Las referencias se citan como `(Autor, año)` y se resuelven en [fuentes/bibliografia.md](fuentes/bibliografia.md).

## Idea central en cinco frases

1. La atención no es una sola cosa: es un conjunto de sistemas (alerta, orientación y control ejecutivo) con bases cerebrales parcialmente separadas (Posner y Petersen, 1990; Petersen y Posner, 2012).
2. Lo que atendemos resulta de la interacción entre nuestros objetivos, la saliencia de los estímulos y nuestra historia de aprendizaje y recompensa (Corbetta y Shulman, 2002; Awh et al., 2012).
3. La capacidad es limitada: seleccionar algo implica procesar menos otras cosas, hasta el punto de no ver lo evidente (Simons y Chabris, 1999).
4. La atención fluctúa de forma natural y decae con el tiempo en tareas monótonas; la mente divaga cerca de la mitad del tiempo (Esterman y Rothlein, 2019; Killingsworth y Gilbert, 2010).
5. Muchas afirmaciones populares (capacidad de atención de "8 segundos", multitarea eficiente) no tienen respaldo sólido (Bradbury, 2016; Pashler, 1994).
