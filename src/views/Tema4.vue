<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 4
      h1.fst-italic  When things happen
    .tarjeta.rounded-0.color-acento-contenido.bg-claro.p-4.py-5.position-relative.mb-4
      img.mb-5.position-absolute.d-none.d-lg-block(src='@/assets/curso/temas/60.svg', alt='' style='width: 150px; top: -5%; left: 4%;')
      .row.justify-content-end
        .col-lg-10
          p.mb-0(data-aos='fade-right') Para poder hablar naturalmente en cualquier tiempo verbal, es necesario hacer uso de vocabulario y expresiones que hagan referencias temporales, para poder apoyar mejor el discurso y que se entienda en qué momento en particular se llevaron a cabo dichas acciones.  
    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.fst-italic  4.1  Days of the week
    p.mb-5(data-aos='fade-right') Los días de la semana, o “Days of the week” en inglés, tienen una característica que los diferencia de los días de la semana en español: deben llevar la primera letra en mayúscula, independientemente de si están al principio, en medio o al final de la oración.
      br
      br
      | Los días de la semana en inglés son:
    .card-audios.tarjeta.rounded-0.bg-claro.color-acento-contenido.p-4.mb-5
      .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
        h5
          span.r-3 Monday
        p.mb-0 Lunes
      .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
        h5
          span.r-3 Tuesday
        p.mb-0 Martes
      .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
        h5
          span.r-3 Wendnesday
        p.mb-0 Miércoles
      .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
        h5
          span.r-3 Thursday
        p.mb-0 Jueves
      .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
        h5
          span.r-3 Friday 
        p.mb-0 Viernes
      .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
        h5
          span.r-3 Saturday
        p.mb-0 Sábado
      .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
        h5
          span.r-3 Sunday
        p.mb-0 Domingo
      Audio.color-acento-contenido.mx-3(:audio="require('@/assets/curso/audio/tema4/1.mp3')")
    .row.justify-content-center.mb-5
      .col-lg-5
        img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/127.jpg', alt='')
      .col-lg-7
        p Otras expresiones derivadas de los días de la semana son:
        .d-inline-block.mb-3.p-3(style="background-color: #e1e8ff")
          h5.fst-italic.mb-0 Weekends → Fines de semana (sábado y domingo).
        .d-inline-block.mb-3.p-3(style="background-color: #c4d1ff")
          h5.fst-italic.mb-0  Weekdays → Días entre semana (lunes, martes, miércoles, jueves, viernes).
        .d-inline-block.mb-3.p-3(style="background-color: #a6bbff")
          h5.fst-italic.mb-0 Weeknights → Expresión que hace referencia a las noches entre semana.
    p.mb-5(data-aos='fade-right') A diferencia del español, donde se usan los artículos definidos (el, los) para referirse tanto a los días de la semana como a las expresiones derivadas de su uso, en inglés, se usa una sola preposición, la cual es ON. Y no varía si la expresión hace referencia a un día de la semana o más.
    p.text-center.fw-bold For example:
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .card-title.p-4.h-100
          img(src='@/assets/curso/temas/128.svg', alt='' style='width: 315px').m-auto.mb-4
          TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="My sister studies on Saturdays. "
            :audio="require('@/assets/curso/audio/tema4/1.mp3')"
          )
          p Mi hermana estudia los sábados.
      .col-lg-4.mb-lg-0.mb-3
        .card-title.p-4.h-100
          img(src='@/assets/curso/temas/129.svg', alt='' style='width: 315px').m-auto.mb-4
          TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="I visit my parents on Sunday."
            :audio="require('@/assets/curso/audio/tema4/2.mp3')"
          )
          p Yo visito a mis papás el domingo.
      .col-lg-4.mb-lg-0.mb-3
        .card-title.p-4.h-100
          img(src='@/assets/curso/temas/130.svg', alt='' style='width: 315px').m-auto.mb-4
          TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="Sara works on weekdays. "
            :audio="require('@/assets/curso/audio/tema4/3.mp3')"
          )
          p Sara trabaja entre semana.
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.fst-italic 4.2  Dates
    .row.justify-content-center.mb-5
      .col-lg-5
        .tarjeta.d-lg-flex.d-block.p-4.justify-content-center.align-items-center(style="background-color: #ffdfe0")
          img(src='@/assets/curso/temas/131.svg', alt='' style='width: 118px').me-lg-4.m-auto
          p.mb-0 Los americanos muestran primero el mes, luego el día y por último el año.
      .col-lg-5
        .tarjeta.d-lg-flex.d-block.p-4.justify-content-center.align-items-center(style="background-color: #ffbfc1")
          img(src='@/assets/curso/temas/132.svg', alt='' style='width: 118px').me-lg-4.m-auto
          p.mb-0  Los británicos muestran primero el día, luego el mes y por último el año (igual que en Colombia).
    p.mb-5(data-aos='fade-right') A continuación, se mostrará el formato americano.
      br
      br
      | Antes de iniciar con el formato, es importante puntualizar un vocabulario elemental para el desarrollo de este tema, a saber, los meses (months) del año.
    .tarjeta.rounded-0.p-5(style="background-color: #e1e8ff").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-10
          .card-audios.tarjeta.rounded-0.p-4
            .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
              h5
                span.r-3 January
              p.mb-0 Enero
            .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
              h5
                span.r-3 February
              p.mb-0 Febrero
            .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
              h5
                span.r-3 March
              p.mb-0 Marzo
            .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
              h5
                span.r-3 April
              p.mb-0 Abril
            .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
              h5
                span.r-3 May
              p.mb-0 Mayo
            .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
              h5
                span.r-3 June
              p.mb-0 Junio
            .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
              h5
                span.r-3 July
              p.mb-0 Julio
            .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
              h5
                span.r-3 August
              p.mb-0 Agosto
            .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
              h5
                span.r-3 September 
              p.mb-0 Septiembre
            .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
              h5
                span.r-3 October
              p.mb-0 Octubre
            .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
              h5
                span.r-3 November
              p.mb-0 Noviembre
            .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-3
              h5
                span.r-3 December
              p.mb-0 Diciembre
        .col-lg-2
          .tarjeta(style='background-color: #a6bbff ').p-4.d-flex.justify-content-center
            Audio.color-acento-contenido.mx-3(:audio="require('@/assets/curso/audio/tema4/1.mp3')")
    .row.justify-content-center.mb-5.g-0
      .col-lg-4: img(data-aos='zoom-in-up')(src='@/assets/curso/temas/133.jpg', alt='')
      .col-lg-8
        .tarjeta.rounded-0.p-4(style="background-color: #ffdfe0").h-100
          p.mb-4 Al igual que los días de la semana, los meses se deben escribir con mayúscula.
            br
            br
            |Para escribir la fecha, necesitaremos tres elementos: mes, día y año. Se debe poner una coma (,) antes de escribir el año.
            br
            br
            |- April 08, 2015
            br
            |- October 31, 2017
            br
            |- July 20, 2020
          h5.fst-italic For example: 
          .row.justify-content-center
            .col-lg-6 
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="David graduated on December 15, 2016.  "
              :audio="require('@/assets/curso/audio/tema4/4.mp3')"
              )
              p David se graduó el 15 de diciembre de 2016.
            .col-lg-6 
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="My sister got married on January 25, 2022.  "
              :audio="require('@/assets/curso/audio/tema4/5.mp3')"
              )
              p Mi hermana se casó el 25 de enero de 2022.
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.fst-italic 4.3  Expresiones de tiempo
    p.mb-5 Las expresiones de tiempo son importantes para dar a entender momentos. A continuación, se presentan expresiones de tiempo comunes en inglés:
    ImagenInfografica.color-acento-botones.mb-5.margin-n
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/134.svg', alt='Texto que describa la imagen')
      .tarjeta.color-acento-contenido--borde.p-3.border-3(x="32.5%" y="17%" numero="+" style='background-color: #ffdfe0')
        TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="In few minutes  "
              :audio="require('@/assets/curso/audio/tema4/6.mp3')"
              )
        p En unos pocos minutos
      .tarjeta.color-acento-contenido--borde.p-3.border-3(x="68.5%" y="17%" numero="+" style='background-color: #ffdfe0')
        TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="At the moment  "
              :audio="require('@/assets/curso/audio/tema4/7.mp3')"
              )
        p En el momento
      .tarjeta.color-acento-contenido--borde.p-3.border-3(x="21.5%" y="38.7%" numero="+" style='background-color: #ffdfe0')
        TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto=" Next week "
              :audio="require('@/assets/curso/audio/tema4/8.mp3')"
              )
        p La próxima semana
      .tarjeta.color-acento-contenido--borde.p-3.border-3(x="79%" y="38.7%" numero="+" style='background-color: #ffdfe0')
        TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="Right now  "
              :audio="require('@/assets/curso/audio/tema4/9.mp3')"
              )
        p Justo ahora
      .tarjeta.color-acento-contenido--borde.p-3.border-3(x="21.5%" y="55.5%" numero="+" style='background-color: #ffdfe0')
        TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="Next month "
              :audio="require('@/assets/curso/audio/tema4/10.mp3')"
              )
        p El próximo mes
      .tarjeta.color-acento-contenido--borde.p-3.border-3(x="79%" y="55.5%" numero="+" style='background-color: #ffdfe0')
        TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="Now  "
              :audio="require('@/assets/curso/audio/tema4/11.mp3')"
              )
        p Ahora
      .tarjeta.color-acento-contenido--borde.p-3.border-3(x="26.5%" y="75.5%" numero="+" style='background-color: #ffdfe0')
        TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="Next year "
              :audio="require('@/assets/curso/audio/tema4/12.mp3')"
              )
        p El próximo año
      .tarjeta.color-acento-contenido--borde.p-3.border-3(x="75%" y="75.5%" numero="+" style='background-color: #ffdfe0')
        TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="Tomorrow  "
              :audio="require('@/assets/curso/audio/tema4/13.mp3')"
              )
        p Mañana
      .tarjeta.color-acento-contenido--borde.p-3.border-3(x="51%" y="90.5%" numero="+" style='background-color: #ffdfe0')
        TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="The day after tomorrow "
              :audio="require('@/assets/curso/audio/tema4/14.mp3')"
              )
        p Pasado mañana
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 Actividad didáctica
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/completar.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 <em>When do these things take place?</em> / ¿Cuándo se llevan a cabo estas cosas?
        p.mb-4 Fortalecer el uso de las referencias temporales para un mejor discurso y que se entienda en qué momento en particular se llevaron a cabo algunas acciones. 
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Completar los espacios
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad4/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece


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
.card-audios
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  flex-grow: 1
  align-items: center
</style>
