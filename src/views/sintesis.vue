<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p Este componente aborda las etapas esenciales que garantizan una dispensación farmacéutica segura, legal y centrada en el usuario. Se explora desde la identificación del paciente y la validación de la prescripción médica, hasta la verificación de la calidad del medicamento y su correcta entrega. También se analiza la importancia del cumplimiento normativo, la actuación ante alertas sanitarias y la gestión adecuada de residuos, promoviendo prácticas sostenibles y educación al usuario. Todo ello con el fin de asegurar un servicio farmacéutico responsable y alineado con la legislación vigente en Colombia .
    

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="La síntesis presenta de forma esquemática las principales acciones del proceso de dispensación farmacéutica, desde la identificación del usuario y la validación de la fórmula médica, hasta la entrega del medicamento, la gestión de alertas sanitarias y el manejo adecuado de residuos. Cada etapa está orientada al cumplimiento normativo, la calidad del producto y la seguridad del usuario.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
