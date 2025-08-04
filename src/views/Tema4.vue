<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1 Normativa del servicio farmacéutico en Colombia
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img01.png', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") El servicio farmacéutico en Colombia se rige por una serie de normas que garantizan la calidad en la atención al usuario, el uso racional de medicamentos y la seguridad del paciente. Estas regulaciones establecen los lineamientos para la dispensación, almacenamiento, control y seguimiento de medicamentos, así como las responsabilidades del personal involucrado.
    
    separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Normativa vigente sobre dispensación
    
    p.mb-5(data-aos="fade-down") La dispensación de medicamentos en Colombia está regida por un conjunto de normas que buscan garantizar la calidad del servicio farmacéutico, la seguridad del paciente y el uso adecuado de los medicamentos. Las principales normativas vigentes incluyen:

    LineaTiempoE.color-primario.mb-5
      .row(titulo="1993" subtitulo="")
        .col-lg-9.mb-4.mb-lg-0.order-lg-2.order-1(data-aos="fade-down")
          h4 Ley 100 de 1993
          p Crea el Sistema General de Seguridad Social en Salud, dentro del cual se estructuran los servicios farmacéuticos como parte integral de la atención en salud.
        .col-lg-auto.col-6.order-lg-1.order-2(data-aos="fade-up")
          figure
            img(src='@/assets/curso/temas/tema4/img02.svg', alt='Imagen decorativa')

      .row(titulo="2004" subtitulo="")
        .col-lg-9.mb-4.mb-lg-0.order-lg-2.order-1(data-aos="fade-down")
          h4 Resolución 886 de 2004
          p Define los requisitos para el funcionamiento de los establecimientos farmacéuticos y regula la figura del director técnico.
        .col-lg-auto.col-6.order-lg-1.order-2(data-aos="fade-up")
          figure
            img(src='@/assets/curso/temas/tema4/img03.svg', alt='Imagen decorativa')

      .row(titulo="2007" subtitulo="")
        .col-lg-9.mb-4.mb-lg-0.order-lg-2.order-1(data-aos="fade-down")
          h4 Resolución 1403 de 2007
          p Establece los requisitos técnicos y científicos para la organización y funcionamiento de los servicios farmacéuticos. Define la dispensación como un proceso integral que incluye la verificación de la prescripción, la entrega del medicamento y la orientación al usuario.
        .col-lg-auto.col-6.order-lg-1.order-2(data-aos="fade-up")
          figure
            img(src='@/assets/curso/temas/tema4/img04.svg', alt='Imagen decorativa')

      .row(titulo="2015" subtitulo="")
        .col-lg-9.mb-4.mb-lg-0.order-lg-2.order-1(data-aos="fade-down")
          h4 Ley 1751 de 2015 
          p Reconoce la salud como un derecho fundamental autónomo, imponiendo obligaciones al Estado para garantizar el acceso a servicios y tecnologías en salud, incluyendo los medicamentos.
        .col-lg-auto.col-6.order-lg-1.order-2(data-aos="fade-up")
          figure
            img(src='@/assets/curso/temas/tema4/img05.svg', alt='Imagen decorativa')

      .row(titulo="2019" subtitulo="")
        .col-lg-9.mb-4.mb-lg-0.order-lg-2.order-1(data-aos="fade-down")
          h4 Resolución 3100 de 2019
          p Regula el sistema de habilitación de los servicios de salud en Colombia. Establece estándares de calidad para los servicios farmacéuticos, incluyendo criterios para la seguridad del paciente, la trazabilidad y la mejora continua del proceso de dispensación.
        .col-lg-auto.col-6.order-lg-1.order-2(data-aos="fade-up")
          figure
            img(src='@/assets/curso/temas/tema4/img06.svg', alt='Imagen decorativa')

    .row.justify-content-center
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") Estas normativas proporcionan el marco legal y técnico necesario para que el proceso de dispensación se realice bajo estándares de calidad, con enfoque en la seguridad del paciente y conforme al sistema de salud colombiano.

    separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Procedimiento de dispensación conforme a la normativa
    
    p.mb-5(data-aos="fade-down") El procedimiento de dispensación en Colombia debe seguir una serie de pasos estandarizados establecidos por la normativa sanitaria vigente, con el fin de garantizar la seguridad del paciente y el uso racional de los medicamentos. Este proceso es responsabilidad del personal del servicio farmacéutico y debe desarrollarse de manera ética, técnica y legalmente adecuada. Los pasos son:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--C05")
      .row.justify-content-center.p-4(titulo="Recepción y validación de la prescripción")
        .col-lg-5.order-lg-1.order-2
          p Se verifica que la fórmula médica cumpla con los requisitos legales como nombre del paciente, diagnóstico, nombre del medicamento, concentración, forma farmacéutica, dosis, frecuencia, vía de administración, duración del tratamiento, fecha de prescripción y firma del profesional autorizado.
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema4/img07.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Evaluación farmacéutica")
        .col-lg-5.order-lg-1.order-2
          p El profesional revisa si la prescripción es adecuada y segura para el paciente, identificando posibles interacciones, duplicidades terapéuticas, contraindicaciones y errores de prescripción. Esta fase permite detectar riesgos y, si es necesario, se contacta al prescriptor para aclaraciones o ajustes.
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema4/img08.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Preparación y alistamiento del medicamento")
        .col-lg-5.order-lg-1.order-2
          p Se selecciona el medicamento prescrito, se verifica su estado, fecha de vencimiento, lote, condiciones de almacenamiento y se rotula según los lineamientos establecidos, asegurando trazabilidad y control.
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema4/img09.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Entrega del medicamento al usuario")
        .col-lg-5.order-lg-1.order-2
          p Se realiza en condiciones que aseguren la integridad del producto. En este momento se brinda la información necesaria sobre el uso correcto del medicamento, posibles reacciones adversas, almacenamiento, duración del tratamiento y recomendaciones adicionales.
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema4/img10.jpg', alt='Imagen decorativa')
      .row.justify-content-center(titulo="Registro y documentación del proceso")
        .col-lg-5.order-lg-1.order-2
          p Se deja constancia del proceso de dispensación en los sistemas de información dispuestos por el prestador del servicio de salud, permitiendo seguimiento, trazabilidad y control del medicamento dispensado.
        .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/temas/tema4/img11.jpg', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") Este procedimiento debe realizarse siempre bajo la dirección del químico farmacéutico o tecnólogo en regencia de farmacia, en cumplimiento de la normatividad vigente y de las buenas prácticas de dispensación.

    separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Recepción y revisión de la prescripción

    p(data-aos="fade-down") La recepción y revisión de la prescripción médica es el primer paso del proceso de dispensación y constituye un filtro fundamental para asegurar el uso adecuado y seguro del medicamento. Este procedimiento debe realizarse cuidadosamente para evitar errores de medicación y garantizar la legalidad de la orden médica.
    p.mb-5(data-aos="fade-down") Durante esta etapa, el personal del servicio farmacéutico debe verificar que la prescripción cumpla con los siguientes aspectos:

    .row.justify-content-center
      .col-lg-10.col-12
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
              h4 Validez legal de la prescripción
              p.mb-0 Se comprueba que esté firmada por un profesional de la salud legalmente autorizado (médico, odontólogo, etc.) y que tenga los datos mínimos exigidos por la normativa colombiana.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema4/img12.jpg', alt="Imagen decorativa")
          .row.justify-content-center
            .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema4/img13.jpg', alt="Imagen decorativa")
            .col-lg-8(data-aos="fade-left")
              h4 Identificación completa del paciente
              p.mb-0 Nombre completo, tipo y número de documento, edad, y otros datos pertinentes para asegurar la correcta individualización del tratamiento.
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
              h4 Datos completos de la prescripción
              p.mb-0 Incluye nombre genérico del medicamento, forma farmacéutica, concentración, dosis, frecuencia, vía de administración, duración del tratamiento y diagnóstico clínico, si aplica.
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema4/img14.jpg', alt="Imagen decorativa")
          .row.justify-content-center
            .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema4/img15.jpg', alt="Imagen decorativa")
            .col-lg-8(data-aos="fade-left")
              h4 Legibilidad y claridad 
              p.mb-0 Se debe revisar que no existan ambigüedades o errores que puedan poner en riesgo la seguridad del paciente. En caso de duda, el personal farmacéutico debe comunicarse con el prescriptor antes de proceder.
          .row.justify-content-center
            .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
              h4 Fecha de prescripción
              p.mb-0 Se valida que esté dentro del período de vigencia según la normatividad (habitualmente 30 días calendario para medicamentos ambulatorios, salvo excepciones).
            .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema4/img16.jpg', alt="Imagen decorativa")

    p.mb-0(data-aos="fade-down") Este proceso permite detectar de forma oportuna posibles inconsistencias o errores, como interacciones medicamentosas, duplicidades, contraindicaciones o uso inadecuado. La evaluación técnica en esta fase garantiza que el tratamiento prescrito sea coherente con el estado clínico del paciente y con los lineamientos establecidos por las políticas de salud pública y el uso racional del medicamento.

    separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Evaluación farmacéutica y entrega del medicamento

    p(data-aos="fade-down") La evaluación farmacéutica es una etapa técnica y clínica que permite al personal del servicio farmacéutico analizar de forma integral la prescripción, el historial del paciente y las condiciones del tratamiento antes de entregar el medicamento. Su objetivo es contribuir a la seguridad del paciente, al uso racional de los medicamentos y a la prevención de eventos adversos.
    p.mb-5(data-aos="fade-down") Durante esta evaluación, el profesional farmacéutico o el personal técnico bajo supervisión debe considerar los siguientes elementos:

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col
        .tarjeta--container.row.mb-5
          .col-xl.col-md-4.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/temas/tema4/img17.svg', alt='Imagen decorativa')
              
            h4.text-center Revisión de interacciones
            p.mb-0 Se analiza si el medicamento prescrito puede interactuar con otros tratamientos que el paciente esté recibiendo, lo cual puede modificar su efecto terapéutico o generar efectos indeseados.

          .col-xl.col-md-4.tarjeta.tarjeta--C03.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/temas/tema4/img18.svg', alt='Imagen decorativa')
              
            h4.text-center Contraindicaciones y advertencias
            p.mb-0 Se evalúan factores como alergias conocidas, edad, estado fisiológico (embarazo, lactancia), enfermedades crónicas u otras condiciones clínicas que puedan afectar la eficacia o seguridad del tratamiento.

          .col-xl.col-md-4.tarjeta.tarjeta--C04.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/temas/tema4/img19.svg', alt='Imagen decorativa')
              
            h4.text-center Concordancia con guías de manejo y protocolos
            p.mb-0 El medicamento debe estar alineado con los protocolos institucionales, las guías de práctica clínica y el plan de beneficios en salud (PBS), para garantizar una atención basada en la evidencia.

    .row.align-items-center.mb-5(data-aos="flip-up")
      .col-auto.pe-0(style="z-index:2")
        figure
          img(src='@/assets/curso/temas/ico.svg', style="width: 70px" ,alt='').m-auto
      .col-lg-auto.col-9.titulo01(style="z-index:1")
        .p-2
          h3.mb-0.ms-3 Verificación de disponibilidad

    p(data-aos="fade-down") Se confirma la existencia del medicamento en inventario, o se informa al usuario sobre posibles sustituciones terapéuticas si están autorizadas y justificadas.
    p.mb-5(data-aos="fade-down") Una vez completada la evaluación y verificada la idoneidad del tratamiento, se procede a la entrega del medicamento al usuario o cuidador responsable. Esta entrega debe cumplir con las siguientes condiciones:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-9.position-relative
        .avatar
          figure
            img(src="@/assets/curso/temas/tema4/img20.svg", alt="Imagen decorativa").img260
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/img21.svg", alt="Imagen decorativa").img100
            .col
              p Se hace en un empaque adecuado, etiquetado correctamente con el nombre del medicamento, dosis, frecuencia, vía de administración y fecha de vencimiento.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/img22.svg", alt="Imagen decorativa").img100
            .col
              p Se brinda educación al paciente sobre la correcta administración del medicamento, posibles efectos secundarios, condiciones de almacenamiento y signos de alarma.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema4/img23.svg", alt="Imagen decorativa").img100
            .col
              p Se registra la entrega en el sistema de información institucional o en los formatos físicos establecidos, para asegurar trazabilidad y control.

    p.mb-0(data-aos="fade-down") Este proceso integral fortalece la relación entre el usuario y el servicio farmacéutico, promoviendo una atención segura, oportuna y centrada en el paciente.

    separador
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Normas complementarias
    
    p.mb-5(data-aos="fade-down") Además de la normativa principal que regula el proceso de dispensación en Colombia, existen otras disposiciones complementarias que fortalecen la calidad del servicio farmacéutico y garantizan la seguridad del paciente. Estas normas sirven como soporte técnico y legal para el desarrollo de procedimientos y el cumplimiento de estándares exigidos por el sistema de salud. Algunas de las más relevantes son:

    .tarjeta.tarjeta--BG02.p-md-5.p-4.mb-5(data-aos="flip-up")
      SlyderA(tipo="b")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Decreto 780 de 2016 (Decreto Único Reglamentario del Sector Salud)
            p Compila y unifica toda la reglamentación vigente del sector salud, incluyendo disposiciones sobre servicios farmacéuticos, la dispensación y el aseguramiento de la calidad en la prestación de servicios.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img24.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Resolución 1441 de 2013
            p Establece los lineamientos para la implementación del Programa de Farmacovigilancia en servicios de salud, con impacto directo sobre la entrega segura de medicamentos.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img25.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Resolución 1604 de 2013
            p Regula el procedimiento de reporte de eventos adversos y errores de medicación, lo cual complementa el proceso de dispensación segura.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img26.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Guía Técnica de Buenas Prácticas de Dispensación del INVIMA
            p Aunque no es de obligatorio cumplimiento como una resolución, esta guía sirve como herramienta de referencia para implementar estándares de calidad en el proceso de dispensación.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img27.jpg', alt='Imagen decorativa')

        .row.justify-content-center.p-4
          .col-lg-5.order-lg-1.order-2
            h4 Norma ISO 9001:2015 (aplicable en instituciones con Sistemas de Gestión de la Calidad)
            p Aunque no es una norma del sistema de salud colombiano, muchas IPS adoptan esta certificación para garantizar calidad en sus procesos, incluyendo los servicios farmacéuticos.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema4/img28.jpg', alt='Imagen decorativa')

    .row.justify-content-center
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") Estas normas complementarias permiten al personal del servicio farmacéutico alinear sus prácticas con estándares actualizados, promover la cultura de seguridad del paciente y garantizar una atención integral.

</template>

<script>
export default {
  name: 'Tema4',
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
