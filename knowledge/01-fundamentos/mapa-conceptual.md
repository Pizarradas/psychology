---
id: mapa-conceptual
tipo: mapa
tags: [relaciones, diagrama, ontologia]
relacionados: [glosario]
---

# Mapa conceptual de la atención

## Diagrama

```mermaid
graph TD
    AT[Atención] --> RED[Redes atencionales]
    RED --> ALE[Alerta]
    RED --> ORI[Orientación]
    RED --> EJE[Control ejecutivo]

    AT --> CTRL[Control de la atención]
    CTRL --> TD[Voluntario / guiado por objetivos]
    CTRL --> BU[Captura por el estímulo / saliencia]
    CTRL --> HIS[Historia de selección y recompensa]

    AT --> SEL[Atención selectiva]
    SEL --> FIL[Teoría del filtro]
    SEL --> FIT[Integración de rasgos]
    SEL --> BC[Competencia sesgada]
    SEL --> LOAD[Teoría de la carga]

    AT --> LIM[Límites de capacidad]
    LIM --> IB[Ceguera por falta de atención]
    LIM --> AB[Parpadeo atencional]
    LIM --> PRP[Cuello de botella en doble tarea]

    AT --> SOS[Atención sostenida]
    SOS --> VIG[Declive de la vigilancia]
    SOS --> FLU[Fluctuaciones]
    SOS --> MW[Mente errante]

    ORI --> TD
    ORI --> BU
    EJE --> TD
    BU --> IB
    LOAD --> IB
    PRP --> MULTI[Multitarea]
    MW --> VIG
    EJE --> MULTI
```

## Relaciones clave (formato legible por máquina)

| Origen | Relación | Destino | Fuente |
|---|---|---|---|
| Orientación | se implementa en | Red dorsal (voluntaria) y red ventral (captura) | Corbetta y Shulman, 2002 |
| Control ejecutivo | regula | Conflicto y multitarea | Petersen y Posner, 2012 |
| Carga perceptiva alta | reduce | Procesamiento de distractores | Lavie et al., 2014 |
| Carga perceptiva alta | aumenta | Ceguera por falta de atención | Lavie et al., 2014 |
| Carga de memoria de trabajo alta | aumenta | Interferencia de distractores | Murphy et al., 2016 |
| Integración de rasgos | requiere | Atención focal | Treisman y Gelade, 1980 |
| Doble tarea | produce | Retraso por cuello de botella central | Pashler, 1994 |
| Tiempo en la tarea | produce | Declive de la vigilancia | Langner y Eickhoff, 2013 |
| Mente errante | se asocia con | Menor bienestar | Killingsworth y Gilbert, 2010 |
| Historia de recompensa | sesga | Selección atencional | Awh et al., 2012 |
