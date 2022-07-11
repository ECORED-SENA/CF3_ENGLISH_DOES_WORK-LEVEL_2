<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 3
      h1.fst-italic Prepositions of time and applications of “when”
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
    Separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.fst-italic 3.1  When to use at, on, in?
    ImagenInfograficaB.color-acento-botones.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/76.svg', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center(x="76%" y="14%" tooltip="" numero="+")
        .col-lg-3: img.d-none.d-lg-block(src='@/assets/curso/temas/77.svg', alt='')
        .col-lg-9
          h5
            span.r-3 AT - USO
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6 
              h5 ¿Con qué se usa? 
            .col-lg-6 
              h5 Contexto
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6 
              h5.mb-3 Horas
            .col-lg-6 
              .d-flex.aling-items-center
                img(src='@/assets/curso/temas/78.svg', alt='' style='width: 64px').me-3
                p.mb-0 9 p.m. / 7.45 / 6 a.m.
                  br
                  |(A las) nueve de la noche / 7.45 / 6 de la mañana
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6 
              h5.mb-3 Fiestas y festivales sin la palabra “day”
            .col-lg-6 
              .d-flex.aling-items-center
                img(src='@/assets/curso/temas/93.svg', alt='' style='width: 64px').me-3
                p.mb-0 Christmas / Easter / Diwali / Hanukkah <br> (En) Navidad / Pascua / Diwali / Janucá
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6 
              h5.mb-3 Momentos concretos del día
            .col-lg-6 
              .d-flex.aling-items-center
                img(src='@/assets/curso/temas/80.svg', alt='' style='width: 64px').me-3
                p.mb-0 Night / dinnertime / lunchtime <br> (En la / el - Por la / el) noche / cena / almuerzo
      .row.justify-content-center.align-items-center.g-5(x="76%" y="28%" tooltip="" numero="+")
        .col-lg-3: img.d-none.d-lg-block(src='@/assets/curso/temas/77.svg', alt='')
        .col-lg-6
          h5
            span.r-3 AT - Example
          p.fw-bold.text-white Horas
          .d-flex.aling-items-center.mb-5
            img(src='@/assets/curso/temas/80.svg', alt='' style='width: 64px').me-3
            .sonido
              TarjetaAudio.color-acento-contenido.bg-white(
                    texto="She eats breakfast at 8:00 am."
                    :audio="require('@/assets/curso/audio/tema3/1.mp3')"
                  )
              p.ms-3 Ella desayuna a las 8:00 am.
          p.fw-bold.text-white Fiestas y festivales sin la palabra “day”
          .d-flex.aling-items-center.mb-5
            img(src='@/assets/curso/temas/80.svg', alt='' style='width: 64px').me-3
            .sonido
              TarjetaAudio.color-acento-contenido.bg-white(
                    texto="We travel to Colombia at Christmas."
                    :audio="require('@/assets/curso/audio/tema3/2.mp3')"
                  )
              p.ms-3  Nosotras viajamos a Colombia en navidad.
          p.fw-bold.text-white Momentos concretos del día
          .d-flex.aling-items-center.mb-5
            img(src='@/assets/curso/temas/80.svg', alt='' style='width: 64px').me-3
            .sonido
              TarjetaAudio.color-acento-contenido.bg-white(
                    texto="I watch tv at night."
                    :audio="require('@/assets/curso/audio/tema3/3.mp3')"
                  )
              p.ms-3 Yo miro televisión por la noche. 
      .row.justify-content-center.align-items-center(x="76%" y="45%" tooltip="" numero="+")
        .col-lg-3: img.d-none.d-lg-block(src='@/assets/curso/temas/106.svg', alt='')
        .col-lg-9
          h5
            span.r-3 ON - USO
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6 
              h5 ¿Con qué se usa?
            .col-lg-6 
              h5 Contexto
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6 
              h5.mb-3 Días de la semana
            .col-lg-6 
              .d-flex.aling-items-center
                img(src='@/assets/curso/temas/84.svg', alt='' style='width: 64px').me-3
                p.mb-0 Wednesday / Saturday <br> El miércoles / El sábado
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6 
              h5.mb-3 Días especiales con la palabra “day”
            .col-lg-6 
              .d-flex.aling-items-center
                img(src='@/assets/curso/temas/85.svg', alt='' style='width: 64px').me-3
                p.mb-0 Labor day (American English) - Labour day (British English)  / Christmas Day / New year’s Day
                  br
                  |Día del Trabajo / El día de Navidad / El día de Año Nuevo
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6 
              h5.mb-3 Fechas concretas
            .col-lg-6 
              .d-flex.aling-items-center
                img(src='@/assets/curso/temas/86.svg', alt='' style='width: 64px').me-3
                p.mb-0 May 1st / your birthday / March 8th
                  br
                  |El 1 de mayo / El día de tu cumpleaños / El 8 de marzo
      .row.justify-content-center.align-items-center.g-5(x="76%" y="58%" tooltip="" numero="+")
        .col-lg-3: img.d-none.d-lg-block(src='@/assets/curso/temas/106.svg', alt='')
        .col-lg-6
          h5
            span.r-3 ON - Example
          p.fw-bold.text-white Días de la semana
          .d-flex.aling-items-center.mb-5
            img(src='@/assets/curso/temas/87.svg', alt='' style='width: 64px').me-3
            .sonido
              TarjetaAudio.color-acento-contenido.bg-white(
                    texto="Diana has a job interview on Monday."
                    :audio="require('@/assets/curso/audio/tema3/4.mp3')"
                  )
              p.ms-3 Diana tiene una entrevista de trabajo el lunes.
          p.fw-bold.text-white Días especiales con la palabra “day”
          .d-flex.aling-items-center.mb-5
            img(src='@/assets/curso/temas/88.svg', alt='' style='width: 64px').me-3
            .sonido
              TarjetaAudio.color-acento-contenido.bg-white(
                    texto="We are going to rest on Labor day."
                    :audio="require('@/assets/curso/audio/tema3/5.mp3')"
                  )
              p.ms-3 Nosotros vamos a descansar el día del trabajo.
          p.fw-bold.text-white Fechas concretas
          .d-flex.aling-items-center.mb-5
            img(src='@/assets/curso/temas/89.svg', alt='' style='width: 64px').me-3
            .sonido
              TarjetaAudio.color-acento-contenido.bg-white(
                    texto="They have a test on June 20."
                    :audio="require('@/assets/curso/audio/tema3/6.mp3')"
                  )
              p.ms-3 Ellos tienen un examen el 20 de junio.
      .row.justify-content-center(x="76%" y="73%" tooltip="" numero="+")
        .col-lg-3: img.d-none.d-lg-block(src='@/assets/curso/temas/107.svg', alt='')
        .col-lg-9
          h5
            span.r-3 IN - USO
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6 
              h5 ¿Con qué se usa?
            .col-lg-6 
              h5 Contexto
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6 
              h5.mb-3 Número de semanas / meses / años
            .col-lg-6 
              .d-flex.aling-items-center
                img(src='@/assets/curso/temas/90.svg', alt='' style='width: 64px').me-3
                p.mb-0 5 weeks / 3 years / a month’s time
                  br
                  |(Dentro de) 5 semanas / 3 años / un mes
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6 
              h5.mb-3 Partes del día 
            .col-lg-6 
              .d-flex.aling-items-center
                img(src='@/assets/curso/temas/91.svg', alt='' style='width: 64px').me-3
                p.mb-0 The morning / the afternoon / the evening <br> (Por) la mañana / la tarde / la tarde/noche
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6 
              h5.mb-3 Meses
            .col-lg-6 
              .d-flex.aling-items-center
                img(src='@/assets/curso/temas/92.svg', alt='' style='width: 64px').me-3
                p.mb-0 May / November <br> (En) mayo / noviembre
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6 
              h5.mb-3 Estaciones del año
            .col-lg-6 
              .d-flex.aling-items-center
                img(src='@/assets/curso/temas/93.svg', alt='' style='width: 64px').me-3
                p.mb-0 Summer / winter / autumn / spring <br> (Durante / En) el verano / el invierno / el otoño / la primavera
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6 
              h5.mb-3 Años
            .col-lg-6 
              .d-flex.aling-items-center
                img(src='@/assets/curso/temas/94.svg', alt='' style='width: 64px').me-3
                p.mb-0 1963 / 2015 <br> (En) 1963 / 2015
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6 
              h5.mb-3 Décadas
            .col-lg-6 
              .d-flex.aling-items-center
                img(src='@/assets/curso/temas/96.svg', alt='' style='width: 64px').me-3
                p.mb-0 The 60s / the 1890s / the 2000s <br> (En / Durante) los años 60 / la década de 1890 / la década del 2000
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-6 
              h5.mb-3 Siglos
            .col-lg-6 
              .d-flex.aling-items-center
                img(src='@/assets/curso/temas/98.svg', alt='' style='width: 64px').me-3
                p.mb-0 The 21th centur <br> (En) el siglo XXI
      div(x="76%" y="87%" tooltip="" numero="+")
        h5
          span.r-3 In - Example
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-6
            p.fw-bold.text-white Número de semanas / meses / años
            .d-flex.aling-items-start.mb-5
              img(src='@/assets/curso/temas/99.svg', alt='' style='width: 64px').me-3
              .sonido.mb-3
                TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="They travel to Europe in 6 weeks."
                      :audio="require('@/assets/curso/audio/tema3/7.mp3')"
                    )
                p.ms-3  Ellos viajan a Europa en 6 semanas.
          .col-lg-6
            p.fw-bold.text-white Años
            .d-flex.aling-items-start.mb-5
              img(src='@/assets/curso/temas/100.svg', alt='' style='width: 64px').me-3
              .sonido.mb-3
                TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="I graduated in 2006."
                      :audio="require('@/assets/curso/audio/tema3/8.mp3')"
                    )
                p.ms-3 Yo me gradué en 2006.
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-6
            p.fw-bold.text-white Partes del día 
            .d-flex.aling-items-start.mb-5
              img(src='@/assets/curso/temas/101.svg', alt='' style='width: 64px').me-3
              .sonido.mb-3
                TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Oscar drinks coffee in the morning."
                      :audio="require('@/assets/curso/audio/tema3/9.mp3')"
                    )
                p.ms-3 Oscar bebe café por la mañana.
          .col-lg-6
            p.fw-bold.text-white Décadas
            .d-flex.aling-items-start.mb-5
              img(src='@/assets/curso/temas/102.svg', alt='' style='width: 64px').me-3
              .sonido.mb-3
                TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Pop was the most popular music genre in the 80s."
                      :audio="require('@/assets/curso/audio/tema3/10.mp3')"
                    )
                p.ms-3 El pop fue el género musical más popular en los años 80.
        .row.justify-content-center.align-items-center.mb-3
          .col-lg-6
            p.fw-bold.text-white Meses
            .d-flex.aling-items-start.mb-5
              img(src='@/assets/curso/temas/103.svg', alt='' style='width: 64px').me-3
              .sonido.mb-3
                TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="My grandma plants vegetables in April."
                      :audio="require('@/assets/curso/audio/tema3/11.mp3')"
                    )
                p.ms-3 Mi abuela planta verduras en abril.
          .col-lg-6
            p.fw-bold.text-white Siglos
            .d-flex.aling-items-start.mb-5
              img(src='@/assets/curso/temas/104.svg', alt='' style='width: 64px').me-3
              .sonido.mb-3
                TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="In the 21st century, there are many scientific advances."
                      :audio="require('@/assets/curso/audio/tema3/12.mp3')"
                    )
                p.ms-3 En el siglo XXI, hay muchos avances científicos.
        .row.justify-content-center.mb-3
          .col-lg-6
            p.fw-bold.text-white Estaciones del año
            .d-flex.align-items-start.mb-5
              img(src='@/assets/curso/temas/105.svg', alt='' style='width: 64px').me-3
              .sonido.mb-3
                TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Sandra always goes to the beach in the summer."
                      :audio="require('@/assets/curso/audio/tema3/13.mp3')"
                    )
                p.ms-3 Sandra siempre va a la playa en verano.
    p.mb-5(data-aos='fade-right') Es importante tener en cuenta que, de acuerdo con el contexto, se deben tener en cuenta algunas advertencias:
    TabsC.color-secundario
      .tarjeta.color-acento-contenido.bg-claro.rounded-0.p-5(titulo="Warning #1")
        .row.align-items-center.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/109.png', alt='')
            //- img(src='@/assets/curso/temas/50.png', alt='')
          .col-md-8
            h4
              span.r-1 Warning #1
            p Comparar estos dos casos:
            .row.justify-content-start.mb-5
              .col-lg-3.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/108.svg', alt='')
              .col-lg-9
                p <em>Independence day in Colombia is in July.</em>
                  br
                  |El día de la independencia en Colombia es en julio.
                  br
                  span.r-3 (No se menciona el día, solo el mes)
                p <em>Independence day in Colombia is on July 20.</em>
                  br
                  |El día de la independencia en Colombia es el 20 de julio.
                  br
                  span.r-3 (Se menciona el día - el orden no es importante)
      .tarjeta.color-acento-contenido.bg-claro.rounded-0.p-5(titulo="Warning #2")
        .row.align-items-center.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/110.png', alt='')
          .col-md-8
            h4
              span.r-1 Warning #2
            p No se usa at, on, in o the con las siguientes expresiones:
              br
              br
              span.r-3.fst-italic Today, tomorrow, yesterday, this morning, tonight, last, next, every.
      .tarjeta.color-acento-contenido.bg-claro.rounded-0.p-5(titulo="Warning #3")
        .row.align-items-center.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/111.png', alt='')
          .col-md-8
            h4
              span.r-1 Warning #3
            p A veces, escuchará “at the weekend” y, a veces, “on the weekend”. Ambas formas son correctas.
              br
              br
              span.fw-bold.fst-italic For example:
            .bandera.d-flex.aling-items-center.mb-3
              img(src='@/assets/curso/temas/usa.svg', alt='' style='width: 20px').me-3
              p.mb-0.fst-italic What did you do on the weekend? 
                span.r-2 ✔ 
                |<b>(American English)</b>
            .bandera.d-flex.aling-items-center.mb-3
              img(src='@/assets/curso/temas/bri.svg', alt='' style='width: 20px').me-3
              p.mb-0.fst-italic What did you do at the weekend? 
                span.r-2 ✔ 
                |<b>(British English)</b>
            p.ms-3.fw-bold ¿Qué hiciste el fin de semana? 
      .tarjeta.color-acento-contenido.bg-claro.rounded-0.p-5(titulo="Warning #4")
        .row.align-items-center.justify-content-center
          .col-md-4.mb-4.mb-md-0
            img(src='@/assets/curso/temas/50.png', alt='')
          .col-md-8
            h4
              span.r-1 Warning #4
            p Se debe recordar que, a diferencia del idioma español, en inglés, los meses del año y los días de la semana se escriben empezando con la primera letra en mayúscula, sin importar si van al principio, en la mitad o al final de la oración.
              br
              br
              span.fw-bold.fst-italic (Monday, Friday, July, September, etc). 
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2.fst-italic 3.2  Other prepositions of time
    p.mb-5(data-aos='fade-right') Hay otras preposiciones de tiempo que hacen referencia a cuándo comienza o termina una acción, a un período o punto en el tiempo que marca un cambio, a la duración de algún evento, etc.
      br
      br
      |Algunas de las preposiciones de tiempo más usadas son:
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-5
        .card-title.p-5.h-100
          .card-title__div
            .card-title__div-title.p-3.m-auto
              h6.mb-0 Before → antes
          img(src='@/assets/curso/temas/112.svg', alt='' style='width: 173px').m-auto
          TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="I get up every day before dawn."
            :audio="require('@/assets/curso/audio/tema3/14.mp3')"
          )
          p Me levanto todos los días antes del amanecer.
      .col-lg-4.mb-lg-0.mb-5
        .card-title.p-5.h-100
          .card-title__div
            .card-title__div-title.p-3.m-auto
              h6.mb-0 After → después
          img(src='@/assets/curso/temas/113.svg', alt='' style='width: 173px').m-auto
          TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="Simon sometimes comes after lunch."
            :audio="require('@/assets/curso/audio/tema3/15.mp3')"
          )
          p Simón viene a veces después del almuerzo.
      .col-lg-4.mb-lg-0.mb-5
        .card-title.p-5.h-100
          .card-title__div
            .card-title__div-title.p-3.m-auto
              h6.mb-0 Until / till → hasta
          img(src='@/assets/curso/temas/114.svg', alt='' style='width: 173px').m-auto
          TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="The dentist is not available until August."
            :audio="require('@/assets/curso/audio/tema3/16.mp3')"
          )
          p El dentista no está disponible hasta agosto.
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-5
        .card-title.p-5.h-100
          .card-title__div
            .card-title__div-title.p-3.m-auto
              h6.mb-0 Since → desde
          img(src='@/assets/curso/temas/115.svg', alt='' style='width: 173px').m-auto
          TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto=" We are friends since we met 2 years ago."
            :audio="require('@/assets/curso/audio/tema3/17.mp3')"
          )
          p Somos amigos desde que nos conocimos hace 2 años.
      .col-lg-4.mb-lg-0.mb-5
        .card-title.p-5.h-100
          .card-title__div
            .card-title__div-title.p-3.m-auto
              h6.mb-0 During → durante
          img(src='@/assets/curso/temas/116.svg', alt='' style='width: 173px').m-auto
          TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="Power usually goes out during snow storms."
            :audio="require('@/assets/curso/audio/tema3/18.mp3')"
          )
          p La energía generalmente se va durante las tormentas de nieve.
      .col-lg-4.mb-lg-0.mb-5
        .card-title.p-5.h-100
          .card-title__div
            .card-title__div-title.p-3.m-auto
              h6.mb-0 For → por
          img(src='@/assets/curso/temas/117.svg', alt='' style='width: 173px').m-auto
          TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="I’m going to the gym for two hours."
            :audio="require('@/assets/curso/audio/tema3/19.mp3')"
          )
          p  Voy a ir al gimnasio por dos horas.
    .row.justify-content-center.mb-5
      .col-lg-4.mb-lg-0.mb-5
        .card-title.p-5.h-100
          .card-title__div
            .card-title__div-title.p-3.m-auto
              h6.mb-0 From… To… → desde / de… hasta…
          img(src='@/assets/curso/temas/118.svg', alt='' style='width: 173px').m-auto
          TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="Julia works from 6 a.m. to 4 p.m."
            :audio="require('@/assets/curso/audio/tema3/20.mp3')"
          )
          p Julia trabaja de 6 a.m. a 4 p.m.
      .col-lg-4.mb-lg-0.mb-5
        .card-title.p-5.h-100
          .card-title__div
            .card-title__div-title.p-3.m-auto
              h6.mb-0 By → a (alrededor de / aproximadamente a)
          img(src='@/assets/curso/temas/119.svg', alt='' style='width: 173px').m-auto
          TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="Linda promised to be back by two o’clock."
            :audio="require('@/assets/curso/audio/tema3/21.mp3')"
          )
          p Linda prometió estar de vuelta a las dos.
      .col-lg-4.mb-lg-0.mb-5
        .card-title.p-5.h-100
          .card-title__div
            .card-title__div-title.p-3.m-auto
              h6.mb-0 Up to → hasta
          img(src='@/assets/curso/temas/120.svg', alt='' style='width: 173px').m-auto
          //TODO FALTA AUDIO 
          TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="Up to now she is still quiet."
            :audio="require('@/assets/curso/audio/tema3/1.mp3')"
          )
          p Hasta ahora sigue callada.
    .row.justify-content-start.mb-5
      .col-lg-4.mb-lg-0.mb-5
        .card-title.p-5.h-100.pb-0
          .card-title__div
            .card-title__div-title.p-3.m-auto
              h6.mb-0 Between… and… → entre… y…
          img(src='@/assets/curso/temas/121.svg', alt='' style='width: 173px').m-auto
          TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="I lived in Barranquilla between 2000 and 2008."
            :audio="require('@/assets/curso/audio/tema3/23.mp3')"
          )
          p Viví en Barranquilla entre 2000 y 2008.
      .col-lg-4.mb-lg-0.mb-5
        .card-title.p-5.h-100.pb-0
          .card-title__div
            .card-title__div-title.p-3.m-auto
              h6.mb-0 Within → en / dentro de
          img(src='@/assets/curso/temas/122.svg', alt='' style='width: 173px').m-auto
          TarjetaAudio.color-acento-contenido.bg-white.mb-3(
            texto="You will receive the notification within 5 business days."
            :audio="require('@/assets/curso/audio/tema3/24.mp3')"
          )
          p Usted recibirá la notificación dentro de 5 días hábiles.
    .tarjeta.rounded-0.bg-claro.color-primario.p-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.col-8.mb-lg-0.mb-3: img(src='@/assets/curso/temas/123.png', alt='')
        .col-lg-8 
          p.mb-0 ¿Preposiciones, conjunciones o adverbios?
            br
            br
            |Algunas palabras que son preposiciones de tiempo también funcionan como conjunciones (las más comunes son <b><em>after, as, before, since, until</em></b>) o pertenecen a la categoría gramatical de los adverbios (incluyendo <b><em>about, across, around, before, beyond, in, inside, near, opposite, outside, past, round, through, under, up, within)</em></b>.
            br
            br
            |No olvide hacer uso de los diccionarios propuestos, para profundizar en el significado de cada una.
    Separador
    .tarjeta.color-primario.p-4.px-5.mb-3
      SlyderA(tipo='b')
        .row.justify-content-center.align-items-end
          .col-md-3.mb-4.mb-md-0
            img(data-aos='zoom-in-up')(src='@/assets/curso/temas/124.png', alt='')
          .col-md-9.mb-4.mb-md-0
            .tarjeta.bg-white.p-5
              h5
                span.r-3 “When” como pronombre interrogativo
              p.mb-2 El uso más común de <b><em>“when”</em></b> es para hacer preguntas relacionadas con el tiempo.
              h5.fst-italic For example
              .row.justify-content-center.align-items-center
                .col-lg-5.mb-lg-0.mb-3
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="When is he planning to go?"
                    :audio="require('@/assets/curso/audio/tema3/25.mp3')"
                  )
                  p.ms-3 ¿Cuándo planea él ir?
                .col-lg-7
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="When will Sofia arrive in Bucaramanga?"
                    :audio="require('@/assets/curso/audio/tema3/26.mp3')"
                  )
                  p.ms-3 ¿Cuándo llegará Sofía a Bucaramanga?
        .row.justify-content-center.align-items-end
          .col-md-3.mb-4.mb-md-0
            img(data-aos='zoom-in-up')(src='@/assets/curso/temas/124.png', alt='')
          .col-md-9.mb-4.mb-md-0
            .tarjeta.bg-white.p-5
              h5
                span.r-3 “When” en oraciones y afirmaciones
              p.mb-2Cualquier enunciado que se refiera al tiempo puede tener <b><em>“when”</em></b>. Aquí <b><em>“when”</em></b> no es un pronombre interrogativo, sino que actúa como una conjunción.
              h5.fst-italic For example
              .row.justify-content-center.align-items-center
                .col-lg-7
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="When I was a little girl, I used to love teddy bears."
                    :audio="require('@/assets/curso/audio/tema3/27.mp3')"
                  )
                  p.ms-3 Cuando era una niña pequeña, me solían encantar los ositos de peluche.
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="They were having breakfast when the doorbell rang."
                    :audio="require('@/assets/curso/audio/tema3/28.mp3')"
                  )
                  p.ms-3 Ellos estaban desayunando cuando sonó el timbre.
                .col-lg-5.mb-lg-0.mb-3
                  img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/125.svg', alt='')
              p Se debe tener en cuenta que la oración puede comenzar con “when” y significa lo mismo incluso si se invierte el orden de las cláusulas y la ubicación de “when” cambia en la oración:
              .row.justify-content-center.mb-5
                .col-lg-8
                  // TODO audio 39
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="I used to love teddy bears when I was a little girl."
                      :audio="require('@/assets/curso/audio/tema3/39.mp3')"
                    )
                  p.ms-3 I used to love teddy bears when I was a little girl.
        .row.justify-content-center.align-items-end
          .col-md-3.mb-4.mb-md-0
            img(data-aos='zoom-in-up')(src='@/assets/curso/temas/124.png', alt='')
          .col-md-9.mb-4.mb-md-0
            .tarjeta.bg-white.p-5
              h5
                span.r-3 “When” en una oración que proyecta a futuro
              p.mb-2 En oraciones que se refieren al futuro, la cláusula después de <em><b>“when”</b></em> está en tiempo presente y no en tiempo futuro.
              h5.fst-italic For example
              .row.justify-content-center.align-items-center
                .col-lg-7.mb-lg-0.mb-3
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="Sara will be at the office when David gets home."
                    :audio="require('@/assets/curso/audio/tema3/30.mp3')"
                  )
                  p.ms-3 Sara estará en la oficina cuando David llegue a casa.         
                .col-lg-5.mb-lg-0.mb-3
                  p
                    span.text-red (y no “when David will get home” X)
              .row.justify-content-center.align-items-center
                .col-lg-7.mb-lg-0.mb-3
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="When I have more time, I will go to the cinema."
                    :audio="require('@/assets/curso/audio/tema3/31.mp3')"
                  )
                  p.ms-3 Cuando tenga más tiempo, iré al cine.  
                .col-lg-5.mb-lg-0.mb-3
                  p
                    span.text-red (y no “when I will have time” X)
        .row.justify-content-center.align-items-end
          .col-md-3.mb-4.mb-md-0
            img(data-aos='zoom-in-up')(src='@/assets/curso/temas/124.png', alt='')
          .col-md-9.mb-4.mb-md-0
            .tarjeta.bg-white.p-5
              h5
                span.r-3 “When” como adverbio
              p.mb-2 También como adverbio, “when” puede usarse para hacer preguntas. Pero está bajo un contexto diferente. “When” no significa necesariamente un período de tiempo, en este caso, puede significar “en qué circunstancias” o “condiciones”.
              h5.fst-italic For example
              .row.justify-content-center.align-items-center
                .col-lg-6.mb-lg-0.mb-3
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="When should you apologize to someone?"
                    :audio="require('@/assets/curso/audio/tema3/32.mp3')"
                  )
                  p.ms-3 ¿Cuándo deberías disculparte con alguien?     
                .col-lg-6.mb-lg-0.mb-3
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="When are they supposed to go to the doctor?"
                    :audio="require('@/assets/curso/audio/tema3/33.mp3')"
                  )
                  p.ms-3 ¿Cuándo se supone que ellos vayan al médico?
              h5
                span.r-2 * Estas preguntas también se pueden cambiar a afirmaciones:
              .row.justify-content-center.align-items-center
                .col-lg-6.mb-lg-0.mb-3
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="She did not specify when you should apologize to someone."
                    :audio="require('@/assets/curso/audio/tema3/34.mp3')"
                  )
                  p.ms-3 Ella no especificó cuándo debes disculparte con alguien.        
                .col-lg-6.mb-lg-0.mb-3
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="It is important to know when to go to the doctor."
                    :audio="require('@/assets/curso/audio/tema3/35.mp3')"
                  )
                  p.ms-3  Es importante saber cuándo acudir al médico.
        .row.justify-content-center.align-items-end
          .col-md-3.mb-4.mb-md-0
            img(data-aos='zoom-in-up')(src='@/assets/curso/temas/124.png', alt='')
          .col-md-9.mb-4.mb-md-0
            .tarjeta.bg-white.p-5
              h5
                span.r-3 Para presentar o señalar hechos generales
              p.mb-2 Cualquiera que sea el uso, todavía hay una referencia de tiempo de una u otra manera, ya que ‘when’ siempre debe usarse con respecto al tiempo.
              h5.fst-italic For example 
              .row.justify-content-center.mb-5
                .col-lg-6.mb-lg-0.mb-3
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="Food tastes best when it is hot."
                    :audio="require('@/assets/curso/audio/tema3/36.mp3')"
                  )
                  p.ms-3  La comida sabe mejor cuando está caliente.
                .col-lg-3: img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/126.svg', alt='')
        .row.justify-content-center.align-items-end
          .col-md-3.mb-4.mb-md-0
            img(data-aos='zoom-in-up')(src='@/assets/curso/temas/124.png', alt='')
          .col-md-9.mb-4.mb-md-0
            .tarjeta.bg-white.p-5
              h5
                span.r-3 Para indicar dos acciones simultáneas
              p.mb-2 En este caso, hay que tener en cuenta el uso de la conjunción “while”.
              h5.fst-italic For example 
              .row.justify-content-center.mb-5
                .col-lg-6.mb-lg-0.mb-3
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="When I drive my car, I always wear the seat belt."
                    :audio="require('@/assets/curso/audio/tema3/37.mp3')"
                  )
                  p.ms-3 Cuando conduzco mi coche, siempre uso el cinturón de seguridad.
                .col-lg-6.mb-lg-0.mb-3
                  TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                    texto="I always wear the seat belt while driving my car."
                    :audio="require('@/assets/curso/audio/tema3/38.mp3')"
                  )
                  p.ms-3 Siempre uso el cinturón de seguridad mientras conduzco mi automóvil.
              p.mb-3 Si bien en este caso no hay una gran diferencia en el mensaje que se transmite, hay una diferencia sutil en ambas declaraciones. Es mejor usar <em><b>“when”</b></em> para referirse a cosas que pasan durante un período de tiempo determinado, y <em><b>“while”</b></em> en oraciones que hablan de dos acciones que ocurren de manera simultánea.
    titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 Actividad didáctica
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/opcion-multiple.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 <em>At what time?</em> / ¿En qué momento?
        p.mb-4 Reforzar el uso de las preposiciones de tiempo de acuerdo con las oraciones de información sobre lo que sucede o en el momento en que se realiza una acción.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Opción múltiple, única respuesta.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad3/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece











</template>

<script>
export default {
  name: 'Tema3',
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
