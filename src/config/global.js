export default {
  global: {
    componenteFormativo:
      'Proceso integral de dispensación de productos farmacéuticos',
    descripcionCurso:
      'Este componente aborda la atención al usuario en el servicio farmacéutico, la verificación de prescripciones, la aplicación de protocolos de dispensación, el control de calidad, la legalidad de los medicamentos y la gestión de residuos. Además, incluye la normativa vigente, el manejo de alertas sanitarias y las buenas prácticas, garantizando un servicio seguro, eficiente y conforme a la regulación colombiana.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Atención al cliente en el servicio farmacéutico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tipos y características del cliente',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Elementos clave en la atención',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Aplicación de protocolos de atención',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Elementos operativos para la implementación del protocolo de dispensación',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Verificación de la prescripción médica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y estructura de la prescripción',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de prescripción',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Prescripción de medicamentos controlados',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Técnicas de verificación de autenticidad y consistencia',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procedimiento técnico de dispensación farmacéutica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Fases del proceso de dispensación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Protocolos de servicio e información al usuario',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Manual de Buenas Prácticas de Dispensación (MBPD)',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Responsabilidades del personal',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Indicadores de seguimiento y mejora',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Normativa del servicio farmacéutico en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Normativa vigente sobre dispensación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Procedimiento de dispensación conforme a la normativa',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Recepción y revisión de la prescripción',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Evaluación farmacéutica y entrega del medicamento',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Normas complementarias',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Verificación de la calidad y legalidad de productos farmacéuticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Registro sanitario y estado físico del producto',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Fecha de vencimiento y rotación de inventarios',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Condiciones de almacenamiento',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Etiquetado y otros criterios de calidad',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Verificación de la procedencia legal',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Alertas sanitarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Atención ante alerta sanitaria',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Emisión e información contenida en una alerta',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Gestión de residuos farmacéuticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Tipos y clasificación de residuos',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Técnicas de disposición final',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo:
              'Información al usuario sobre manejo responsable de residuos',
            hash: 't_7_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_32170001_DU.pdf',
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
      tema: 'Normativa del servicio farmacéutico en Colombia',
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Normograma.',
      tipo: 'Página web',
      link: 'https://www.minsalud.gov.co/salud/MT/Paginas/medicamentos.aspx',
    },
    {
      tema: 'Verificación de la calidad y legalidad de productos farmacéuticos',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023). Farmacovigilancia y Tecnovigilancia [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DPnwAWYz8p8',
    },
    {
      tema: 'Verificación de la calidad y legalidad de productos farmacéuticos',
      referencia:
        'Invima Colombia. (2025). #Entérate de todo lo que debes saber sobre la publicidad de medicamentos de venta libre [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_xzXiFf-urk',
    },
  ],
  glosario: [
    {
      termino: 'Buenas prácticas de dispensación (BPD)',
      significado:
        'Conjunto de principios y procedimientos que aseguran la calidad en la entrega de medicamentos, la seguridad del paciente y el cumplimiento de la normatividad sanitaria.',
    },
    {
      termino: 'Dispensación',
      significado:
        'Proceso mediante el cual se entrega un medicamento al usuario, acompañado de la orientación necesaria para su uso seguro y adecuado, conforme a una prescripción médica o a la normativa vigente.',
    },
    {
      termino: 'Etiquetado',
      significado:
        'Información visible en el envase del medicamento que incluye nombre, composición, fecha de vencimiento, número de lote, condiciones de almacenamiento y advertencias, entre otros datos obligatorios.',
    },
    {
      termino: 'Fecha de vencimiento',
      significado:
        'Indicación impresa en el empaque de un medicamento que señala hasta cuándo se garantiza su eficacia, calidad y seguridad.',
    },
    {
      termino: 'Gestión de residuos farmacéuticos',
      significado:
        'Prácticas responsables para la disposición adecuada de medicamentos vencidos, deteriorados o no utilizados, con el fin de prevenir riesgos sanitarios y ambientales.',
    },
    {
      termino: 'Prescripción médica',
      significado:
        'Documento emitido por un profesional de la salud autorizado, que indica los medicamentos que deben ser administrados a un paciente, junto con sus respectivas dosis, frecuencia y vía de administración.',
    },
    {
      termino: 'Protocolo de dispensación',
      significado:
        'Conjunto de pasos y lineamientos establecidos para garantizar la entrega correcta de medicamentos, asegurando la seguridad del usuario y el cumplimiento de la normatividad.',
    },
    {
      termino: 'Registro sanitario',
      significado:
        'Número otorgado por la autoridad reguladora (como el INVIMA en Colombia) que certifica que un medicamento ha sido evaluado y autorizado para su comercialización.',
    },
    {
      termino: 'Verificación de la prescripción',
      significado:
        'Revisión sistemática de los datos de la fórmula médica para validar que sean correctos, legibles y completos antes de la dispensación del medicamento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (1993). Ley 100 de 1993: Por la cual se crea el sistema de seguridad social integral.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=5248',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2014). Decreto 351 de 2014: Por el cual se reglamenta la gestión integral de residuos generados en la atención en salud y otras actividades.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56755',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2015). Ley 1751 de 2015: Por medio de la cual se regula el derecho fundamental a la salud.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=60733',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (2016). Decreto 780 de 2016: Decreto Único Reglamentario del Sector Salud.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=77813',
    },
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). (s. f.). Buenas prácticas de manufactura, almacenamiento y dispensación.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). (s. f.). Guía técnica de buenas prácticas de dispensación.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). (s. f.). Página oficial del INVIMA.',
      link: 'https://www.invima.gov.co/',
    },
    {
      referencia:
        'Ministerio de Comercio, Industria y Turismo. (2002). Resolución 1164 de 2002: Manual de procedimientos para la gestión integral de los residuos hospitalarios y similares.',
      link:
        'https://www.mincit.gov.co/ministerio/normograma-sig/procesos-de-apoyo/gestion-de-recursos-fisicos/resoluciones/resolucion-1164-de-2002.aspx',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2005). Decreto 2200 de 2005: Por el cual se reglamenta el servicio farmacéutico y se dictan otras disposiciones.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=16944',
    },
    {
      referencia:
        'Ministerio de la Protección Social. (2007). Resolución 1403 de 2007: Por la cual se definen los procedimientos y condiciones de la organización y funcionamiento de los servicios farmacéuticos.',
      link:
        'https://autorregulacion.saludcapital.gov.co/leyes/Resolucion_1403_de_2007.pdf',
    },
    {
      referencia:
        'Ministerio de Salud. (1995). Decreto 677 de 1995: Por el cual se reglamenta el registro sanitario de medicamentos.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=9751',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2004). Resolución 886 de 2004: Por la cual se establecen normas en relación con los servicios farmacéuticos.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/Resoluci%C3%B3n_0886_de_2004.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2012). Política farmacéutica nacional.',
      link:
        'https://www.minsalud.gov.co/Paginas/Pol%C3%ADtica%20Farmac%C3%A9utica%202012.aspx',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013a). Resolución 1441 de 2013: Por la cual se adopta el Manual de condiciones esenciales y procedimientos del servicio farmacéutico.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-1441-de-2013.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013b). Resolución 1604 de 2013: Por la cual se adoptan disposiciones relacionadas con los servicios farmacéuticos.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-1604-de-2013.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2019). Resolución 3100 de 2019: Por la cual se definen los procedimientos y condiciones de inscripción de los prestadores de servicios de salud.',
      link:
        'https://www.minsalud.gov.co/normatividad_nuevo/resoluci%C3%B3n%20no.%203100%20de%202019.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (s. f.). Todo sobre MIPRES.',
      link:
        'https://www.sispro.gov.co/central-prestadores-de-servicios/Pages/MIPRES.aspx',
    },
    {
      referencia:
        'Norma ISO 9001:2015. (2015). Sistemas de gestión de la calidad – Requisitos.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Christian Llano Villegas',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Oscar Ivan Uribe Ortiz',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jose Yobani Penagos Mora',
          cargo: 'Diseñador <em>web</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Eduardo Rueda Peña',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
