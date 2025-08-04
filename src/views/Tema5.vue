<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 5
      h1 Verificación de la calidad y legalidad de productos farmacéuticos
    
    .bloque-texto-g.color-secundario.p-4.p-sm-4.p-md-5.mb-0(data-aos="flip-down")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Constituye un proceso fundamental para salvaguardar la salud pública. El personal que labora en los servicios farmacéuticos tiene la responsabilidad de asegurar que todos los productos farmacéuticos recibidos, almacenados y dispensados cumplan con los requisitos establecidos en la normativa sanitaria colombiana. Esto incluye el cumplimiento de estándares técnicos, condiciones adecuadas de conservación, documentación legal vigente y criterios de seguridad que garanticen la autenticidad, eficacia y estabilidad de los medicamentos.
    
    separador
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Registro sanitario y estado físico del producto
    
    p.mb-5(data-aos="fade-down") El registro sanitario es un requisito legal indispensable para la producción, importación, comercialización y dispensación de medicamentos en Colombia. Fue establecido como parte del sistema nacional de vigilancia sanitaria con la creación del Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA) mediante la Ley 100 de 1993 y reglamentado principalmente por el Decreto 677 de 1995. Esta normativa establece que ningún medicamento puede ser distribuido o comercializado en el país sin la evaluación previa y aprobación de este organismo.

    .row.justify-content-center
      .col-lg-11.col-12
        .row.justify-content-center.mb-5(data-aos="flip-up")(style="display: flex; width: 100%; margin: auto;")
          .col-lg-6.col-12.order-lg-2.order-2
            p(data-aos="fade-down") Este registro certifica que el producto ha cumplido con los requisitos de calidad, seguridad y eficacia, y autoriza su comercialización en el territorio nacional. El número de registro debe aparecer de forma visible y legible en el envase del producto, y debe estar vigente al momento de la recepción, almacenamiento y dispensación.
            p(data-aos="fade-down") Además del registro, es fundamental realizar una inspección visual del estado físico del medicamento. El personal farmacéutico debe verificar que el producto no presente signos de deterioro como decoloración, partículas extrañas, envases agrietados, humedad o alteraciones en su aspecto general, ya que estos podrían comprometer su efectividad y seguridad. Esta revisión debe realizarse en cada etapa del manejo del medicamento, como medida preventiva para proteger la salud del usuario.
          .col-lg-5.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema5/img02.png', alt='Imagen decorativa')

    .row.justify-content-center
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") En caso de que un medicamento no cuente con registro sanitario vigente, no puede ser comercializado, distribuido ni dispensado legalmente. Su uso representa un riesgo para la salud del paciente y puede acarrear sanciones administrativas o legales para el establecimiento farmacéutico. En tales situaciones, el producto debe ser retenido, reportado y puesto en cuarentena, siguiendo los protocolos institucionales establecidos.

    separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Fecha de vencimiento y rotación de inventarios
    
    .row.justify-content-center.mb-5(data-aos="flip-up")(style="display: flex; width: 100%; margin: auto;")
      .col-lg-9.col-12.order-lg-1.order-2
        p(data-aos="fade-down") La verificación de la fecha de vencimiento es una práctica fundamental en los servicios farmacéuticos, ya que permite garantizar la eficacia, seguridad y estabilidad de los productos. El personal debe revisar cuidadosamente esta fecha tanto en el momento de la recepción como durante el almacenamiento y la dispensación de los medicamentos. La manipulación de productos vencidos está prohibida, ya que puede representar un riesgo para la salud del usuario.
        p(data-aos="fade-down") Además, es necesario aplicar el principio de rotación de inventarios bajo la metodología PEPS (Primero en Entrar, Primero en Salir), asegurando que los medicamentos con fechas de vencimiento más próximas se utilicen antes que los más recientes. Esto no solo evita pérdidas económicas por caducidad, sino que también mantiene la disponibilidad de productos aptos para su uso.
        p(data-aos="fade-down") A continuación, se presentan algunos ejemplos que describen la aplicación adecuada de la verificación de vencimientos y la rotación de inventarios:
      .col-lg-3.col-md-7.col-12.mb-3.order-lg-2.order-1.mb-lg-0
        .row.justify-content-center(data-aos="flip-up")
          .col
            figure
              img(src='@/assets/curso/temas/tema5/img03.svg', alt='Imagen decorativa')

    .row.justify-content-center.mb-0(data-aos="flip-up")
      .col
        .tarjeta--container.row
          .col-xl.col-md-4.tarjeta.tarjeta--C02.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/temas/tema5/img04.svg', alt='Imagen decorativa')
              
            p.mb-0 Un lote de tabletas de amoxicilina con fecha de vencimiento en diciembre de 2025 y otro con vencimiento en julio del mismo año debe organizarse de tal manera que se dispense primero el lote con vencimiento en julio de 2025.

          .col-xl.col-md-4.tarjeta.tarjeta--C03.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/temas/tema5/img05.svg', alt='Imagen decorativa')
              
            p.mb-0 Durante un inventario mensual, se detectan frascos de jarabe pediátrico vencidos en marzo de 2024. Estos deben separarse de inmediato y gestionarse como residuos peligrosos, según la normativa vigente.

          .col-xl.col-md-4.tarjeta.tarjeta--C04.p-5
            .row.justify-content-center.mb-3
              .col-lg-5.col-6
                figure
                  img(src='@/assets/curso/temas/tema5/img06.svg', alt='Imagen decorativa')
              
            p.mb-0 En algunas farmacias institucionales, se utilizan etiquetas de colores para identificar la cercanía del vencimiento (por ejemplo, rojo para productos que vencen en menos de tres meses), lo que facilita su identificación durante la dispensación y mejora el control del inventario.

    separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Condiciones de almacenamiento
    
    p.mb-5(data-aos="fade-down") El almacenamiento adecuado de los productos farmacéuticos es un factor determinante para preservar su eficacia, estabilidad y seguridad. Las condiciones deben ajustarse a los parámetros establecidos por el fabricante y la normativa sanitaria, lo que implica controlar factores como temperatura, humedad, iluminación, ventilación y organización física del espacio.

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .row.justify-content-center.cajon.cajon.C02.p-4.mb-4(style="display: flex; width: 100%; margin: auto;")
          .col-lg-7.col-12.order-lg-2.order-2
            p(data-aos="fade-down") El personal de servicios farmacéuticos debe implementar medidas que garanticen el cumplimiento de estas condiciones durante toda la cadena de almacenamiento, desde la recepción hasta la dispensación. Además, se deben establecer procedimientos para el monitoreo y registro permanente de las variables ambientales, con el fin de detectar desviaciones que puedan comprometer la calidad de los productos.
          .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema5/img07.svg', alt='Imagen decorativa')

        p(data-aos="fade-down") Las condiciones generales que deben ser aplicadas incluyen:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img08.svg' alt='AvatarTop')
          h4.text-center Temperatura
          p Según la clasificación del medicamento (temperatura ambiente, refrigeración o congelación). Se recomienda el uso de termómetros calibrados y sistemas de alarma para variaciones.

        .tarjeta.tarjeta--BG04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img09.svg' alt='AvatarTop')
          h4.text-center Iluminación
          p Evitar la exposición directa a la luz solar o fuentes de luz que puedan alterar la composición del medicamento.

        .tarjeta.tarjeta--BG04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img10.svg' alt='AvatarTop')
          h4.text-center Organización física
          p Se deben utilizar estanterías adecuadas, identificar claramente los productos y evitar el contacto directo con paredes o pisos.

        .tarjeta.tarjeta--BG04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img11.svg' alt='AvatarTop')
          h4.text-center Humedad relativa
          p Debe mantenerse dentro de rangos que eviten la degradación de los productos, especialmente en aquellos sensibles a la humedad.

        .tarjeta.tarjeta--BG04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img12.svg' alt='AvatarTop')
          h4.text-center Ventilación
          p Garantizar una adecuada circulación de aire para evitar acumulación de olores, gases o contaminantes.

        .tarjeta.tarjeta--BG04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema5/img13.svg' alt='AvatarTop')
          h4.text-center Separación de productos
          p Mantener separados los medicamentos vencidos, deteriorados, devueltos o en cuarentena de los productos aptos para dispensación.

    p.mb-0(data-aos="fade-down") Estas prácticas contribuyen al cumplimiento de las Buenas Prácticas de Almacenamiento (BPA) exigidas por el INVIMA y otras autoridades regulatorias.

    separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Etiquetado y otros criterios de calidad

    p(data-aos="fade-down") El etiquetado de los productos farmacéuticos es una herramienta fundamental para garantizar el uso seguro y eficaz de los medicamentos. Las etiquetas deben proporcionar información clara, legible y completa sobre el producto, de acuerdo con lo exigido por la normatividad colombiana, especialmente el INVIMA y el Ministerio de Salud.
    p.mb-5(data-aos="fade-down") Cada medicamento debe contar con una etiqueta original del fabricante que incluya, como mínimo, los siguientes datos:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center(style="display: flex; width: 100%; margin: auto;")
          .col-lg-8.col-12.order-lg-1.order-2
            .cajon.cajon.C01.p-4
              ul.lista-ul--color
                li.mb-3 
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Nombre genérico y nombre comercial del producto.
                li.mb-3 
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Concentración y forma farmacéutica.
                li.mb-3 
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Número de lote y fecha de vencimiento.
                li.mb-3
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Registro sanitario expedido por el INVIMA.
                li.mb-3 
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Condiciones de almacenamiento recomendadas.
                li.mb-3 
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Vía de administración.
                li.mb-3
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Nombre y dirección del titular del registro sanitario o fabricante.
                li.mb-0
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Advertencias o precauciones, si aplica.
          .col-lg-4.col-md-7.col-10.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema5/img14.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Además, se deben verificar otros criterios de calidad relacionados con la presentación física del producto. El personal en servicios farmacéuticos debe inspeccionar el empaque primario y secundario, asegurándose de que no presenten alteraciones como rupturas, abolladuras, manchas, humedad o signos de manipulación indebida. Estas condiciones podrían indicar un riesgo para la integridad del medicamento.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.col-12.order-lg-2.order-2.mb-lg-0
        .row.justify-content-center.mb-0(data-aos="flip-up")
          .col-12.mb-3
            .tarjeta-avatar-b.h-100
              .tarjeta-avatar-b__img
                //-img(data-aos="fade-down")(src='@/assets/curso/temas/tema5/img15.svg' alt='AvatarTop' style="width: 80%; height: auto; max-width: 100%")
                img(data-aos="fade-down")(src='@/assets/curso/temas/tema5/img15.svg' alt='AvatarTop')(style= "width: 80%")
              .tarjeta.tarjeta--C02.py-4
                .p-4
                  p.mb-0(data-aos="fade-down") Asimismo, en el caso de productos fraccionados o reempaquetados dentro del establecimiento, se deben seguir los lineamientos establecidos por la normativa para garantizar que conserven las condiciones de calidad, seguridad y trazabilidad. Esto incluye el uso de etiquetas internas claras, con información como el nombre del producto, lote, fecha de vencimiento y responsable del proceso.

    p.mb-0(data-aos="fade-down") La verificación del etiquetado y los criterios de calidad contribuye a prevenir errores en la dispensación, proteger la salud del usuario y asegurar el cumplimiento de las Buenas Prácticas de Dispensación.

    separador
    #t_5_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.5 Verificación de la procedencia legal
    
    p(data-aos="fade-down") La verificación de la procedencia legal de los medicamentos es un proceso esencial para garantizar que los productos que ingresan a los servicios farmacéuticos provienen de fuentes autorizadas y cumplen con los requisitos establecidos por la legislación sanitaria colombiana. Esta verificación protege a los usuarios de posibles riesgos asociados con el uso de medicamentos falsificados, adulterados, de contrabando o sin registro sanitario vigente.
    p.mb-5(data-aos="fade-down") El personal responsable debe confirmar que todos los medicamentos y dispositivos médicos provienen de distribuidores, laboratorios o proveedores debidamente autorizados por el INVIMA y registrados ante el Ministerio de Salud. Para ello, es necesario revisar y archivar documentos que respalden la legalidad de la adquisición, tales como:

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema5/img16.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Facturas legales que incluyan el nombre del proveedor, número de lote, cantidad, nombre del producto y valor.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema5/img17.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Registros sanitarios vigentes para cada producto adquirido.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema5/img18.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Certificados de calidad emitidos por el fabricante, cuando aplique.

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema5/img19.svg' alt='AvatarTop')
        p.text-center(data-aos="fade-down") Contratos de suministro o convenios, si se trata de compras institucionales.

    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p(data-aos="fade-down") También es importante validar que el proveedor se encuentre habilitado en el Registro Especial de Prestadores de Servicios de Salud (REPS), cuando se trate de operadores logísticos o mayoristas en salud.
        p(data-aos="fade-down") Una verificación rigurosa de la procedencia legal no solo asegura el cumplimiento de la normativa, sino que también permite la trazabilidad del producto en caso de retiro del mercado, alertas sanitarias o eventos adversos. De esta manera, se protege la salud pública y se garantiza que los medicamentos administrados o dispensados sean seguros, eficaces y legales.
    



</template>

<script>
export default {
  name: 'Tema5',
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
