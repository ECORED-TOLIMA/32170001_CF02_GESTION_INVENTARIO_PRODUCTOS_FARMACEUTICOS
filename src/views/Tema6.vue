<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 6
      h1 Alertas sanitarias
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema6/img01.png', alt='Imagen decorativa')

    p(data-aos="fade-down") Las alertas sanitarias son comunicaciones oficiales emitidas por entidades como el INVIMA, cuyo propósito es advertir sobre riesgos potenciales o comprobados relacionados con medicamentos o productos farmacéuticos. Estas alertas son una herramienta fundamental para proteger la salud pública, ya que permiten actuar de manera inmediata ante situaciones que pueden poner en peligro la seguridad de los pacientes o afectar la integridad del servicio farmacéutico.
    p.mb-5(data-aos="fade-down") Estas situaciones pueden incluir:

    .row.cajon.BG06.align-items-center.pt-3.mb-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center
          .col-md-6.col-lg-4.mb-4.mb-md-0.d-lg-flex.d-none(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema6/img02.png', alt='Imagen decorativa')
          .col-md-8.col-lg-8.mb-4.mb-md-0(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-4")
              .tarjeta.tarjeta--C02.p-3
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema6/img03.svg' alt='AvatarTop')
                p.text-center Defectos de calidad (como contaminación, problemas de empaque o concentración del principio activo).

              .tarjeta.tarjeta--C02.p-3
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema6/img04.svg' alt='AvatarTop')
                p.text-center Falsificación o adulteración del producto.

              .tarjeta.tarjeta--C02.p-3
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema6/img05.svg' alt='AvatarTop')
                p.text-center Efectos adversos graves no previstos.

              .tarjeta.tarjeta--C02.p-3
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema6/img06.svg' alt='AvatarTop')
                p.text-center Errores en el etiquetado o rotulado.

              .tarjeta.tarjeta--C02.p-3
                .row.justify-content-center.mb-3
                  .col-lg-8.col-sm-4.col-6
                    img(src='@/assets/curso/temas/tema6/img07.svg' alt='AvatarTop')
                p.text-center Ingreso ilegal de productos al país.
    
    separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Atención ante alerta sanitaria
    
    .row.justify-content-center.mb-5(data-aos="flip-up")(style="display: flex; width: 100%; margin: auto;")
      .col-lg-8.col-12.order-lg-1.order-2
        p(data-aos="fade-down") La atención ante una alerta sanitaria constituye una acción prioritaria dentro del sistema de farmacovigilancia, ya que permite proteger la salud pública frente a riesgos asociados con medicamentos, dispositivos médicos, alimentos o cosméticos que presenten problemas de calidad, seguridad o eficacia. Una alerta sanitaria es emitida por la autoridad competente, como el INVIMA en Colombia, cuando se identifica un producto que representa un riesgo inminente o potencial para la población.
        p(data-aos="fade-down") Ante la emisión de una alerta sanitaria, el personal del establecimiento farmacéutico debe actuar de forma inmediata y conforme a los protocolos institucionales. Esto implica, en primer lugar, la verificación de la existencia del producto en inventario o en proceso de dispensación. Si se encuentra, debe ser retirado de circulación, puesto en cuarentena y debidamente identificado para evitar su uso.
        p(data-aos="fade-down") Asimismo, es responsabilidad del personal notificar la alerta a todas las áreas involucradas, como almacenamiento, dispensación, dirección técnica y, cuando aplique, a los usuarios que pudieran haber recibido el producto. Se deben registrar todas las acciones tomadas en respuesta a la alerta, conservando trazabilidad de los lotes afectados y garantizando la cadena de custodia del producto retenido.
      .col-lg-4.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0
        .row.justify-content-center(data-aos="flip-up")
          .col
            figure
              img(src='@/assets/curso/temas/tema6/img08.png', alt='Imagen decorativa')

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") Una atención oportuna y eficaz ante una alerta sanitaria reduce el riesgo de afectación a los usuarios y fortalece la confianza en los procesos de control sanitario del establecimiento.

    p.mb-5(data-aos="fade-down") Para facilitar la comprensión del procedimiento y garantizar una actuación adecuada ante una alerta sanitaria, a continuación, se presentan los pasos que debe seguir el personal del establecimiento farmacéutico, desde la recepción de la alerta hasta el cierre del proceso, con el fin de asegurar una respuesta oportuna y mantener la trazabilidad.

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col-lg-10.col-12
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span <i>Atención ante una alerta sanitaria</i>          
      .row.justify-content-center
        .col-10
          figure.desktop
            img(src='@/assets/curso/temas/tema6/img09.svg', alt='En la figura 1, se describe el procedimiento de atención ante una alerta sanitaria en un establecimiento farmacéutico. Incluye desde la recepción de la alerta, la verificación del producto, el retiro del inventario, la notificación a las áreas involucradas, hasta el registro de acciones y cierre del proceso, con el fin de garantizar una respuesta oportuna, segura y trazable.')
      .col-12
        figure.movil
          img(src='@/assets/curso/temas/tema6/img10.svg', alt='En la figura 1, se describe el procedimiento de atención ante una alerta sanitaria en un establecimiento farmacéutico. Incluye desde la recepción de la alerta, la verificación del producto, el retiro del inventario, la notificación a las áreas involucradas, hasta el registro de acciones y cierre del proceso, con el fin de garantizar una respuesta oportuna, segura y trazable.')

    separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Emisión e información contenida en una alerta
    
    .bloque-texto-g.color-secundario.p-4.p-sm-4.p-md-5.mb-5(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img11.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las alertas sanitarias son comunicaciones oficiales emitidas por entidades como el INVIMA para informar sobre productos que representan un riesgo potencial o comprobado para la salud pública. Estas alertas pueden involucrar medicamentos, suplementos, dispositivos médicos o productos cosméticos, e incluyen información clave como: nombre del producto, número de lote, fabricante, riesgos detectados, acciones recomendadas y responsables de la respuesta.
    
    p(data-aos="fade-down") La emisión de una alerta implica que los establecimientos farmacéuticos deben activar un procedimiento interno para su atención inmediata, garantizando la trazabilidad de las acciones realizadas. Este procedimiento incluye desde la recepción de la alerta hasta su cierre y reporte, tal como se ilustra en el flujograma presentado anteriormente.
    p.mb-5(data-aos="fade-down") A continuación, se presentan algunos ejemplos recientes de alertas sanitarias emitidas por el INVIMA en 2025:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center.align-items-center.mb-5(style="display: flex; width: 100%; margin: auto;")
          .col-lg-7.col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Ashwagandha (suplemento herbario)")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Alerta No.203-2025 (8 de julio de 2025). Se advierte sobre riesgos como palpitaciones y aumento de la presión arterial.

              .row(numero="2" titulo="SCX Bull men & women")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Emitida también el 8 de julio de 2025. Se señala el riesgo por irregularidades en su composición o etiquetado.

              .row(numero="3" titulo="Inndreams, Innddetox e Innfocus")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Mismo día. Tres productos señalados por posibles riesgos relacionados con su seguridad o rotulado.

              .row(numero="4" titulo="QBQuiebrabarriga “El Original”")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Alerta No.153-2025 (19 de mayo de 2025). Suplemento cosmético con irregularidades en el etiquetado y posibles efectos adversos.

              .row(numero="5" titulo="Paroxetina 20mg y Atorvastatina 20mg")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Aerta No.135-2025 (mayo de 2025). Se advirtió sobre riesgo de confusión por similitud en empaque y rotulado.
          .col-lg-5.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema6/img12.png', alt='Imagen decorativa')

        p.mb-0(data-aos="fade-down") Estas alertas reflejan el compromiso del INVIMA con la protección de la salud pública. Por ello, es fundamental que el personal del servicio farmacéutico esté preparado para actuar de manera efectiva, garantizando una respuesta oportuna y evitando eventos adversos en los usuarios.

</template>

<script>
export default {
  name: 'Tema6',
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
