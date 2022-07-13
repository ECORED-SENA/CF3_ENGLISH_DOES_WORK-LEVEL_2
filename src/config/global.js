export default {
  global: {
    componenteFormativo:
      '<em>These are my hobbies</em> <br> <span class=r-4>Estos son mis pasatiempos</span>',
    descripcionCurso:
      'En este componente, se explican temáticas para determinar y expresar la posesión de alguien sobre algo, la relación y vínculo entre personas, para hablar sobre actividades que se están llevando a cabo en este preciso instante, para señalar y determinar momentos en el tiempo con fechas y expresiones temporales, pasatiempos y hobbies.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/temas/flag.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/forms.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<em>Possessives - Whose is this?</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: '<em>Possessive adjectives</em>',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: '<em>Possessive pronouns</em>',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: '<em>Saxon genitive</em>',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>Present continuous and verbs ending in -ing.</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '<em>When is the present continuous used?</em>',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: '<em>-ing spelling rules</em>',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: '<em>Structures of the present continuous</em>',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: '<em>Stative verbs</em>',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Prepositions of time and applications of "when"</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: '<em>When to use at, on, in?</em>',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: '<em>Other prepositions of time</em>',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: '<em>When to use “when”?</em>',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: '<em>When things happen</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: '<em>Days of the week</em>',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: '<em>Dates</em>',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: '<em>Expresiones de tiempo</em>',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: '<em>This is my family</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: '<em>Miembros de la familia inmediata</em>',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: '<em>Miembros de la familia política</em>',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: '<em>Particularidades de los plurales</em>',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Pasatiempos y <em>hobbies</em>',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '<em>Possessives </em>',
      referencia: 'British Council. (s. f.). Possessives. LearnEnglish Kids. ',
      tipo: 'Ejercicios',
      link:
        'https://learnenglishkids.britishcouncil.org/grammar-practice/possessives',
    },
    {
      tema: '<em>Present continuous and verbs ending in -ing.</em>',
      referencia:
        'BBC. (s. f.). Unit 2: What to wear. Present Simple and Present Continuous. Learning English. ',
      tipo: 'Web',
      link:
        'https://www.bbc.co.uk/learningenglish/course/lower-intermediate/unit-2/session-2',
    },
    {
      tema: '<em>Present continuous and verbs ending in -ing.</em>',
      referencia:
        'British Council. (s.f.). Present continuous. LearnEnglish Teens. ',
      tipo: 'Web',
      link:
        'https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/present-continuous',
    },
    {
      tema: '<em>Prepositions of time and applications of "When"</em>',
      referencia:
        'British Council.  (s. f.). Prepositions of time. LearnEnglish Kids. ',
      tipo: 'Web',
      link:
        'https://learnenglishkids.britishcouncil.org/grammar-practice/prepositions-time',
    },
    {
      tema: '<em>Prepositions of time and applications of "When"</em>',
      referencia:
        'BBC World Service. (2007). Grammar Challenge. Time prepositions. Practice activities. ',
      tipo: 'PDF',
      descarga: '/downloads/documento1.pdf',
    },
  ],
  glosario: [
    {
      termino: '<em>Possessive adjectives</em>/Adjetivos posesivos',
      significado:
        'son adjetivos, como “my” o “her”, que muestran a quién o a qué pertenece o está conectado algo, es decir, especifican la propiedad de un elemento (expresado por un sustantivo) o, si el sustantivo al que se refiere a algo animado, para especificar una relación. Por ejemplo, "Mi casa es hermosa / My house is beautiful"',
    },
    {
      termino: '<em>Possessive pronouns</em> ',
      significado:
        'es un pronombre, como “mine”, “yours”, o “theirs”, que se usa para referirse a una cosa en particular que pertenece a alguien. Por ejemplo, "Esta casa es mía / This house is mine".',
    },
    {
      termino: '<em>Present continuous</em>/Presente continuo',
      significado:
        'también llamado presente progresivo (present progressive), es un tiempo verbal que hace referencia a acciones que se están llevando a cabo en este preciso instante. Se caracteriza por usar el verbo to be en su estructura como un auxiliar y por tener a un verbo principal con terminación -ING. Así, por ejemplo, en “She is swimming in the sea” / “Ella está nadando en el mar”).',
    },
    {
      termino: '<em>Saxon genitive</em>/Genitivo sajón',
      significado:
        'es el término tradicional utilizado para nombrar en el idioma inglés al sufijo posesivo ’s. También recibe otros nombres, como “Genitive Case” (Caso Genitivo) o “Possessive Case” (Caso Posesivo). Por ejemplo, "Soy la hija de Pedro / I am Pedro&#39s daughter".',
    },
    {
      termino: '<em>Time prepositions</em>/Preposiciones de tiempo',
      significado:
        'son expresiones que nos dan información sobre el tiempo en que sucede algo y se emplean para hablar del momento en que se realiza una acción. Por ejemplo, "before” (antes), “after” (después), “until” (hasta), “since” (desde), etc.',
    },
  ],
  referencias: [
    {
      referencia:
        'BBC World Service. (s. f.). Learning English:  when/while/meanwhile. BBC. ',
      link:
        'https://www.bbc.co.uk/worldservice/learningenglish/grammar/learnit/learnitv257.shtml#:~:text=We%20use%20when%2C%20not%20while,when%20the%20lights%20went%20off',
    },
    {
      referencia:
        'British Council. (s. f.). Stative verbs. British Council LearnEnglish.',
      link:
        'https://learnenglish.britishcouncil.org/grammar/b1-b2-grammar/stative-verbs',
    },
    {
      referencia:
        'Cambridge University Press. (s. f.-a). Prepositions: uses. Cambridge Dictionary.',
      link:
        'https://dictionary.cambridge.org/es-LA/grammar/british-grammar/prepositions',
    },
    {
      referencia:
        'Cambridge University Press. (s. f.-b). The present continuous. Cambridge Dictionary.',
      link:
        'https://dictionary.cambridge.org/dictionary/english/present-continuous',
    },
    {
      referencia:
        'Collins. (s. f.). What are prepositions of time in English? Gramática. ',
      link:
        'https://grammar.collinsdictionary.com/es/gramatica-de-aprendizaje/what-are-prepositions-of-time-in-english',
    },
    {
      referencia:
        'McLellan, C. (2018). Los posesivos y el genitivo sajón en inglés. British Council España.',
      link: 'https://www.britishcouncil.es/blog/genitivo-sajon-ingles',
    },
    {
      referencia:
        'Zamora, V. (2020). El aquí y el ahora. Aprende a usar el present continuous. British Council México. ',
      link: 'https://www.britishcouncil.org.mx/blog/present-continuous',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Michelle Manuela Pérez Hernández',
        cargo: 'Experta temática',
        centro:
          'CENIGRAF - Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Óscar Absalón Guevara',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios – CIES - Regional Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora Metodológica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de Estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yicelly Estefania Mesa Silva',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Eduardo Garavito Parada',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
