<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
export default {
  name: 'ActividadDidactica',
  data: () => ({
    cuestionario: {
      tema: 'tema_actividad_didactica',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado referente a los temas desarrollados en el componente formativo y elija entre verdadero y falso según corresponda.',
      barajarPreguntas: true,
      preguntas: [
        {
          id: 1,
          texto:
            'La clasificación de clientes en el servicio farmacéutico, permite mejorar la seguridad y eficiencia del proceso de dispensación.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            'Los medicamentos controlados pueden ser prescritos en cualquier formato de fórmula médica.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            'Los protocolos de dispensación garantizan un proceso homogéneo y seguro en la entrega de medicamentos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            'El Manual de Buenas Prácticas de Dispensación (MBPD), es un documento opcional para los servicios farmacéuticos.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            'Verificar la fecha de vencimiento del medicamento es una recomendación, no una obligación normativa.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            'El registro sanitario del INVIMA no es necesario para productos farmacéuticos de venta libre.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            'Los medicamentos vencidos deben ser ubicados en áreas de cuarentena.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            'El personal farmacéutico debe evaluar la dosis y posible interacción de los medicamentos antes de la dispensación.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            'La prescripción institucional no necesita validación por parte del servicio farmacéutico.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            'Los medicamentos fotosensibles deben almacenarse expuestos a luz natural controlada.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            'Los residuos farmacéuticos se clasifican según su riesgo y tipo de sustancia.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            'Las alertas sanitarias buscan informar sobre medicamentos seguros y eficaces.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            'El procedimiento de dispensación incluye una fase de registro y trazabilidad.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            'El almacenamiento incorrecto no afecta la eficacia del medicamento.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            'El rotulado de los medicamentos debe incluir información clara y legible.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            'El uso de guantes es opcional durante la preparación del medicamento.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            'La normativa colombiana exige la existencia de protocolos escritos en los servicios farmacéuticos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            'Las instrucciones de uso no deben comunicarse al usuario si ya están en la fórmula.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            'Los residuos citotóxicos deben desecharse en bolsas verdes reciclables.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: false },
            { id: 'b', texto: 'Falso', esCorrecta: true },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'El personal en formación también participa activamente en la verificación de la calidad de los medicamentos.',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Verdadero', esCorrecta: true },
            { id: 'b', texto: 'Falso', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Excelente trabajo! Se evidencia un claro dominio de los conceptos clave relacionados con la dispensación de productos farmacéuticos, aplicando correctamente los procedimientos, las buenas prácticas y la normativa vigente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Lo felicito, ha superado la actividad y demuestra sólidos conocimientos sobre el componente formativo.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
