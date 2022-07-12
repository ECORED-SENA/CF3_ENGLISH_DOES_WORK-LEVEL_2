<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 5
      h1.fst-italic This is my family
    .tarjeta.rounded-0.color-secundario.p-4.py-5.position-relative.mb-4
      img.mb-5.position-absolute.d-none.d-lg-block(src='@/assets/curso/temas/135.svg', alt='' style='width: 150px; top: -5%; left: 4%;')
      .row.justify-content-end
        .col-lg-10
          p.mb-0(data-aos='fade-right') La familia en inglés es un tanto diferente a la familia en español, debido a que hay palabras que no existen en inglés que sí hay en español. Por ejemplo, la palabra primo y prima se muestran como una sola en inglés, la cual es “cousin”.
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.fst-italic Miembros de la familia inmediata 
    p.mb-5(data-aos='fade-right') Escuche y repita cada uno de los miembros de la familia inmediata:
    .tarjeta.color-acento-contenido.bg-claro.margin-n.p-5.rounded-0
      .row.justify-content-center.mb-3
        .col-lg-4.mblg-4.mb-3.mb-lg-0
            .tarjeta.no-repeat.h-100(:style="{'background-image': `url(${require('@/assets/curso/temas/136.jpg')})`}").p-4
              .tarjeta.bg-white.p-4.text-center.d-inline-block.mw
                p.mb-0
                  span.r-3 Mother 
                  br
                  | Madre
        .col-lg-4.mb-3.mb-lg-0
            .tarjeta.no-repeat.h-100(:style="{'background-image': `url(${require('@/assets/curso/temas/137.jpg')})`}").p-4
              .tarjeta.bg-white.p-4.text-center.d-inline-block.mw
                p.mb-0
                  span.r-3 Sister
                  br
                  | Hermana
        .col-lg-4.mb-3.mb-lg-0
            .tarjeta.no-repeat.h-100(:style="{'background-image': `url(${require('@/assets/curso/temas/138.jpg')})`}").p-4
              .tarjeta.bg-white.p-4.text-center.d-inline-block.mw
                p.mb-0
                  span.r-3 Aunt
                  br
                  | Tía 
      .row.justify-content-center.mb-3
        .col-lg-4.mb-3.mb-lg-0
            .tarjeta.no-repeat.h-100(:style="{'background-image': `url(${require('@/assets/curso/temas/139.jpg')})`}").p-4
              .tarjeta.bg-white.p-4.text-center.d-inline-block.mw
                p.mb-0
                  span.r-3 Grandmother
                  br
                  | Abuela
        .col-lg-4.mb-3.mb-lg-0
            .tarjeta.no-repeat.h-100(:style="{'background-image': `url(${require('@/assets/curso/temas/140.jpg')})`}").p-4
              .tarjeta.bg-white.p-4.text-center.d-inline-block.mw
                p.mb-0
                  span.r-3 Cousin 
                  br
                  | Prima
        .col-lg-4.mb-3.mb-lg-0
            .tarjeta.no-repeat.h-100(:style="{'background-image': `url(${require('@/assets/curso/temas/141.jpg')})`}").p-4
              .tarjeta.bg-white.p-4.text-center.d-inline-block.mw
                p.mb-0
                  span.r-3 Niece 
                  br
                  | Sobrina
      .row.justify-content-center.mb-3
        .col-lg-4.mb-3.mb-lg-0
            .tarjeta.no-repeat.h-100(:style="{'background-image': `url(${require('@/assets/curso/temas/142.jpg')})`}").p-4
              .tarjeta.bg-white.p-4.text-center.d-inline-block.mw
                p.mb-0
                  span.r-3 Daughter
                  br
                  | Hija
        .col-lg-4.mb-3.mb-lg-0
            .tarjeta.no-repeat.h-100(:style="{'background-image': `url(${require('@/assets/curso/temas/143.jpg')})`}").p-4
              .tarjeta.bg-white.p-4.text-center.d-inline-block.mw
                p.mb-0
                  span.r-3 Wife 
                  br
                  | Esposa
        .col-lg-4.mb-3.mb-lg-0
            .tarjeta.no-repeat.h-100.w-100.d-flex.justify-content-center
              .tarjeta(style='background-color: #f3f9ff !important').p-5
                Audio.color-acento-contenido.mx-3(:audio="require('@/assets/curso/audio/tema5/female.mp3')")
    .tarjeta.bg-claro.margin-n.p-5.rounded-0(style='background-color: #c4d1ff !important').mb-5 
      .row.justify-content-center.mb-3
        .col-lg-4.mblg-4.mb-3.mb-lg-0
            .tarjeta.no-repeat.h-100(:style="{'background-image': `url(${require('@/assets/curso/temas/144.jpg')})`}").p-4
              .tarjeta.bg-white.p-4.text-center.d-inline-block.mw
                p.mb-0
                  span.r-3 Father
                  br
                  | Padre
        .col-lg-4.mb-3.mb-lg-0
            .tarjeta.no-repeat.h-100(:style="{'background-image': `url(${require('@/assets/curso/temas/145.jpg')})`}").p-4
              .tarjeta.bg-white.p-4.text-center.d-inline-block.mw
                p.mb-0
                  span.r-3 Brother 
                  br
                  | Hermano
        .col-lg-4.mb-3.mb-lg-0
            .tarjeta.no-repeat.h-100(:style="{'background-image': `url(${require('@/assets/curso/temas/146.jpg')})`}").p-4
              .tarjeta.bg-white.p-4.text-center.d-inline-block.mw
                p.mb-0
                  span.r-3 Uncle
                  br
                  | Tío
      .row.justify-content-center.mb-3
        .col-lg-4.mb-3.mb-lg-0
            .tarjeta.no-repeat.h-100(:style="{'background-image': `url(${require('@/assets/curso/temas/147.jpg')})`}").p-4
              .tarjeta.bg-white.p-4.text-center.d-inline-block.mw
                p.mb-0
                  span.r-3 Grandfather
                  br
                  | Abuelo
        .col-lg-4.mb-3.mb-lg-0
            .tarjeta.no-repeat.h-100(:style="{'background-image': `url(${require('@/assets/curso/temas/148.jpg')})`}").p-4
              .tarjeta.bg-white.p-4.text-center.d-inline-block.mw
                p.mb-0
                  span.r-3 Cousin  
                  br
                  | Primo
        .col-lg-4.mb-3.mb-lg-0
            .tarjeta.no-repeat.h-100(:style="{'background-image': `url(${require('@/assets/curso/temas/149.jpg')})`}").p-4
              .tarjeta.bg-white.p-4.text-center.d-inline-block.mw
                p.mb-0
                  span.r-3 Nephew 
                  br
                  | Sobrino
      .row.justify-content-center.mb-3
        .col-lg-4.mb-3.mb-lg-0
            .tarjeta.no-repeat.h-100(:style="{'background-image': `url(${require('@/assets/curso/temas/150.jpg')})`}").p-4
              .tarjeta.bg-white.p-4.text-center.d-inline-block.mw
                p.mb-0
                  span.r-3 Son
                  br
                  | Hijo
        .col-lg-4.mb-3.mb-lg-0
            .tarjeta.no-repeat.h-100(:style="{'background-image': `url(${require('@/assets/curso/temas/151.jpg')})`}").p-4
              .tarjeta.bg-white.p-4.text-center.d-inline-block.mw
                p.mb-0
                  span.r-3 Husband
                  br
                  | Esposo
        .col-lg-4.mb-3.mb-lg-0
            .tarjeta.no-repeat.h-100.w-100.d-flex.justify-content-center
              .tarjeta(style='background-color: #f3f9ff !important').p-5
                Audio.color-secundario.mx-3(:audio="require('@/assets/curso/audio/tema5/male.mp3')")
    p.mb-5(data-aos='fade-right').text-center.fw-bold Ahora, algunos ejemplos: 
    .row.justify-content-center.mb-5
      .col-lg-5.col-8.mb-lg-0.mb-3
        img(data-aos='zoom-in-up')(src='@/assets/curso/temas/152.svg', alt='')
      .col-lg-7
        .tarjeta.p-4(style='background-color: #c7d2f9').mb-3
          .row.justify-content-center
            .col-lg-6.mb-lg-0.mb-3
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="My sister lives with my aunt."
              :audio="require('@/assets/curso/audio/tema5/1.mp3')"
              )
              p Mi hermana vive con mi tía.
            .col-lg-6
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="My cousin visits her brother on weekends."
              :audio="require('@/assets/curso/audio/tema5/2.mp3')"
              )
              p Mi prima visita a su hermano los fines de semana.
        .tarjeta.p-4(style='background-color: #e1e8ff').mb-3
          .row.justify-content-center
            .col-lg-6.mb-lg-0.mb-3
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="My father calls his uncle every two weeks."
              :audio="require('@/assets/curso/audio/tema5/3.mp3')"
              )
              p Mi padre llama a su tío cada dos semanas.
            .col-lg-6
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="My grandmother cooks for her nephews"
              :audio="require('@/assets/curso/audio/tema5/4.mp3')"
              )
              p Mi abuela cocina para sus sobrinos.
        .tarjeta.p-4(style='background-color: #c7d2f9').mb-3
          .row.justify-content-center
            .col-lg-6.mb-lg-0.mb-3
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
              texto="My mother works with her niece. "
              :audio="require('@/assets/curso/audio/tema5/5.mp3')"
              )
              p Mi madre trabaja con su sobrina.
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.fst-italic 5.2  Miembros de la familia política
    p.mb-5(data-aos='fade-right') Al establecer un vínculo interpersonal, como un matrimonio, se crean relaciones entre las familias y, en inglés, hay ciertas palabras que hacen referencia a esas relaciones.
    .card-audios.tarjeta.rounded-0.bg-claro.color-acento-contenido.p-4.mb-5.justify-content-center
      .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-2.mw
        h5
          span.r-3.fst-italic Father-in-law
        p.mb-0 Suegro
      .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-2.mw
        h5
          span.r-3.fst-italic Mother-in-law

        p.mb-0 Suegra
      .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-2.mw
        h5
          span.r-3.fst-italic Son-in-law

        p.mb-0 Yerno
      .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-2.mw
        h5
          span.r-3.fst-italic Daughter-in-law
        p.mb-0 Nuera
      .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-2.mw
        h5
          span.r-3.fst-italic Brother-in-law
        p.mb-0 Cuñado
      .card-audios__items.tarjeta.bg-white.d-inline-block.p-4.text-center.m-2.mw
        h5
          span.r-3.fst-italic Sister-in-law
        p.mb-0 Cuñada
      .card-audios__items.tarjeta.d-inline-block.p-4.text-center
        Audio.color-acento-contenido.mx-2(:audio="require('@/assets/curso/audio/tema5/politica.mp3')")
    p.fst-italic.fw-bold For example:   
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-3
        .card-title.p-4.h-100
          img(src='@/assets/curso/temas/153.svg', alt='' style='width: 315px').m-auto.mb-4
          TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="My sister-in-law visits my wife on Saturdays."
            :audio="require('@/assets/curso/audio/tema5/6.mp3')"
          )
          p Mi cuñada visita a mi esposa los sábados.
      .col-lg-4.mb-lg-0.mb-3
        .card-title.p-4.h-100
          img(src='@/assets/curso/temas/154.svg', alt='' style='width: 315px').m-auto.mb-4
          TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="I cook for my mother-in-law on weekends"
            :audio="require('@/assets/curso/audio/tema5/7.mp3')"
          )
          p Cocino para mi suegra los fines de semana.
      .col-lg-4.mb-lg-0.mb-3
        .card-title.p-4.h-100
          img(src='@/assets/curso/temas/155.svg', alt='' style='width: 315px').m-auto.mb-4
          TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="We travel with our brother-in-law in summer. "
            :audio="require('@/assets/curso/audio/tema5/8.mp3')"
          )
          p  Viajamos con nuestro cuñado en verano.
    Separador 
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.fst-italic 5.3  Particularidades de los plurales
    p.mb-5(data-aos='fade-right') En inglés, hay plurales dentro del vocabulario de las familias que se generan de manera diferente a la forma en que se pluraliza en español.
    .row.justify-content-center.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-3
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor(style='height: 369px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/156.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center.d-flex.align-items-center
              div
                h5 Parents / Papás
                p (Sin importar el género, hace referencia al padre y la madre) 
      .col-sm-6.col-xl-3.mb-4.mb-xl-3
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor(style='height: 369px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/157.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center.d-flex.align-items-center
              div
                h5 Grandparents /Abuelos
                p (Sin importar el género, hace referencia a los abuelos y las abuelas)
      .col-sm-6.col-xl-3.mb-4.mb-xl-3
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor(style='height: 369px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/158.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center.d-flex.align-items-center
              div
                h5 Children / Hijos e hijas
                p (Sin importar el género, hace referencia a los hombres y las mujeres)
      .col-sm-6.col-xl-3.mb-4.mb-xl-3
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor(style='height: 369px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/159.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center.d-flex.align-items-center
              div
                h5 Cousins / Primos y primas
                p (Sin importar el género, hace referencia a los hombres y las mujeres)
      .col-sm-6.col-xl-3.mb-4.mb-xl-3
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor(style='height: 369px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/160.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center.d-flex.align-items-center
              div
                h5 Brothers / Hermanos
                p (Solo hombres)
      .col-sm-6.col-xl-3.mb-4.mb-xl-3
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor(style='height: 369px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/161.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center.d-flex.align-items-center
              div
                h5 Sisters / Hermanas
                p (Solo mujeres)
      .col-sm-6.col-xl-3.mb-4.mb-xl-3
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor(style='height: 369px')
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/162.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.text-center.d-flex.align-items-center
              div
                h5 Siblings / Hermanos y hermanas
                p (Sin importar el género, hace referencia a los hombres y las mujeres)
    .row.justify-content-center.mb-5
      .col-lg-3: img(src='@/assets/curso/temas/163.svg', alt='')
      .col-lg-6
        SlyderF.mb-5(columnas="col-lg-12 col-xl-12")
          .tarjeta.p-5(style='background-color: #e1e8ff')
            img(src='@/assets/curso/temas/164.svg', alt='' style='width: 499px').m-auto.mb-4
            .tarjeta.bg-white.p-3
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                texto="Maria has 3 siblings: 1 brother and 2 sisters. "
                :audio="require('@/assets/curso/audio/tema5/9.mp3')"
              )
              p María tiene 3 hermanos: 1 hermano y 2 hermanas.
          .tarjeta.p-5(style='background-color: #e1e8ff')
            img(src='@/assets/curso/temas/165.svg', alt='' style='width: 499px').m-auto.mb-4
            .tarjeta.bg-white.p-3
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                texto="My parents work in different places: my mother has a restaurant and my father sells cars.  "
                :audio="require('@/assets/curso/audio/tema5/10.mp3')"
              )
              p Mis padres trabajan en lugares diferentes: mi madre tiene un restaurante y mi padre vende autos.
          .tarjeta.p-5(style='background-color: #e1e8ff')
            img(src='@/assets/curso/temas/166.svg', alt='' style='width: 499px').m-auto.mb-4
            .tarjeta.bg-white.p-3
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                texto="Carlos has 2 sisters; he is the only boy. "
                :audio="require('@/assets/curso/audio/tema5/11.mp3')"
              )
              p Carlos tiene 2 hermanas; él es el único niño.
          .tarjeta.p-5(style='background-color: #e1e8ff')
            img(src='@/assets/curso/temas/167.svg', alt='' style='width: 499px').m-auto.mb-4
            .tarjeta.bg-white.p-3
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                texto="Sara has 3 children: 2 boys and 1 girl. "
                :audio="require('@/assets/curso/audio/tema5/12.mp3')"
              )
              p Sara tiene 3 hijos: 2 niños y 1 niña.
          .tarjeta.p-5(style='background-color: #e1e8ff')
            img(src='@/assets/curso/temas/168.svg', alt='' style='width: 499px').m-auto.mb-4
            .tarjeta.bg-white.p-3
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                texto="My cousins are Carlos and Martha. "
                :audio="require('@/assets/curso/audio/tema5/13.mp3')"
              )
              p Mis primos son Carlos y Martha.
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 Actividad didáctica
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/opcion-multiple.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 <em>Tell me who you are related to</em> / Dime con quién estás emparentado
        p.mb-4 Consolidar la apropiación del vocabulario relacionado con la familia.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Opción múltiple, única respuesta.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad5/story.html')" target="_blank")
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
.no-repeat
  background-repeat: no-repeat
  background-position: center
  background-size: cover
.mw
  min-width: 130px
.card-audios
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  flex-grow: 1
  align-items: center
.slyder-f__btn
  .fa-chevron-right:before
    content: url('../assets/curso/temas/iz.svg') !important
  .fa-chevron-left:before
    content: url('../assets/curso/temas/dr.svg') !important
</style>
