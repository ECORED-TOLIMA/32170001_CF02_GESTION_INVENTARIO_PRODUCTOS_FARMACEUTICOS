<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 7
      h1 Gestión de residuos farmacéuticos
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema7/img01.png', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") La gestión de residuos farmacéuticos hace parte esencial del servicio farmacéutico, ya que garantiza la protección del ambiente y la salud pública frente a los riesgos que pueden generar medicamentos vencidos, deteriorados o mal dispuestos. Esta gestión involucra su adecuada clasificación, recolección, almacenamiento, tratamiento y disposición final, de acuerdo con la normatividad ambiental y sanitaria vigente.
    
    separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Tipos y clasificación de residuos
    
    p(data-aos="fade-down") Los residuos de productos farmacéuticos incluyen medicamentos vencidos, deteriorados, contaminados o parcialmente utilizados, así como empaques y dispositivos que han estado en contacto con ellos. Su clasificación correcta permite minimizar riesgos, prevenir la contaminación y cumplir con el Plan de Gestión Integral de Residuos Hospitalarios y Similares (PGIRH).
    p.mb-5(data-aos="fade-down") En Colombia, los residuos farmacéuticos se clasifican de la siguiente manera:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span <em>Clasificación de residuos farmacéuticos</em>          
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 20%") Tipo de residuo
                th(data-aos="fade-down")(style= "width: 20%") Color asociado
                th(data-aos="fade-down")(style= "width: 30%") Ejemplos
                th(data-aos="fade-down")(style= "width: 30%") Disposición recomendada
            tbody
              tr
                td.text-bold(data-aos="fade-down") Peligrosos
                td.text-bold(data-aos="fade-down") 
                  span.text-bold(style="margin-left: 4px;") Rojo
                  div(style="display: inline-block; width: 16px; height: 16px; background-color: red; margin-left: 10px; vertical-align: middle;")
                td(data-aos="fade-down") Medicamentos vencidos, jeringas usadas, ampollas, frascos contaminados, etc.
                td(data-aos="fade-down") Recolección en contenedores rojos y entrega a gestores autorizados.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") No peligrosos reciclables
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 
                  span.text-bold(style="margin-left: 4px;") Verde
                  div(style="display: inline-block; width: 16px; height: 16px; background-color: green; margin-left: 10px; vertical-align: middle;")
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Cajas, envases plásticos, blíster vacíos, etc.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Separación y entrega a programas de reciclaje.
              tr
                td.text-bold(data-aos="fade-down") No peligrosos no reciclables
                td.text-bold(data-aos="fade-down")
                  span.text-bold(style="margin-left: 4px;") Negro
                  div(style="display: inline-block; width: 16px; height: 16px; background-color: black; margin-left: 10px; vertical-align: middle;")
                td(data-aos="fade-down") Pañuelos, empaques contaminados, residuos de barrido, etc.
                td(data-aos="fade-down") Disposición en residuos ordinarios según normatividad local.
              tr
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") Residuos especiales(posconsumo)
                td.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 
                  span.text-bold(style="margin-left: 4px;") Amarillo
                  div(style="display: inline-block; width: 16px; height: 16px; background-color: yellow; margin-left: 10px; vertical-align: middle;")
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Zonas señalizadas, ventiladas, con protección personal.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Inventario separado y registros detallados.

    p.mb-5(data-aos="fade-down") Consideraciones especiales:

    .row.justify-content-center.mb-0
      .col-12
        .row.justify-content-center
          .col-lg-4.col-12
            .row.justify-content-center.h-100.w-100
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C03.p-0.h-100
                  img.h-100.my-auto(src='@/assets/curso/temas/tema7/img02.svg' alt="Imagen decorativa")
              .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-4.h-100
                  p.mb-0 Nunca desechar medicamentos en la basura común o en el inodoro.

          .col-lg-4.col-12
            .row.justify-content-center.h-100.w-100
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C03.p-0.h-100
                  img.h-100.my-auto(src='@/assets/curso/temas/tema7/img03.svg' alt="Imagen decorativa")
              .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-4.h-100
                  p.mb-0 Todo residuo farmacéutico debe segregarse desde el origen y registrarse adecuadamente.
                  

          .col-lg-4.col-12
            .row.justify-content-center.h-100.w-100
              .col-lg-auto.col-3.col-sm-2.px-0.mb-4(data-aos="flip-up")
                .cajon.cajon.C03.p-0.h-100
                  img.h-100.my-auto(src='@/assets/curso/temas/tema7/img04.svg' alt="Imagen decorativa")
              .col-lg-9.col-8.px-0.mb-4(data-aos="fade-down")
                .cajon.cajon.C01.p-4.h-100
                  p.mb-0 Medicamentos controlados o peligrosos deben contar con trazabilidad y destrucción certificada.

    separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 Técnicas de disposición final
    
    p(data-aos="fade-down") La disposición final de los residuos farmacéuticos representa una etapa crítica en su gestión, ya que busca evitar riesgos para la salud humana, la fauna, el agua, el suelo y el medio ambiente en general. En Colombia, este proceso debe realizarse de acuerdo con las normativas vigentes, incluyendo la Resolución 1164 de 2002, el Decreto 351 de 2014 y los lineamientos del programa de posconsumo liderado por el Ministerio de Salud, la ANDI y gestores autorizados.
    p.mb-5(data-aos="fade-down") Las técnicas de disposición final varían según la naturaleza del residuo y su nivel de peligrosidad. Los residuos farmacéuticos se pueden clasificar como peligrosos o no peligrosos, y su tratamiento debe ser diferencial. Entre las principales técnicas de disposición final se encuentran:

    TabsB.color-acento-botones.mb-5(data-aos="flip-up")
      .py-4.py-md-5(titulo="Incineración controlada" :icono="require('@/assets/curso/temas/tema7/img05.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Es uno de los métodos más seguros y comúnmente utilizados para destruir residuos farmacéuticos peligrosos. Se realiza en hornos especializados a altas temperaturas (mayores a 1.200 °C), lo cual permite la destrucción completa de los principios activos y evita la liberación de sustancias tóxicas al ambiente. Debe realizarse por gestores autorizados y en plantas que cumplan con los estándares ambientales.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema7/img06.jpg', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Encapsulamiento" :icono="require('@/assets/curso/temas/tema7/img07.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Consiste en inmovilizar los residuos sólidos farmacéuticos en un material inerte (como cemento u otros polímeros) dentro de recipientes herméticos, para su posterior disposición en rellenos de seguridad. Es una técnica recomendada cuando no es posible la incineración y se requiere evitar la lixiviación de contaminantes.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema7/img08.jpg', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Relleno de seguridad" :icono="require('@/assets/curso/temas/tema7/img09.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Los residuos tratados (encapsulados o estabilizados) pueden ser enviados a rellenos de seguridad, diseñados con capas impermeables y sistemas de control de lixiviados. Este tipo de relleno no debe confundirse con un relleno sanitario convencional, ya que su uso es exclusivo para residuos peligrosos.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema7/img10.jpg', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Retorno al gestor posconsumo" :icono="require('@/assets/curso/temas/tema7/img11.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Los medicamentos vencidos, parcialmente consumidos o en desuso deben entregarse en los puntos de recolección autorizados (como los del programa Punto Azul o similares). Estos programas garantizan que los residuos sean transportados y tratados adecuadamente por gestores certificados.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema7/img12.jpg', alt='Imagen decorativa')

      .py-4.py-md-5(titulo="Esterilización y trituración" :icono="require('@/assets/curso/temas/tema7/img13.svg')")
        .row.justify-content-center.p-4
          .col-lg-5.order-lg-2.order-2
            p Para algunos residuos farmacéuticos no peligrosos, se puede recurrir a técnicas de esterilización (como el autoclave) seguidas de trituración mecánica, antes de ser enviados a disposición final en rellenos sanitarios.
          .col-lg-7.col-10.order-lg-1.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema7/img14.jpg', alt='Imagen decorativa')
    
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") La selección de la técnica adecuada debe considerar el tipo de residuo, la infraestructura disponible, la normativa aplicable y la trazabilidad del proceso. En todos los casos, es fundamental que la disposición final esté respaldada por una adecuada documentación y por el seguimiento de los entes de control.

    separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.3 Información al usuario sobre manejo responsable de residuos

    p(data-aos="fade-down") Informar al usuario sobre cómo desechar correctamente los medicamentos es clave para cuidar la salud y el medio ambiente. Muchos no saben que tirar medicamentos vencidos a la basura o al inodoro puede contaminar el agua, el suelo y poner en riesgo a otras personas y animales.
    p.mb-5(data-aos="fade-down") Por eso, es importante que los establecimientos de salud y farmacias expliquen de manera clara y concreta lo siguiente:

    .row.justify-content-center.mb-5(data-aos="flip-up")(style="display: flex; width: 100%; margin: auto;")
      .col-lg-8.col-12.mb-md-0
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--C05")
          .row(titulo="¿Qué residuos se deben entregar?")
            .col-12.mb-0.mb-md-0
              p Medicamentos vencidos, en mal estado, parcialmente usados o sin uso, así como sus empaques.
          .row(titulo="¿Dónde se deben llevar?")
            .col-12.mb-0.mb-md-0
              p A los puntos de recolección autorizados, como contenedores especiales ubicados en farmacias o campañas de recolección promovidas por las autoridades de salud.
          .row(titulo="¿Cómo entregarlos?")
            .col-12.mb-0.mb-md-0
              ul.lista-ul--color
                li
                  i.fas.fa-chevron-right
                  | En su envase original (si es posible).
                li
                  i.fas.fa-chevron-right
                  | Sin mezclar con otros residuos. 
                li
                  i.fas.fa-chevron-right
                  | Bien cerrados y en bolsas limpias. 
      .col-lg-4.col-6.col-md-6.col-8.order-lg-2.order-1.mb-lg-0.mb-3.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/tema7/img15.png', alt='Imagen decorativa')
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p.mb-0(data-aos="fade-down") También se pueden usar afiches, volantes, videos o explicaciones del personal para educar a los usuarios. Lo importante es que el mensaje sea claro: “los medicamentos mal desechados pueden hacer daño, pero si se manejan bien, todos ganamos”.

</template>

<script>
export default {
  name: 'Tema7',
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
