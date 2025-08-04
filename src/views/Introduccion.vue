<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade-down") La dispensación de productos farmacéuticos constituye una actividad esencial dentro del servicio de salud, ya que asegura que los medicamentos lleguen al usuario final en condiciones adecuadas de calidad, seguridad y eficacia terapéutica. Este componente formativo tiene como propósito desarrollar en los aprendices del SENA las competencias necesarias para ejecutar este proceso de manera técnica, normativa y ética. Para ello, se abordan aspectos como la validación de la prescripción médica, la aplicación de protocolos estandarizados, el cumplimiento del Manual de Buenas Prácticas de Dispensación (MBPD), y la correcta entrega de medicamentos. Asimismo, se profundiza en el manejo de residuos, el seguimiento de alertas sanitarias y la adecuada orientación al usuario, elementos clave para garantizar una atención farmacéutica segura, trazable y centrada en el bienestar del paciente. Para comprender la importancia del contenido y los temas abordados, se recomienda acceder al siguiente video:
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/18JDjyqT5rE?si=4zIgUQI9WE7y_y0Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
