<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 2
      h1 Present continuous and verbs ending in -ing 
    .tarjeta.rounded-0.color-primario.bg-claro.p-4.py-5.position-relative.mb-4
      img.mb-5.position-absolute.d-none.d-lg-block(src='@/assets/curso/temas/60.svg', alt='' style='width: 150px; top: -5%; left: 4%;')
      .row.justify-content-end
        .col-lg-10
          p.mb-0(data-aos='fade-right') El presente continuo (present continuous), también llamado presente progresivo (present progressive), es un tiempo verbal que consiste en usar el verbo “to be” conjugado en presente simple como auxiliar, seguido del verbo principal terminado en -ing.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.fst-italic 2.1  When is the present continuous used?
    p.mb-5(data-aos='fade-right') Este tiempo verbal se usa para indicar que una acción o evento presente está en progreso, que una acción está repitiéndose con frecuencia, que la acción es de naturaleza temporal, o inclusive, se usa para expresar el futuro. Ahora veremos lo usos más comunes del tiempo presente continuo:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.fst-italic 2.2  -ing spelling rules
    p.mb-5(data-aos='fade-right') En esta parte, se van a ver las reglas de ortografía de los verbos cuando se conjugan en el tiempo presente continuo; se darán las indicaciones para añadir correctamente la terminación -ing.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-3: img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/61.jpg', alt='')
      .col-lg-8 
        h4 Regla general
        p.mb-3 En general, la norma es que, al final de la forma base del verbo, se agrega -ing.
        .row.justify-content-center.mb-4
          .col-lg-10
            .tabla-a.color-acento-botones.w-100
              table.table-purple
                tr.text-center
                  th Infinitive / Infinitivo
                  th ING form / Forma ING
                tbody.text-center
                  tr.content
                    td  to dance

                    td  to write

                  tr.content
                    td to make

                    td making

                  tr.content
                    td to write
                    td writing
        p.mb4.fw-bold.text-center For example:
        .row.justify-content-center.mb-5
          .col-lg-6
            .tarjeta.color-primario.bg-claro.p-5.h-100
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="She is <span class=r-2>working</span> at the hospital."
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p.ms-4 Ella está 
                span.r-3 trabajando 
                | en el hospital.
          .col-lg-6
            .tarjeta.color-primario.bg-claro.p-5.h-100
              TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="I am <span class=r-2>fishing</span> in the lake. "
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
              p.ms-4 Estoy 
                span.r-3 pescando 
                | en el lago.
    p.mb-5(data-aos='fade-right') Ahora, revisemos las excepciones ortográficas a la regla general de la terminación –ing:
    TabsA.color-secundario.mb-5
      .tarjeta.color-primario--borde.bg-azul-claro.border-2.p-4(titulo="Verbos terminados en ”consonante …")
        h4
          span.r-3 Verbos terminados en ”consonante + e”
        p.mb-4 Cuando un verbo termina en “consonante + e”, quitamos la -e del final y agregamos -ing.
        .row.justify-content-center.mb-4
          .col-lg-10
            .tabla-a.color-acento-botones.w-100
              table.table-purple
                tr.text-center
                  th Infinitive / Infinitivo 
                  th ING form / Forma ING
                tbody.text-center
                  tr.content
                    td   to dance
                    td  to write
                  tr.content
                    td  to make
                    td making
                  tr.content
                    td  to write
                    td writing
        p.text-center.fst-italic.fw-bold For example: 
        .row.justify-content-center.mb-5
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="I am <span class=r-2>making</span> dinner. "
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-4 Estoy 
              span.r-3 haciendo 
              | la cena.
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="Luisa and Diego are <span class=r-2>dancing</span> in the rain. "
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-4 Luisa y Diego están 
              span.r-3 bailando 
              | bajo la lluvia.
      .tarjeta.color-primario--borde.bg-azul-claro.border-2.p-4(titulo="Verbos terminados en -ie")
        h4
          span.r-3 Verbos terminados en -ie
        p.mb-4 Cuando un verbo termina en “i + e”, quitamos el -ie del final y agregamos “y + ing”.
        .row.justify-content-center.mb-4
          .col-lg-10
            .tabla-a.color-acento-botones.w-100
              table.table-purple
                tr.text-center
                  th Infinitive / Infinitivo
                  th ING form / Forma ING
                tbody.text-center
                  tr.content
                    td to die
                    td dying
                  tr.content
                    td to lie
                    td lying
                  tr.content
                    td to tie
                    td tying
        p.text-center.fst-italic.fw-bold For example: 
        .row.justify-content-center.mb-5
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="He is <span class= r-2>lying</span> to you. "
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-4  Él te está 
              span.r-3 mintiendo.
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="The sailors are <span class= r-2>tying</span> the ship’s ropes. "
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-4  Los marineros están 
              span.r-3 amarrando 
              | las cuerdas del barco.
      .tarjeta.color-primario--borde.bg-azul-claro.border-2.p-4(titulo="Verbos de una sola sílaba que terminan en “consonante + vocal + consonante”")
        h4
          span.r-3 Verbos de una sola sílaba que terminan en “consonante + vocal + consonante”
        p.mb-4 Cuando un verbo de una sola sílaba termina en “consonante + vocal + consonante”, se duplica la consonante final y se agrega -ing.
        .row.justify-content-center.mb-4
          .col-lg-10
            .tabla-a.color-acento-botones.w-100
              table.table-purple
                tr.text-center
                  th Infinitive / Infinitivo
                  th ING form / Forma ING
                tbody.text-center
                  tr.content
                    td  to run
                    td  running
                  tr.content
                    td to put
                    td putting
                  tr.content
                    td to stop
                    td stopping
        p.text-center.fst-italic.fw-bold For example: 
        .row.justify-content-center.mb-5
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="You’re not <span class= r-2>stopping</span> the fight. "
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-4 No estás 
              span.r-3 deteniendo 
              | la pelea.
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="Is Mariana <span class= r-2>running</span> the marathon? "
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-4 ¿Mariana está 
              span.r-3 corriendo 
              | la maratón?
      .tarjeta.color-primario--borde.bg-azul-claro.border-2.p-4(titulo="Verbos que terminan en W, X o Y")
        h4
          span.r-3 Verbos que terminan en W, X o Y
        p.mb-4 Cuando un verbo termina en W, X o Y, NO se duplica esa letra final antes de agregar -ing.
        .row.justify-content-center.mb-4
          .col-lg-10
            .tabla-a.color-acento-botones.w-100
              table.table-purple
                tr.text-center
                  th Infinitive / Infinitivo
                  th ING form / Forma ING
                tbody.text-center
                  tr.content
                    td to follow  
                    td following
                  tr.content
                    td to fix  
                    td fixing
                  tr.content
                    td to study
                    td studying
        p.text-center.fst-italic.fw-bold For example: 
        .row.justify-content-center.mb-5
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="My sister is <span class= r-2>studying</span> English and French. "
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-4  Mi hermana está 
              span.r-3 estudiando 
              | inglés y francés.
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="We think someone is <span class= r-2>following</span> us. "
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-4 Creemos que alguien nos está 
              span.r-3 siguiendo.
      .tarjeta.color-primario--borde.bg-azul-claro.border-2.p-4(titulo="Verbos que la última sílaba no tiene acento")
        h4
          span.r-3 Verbos que la última sílaba no tiene acento
        p.mb-4 Cuando un verbo tiene dos o más sílabas y la última sílaba NO está acentuada, NO se duplica la letra final antes de agregar -ing.
          br
          br
          |El verbo <em>“open”</em> (abrir) tiene dos sílabas: o-pen.
          br
          |Como se acentúa la primera sílaba (O-pen) y no la última sílaba (no decimos o-PEN), no se duplica la N final. De esta forma, solo se agrega -ing al final, convirtiéndose en <em>“opening”</em>.
        .row.justify-content-center.mb-4
          .col-lg-10
            .tabla-a.color-acento-botones.w-100
              table.table-purple
                tr.text-center
                  th Infinitive / Infinitivo
                  th ING form / Forma ING
                tbody.text-center
                  tr.content
                    td to listen
                    td  listening 
                  tr.content
                    td to visit 
                    td visiting
                  tr.content
                    td offering
                    td to offer
        p.text-center.fst-italic.fw-bold For example: 
        .row.justify-content-center.mb-5
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="We are <span class= r-2>visiting</span> the Egyptian museum. "
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-4 Estamos 
              span.r-3 visitando 
              | el museo egipcio.
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="Fabio is <span class= r-2>listening</span> to classical music. "
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-4 Fabio está 
              span.r-3 escuchando 
              | música clásica.
        .tarjeta.color-acento-contenido.bg-claro.p-5
          .row.justify-content-center
            .col-lg-3.col-8.mb-lg-0.mb-3
              img(data-aos='zoom-in-up')(src='@/assets/curso/temas/62.svg', alt='')
            .col-lg-9
              p.mb-0 El verbo <em>“kidnap”</em> (secuestrar) es una excepción a esta regla. La primera sílaba tiene el acento (KID-nap), pero en este verbo se duplica la P final.
                br
                span.r-3.fst-italic kidnap → kidnapping

      .tarjeta.color-primario--borde.bg-azul-claro.border-2.p-4(titulo="C+V+C con la última sílaba acentuada ")
        h4
          span.r-3 C+V+C con la última sílaba acentuada 
        p.mb-4 A un verbo se le duplica la consonante final y se le agrega la terminación -ing cuando cumple con todas las siguientes condiciones:
          br
          br
          span.r-3 a) 
          | Tiene dos o más sílabas.
          br
          span.r-3 b) 
          | Termina en “consonante + vocal + consonante”.
          br
          span.r-3 c) 
          | La última sílaba está acentuada.
          br
          br
          |El verbo <em>“begin”</em> (comenzar) tiene dos sílabas: <em>be-gin.</em>
          br
          br
          |Como se acentúa la última sílaba (be-GIN) y no la primera sílaba (no decimos BE-gin), se duplica la N final.
          br
          br
          |Así que solo se le agrega una N adicional antes de la terminación -ing, convirtiéndose en <em>“beginning”</em>.
        .row.justify-content-center.mb-4
          .col-lg-10
            .tabla-a.color-acento-botones.w-100
              table.table-purple
                tr.text-center
                  th Infinitive / Infinitivo
                  th ING form / Forma ING
                tbody.text-center
                  tr.content
                    td to admit
                    td  admitting
                  tr.content
                    td to regret
                    td regretting
                  tr.content
                    td to submit 
                    td submitting
        p.text-center.fst-italic.fw-bold For example: 
        .row.justify-content-center.mb-5
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="Are you <span class= r-2>admitting</span> that you were wrong? "
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-4 ¿Estás 
              span.r-3 admitiendo 
              | que estabas equivocado?
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="I’m <span class= r-2>submitting</span> my application via email."
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-4 Estoy 
              span.r-3 presentando 
              | mi solicitud por correo electrónico.
      .tarjeta.color-primario--borde.bg-azul-claro.border-2.p-4(titulo="Verbos terminados en “consonante + vocal + L”")
        h4
          span.r-3 Verbos terminados en “consonante + vocal + L”
        p.mb-4 Hay dos formas de escribir un verbo terminado en “consonante + vocal + L”:
          br
          br
          span.r-3 1. 
          | En inglés británico (British English) → se duplica la L final.
          br
          span.r-3 2. 
          | En inglés americano (American English) → NO se duplica la L final a menos que esté acentuada.
          br
          br
          |Se acentúa la primera sílaba del verbo “travel” (viajar): TRA-vel.
          br
          |Se acentúa la última sílaba del verbo “control” (controlar): con-TROL.
        .row.justify-content-center.mb-4
          .col-lg-10
            .tabla-a.color-acento-botones.w-100
              table.table-purple
                tr.text-center
                  th Infinitive / Infinitivo 
                  th ING form / Forma ING
                  th ING form (American English) / Forma ING (inglés americano)
                tbody.text-center
                  tr.content
                    td  to equal 
                    td  equalling
                    td  equaling
                  tr.content
                    td  to travel
                    td travelling
                    td traveling
                  tr.content
                    td  to control
                    td controlling
                    td controlling*
        p Observe cómo hay una doble L en “controlling” en inglés americano. Eso es porque se acentúa la última sílaba del verbo controlar: con-<b>TROL.</b>
        p.text-center.fst-italic.fw-bold For example: 
        .row.justify-content-center.mb-5
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="We are <span class= r-2>traveling</span> around Colombia. "
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-4 Estamos 
              span.r-3 viajando 
              | por Colombia.
          .col-lg-6
            TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="Rosa is <span class= r-2>controlling</span> her weight with exercise. "
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                    .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
            p.ms-4 Rosa está 
              span.r-3 controlando 
              | su peso con ejercicio.
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.fst-italic 2.3  Structures of the present continuous
    .contenedor-franja.mb-4
      .contenido
        .row.justify-content-center.align-items-end.mb-5
          .col-lg-4.col-8.mb-lg-0.mb-3: img(data-aos='zoom-in-up')(src='@/assets/curso/temas/63.png', alt='')
          .col-lg-7
            .d-flex.justify-content-center.align-items-center.mb-5
              img(src='@/assets/curso/temas/64.svg', alt='' style='width: 85px').me-4
              p.mb-0 En el presente continuo, el verbo principal, terminado en -ing, es el que indica la acción que se está realizando. Este verbo no varía y va a ser el mismo, sin importar quién es el sujeto que está realizando la acción.
            .text-white.p-lg-0.px-2
              p Adicionalmente, el verbo to be, en este tiempo verbal, va a hacer las veces de auxiliar y varía dependiendo de quién esté realizando la acción; por ende, es importante fijarse en el sujeto para poder conjugar correctamente el verbo to be.
                br
                br
                |Revisemos el tiempo presente continuo y la conjugación en sus tres formas:
      .franja
    TabsC.color-secundario
      .tarjeta.color-acento-contenido.bg-claro.rounded-0.p-5(titulo="Afirmativa")
        .row.justify-content-center.align-items-start.mb-5
          .col-lg-4.col-8.mb-lg-0.mb-3: img(data-aos='zoom-in-up')(src='@/assets/curso/temas/65.jpg', alt='')
          .col-lg-8
            h5
              span.r-2 Afirmativa
            p 
              span.r-3 Sujeto + 
              span.r-2 verbo to be 
              span.r-3 + 
              span.r-1 verbo principal -ing 
              span.r-3 + 
              | <b>complemento</b> 
            .row.justify-content-center.mb-2
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="I am drinking water."
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="It is drinking water."
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
            .row.justify-content-center.mb-2
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="You are drinking water."
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="We are drinking water."
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
            .row.justify-content-center.mb-2
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="He is drinking water."
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="You are drinking water."
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
            .row.justify-content-center.mb-2
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="She is drinking water."
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="They are drinking water."
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
            p.mb-3 Recuerde que se puede contraer el sujeto con el verbo to be:
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-12
                .tabla-a.color-acento-botones.mb-5
                  table.table-red
                  
                    tbody
                      tr
                        td - I am → I’m
                        td - You are → You’re  
                      tr
                        td - He is → He’s
                        td - We are → We’re
                      tr
                        td - She is → She’s
                        td - You are → You’re
                      tr
                        td - It is → It’s
                        td - They are → They’re
      .tarjeta.color-acento-contenido.bg-claro.rounded-0.p-5(titulo="Negativa")
        .row.justify-content-center.align-items-start.mb-5
          .col-lg-4.col-8.mb-lg-0.mb-3: img(data-aos='zoom-in-up')(src='@/assets/curso/temas/66.jpg', alt='')
          .col-lg-8
            h5
              span.r-2 Negativa
            p 
              span.r-3 Sujeto + 
              span.r-2 verbo to be 
              span.r-3 + not +
              span.r-1 verbo principal -ing 
              span.r-3 + 
              | <b>complemento</b> 
            .row.justify-content-center.mb-2
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="I am not drinking water."
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="It is not drinking water."
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )        
            .row.justify-content-center.mb-2
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="You are not drinking water."
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="We are not drinking water."
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )        
            .row.justify-content-center.mb-2
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="He is not drinking water."
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="You are not drinking water."
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )        
            .row.justify-content-center.mb-2
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="She is not drinking water."
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="They are not drinking water."
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )   
            p.mb-3 Se puede contraer el verbo to be con la partícula de negación <b>“not”:</b>

              br
              br
              |<b>Am not</b> → X En este caso, el verbo to be no se puede contraer con <b>“not”.</b>
              br
              |<b>Is not → Isn’t</b>
              br
              |<b>Are not → Aren’t</b> 
      .tarjeta.color-acento-contenido.bg-claro.rounded-0.p-5(titulo="Interrogativa")
        .row.justify-content-center.align-items-start.mb-5
          .col-lg-4.col-8.mb-lg-0.mb-3: img(data-aos='zoom-in-up')(src='@/assets/curso/temas/65.jpg', alt='')
          .col-lg-8
            h5
              span.r-2 Interrogativa
            p 
              span.r-2 Verbo to be  
              span.r-3 + sujeto +
              span.r-1 verbo principal -ing
              span.r-3 + 
              span.fw-bold complemento 
              span.r-3 + 
              span.fw-bold ?
              | <b>complemento</b> 
            .row.justify-content-center.mb-2
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="Am I drinking water?"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="Is it drinking water?"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )  
            .row.justify-content-center.mb-2
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="Are you drinking water?"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="Are we drinking water?"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )  
            .row.justify-content-center.mb-2
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="Is he drinking water?"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="Are you drinking water?"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )  
            .row.justify-content-center.mb-2
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="Is she drinking water?"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="Are they drinking water?"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )  
            p.mb-4 Cuando se da una respuesta corta a una pregunta, es normal mencionar el verbo auxiliar to be, pero no el verbo principal -ing.
            p.fw-bold.fst-italic For example: 
            .row.justify-content-center.mb-2
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="Are you studying engineering?"
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                p.ms-4 ¿Estás estudiando ingeniería?
                  br
                  br
                  |Posibles respuestas: 
                  br
                  |<b>Yes, I am. → Sí.</b>
                  br
                  |<b>No, I’m not. → No.</b>
              .col-lg-5
                TarjetaAudio.color-acento-contenido.mb-3.bg-white(
                    texto="Is Susana working at the bookstore? "
                    :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  ) 
                p.ms-4 ¿Susana está trabajando en la librería?
                  br
                  br
                  | Posibles respuestas:
                  br
                  |<b> - Yes, she is. → Sí.</b>
                  br
                  |- <b>No, she isn’t. → No.</b> 
          p
            span.r-3 En el caso de respuestas cortas, como la respuesta afirmativa “Yes, she is”, NO se pueden contraer el sujeto y el verbo to be. “Yes, she’s” es incorrecto X 
    Separador
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.fst-italic 2.4  Stative verbs
    p.mb-4 En algunos verbos, su naturaleza o significado les 
      span.f-2 impide conjugarse en presente continuo en el idioma inglés, 
      | por lo que no suelen presentarse con terminación -ing. Estos verbos son conocidos como “stative verbs”, (también llamados verbos estativos, verbos estáticos o verbos “de estado”) y estos señalan estados emocionales o mentales, sensaciones, comunicación y otros.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 3
      span Stative verbs
    .tabla-a.color-acento-botones.mb-5
      table.tabla-morada-2
        tr
          th Thoughts and opinions / <br>Pensamientos y opiniones 
          th Feelings and emotions / <br>Sentimientos y emociones
          th Senses and perceptions /<br>Sentidos y percepciones
          th Possession and measurements / <br>Posesión y medidas
        tbody.text-center
          tr
            td agree 
            td dislike
            td appear
            td belong
          tr
            td believe
            td hate
            td be
            td have
          tr
            td doubt
            td like
            td feel
            td measure
          tr
            td guess
            td love
            td hear
            td own
          tr
            td imagine
            td prefer
            td look
            td possess
          tr
            td know
            td want
            td see
            td weigh
          tr
            td mean
            td wish
            td seem
            td 
          tr
            td recognize 
            td 
            td smell
            td 
          tr
            td remember
            td 
            td taste
            td 
          tr
            td suspect
            td 
            td 
            td 
          tr
            td think
            td 
            td 
            td 
          tr
            td understand
            td 
            td 
            td 
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4.col-8: img(src='@/assets/curso/temas/67.png', alt='')
      .col-lg-4
        p Para verificar el significado y pronunciación, puede hacer uso de herramientas en línea, como
        .row.justify-content-center.mb-3
          .col-lg-6
            a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <b>Enlace web.</b> <br> Linguee 
          .col-lg-6
            a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p <b>Enlace web.</b> <br> Wordreference
        p.mb-0 que le permiten escuchar, definir y apropiar vocabulario en inglés.
    .row.justify-content-center.mb-5
      .col-lg-8.mb-lg-0.mb-3
        p De acuerdo con lo anterior, en estos casos se usa un tiempo simple en lugar de uno continuo.
          br
          br
          span.fst-italic.fw-bold For example:
        .tarjeta.rounded-0.p-4.mb-4.color-primario.bg-claro
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-lg-0.mb-3
              p.mb-0 I understand you. ✔
                br 
                | Te entiendo. (tiempo presente simple)

            .col-lg-6  
              p.mb-0 I am understanding you. X 
                br
                |Te estoy entendiendo. (tiempo presente continuo)
        .tarjeta.rounded-0.p-4.mb-4.bg-claro2
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-lg-0.mb-3
              p.mb-0 This steak tastes delicious. ✔ 
                br
                |Este bistec sabe delicioso.  
            .col-lg-6  
              p.mb-0 This steak is tasting delicious. X 
                br
                |Este bistec está sabiendo delicioso.
        .tarjeta.color-acento-contenido.bg-claro.p-5.rounded-0
          .row.justify-content-center
            .col-lg-3.col-8.mb-lg-0.mb-3
              img(data-aos='zoom-in-up')(src='@/assets/curso/temas/62.svg', alt='')
            .col-lg-9
              p.mb-0 Hay verbos que pueden hacer referencia a estados o acciones, según el contexto. En estos casos especiales, la conjugación en presente continuo depende del significado del verbo en esa oración en particular.
      .col-lg-4.col-8: img(src='@/assets/curso/temas/68.jpg', alt='')
    .bg-claro1.p-5.margin-n
      p.fw-bold.fst-italic.text-center For example: 
      .row.justify-content-center.mb-3
        .col-lg-3.mb-lg-0.mb-3
          img(src='@/assets/curso/temas/69.svg', alt='').mb-4
          TarjetaAudio.color-acento-contenido.mb-3.bg-white(
              texto="She has an old house. "
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          p.ms-4 Ella tiene una casa antigua.
            br
            |<b>(estado – posesión)</b>
        .col-lg-3.mb-lg-0.mb-3
          img(src='@/assets/curso/temas/70.svg', alt='').mb-4
          TarjetaAudio.color-acento-contenido.mb-3.bg-white(
              texto="Jonas is having a small break."
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          p.ms-4 Jonas está teniendo un pequeño descanso.
            br
            |<b>(acción: tener un descanso es una actividad)</b>
        .col-lg-3.mb-lg-0.mb-3
          img(src='@/assets/curso/temas/71.svg', alt='').mb-4
          TarjetaAudio.color-acento-contenido.mb-3.bg-white(
              texto=" Does he see any issues with that?"
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          p.ms-4 ¿Él ve algún problema con eso? 
            br
            |<b>(estado – opinión)</b>
        .col-lg-3.mb-lg-0.mb-3
          img(src='@/assets/curso/temas/72.svg', alt='').mb-4
          TarjetaAudio.color-acento-contenido.mb-3.bg-white(
              texto="We’re seeing Carlos tomorrow"
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          p.ms-4 Nos vemos con Carlos mañana.
            br
            |<b>(acción - nos encontraremos con él)</b>
            br
            br
            |* En este caso, por ser un plan a futuro, en inglés se usa el presente continuo y en español el presente simple.
      .row
        .col-lg-3.mb-lg-0.mb-3
          img(src='@/assets/curso/temas/73.svg', alt='').mb-4
          TarjetaAudio.color-acento-contenido.mb-3.bg-white(
              texto=" These empanadas taste delicious. "
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          p.ms-4 Estas empanadas saben delicioso. 
            br
            |<b>(estado – nuestra percepción de las empanadas)</b>
        .col-lg-3
          img(src='@/assets/curso/temas/74.svg', alt='').mb-4
          TarjetaAudio.color-acento-contenido.mb-3.bg-white(
              texto="The chef is tasting the dessert. "
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
          p.ms-4 El chef está probando el postre. 
            br
            |<b>(acción – probar el postre es una actividad)</b>









</template>

<script>
export default {
  name: 'Tema2',
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
.contenedor-franja
  position: relative
  .contenido
    position: inherit
    z-index: 1
  .franja
    position: absolute
    background-color: $color-secundario
    height: 159px
    width: 100%
    bottom: 0
    left: 0
    z-index: 0
.tabla-morada-2
  th,td
    border: 2px solid $color-secundario
  th
    background-color: $color-secundario
    color: $white
.bg-claro1
  background-color: #e1e8ff
.bg-claro2
  background-color: #c4d1ff
</style>
