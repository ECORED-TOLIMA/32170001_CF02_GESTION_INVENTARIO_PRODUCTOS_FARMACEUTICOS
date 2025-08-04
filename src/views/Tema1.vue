<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Atención al cliente en el servicio farmacéutico
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema1/img01.png', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") La atención al cliente en el servicio farmacéutico requiere reconocer las características y necesidades tanto de usuarios internos como externos. Una comunicación clara, el cumplimiento de protocolos, y un trato humanizado son esenciales para garantizar seguridad, eficiencia y calidad en la dispensación. Aplicar buenas prácticas fortalece la relación con el usuario y asegura un servicio ético y normativo.
    
    separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Tipos y características del cliente

    p.mb-5(data-aos="fade-down") En el entorno del servicio farmacéutico, es fundamental reconocer que el cliente no solo es la persona que recibe un medicamento, sino también cualquier individuo que interactúe con el servicio, ya sea directa o indirectamente. En este sentido, se distinguen dos tipos de clientes:

    TabsC.color-acento-botones.mb-5(data-aos="flip-up")
      .py-3.py-md-4(titulo="Cliente interno")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/img02.jpg', alt='Imagen decorativa')
          .col-lg-6.order-lg-2.order-2
            p Hace parte del equipo de trabajo de la institución prestadora del servicio de salud, como los auxiliares de farmacia, regentes, médicos, enfermeros o personal administrativo, quienes, mediante una interacción coordinada, contribuyen al logro de un servicio eficiente y seguro. Atender adecuadamente a este tipo de cliente implica establecer relaciones colaborativas, comunicación efectiva y cumplimiento de responsabilidades dentro del equipo interdisciplinario.

      .py-3.py-md-4(titulo="Cliente externo")
        .row.justify-content-center.p-4
          .col-lg-6.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema1/img02.jpg', alt='Imagen decorativa')
          .col-lg-6.order-lg-2.order-2
            p Es el usuario final que accede al servicio farmacéutico para obtener un medicamento, asesoría o información. Este cliente puede tener diversas características según su edad, condición de salud, nivel educativo, contexto sociocultural y expectativas frente al servicio. Reconocer estas diferencias permite adoptar una atención personalizada, empática y humanizada, ajustada a las necesidades individuales de cada usuario.

    p.mb-0(data-aos="fade-down") Comprender las características de ambos tipos de clientes permite garantizar una atención que respete los principios de calidad, oportunidad, seguridad y calidez. Además, facilita la implementación de protocolos adecuados, la mejora continua del servicio y el fortalecimiento de la relación entre el personal farmacéutico y los usuarios.

    separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Elementos clave en la atención
    
    p.mb-5(data-aos="fade-down") En el servicio farmacéutico, ofrecer una atención de calidad implica integrar diversos elementos esenciales que garanticen una experiencia satisfactoria y segura para el usuario. Estos elementos son:

    .tarjeta.tarjeta--BG01.p-4.p-md-5.mb-5
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row(titulo="1")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Comunicación efectiva
            p La interacción con el usuario debe ser clara, respetuosa, empática y adaptada a su nivel de comprensión. Esto permite identificar sus necesidades, resolver inquietudes y brindar una orientación precisa sobre los medicamentos.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img04.jpg', alt='Imagen decorativa')

        .row(titulo="2")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Seguridad del paciente
            p Es clave validar la identidad del usuario, verificar la prescripción médica, controlar la fecha de vencimiento del medicamento y brindar instrucciones claras sobre su administración.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img05.jpg', alt='Imagen decorativa')

        .row(titulo="3")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Actitud del personal
            p La amabilidad, disposición, paciencia y respeto son fundamentales. Una actitud positiva genera confianza, mejora la experiencia del usuario y favorece la resolución de conflictos.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img06.jpg', alt='Imagen decorativa')

        .row(titulo="4")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Gestión del tiempo
            p Una atención oportuna y eficiente evita retrasos innecesarios y mejora la percepción del servicio por parte del usuario.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img07.jpg', alt='Imagen decorativa')

        .row(titulo="5")
          .col-lg-5.mb-4.mb-md-0.order-lg-2.order-2
            h4 Confidencialidad
            p Toda información relacionada con la salud del usuario debe ser tratada con reserva, protegiendo su privacidad y dignidad conforme a los principios éticos del servicio de salud.
          .col-lg-7.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img08.jpg', alt='Imagen decorativa')

    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") La integración de estos elementos fortalece la relación con el cliente y contribuye a un servicio farmacéutico más humano, seguro y eficiente.

    separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Aplicación de protocolos de atención
    
    p.mb-5(data-aos="fade-down") En el servicio farmacéutico, la aplicación rigurosa de los protocolos de atención definidos por cada institución y formalizados en el Manual de Buenas Prácticas de Dispensación (MBPD) es fundamental. Estos protocolos son un conjunto de directrices técnicas, éticas, administrativas y normativas que garantizan una atención segura, oportuna, legal y eficaz.

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .cajon.cajon.C02.color-secundario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Su correcta implementación permite estandarizar los procesos, reducir errores, garantizar el cumplimiento normativo y fortalecer la confianza de los usuarios. Además, protege tanto al paciente como al establecimiento frente a riesgos sanitarios, legales o administrativos.

    p.mb-5(data-aos="fade-down") Los protocolos de atención contemplan las siguientes acciones:

    .tarjeta.tarjeta--BG02.p-md-5.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Recepción y validación de la fórmula médica
            p Se recibe la fórmula médica del paciente y se revisa que esté completa, legible y correctamente diligenciada. Esto incluye verificar que contenga todos los datos exigidos, como identificación del paciente, nombre del medicamento, dosis, frecuencia, vía de administración, duración del tratamiento y firma del profesional autorizado.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img09.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Verificación de los datos del paciente
            p Se confirma que los datos registrados en la fórmula coincidan con la información del sistema. Esta verificación evita errores de entrega, sobre todo en casos de homonimia o cuando se manejan medicamentos de alto riesgo.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img10.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Análisis de posibles interacciones medicamentosas
            p Se analiza si los medicamentos prescritos pueden generar interacciones con otros tratamientos que el paciente esté utilizando, o si hay contraindicaciones conocidas. Esto ayuda a prevenir efectos adversos y a garantizar la seguridad del tratamiento.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img11.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Información clara al usuario sobre el uso adecuado de los medicamentos
            p Se brinda una orientación detallada sobre cómo tomar o aplicar cada medicamento, incluyendo la frecuencia, la duración, recomendaciones especiales (como tomar con alimentos o evitar exposición al sol), posibles efectos secundarios y cuidados adicionales. Se busca asegurar el uso correcto y promover la adherencia al tratamiento.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img12.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Registro completo de la dispensación
            p Se documenta toda la información relacionada con la entrega de medicamentos en el sistema institucional. Esto incluye fecha, medicamentos entregados, cantidades, lotes, fechas de vencimiento, identificación del paciente y del profesional que realizó la dispensación, así como cualquier observación relevante.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img13.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Manejo de devoluciones y atención de quejas
            p Se aplica un procedimiento establecido para recibir medicamentos devueltos por errores, suspensiones médicas o condiciones no aptas para el consumo. Además, se cuenta con mecanismos de atención y seguimiento a las quejas o reclamos que los usuarios puedan presentar.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img14.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Notificación de eventos adversos, si aplica
            p Cuando se identifican efectos no deseados asociados al uso de un medicamento, se realiza el reporte correspondiente al sistema de farmacovigilancia, según las normas del INVIMA. Esta información contribuye al monitoreo continuo de la seguridad de los medicamentos.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema1/img15.jpg', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") El cumplimiento de estos procedimientos no solo asegura una atención homogénea y trazable para todos los tipos de clientes, sino que también garantiza la mejora continua del servicio y el cumplimiento de la normativa sanitaria colombiana, especialmente la del Ministerio de Salud y el INVIMA.

    separador
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Elementos operativos para la implementación del protocolo de dispensación

    p.mb-5(data-aos="fade-down") La correcta aplicación de los protocolos de atención en el servicio farmacéutico requiere la articulación de diversos aspectos operativos que garantizan tanto la calidad del servicio como la seguridad del usuario. Estos elementos abarcan desde el talento humano hasta los recursos tecnológicos y físicos disponibles, y son fundamentales para que la interacción con el cliente se desarrolle de manera eficiente y profesional.

    .row.justify-content-center.mb-4
      .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img16.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Recursos humanos capacitados
            h5.t2.mb-2 Recursos humanos capacitados
            p.mb-0 Es indispensable contar con personal formado en normativas vigentes, comunicación asertiva y ética profesional. Cada integrante del equipo debe conocer su rol en la cadena de atención y dispensación.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img17.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Infraestructura adecuada
            h5.t2.mb-2 Infraestructura adecuada
            p.mb-0 Las áreas destinadas a la atención deben ser limpias, ordenadas, accesibles y seguras, cumpliendo con las condiciones exigidas por la normatividad sanitaria.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img18.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Herramientas tecnológicas
            h5.t2.mb-2 Herramientas tecnológicas
            p.mb-0 El uso de <em>software</em> especializado permite validar fórmulas, registrar dispensaciones, consultar interacciones medicamentosas y mantener trazabilidad de los productos entregados.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img19.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Capacitación continua
            h5.t2.mb-2 Capacitación continua
            p.mb-0 La actualización permanente del personal sobre protocolos, manejo de quejas y novedades terapéuticas fortalece la calidad del servicio.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img20.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Condiciones de almacenamiento
            h5.t2.mb-2 Condiciones de almacenamiento
            p.mb-0 El adecuado manejo del inventario, con controles de temperatura, fechas de vencimiento y correcta rotulación, garantiza la integridad de los medicamentos ofrecidos.

      .col-xl-4.col-lg-6.col-md-6.col-12.mb-xl-0
        .crd_hover_txt.mb-4(data-aos="flip-left")(@mouseover="mostrarIndicador = true")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/img21.jpg", alt="Imagen decorativa")
          .crd_hover_txt--body
            h5.t1.mb-3 Coordinación institucional
            h5.t2.mb-2 Coordinación institucional
            p.mb-0 la interacción con otras áreas del sistema de salud permite resolver situaciones complejas y ofrecer soluciones integrales al usuario.

    p.mb-0(data-aos="fade-down") Estos aspectos aseguran que la atención farmacéutica no solo cumpla con lo técnico, sino que esté alineada con estándares de calidad y satisfacción del usuario.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
