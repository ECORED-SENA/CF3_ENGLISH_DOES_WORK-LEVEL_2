<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 5
      h1.fst-italic 
    p.mb-5(data-aos='fade-right') Las preposiciones de tiempo (en inglés, “prepositions of time”) son expresiones que nos dan información sobre el tiempo en que sucede algo y se emplean para hablar del momento en que se realiza una acción.
    .tarjeta.color-acento-contenido.bg-claro.rounded-0.pt-4.px-3
      .row.justify-content-center.align-items-center
        .col-lg-4.col-8.mb-lg-0.mb-3
          img(src='@/assets/curso/temas/75.png', alt='')
        .col-lg-8
          p.p-5.mb-0 Comúnmente, usamos las preposiciones, en general (de tiempo, de lugar, de modo, etc.), para mostrar una relación en el espacio o el tiempo, o una relación lógica entre dos o más personas, lugares o cosas.
            br
            br
            |Desafortunadamente, las preposiciones pueden ser un área de la gramática compleja de dominar y no existe una fórmula mágica para ellas, ya que no nos podemos confiar al cien por ciento de su traducción. Esto se debe a que su traducción puede variar de un idioma a otro, varias preposiciones pueden traducir lo mismo al español, pero emplearse de manera diferente en inglés, por ende, <b>no se debe partir de la pregunta “¿cómo se diría esto en español?” En su lugar, cada preposición debe aprenderse basándose en su uso específico.</b>
   







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

<style lang="sass">
.img-infografica-b__modal__contenido div
  color: $color-acento-contenido !important
.card-title
  width: 100%
  display: block
  position: relative
  background-color: #ffdfe0
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out
  &:hover
    background-color: $color-secundario
    p
      color: $white
  .card-title__div
    position: absolute
    width: 100%
    top: 0
    left: 0
    transform: translateY(-30%)
    display: flex
    justify-content: center
    .card-title__div-title
      background-color: $color-acento-contenido
      h6
        color: #fff
      display: block
</style>
