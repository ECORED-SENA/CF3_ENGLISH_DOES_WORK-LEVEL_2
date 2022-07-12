<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 1
      h1.fst-italic Possessives - Whose is this?/Posesivos-¿De quién es esto?
    .tarjeta.rounded-0.color-secundario.p-4.py-5.position-relative
      img.mb-5.position-absolute.d-none.d-lg-block(src='@/assets/curso/temas/0.svg', alt='' style='width: 150px; top: -5%; left: 4%;')
      .row.justify-content-end
        .col-lg-10
          p.mb-0(data-aos='fade-right') En el idioma inglés, en las categorías de palabras gramaticales que ayudan a determinar la posesión de algo, se tienen tanto adjetivos posesivos como pronombres posesivos, e incluso se tiene el sufijo ‘s llamado el Genitivo Sajón (saxon genitive). 
    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.fst-italic 1.1  Possessive adjectives
    p.mb-5(data-aos='fade-right') Son adjetivos como <em><b>“my”</b></em> o <em><b>“her”</b></em>, que muestran a quién o a qué pertenece o está conectado algo, es decir, especifican la propiedad de un elemento (expresado por un sustantivo) o, si el sustantivo se refiere a algo animado, para especificar una relación:
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1 
      span Usos de los adjetivos posesivos 
    .tarjeta.color-primario.p-4.px-5.mb-3
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0
            img.mb-5(src='@/assets/curso/temas/1.png', alt='')
          .col-md-8.mb-4.mb-md-0
            .tarjeta.bg-white.p-4
              .row.justify-content-center.align-items-center
                .col-lg-8
                  .text-center
                    p 
                      span.r-3 Uso
                      br
                      | Mostrar que algo pertenece a alguien 
                      br
                      br
                      | <em>For example</em>
                  TarjetaAudio.color-acento-contenido.mb-3(
                    texto="My new dress is beautiful."
                    :audio="require('@/assets/curso/audio/tema1/1.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-4 Mi vestido nuevo es hermoso.
                .col-lg-4.col-8
                  img(src='@/assets/curso/temas/2.svg', alt='')
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0
            img.mb-5(src='@/assets/curso/temas/1.png', alt='')
          .col-md-8.mb-4.mb-md-0
            .tarjeta.bg-white.p-4
              .row.justify-content-center.align-items-center
                .col-lg-8
                  .text-center
                    p 
                      span.r-3 Uso
                      br
                      | Familiares y amigos
                      br
                      br
                      | <em>For example</em>
                  TarjetaAudio.color-acento-contenido.mb-3(
                    texto="That is her house."
                    :audio="require('@/assets/curso/audio/tema1/2.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-4 Esa es su casa.
                .col-lg-4.col-8
                  img(src='@/assets/curso/temas/3.svg', alt='')
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0
            img.mb-5(src='@/assets/curso/temas/1.png', alt='')
          .col-md-8.mb-4.mb-md-0
            .tarjeta.bg-white.p-4
              .row.justify-content-center.align-items-center
                .col-lg-8
                  .text-center
                    p 
                      span.r-3 Uso
                      br
                      | Familia y amigos
                      br
                      br
                      | <em>For example</em>
                  TarjetaAudio.color-acento-contenido.mb-3(
                    texto="How old is your son? "
                    :audio="require('@/assets/curso/audio/tema1/3.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-4 ¿Cuántos años tiene tu hijo?
                .col-lg-4.col-8
                  img(src='@/assets/curso/temas/4.svg', alt='')
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0
            img.mb-5(src='@/assets/curso/temas/1.png', alt='')
          .col-md-8.mb-4.mb-md-0
            .tarjeta.bg-white.p-4
              .row.justify-content-center.align-items-center
                .col-lg-8
                  .text-center
                    p 
                      span.r-3 Uso
                      br
                      | Familia y amigos
                      br
                      br
                      | <em>For example</em>
                  TarjetaAudio.color-acento-contenido.mb-3(
                    texto="Diana is my best friend."
                    :audio="require('@/assets/curso/audio/tema1/4.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-4 Diana es mi mejor amiga
                .col-lg-4.col-8
                  img(src='@/assets/curso/temas/5.svg', alt='')
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0
            img.mb-5(src='@/assets/curso/temas/1.png', alt='')
          .col-md-8.mb-4.mb-md-0
            .tarjeta.bg-white.p-4
              .row.justify-content-center.align-items-center
                .col-lg-8
                  .text-center
                    p 
                      span.r-3 Uso
                      br
                      | Partes del cuerpo
                      br
                      br
                      | <em>For example</em>
                  TarjetaAudio.color-acento-contenido.mb-3(
                    texto="He fixed his teeth. "
                    :audio="require('@/assets/curso/audio/tema1/5.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-4 Él se arregló sus dientes.
                .col-lg-4.col-8
                  img(src='@/assets/curso/temas/6.svg', alt='')
        .row.justify-content-center.align-items-center
          .col-md-4.mb-4.mb-md-0
            img.mb-5(src='@/assets/curso/temas/1.png', alt='')
          .col-md-8.mb-4.mb-md-0
            .tarjeta.bg-white.p-4
              .row.justify-content-center.align-items-center
                .col-lg-8
                  .text-center
                    p 
                      span.r-3 Uso
                      br
                      | Partes del cuerpo
                      br
                      br
                      | <em>For example</em>
                  TarjetaAudio.color-acento-contenido.mb-3(
                    texto="I painted my nails."
                    :audio="require('@/assets/curso/audio/tema1/6.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                  p.ms-4 Yo me pinté mis uñas.
                .col-lg-4.col-8
                  img(src='@/assets/curso/temas/7.svg', alt='')
    p.mb-5(data-aos='fade-right') Preste atención al siguiente video y las consideraciones para el uso de los adjetivos posesivos: 
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/U2f9oG2HYfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.fst-italic 1.2  Possessive pronouns
    p.mb-5(data-aos='fade-right') Un pronombre posesivo es un pronombre como <em>"mine"</em>, <em>"yours"</em>, <em>"theirs"</em>, que se usa para referirse a una cosa en particual que pertenece a alguien. Revisemos la forma estructural. 
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 2
      span Pronombre posesivo
    .tarjeta.color-secundario--borde.rounded-0.border-3
      img(src='@/assets/curso/temas/8.svg', alt='')
    .tabla-a.color-acento-botones.mb-5
      table.tabla-editada
        tbody.text-center
          tr.text-center
            td(colspan='25%') 
              p.mb-0.fw-bold <em>Subject pronoun</em> / <br>Pronombre personal 
            td(colspan='25%') 
              p.mb-0.fw-bold <em>Possessive adjective</em> /<br> Adjetivo posesivo
            td(colspan='50%').fw-bold <em>Possessive pronoun</em> / Pronombre posesivo
          tr
            td(colspan='25%') I
            td(colspan='25%') My
            td(colspan='25%') Mine
            td(colspan='25%').bg-2 Mío, mía, míos, mías.
          tr
            td(colspan='25%') You
            td(colspan='25%') Your
            td(colspan='25%') Yours
            td(colspan='25%').bg-2 Tuyo, tuya, tuyos, tuyas.
          tr
            td(colspan='25%') He
            td(colspan='25%') His
            td(colspan='25%') His
            td(colspan='25%').bg-2 Suyo, suya, suyos, suyas (de él).
          tr
            td(colspan='25%') She
            td(colspan='25%') Her
            td(colspan='25%') Hers
            td(colspan='25%').bg-2 Suyo, suya, suyos, suyas (de ella).
          tr
            td(colspan='25%') It
            td(colspan='25%') Its
            td(colspan='50%').bg-2 No hay pronombre posesivo para IT. No se usa ITS como pronombre posesivo.
          tr
            td(colspan='25%') We
            td(colspan='25%') Our
            td(colspan='25%') Ours
            td(colspan='25%').bg-2 Nuestro, nuestra, nuestros, nuestras.
          tr
            td(colspan='25%') You
            td(colspan='25%') Your
            td(colspan='25%') Yours
            td(colspan='25%').bg-2 Suyo, suya, suyos, suyas (de ustedes).
          tr
            td(colspan='25%') They
            td(colspan='25%') Their
            td(colspan='25%') Theirs
            td(colspan='25%').bg-2 Suyo, suya, suyos, suyas (de ellos/ellas).
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/9.png', alt='')
      .col-lg-4 
        p.mb-0 Los pronombres posesivos no llevan apóstrofe:
          br
          br
          |Is that wallet yours/hers/ours/theirs? → ¿Esa billetera es tuya/suya(de ella)/nuestra/suya (de ellos)?
          br
          br
          span.text-red.fw-bold (En este caso, nunca se escribe “your's/her's/our's/their's”, es incorrecto        )
        img(src='@/assets/curso/temas/10.svg', alt='' style="width: 24px").m-auto.d-block
    p.mb-5(data-aos='fade-right') Observe ahora algunas condiciones que deben ser tenidas en cuenta con los pronombres posesivos: 
    .row.justify-content-center.align-items-start.mb-5
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta color-primario")
          .tarjeta.bg-white.p-4.mx-4(titulo='Los pronombres posesivos son palabras invariables +')
            p.mb-5(data-aos='fade-right') A diferencia del español, en el idioma inglés, los pronombres posesivos tienen una sola forma. No varían en número ni en género, o sea, no hay palabras diferentes para plural y singular ni para femenino y masculino.
            p.mb-5(data-aos='fade-right').text-center.fst-italic.fw-bold For example
            .row.justify-content-center.align-items-center.mb-3
              .col-lg-4: img(src='@/assets/curso/temas/12.svg', alt='')
              .col-lg-6
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                      texto="That jacket is <span class=r-2>mine.</span>"
                      :audio="require('@/assets/curso/audio/tema1/7.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-4 Esa chaqueta es 
                  span.r-3 mía.
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                      texto="Those jackets are <span class=r-2>mine.</span>"
                      :audio="require('@/assets/curso/audio/tema1/a1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-4 Esas chaquetas son 
                  span.r-3 mías.
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-4: img(src='@/assets/curso/temas/13.svg', alt='')
              .col-lg-6
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                      texto="That computer is <span class=r-2>mine.</span>"
                      :audio="require('@/assets/curso/audio/tema1/9.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-4 Ese computador es 
                  span.r-3 mío.
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                      texto="Those computers are <span class=r-2>mine.</span>"
                      :audio="require('@/assets/curso/audio/tema1/10.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-4 Esos computadores son 
                  span.r-3 míos.
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-6
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                      texto="“Those computers are <span class=r-2>mines</span>"
                      :audio="require('@/assets/curso/audio/tema1/a2.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              .col-lg-4
                .d-flex
                  img(src='@/assets/curso/temas/10.svg', alt='' style="width: 24px").d-block.me-3
                  h3.fw-bold.mb-0 Es incorrecto X
          .tarjeta.bg-white.p-4.mx-4(titulo='Responder preguntas sin mencionar el sustantivo +')
            p.mb-5(data-aos='fade-right') Se pueden responder preguntas sin mencionar el sustantivo de la cosa de la que se está hablando si ya se hizo referencia previamente a esta en la pregunta. No hay necesidad ni del sustantivo ni de un adjetivo posesivo, con el pronombre posesivo basta:
            p.mb-5(data-aos='fade-right').text-center.fst-italic.fw-bold For example
            .row.justify-content-center.mb-5
              .col-lg-4: img(src='@/assets/curso/temas/14.svg', alt='')
              .col-lg-6
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                      texto="Is that Johana’s house?"
                      :audio="require('@/assets/curso/audio/tema1/a3.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-4 ¿Es esa la casa de Johana?
                  br
                  br
                  | No, it’s mine. → No, es la mía.
                  br
                  br
                  | No se dice: <em><b>“No, it’s my house”</b></em>, suena poco natural.
            .row.justify-content-center.mb-5
              .col-lg-4: img(src='@/assets/curso/temas/15.svg', alt='')
              .col-lg-6
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                      texto="Whose car is this?"
                      :audio="require('@/assets/curso/audio/tema1/a4.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-4 ¿De quién es este coche?
                  br
                  br
                  | Is it <em><b>yours</b></em>? → ¿Es <b>tuyo</b>?
                  br
                  br
                  | No se dice: <em><b>“Is it your car?”</b></em>, suena poco natural.
          .tarjeta.bg-white.p-4.mx-4(titulo='Reemplazar adjetivo posesivos por pronombres posesivos')
            p.mb-5(data-aos='fade-right') Un pronombre posesivo reemplaza un <b>“adjetivo posesivo + sustantivo”</b> para evitar repetir información que ya está clara o que ya se ha mencionado con anterioridad.
            p.mb-5(data-aos='fade-right').text-center.fst-italic.fw-bold For example
            .row.justify-content-center.mb-5
              .col-lg-4: img(src='@/assets/curso/temas/16.svg', alt='')
              .col-lg-6
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                      texto="This bag is <span class=r-2>my bag</span>, not <span class=r-2>your bag</span>."
                      :audio="require('@/assets/curso/audio/tema1/14.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-4 Este bolso es 
                  span.r-3 mi bolso, 
                  | no 
                  span.r-3 tu bolso.
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                      texto="This bag is <span class=r-2>mine</span>, not <span class=r-2>yours</span>. "
                      :audio="require('@/assets/curso/audio/tema1/15.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-4 Este bolso es 
                  span.r-3 mío, 
                  |no 
                  span.r-3 tuyo.
              p.mt-5(data-aos='fade-right') Para evitar repetir la palabra “bolso” tantas veces, se puede reemplazar por pronombres posesivos. De esta forma, la oración suena más natural.
                br
                br
                | <em>“Mine”</em> reemplaza <em>“my bag”</em>.

                br
                | <em>“Yours”</em> reemplaza <em>“your bag”</em>.
          .tarjeta.bg-white.p-4.mx-4(titulo='Reemplazar adjetivo posesivo + sustantivo +')
            p.mb-5(data-aos='fade-right') A diferencia del español, en el idioma inglés, los pronombres posesivos tienen una sola forma. No varían en número ni en género, o sea, no hay palabras diferentes para plural y singular ni para femenino y masculino.
            p.mb-5(data-aos='fade-right').text-center.fst-italic For example
            .row.justify-content-center.mb-5
              .col-lg-4
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                      texto="I have a bag."
                      :audio="require('@/assets/curso/audio/tema1/16.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-4 Tengo un bolso.
              .col-lg-4
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                      texto="This is <span class=r-3>my</span> bag. "
                      :audio="require('@/assets/curso/audio/tema1/17.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-4 Este es 
                  span.r-3 mi 
                  | bolso.
                  br
                  | (<b>my</b> es un adjetivo posesivo)
              .col-lg-4
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                      texto="The bag is <span class=r-3>mine.</span>"
                      :audio="require('@/assets/curso/audio/tema1/18.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p.ms-4 El bolso es 
                  span.r-3 mío.
                  br
      .col-lg-3
        .d-none.d-lg-block: img(src='@/assets/curso/temas/11.svg', alt='')
    .tarjeta.rounded-0.margin-n.color-acento-contenido.bg-claro.p-4.mb-5
      .row.justify-content-center.mb-5
        .col-lg-9
          SlyderF.mb-5(columnas="col-lg-6 col-xl-6")
            .tarjeta.color-primario.bg-claro.p-4
              .row.justify-content-center.mb-3
                .col-10
                  img.rounded-3(src='@/assets/curso/temas/17.jpg' alt='AvatarTop')
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto=" My dress is beautiful."
                  :audio="require('@/assets/curso/audio/tema1/19.mp3')"
                )
              p.ms-4 Mi vestido es hermoso.
            .tarjeta.color-primario.bg-claro.p-4
              .row.justify-content-center.mb-3
                .col-10
                  img.rounded-3(src='@/assets/curso/temas/18.jpg' alt='AvatarTop')
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="The dress is mine. "
                  :audio="require('@/assets/curso/audio/tema1/a5.mp3')"
                )
              p.ms-4 El vestido es mío.
            .tarjeta.color-primario.bg-claro.p-4
              .row.justify-content-center.mb-3
                .col-10
                  img.rounded-3(src='@/assets/curso/temas/19.jpg' alt='AvatarTop')
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="Your dog is old. "
                  :audio="require('@/assets/curso/audio/tema1/21.mp3')"
                )
              p.ms-4 Tu perro es viejo.
            .tarjeta.color-primario.bg-claro.p-4
              .row.justify-content-center.mb-3
                .col-10
                  img.rounded-3(src='@/assets/curso/temas/20.jpg' alt='AvatarTop')
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="The dog is yours. "
                  :audio="require('@/assets/curso/audio/tema1/22.mp3')"
                )
              p.ms-4 El perro es tuyo.
            .tarjeta.color-primario.bg-claro.p-4
              .row.justify-content-center.mb-3
                .col-10
                  img.rounded-3(src='@/assets/curso/temas/21.jpg' alt='AvatarTop')
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="The car is his. "
                  :audio="require('@/assets/curso/audio/tema1/23.mp3')"
                )
              p.ms-4 El coche es suyo (de él).
            .tarjeta.color-primario.bg-claro.p-4
              .row.justify-content-center.mb-3
                .col-10
                  img.rounded-3(src='@/assets/curso/temas/22.jpg' alt='AvatarTop')
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="Her cat is fat. "
                  :audio="require('@/assets/curso/audio/tema1/24.mp3')"
                )
              p.ms-4  Su gato es gordo.
            .tarjeta.color-primario.bg-claro.p-4
              .row.justify-content-center.mb-3
                .col-10
                  img.rounded-3(src='@/assets/curso/temas/23.jpg' alt='AvatarTop')
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="The cat is hers. "
                  :audio="require('@/assets/curso/audio/tema1/25.mp3')"
                )
              p.ms-4 El gato es suyo (de ella).
            .tarjeta.color-primario.bg-claro.p-4
              .row.justify-content-center.mb-3
                .col-10
                  img.rounded-3(src='@/assets/curso/temas/24.jpg' alt='AvatarTop')
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="Its nest is small. "
                  :audio="require('@/assets/curso/audio/tema1/26.mp3')"
                )
              p.ms-4 Su nido es pequeño.
                br
                br
                span.text-small No hay pronombre posesivo para IT. No se usa ITS como pronombre posesivo.
            .tarjeta.color-primario.bg-claro.p-4
              .row.justify-content-center.mb-3
                .col-10
                  img.rounded-3(src='@/assets/curso/temas/25.jpg' alt='AvatarTop')
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="Our parrot is colorful."
                  :audio="require('@/assets/curso/audio/tema1/27.mp3')"
                )
              p.ms-4 Nuestro loro es colorido.
            .tarjeta.color-primario.bg-claro.p-4
              .row.justify-content-center.mb-3
                .col-10
                  img.rounded-3(src='@/assets/curso/temas/26.jpg' alt='AvatarTop')
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="The parrot is ours."
                  :audio="require('@/assets/curso/audio/tema1/a6.mp3')"
                )
              p.ms-4 El loro es nuestro.
            .tarjeta.color-primario.bg-claro.p-4
              .row.justify-content-center.mb-3
                .col-10
                  img.rounded-3(src='@/assets/curso/temas/27.jpg' alt='AvatarTop')
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="Your book is interesting. "
                  :audio="require('@/assets/curso/audio/tema1/29.mp3')"
                )
              p.ms-4 Su libro es interesante.
            .tarjeta.color-primario.bg-claro.p-4
              .row.justify-content-center.mb-3
                .col-10
                  img.rounded-3(src='@/assets/curso/temas/28.jpg' alt='AvatarTop')
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="The book is yours"
                  :audio="require('@/assets/curso/audio/tema1/30.mp3')"
                )
              p.ms-4 El libro es suyo (de ustedes).
    .row.justify-content-center.align-items-end.mb-3
      .col-lg-4.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/29.png', alt='')
      .col-lg-6 
        p.mb-3 Para la segunda persona singular (tú/usted) y la segunda persona plural (ustedes), tanto el pronombre personal (you) como el adjetivo posesivo (your) y el pronombre posesivo (yours) coinciden. Se debe diferenciar a qué persona o personas se está haciendo referencia por el contexto de la oración o de la conversación.
        .row.mb-3
          .col-lg-4.mb-lg-0.mb-3.col-8: img.mb-5(src='@/assets/curso/temas/30.svg', alt='')
          .col-lg-7
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="Their restaurant is amazing. "
                  :audio="require('@/assets/curso/audio/tema1/31.mp3')"
                )
            p.ms-4 Su restaurante es increíble.
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="The restaurant is theirs. "
                  :audio="require('@/assets/curso/audio/tema1/32.mp3')"
                )
            p.ms-4 El restaurante es suyo (de ellos).
        p.mb-3(data-aos='fade-right') Se pueden usar pronombres posesivos después de “of”.
        .row.mb-1
          .col-lg-4.mb-lg-0.mb-3.col-8: img.mb-5(src='@/assets/curso/temas/31.svg', alt='')
          .col-lg-8
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="Susan is one of my friends. Susan is a friend of mine."
                  :audio="require('@/assets/curso/audio/tema1/33.mp3')"
                )
            p.ms-4 Susan es una de mis amigas. Susan es una amiga mía.
        .d-flex
          p.mb-0 
            span.text-red.me-4 No se dice: <b>“Susan is a friend of me”</b>, es incorrecto 
          img(src='@/assets/curso/temas/10.svg', alt='' style="width: 24px").d-block
    Separador
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.fst-italic 1.3  Saxon genitive 
    .row.justify-content-center.mb-5
      .col-lg-7.mb-lg-0.mb-3
        p.mb-3(data-aos='fade-right') genitivo sajón o <b>“saxon genitive”</b> es el término tradicional utilizado para nombrar en el idioma inglés al sufijo posesivo 
          span.r-3 ’s. 
          | También recibe otros nombres, como <b>“genitive case”</b> (caso genitivo) o <b>“possessive case”</b> (caso posesivo).
          br
          br
          |Este sufijo “apóstrofe + 
          span.r-3 s” (‘s) 
          | generalmente se usa para mostrar posesión. Se ubica al final de un sujeto, sea un sustantivo común (como <em>boss’s</em> -del jefe-) o un nombre propio (como Juan’s -de Juan-), lo que demuestra que este sujeto posee al sustantivo que viene escrito después.
        p.text-center 
          span.r-3.fst-italic For example:
        .row.justify-content-center.mb-3
          .col-lg-8
            img(src='@/assets/curso/temas/32.svg', alt='')
        p(data-aos='fade-right') Para referirse a “la maleta de Clara” no se dice <em>“the suitcase of Clara”</em> como se diría en español. En inglés se usa el ‘s. Se dice <em>“Clara's suitcase”</em>, lo que significa que la maleta pertenece a Clara.
      .col-lg-5.col-8: img.mb-5(src='@/assets/curso/temas/33.jpg', alt='')
    p.mb-5(data-aos='fade-right') Reglas para usar el genitivo sajón:
    TabsA.color-secundario.mb-5
      .tarjeta.color-secundario--borde.p-4(titulo="Singular nouns")
        h4
          span.r-3 Singular nouns
        p Para sustantivos comunes, en singular, que no terminan en S, solo se les debe agregar el sufijo ‘s.
        p.text-center.fst-italic For example. Listen and repeat
        .row.justify-content-center.align-items-center.mb-2
          .col-lg-3: img.mb-5(src='@/assets/curso/temas/34.svg', alt='')
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="This is <span class=r-2>Hector’s</span> briefcase."
                  :audio="require('@/assets/curso/audio/tema1/34.mp3')"
                )
            p.ms-4 Este es el maletín de 
              span.r-3 Hector.
        .row.justify-content-center.align-items-center.mb-2
          .col-lg-3: img.mb-5(src='@/assets/curso/temas/36.svg', alt='')
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="Where is the <span class=r-2>cat’s</span> toy?"
                  :audio="require('@/assets/curso/audio/tema1/35.mp3')"
                )
            p.ms-4 ¿Dónde está el juguete 
              span.r-3 del gato?
        .row.justify-content-center.align-items-center.mb-2
          .col-lg-3: img.mb-5(src='@/assets/curso/temas/37.svg', alt='')
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="Is that your <span class=r-2>sister’s</span> jacket?"
                  :audio="require('@/assets/curso/audio/tema1/36.mp3')"
                )
            p.ms-4 ¿Esa es la chaqueta de 
              span.r-3 tu hermana?
      .tarjeta.color-secundario--borde.p-4(titulo="Singular nouns ending in S")
        h4
          span.r-3 Singular nouns ending in S
        p Para sustantivos comunes, en singular, que sí terminan en S, igualmente solo se les debe agregar el sufijo ‘s.
        p.text-center.fst-italic For example. Listen and repeat
        .row.justify-content-center.align-items-center.mb-2
          .col-lg-3: img.mb-5(src='@/assets/curso/temas/38.svg', alt='')
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="<span class= r-2>My boss’s</span> car is expensive."
                  :audio="require('@/assets/curso/audio/tema1/37.mp3')"
                )
            p.ms-4 El carro de 
              span.r-3 mi jefe 
              | es costoso.
        .row.justify-content-center.mb-2.align-items-center
          .col-lg-3: img.mb-5(src='@/assets/curso/temas/39.svg', alt='')
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="I love <span class= r-2>that actress’s</span> movie."
                  :audio="require('@/assets/curso/audio/tema1/38.mp3')"
                )
            p.ms-4 Me encanta la película 
              span.r-3 de esa actriz.
        .row.justify-content-center.mb-2.align-items-center
          .col-lg-3: img.mb-5(src='@/assets/curso/temas/40.svg', alt='')
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="<span class= r-2>The waitress’s</span> uniform is very clean. "
                  :audio="require('@/assets/curso/audio/tema1/39.mp3')"
                )
            p.ms-4 El uniforme 
              span.r-3 de la mesera 
              | está muy limpio.
      .tarjeta.color-secundario--borde.p-4(titulo="Plural nouns ending in S")
        h4
          span.r-3  Plural nouns ending in S
        p Para sustantivos comunes, en plural, que sí terminan en 
          span.r-3 S, 
          | solo se les debe agregar el apóstrofe pero sin la S al final.
        p.text-center.fst-italic For example. Listen and repeat
        .row.justify-content-center.mb-2.align-items-center
          .col-lg-3: img.mb-5(src='@/assets/curso/temas/34.svg', alt='')
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="Those are <span class= r-2>our fathers’</span> briefcases."
                  :audio="require('@/assets/curso/audio/tema1/40.mp3')"
                )
            p.ms-4 Esos son los maletines 
              span.r-3 de nuestros padres.
        .row.justify-content-center.mb-2.align-items-center
          .col-lg-3: img.mb-5(src='@/assets/curso/temas/36.svg', alt='')
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="Where is <span class= r-2>the cats’</span> toy?"
                  :audio="require('@/assets/curso/audio/tema1/41.mp3')"
                )
            p.ms-4 ¿Dónde está el juguete 
              span.r-3 de los gatos?
        .row.justify-content-center.mb-2.align-items-center
          .col-lg-3: img.mb-5(src='@/assets/curso/temas/37.svg', alt='')
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="Are those <span class= r-2>your sisters’</span> jackets? "
                  :audio="require('@/assets/curso/audio/tema1/42.mp3')"
                )
            p.ms-4 ¿Esas son las chaquetas 
              span.r-3 de tus hermanas?
      .tarjeta.color-secundario--borde.p-4(titulo="Plural nouns not ending in S (irregular plurals)")
        h4
          span.r-3 Plural nouns not ending in S (irregular plurals)
        p Para sustantivos comunes, en plural, y que tengan plural irregular (o sea, que no terminan en S), se les debe agregar el sufijo 
          span.r-3 ‘s 
          | completo.
        p.text-center.fst-italic For example. Listen and repeat
        .row.justify-content-center.mb-2.align-items-center
          .col-lg-3: img.mb-5(src='@/assets/curso/temas/41.svg', alt='')
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="<span class= r-3>People’s</span> rights are important. "
                  :audio="require('@/assets/curso/audio/tema1/43.mp3')"
                )
            p.ms-4 Los derechos 
              span.r-3 de las personas 
              | son importantes.
        .row.justify-content-center.mb-2.align-items-center
          .col-lg-3: img.mb-5(src='@/assets/curso/temas/42.svg', alt='')
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="Today I buy <span class= r-3>the children’s</span> costumes."
                  :audio="require('@/assets/curso/audio/tema1/44.mp3')"
                )
            p.ms-4 Hoy compro los disfraces 
              span.r-3 de los niños.
        .row.justify-content-center.mb-2.align-items-center
          .col-lg-3: img.mb-5(src='@/assets/curso/temas/43.svg', alt='')
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="Where is the <span class= r-3>women’s</span> bathroom? "
                  :audio="require('@/assets/curso/audio/tema1/45.mp3')"
                )
            p.ms-4 ¿Dónde está el baño 
              span.r-3 de mujeres?
      .tarjeta.color-secundario--borde.p-4(titulo="Proper nouns (names) ending in S")
        h4
          span.r-3 Proper nouns (names) ending in S
        p Para nombres propios que terminan en S hay dos opciones y ambas son válidas: se les puede agregar el sufijo ‘s completo o se les puede agregar solo el apóstrofe pero sin la S al final.
        p.text-center.fst-italic For example. Listen and repeat
        .row.justify-content-center.mb-2.align-items-start
          .col-lg-4
            .d-flex.align-items-center
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="Is this James’ job? "
                    :audio="require('@/assets/curso/audio/tema1/a7.mp3')"
                  )
              img(src='@/assets/curso/temas/35.svg', alt='' style='width: 25px').ms-3
            p ¿Este es el trabajo de James?
          .col-lg-5
            .d-flex.align-items-center
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="Is this James’s job?"
                    :audio="require('@/assets/curso/audio/tema1/a8.mp3')"
                  )
              img(src='@/assets/curso/temas/35.svg', alt='' style='width: 25px').ms-3
        .row.justify-content-center.mb-2
          .col-lg-4
            
              .d-flex.align-items-center
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                      texto="I know Charles’ brother. "
                      :audio="require('@/assets/curso/audio/tema1/48.mp3')"
                    )
                img(src='@/assets/curso/temas/35.svg', alt='' style='width: 25px').ms-3
              p Yo conozco al hermano de Charles.
          .col-lg-5
            .d-flex.align-items-center
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="I know Charles’s brother."
                    :audio="require('@/assets/curso/audio/tema1/49.mp3')"
                  )
              img(src='@/assets/curso/temas/35.svg', alt='' style='width: 25px').ms-3
        .row.justify-content-center.mb-2
          .col-lg-4
            .d-flex.align-items-center
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="I don’t like Chris’ boots."
                    :audio="require('@/assets/curso/audio/tema1/50.mp3')"
                  )
              img(src='@/assets/curso/temas/35.svg', alt='' style='width: 25px').ms-3
            p No me gustan las botas de Chris.
          .col-lg-5
            .d-flex.align-items-center
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="I don’t like Chris’s boots."
                    :audio="require('@/assets/curso/audio/tema1/51.mp3')"
                  )
              img(src='@/assets/curso/temas/35.svg', alt='' style='width: 25px').ms-3
      .tarjeta.color-secundario--borde.p-4(titulo="For two or more people")
        h4
          span.r-3 For two or more people
        p En el caso de dos o más personas, se deben seguir las reglas anteriormente enunciadas y poner todo el sufijo ‘s o solo el apóstrofe, dependiendo del caso. Pero hay que tener mucho cuidado con lo que se quiere decir, porque, dependiendo de dónde se ponga el genitivo sajón, se puede cambiar el sentido del mensaje. 
        p.text-center.fst-italic For example. Listen and repeat
        .row.justify-content-center.mb-2.align-items-center
          .col-lg-3: img.mb-5(src='@/assets/curso/temas/44.svg', alt='')
          .col-lg-7
            .d-flex.align-items-center 
              TarjetaAudio.color-acento-contenido.mb-3.me-3.bg-white(
                    texto="James and Gloria’s apartment is big. "
                    :audio="require('@/assets/curso/audio/tema1/52.mp3')"
                  )
              p (Dos dueños de un mismo apartamento)
            p.ms-4 El apartamento de James y Gloria es grande.
        .row.justify-content-center.mb-2.align-items-center
          .col-lg-3: img.mb-5(src='@/assets/curso/temas/45.svg', alt='')
          .col-lg-7
            .d-flex.align-items-center
              TarjetaAudio.color-acento-contenido.mb-3.me-3.bg-white(
                    texto="James’ and Gloria’s apartments are big."
                    :audio="require('@/assets/curso/audio/tema1/53.mp3')"
                  )
              p (Dos dueños de dos apartamentos diferentes)
            p.ms-4 Los apartamentos de James y de Gloria son grandes.
        p.fw-bold.text-center (Es como si se dijera “El apartamento de James y el de Gloria son grandes.”)
      .tarjeta.color-secundario--borde.p-4(titulo="As part of a sentence")
        h4
          span.r-3 As part of a sentence
        p  En el caso de que nombrar al sujeto requiera una pequeña frase, se deben seguir las reglas anteriormente enunciadas y poner todo el sufijo ‘s o solo el apóstrofe, dependiendo del caso.
        p.text-center.fst-italic For example. Listen and repeat
        .row.justify-content-center.mb-2.align-items-center
          .col-lg-3: img.mb-5(src='@/assets/curso/temas/46.svg', alt='')
          .col-lg-8
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="<span class= r-2>The President of Denmark’s</span> speech was inspiring."
                  :audio="require('@/assets/curso/audio/tema1/54.mp3')"
                )
            p.ms-4 El discurso del presidente de Dinamarca fue inspirador.
        .row.justify-content-center.mb-2.align-items-center
          .col-lg-3: img.mb-5(src='@/assets/curso/temas/47.svg', alt='')
          .col-lg-8
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="I had to give a <span class= r-2>two weeks’</span> notice before leaving my job."
                  :audio="require('@/assets/curso/audio/tema1/55.mp3')"
                )
            p.ms-4 Tuve que dar un aviso de dos semanas antes de dejar mi trabajo.
      .tarjeta.color-secundario--borde.p-4(titulo="No noun after the apostrophe S")
        h4
          span.r-3 No noun after the apostrophe S
        p A veces, no es necesario poner el sustantivo de lo que se posee después del poseedor con ‘s, por que se sobreentiende a que se hace referencia.
        p.text-center.fst-italic No es lo mismo decir:
        .row.mb-2.align-items-center
          .col-lg-3: img.mb-5(src='@/assets/curso/temas/48.svg', alt='')
          .col-lg-8
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="My boat is faster than <span class= r-2>Oscar’s.</span> "
                  :audio="require('@/assets/curso/audio/tema1/a9.mp3')"
                )
            p.ms-4 Mi barco es más rápido que el 
              span.r-3 de Oscar.
        .row.mb-2.align-items-center
          .col-lg-2: img(src='@/assets/curso/temas/49.svg', alt='')
          .col-lg-4
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="Whose cell phone is this? "
                  :audio="require('@/assets/curso/audio/tema1/57.mp3')"
                )
            p.ms-4 ¿De quién es este celular?
          .col-lg-4

            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                  texto="It is <span class= r-2>Sofia’s.</span>"
                  :audio="require('@/assets/curso/audio/tema1/a11.mp3')"
                )
            p.ms-4 Es 
              span.r-3 de Sofía.
        p En este caso, el significado es claro y se sabe que se está hablando del celular.
        .row.mb-2.align-items-center
          .col-lg-4
            .d-flex.align-items-center.mb-3
              TarjetaAudio.color-acento-contenido.bg-white(
                    texto="It is <span class= r-2>Sofia’s</span> cell phone. "
                    :audio="require('@/assets/curso/audio/tema1/59.mp3')"
                  )
              img(src='@/assets/curso/temas/35.svg', alt='' style='width: 25px').ms-3
            p.ms-3 Es el celular 
              span.r-3 de Sofía.
          .col-lg-6
            p En este caso la palabra “cell phone” -celular- no es necesariamente repetitiva.
              span.r-2.fst-bold * Ambas respuestas son correctas.
    p.mb-5(data-aos='fade-right') Adicional a las reglas que se tienen en cuenta en el uso, es ideal tener precaución en las siguientes advertencias para el uso adecuado: 
    TabsC.color-secundario.mb-5
      .tarjeta.color-acento-contenido.bg-claro.rounded-0.p-5(titulo="Warning #1")
        .row.align-items-center.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/50.png', alt='')
          .col-md-8
            p.mb-5(data-aos='fade-right') No se usa el sufijo 
              span.r-3 ‘s 
              | para hacer que las palabras singulares se conviertan en plurales.
            p.fst-italic.fw-bold For example
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-4: img(src='@/assets/curso/temas/51.svg', alt='') 
              .col-lg-8
                p 1 lemon, 2 lemons, …  
                  br
                  |1 limón, 2 limones, …
                .d-flex.align-items-center
                  img(src='@/assets/curso/temas/10.svg', alt='' style='width: 25px').me-3
                  p.mb-0
                    span.text-red.fw-bold  No se escribe 2 lemon’s.
      .tarjeta.color-acento-contenido.bg-claro.rounded-0.p-5(titulo="Warning #2")
        .row.align-items-center.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/52.png', alt='')
          .col-md-8
            p.mb-5(data-aos='fade-right') <b>La fórmula “(noun) + of + (noun)”</b>
              br
              br
              | Ya que esta estructura de “sustantivo + of + sustantivo” no es muy común (al menos no como en español), puede parecer que está mal estructurada en inglés, no obstante, en ciertos casos, es la forma correcta de estructurar una oración:

            p.fst-italic.fw-bold For example
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-4: img(src='@/assets/curso/temas/53.svg', alt='') 
              .col-lg-8
                TarjetaAudio.color-acento-contenido.bg-white(
                    texto="The Great Wall of China. "
                    :audio="require('@/assets/curso/audio/tema1/60.mp3')"
                  )
                p.ms-3 La gran muralla china.
                .d-flex.align-items-center
                  p.mb-0
                    span.text-red.fw-bold  No se dice “China’s Great Wall”, es incorrecto
                  img(src='@/assets/curso/temas/10.svg', alt='' style='width: 25px').ms-3
                p.mb-3 * En ocasiones, ambas formas son válidas; en estos casos, escoger entre una u otra pasa a ser solo una cuestión de estilo:
        .row.align-items-center
          .col-lg-2: img(src='@/assets/curso/temas/54.svg', alt='') 
          .col-lg-6
            .d-flex.align-items-center.mb-3
              p.mb-0 He spent years studying Colombia’s history. 
              // audio 65
              img(src='@/assets/curso/temas/35.svg', alt='' style='width: 25px').ms-3 
            .d-flex.align-items-center.mb-3
              TarjetaAudio.color-acento-contenido.bg-white(
                  texto="He spent years studying the history of Colombia.  "
                  :audio="require('@/assets/curso/audio/tema1/a10.mp3')"
                )
              img(src='@/assets/curso/temas/35.svg', alt='' style='width: 25px').ms-3
            p.ms-3 Él pasó años estudiando la historia de Colombia.
      .tarjeta.color-acento-contenido.bg-claro.rounded-0.p-5(titulo="Warning #3")
        p.mb-3 Normalmente, no se usa el genitivo sajón con objetos como poseedores. Los objetos no poseen, los objetos tienen partes o componentes y no tienen conciencia de poseer nada.
        .row.align-items-center.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/57.png', alt='')
          .col-md-8
            p.fst-italic.fw-bold For example
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-4: img(src='@/assets/curso/temas/55.svg', alt='') 
              .col-lg-8
                .d-flex.align-items-center
                  TarjetaAudio.color-acento-contenido.bg-white(
                      texto="The end of the road.  "
                      :audio="require('@/assets/curso/audio/tema1/62.mp3')"
                    )
                  img(src='@/assets/curso/temas/35.svg', alt='' style='width: 25px').ms-3
                  
                p.ms-3 El final del camino.
                .d-flex.align-items-center
                  p.mb-0 No se escribe <b>“The road’s end”</b>, es incorrecto 

                  img(src='@/assets/curso/temas/10.svg', alt='' style='width: 25px').ms-3
                p.mb-3 En este caso, se usa la fórmula “sustantivo + of + sustantivo”.
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-4: img(src='@/assets/curso/temas/56.svg', alt='') 
              .col-lg-8
                .d-flex.align-items-center
                  p.mb-0 The airplane window. 
                  img(src='@/assets/curso/temas/35.svg', alt='' style='width: 25px').ms-3
                  
                p.ms-3 La ventana del avión.
                .d-flex.align-items-center
                  p.mb-0 No se escribe <b><em>“The airplane’s window”</em></b>, es incorrecto 
                  img(src='@/assets/curso/temas/10.svg', alt='' style='width: 25px').ms-3
                p.mb-3 En este caso, <em>“airplane”</em> es visto como un adjetivo que describe de dónde es la ventana.
        p.mb-3 * Cuando se habla de los componentes de un objeto, ambas formas son correctas.
          br
          |* Estas no se consideran relaciones de posesión.
        .row.justify-content-center.mb-5
          .col-lg-6
            .d-flex.align-items-center
              img(src='@/assets/curso/temas/58.svg', alt='' style='width: 67px').me-3
              div.mb-0
                TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="I must check the window of the airplane.   "
                    :audio="require('@/assets/curso/audio/tema1/63.mp3')"
                  )
                p.ms-3 Debo revisar la ventana del avión.
              img(src='@/assets/curso/temas/35.svg', alt='' style='width: 25px').ms-3
          .col-lg-6
            .d-flex.align-items-center
              img(src='@/assets/curso/temas/59.svg', alt='' style='width: 67px').me-3
              div.mb-0
                TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="Hail cannot damage the airplane window.  "
                    :audio="require('@/assets/curso/audio/tema1/64.mp3')"
                  )
                p.ms-3 El granizo no puede dañar la ventana del avión.
              img(src='@/assets/curso/temas/35.svg', alt='' style='width: 25px').ms-3
              
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 Actividad didáctica
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/opcion-multiple.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 <em>Whose is each thing?</em> / ¿De quién es cada cosa?
        p.mb-4 Practicar la posesión de algo a través de los adjetivos posesivos y los pronombres posesivos y que cada oración tenga sentido.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Opción múltiple, única respuesta.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad1/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece        

























</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.slyder-a__btn
  &--atrs, &--sigt
    background-color: $color-acento-botones
    opacity: 1
    border: 0px
    background-image: url(../assets/curso/temas/flecha-azul.svg)
td.bg-2
  background-color: #e1e8ff
.tabla-editada
  td
    border: 2px solid $color-secundario
    padding: 1.5rem
span.text-red
  color: #ff000a !important
.acordion__accion__btn--a
  background-color: $color-acento-botones
  border: 0px
.tarjeta-audio.color-acento-contenido .tarjeta-audio__texto
  h5
    color: $color-acento-contenido !important
</style>
