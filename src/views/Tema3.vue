<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Procedimiento técnico de dispensación farmacéutica
    
    figure.mb-5(data-aos="fade-right")
      img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen decorativa')

    p(data-aos="fade-right") La dispensación es una actividad central del servicio farmacéutico, cuyo objetivo es garantizar que el usuario reciba el medicamento correcto, en condiciones adecuadas, con toda la información necesaria para su uso seguro, eficaz y racional. Para cumplir con este objetivo, se deben aplicar protocolos definidos en el Manual de Buenas Prácticas de Dispensación (MBPD), los cuales regulan cada etapa del proceso.
    
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Fases del proceso de dispensación
    
    p.mb-5(data-aos="fade-right") El proceso de dispensación farmacéutica comprende una serie de fases secuenciales que garantizan la entrega segura, eficaz y legal de los medicamentos prescritos. Este proceso no se limita a la entrega física del medicamento, sino que incluye actividades previas y posteriores que aseguran una atención integral al usuario y la correcta utilización del fármaco. Las principales fases son:

    .tarjeta.tarjeta--BG03.p-4.p-md-5.mb-0
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row.justify-content-center(titulo="a.")
          .col-lg-5.order-lg-1.order-2
            h4 Recepción y validación de la prescripción médica
            p.mb-0 Se verifica que la fórmula médica cumpla con los requisitos legales y técnicos, tales como la identificación del paciente, del profesional prescriptor, del medicamento (principio activo, dosis, vía de administración, frecuencia y duración del tratamiento), además de su vigencia.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img02.jpg', alt='Imagen decorativa')
        .row.justify-content-center(titulo="b.")
          .col-lg-5.order-lg-1.order-2
            h4 Verificación de disponibilidad del medicamento
            p.mb-0 Se consulta el inventario y se asegura que el medicamento prescrito esté disponible y en condiciones óptimas de conservación. En caso de no contar con el medicamento, se siguen los protocolos institucionales para su adquisición o notificación al usuario.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img03.jpg', alt='Imagen decorativa')
        .row.justify-content-center(titulo="c.")
          .col-lg-5.order-lg-1.order-2
            h4 Preparación del medicamento
            p.mb-0 Consiste en la selección del producto, el cotejo con la fórmula médica y la preparación del despacho, asegurando las condiciones de seguridad, limpieza y trazabilidad del proceso.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img04.jpg', alt='Imagen decorativa')
        .row.justify-content-center(titulo="d.")
          .col-lg-5.order-lg-1.order-2
            h4 Información y orientación al usuario
            p.mb-0 Se brinda al paciente o cuidador una explicación clara sobre la posología, vía de administración, posibles efectos adversos, interacciones y condiciones de almacenamiento, con el fin de fomentar el uso racional del medicamento.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img05.jpg', alt='Imagen decorativa')
        .row.justify-content-center(titulo="e.")
          .col-lg-5.order-lg-1.order-2
            h4 Registro de la dispensación
            p.mb-0 Se documenta la entrega del medicamento en los sistemas informáticos o físicos, garantizando trazabilidad y respaldo legal de la actuación del profesional.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img06.jpg', alt='Imagen decorativa')
        .row.justify-content-center(titulo="f.")
          .col-lg-5.order-lg-1.order-2
            h4 Seguimiento y manejo de situaciones especiales
            p.mb-0 Se atienden devoluciones, quejas, reportes de eventos adversos y se da orientación complementaria si el usuario lo requiere. Esta fase puede incluir acciones de farmacovigilancia o educación continuada.
          .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img07.jpg', alt='Imagen decorativa')

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Protocolos de servicio e información al usuario
    
    .row.justify-content-center.mb-5(style="display: flex; width: 100%; margin: auto;")
      .col-lg-4.col-md-6.col-8.mb-4.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/img08.svg', alt='Imagen decorativa')
      .col-lg-8(data-aos="fade-left")
        p Los protocolos de servicio en la dispensación farmacéutica son guías estructuradas que definen los pasos, criterios y responsabilidades que debe seguir el personal encargado para asegurar una atención eficiente, segura, ética y centrada en el usuario. Estos protocolos son fundamentales para estandarizar la calidad del servicio, reducir errores y garantizar el cumplimiento de las normas sanitarias y de atención al usuario.
        .cajon.cajon.C01.color-primario.p-4.mb-4
          p.mb-0 Uno de los aspectos más relevantes dentro de estos protocolos es la información al usuario, que busca fomentar el uso adecuado del medicamento, prevenir riesgos asociados al tratamiento y fortalecer la relación entre el personal de salud y el paciente.
        p.mb-0 Los componentes clave del protocolo de servicio e información al usuario incluyen:
      
    .row.justify-content-center.align-items-center.mb-5(style="display: flex; width: 100%; margin: auto;")
      .col-lg-7.order-lg-1(data-aos="fade-right")
        LineaTiempoD.color-acento-botones.especial
          div(numero="1" titulo="Recepción cordial y verificación de identidad")
            p.mb-0 Se inicia con un saludo respetuoso, confirmación de identidad del paciente y verificación de la fórmula médica. Esta interacción debe ser empática y respetar la confidencialidad del usuario.
          div(numero="2" titulo="Validación de la prescripción")
            p.mb-0 Antes de la entrega, se verifica que la fórmula esté vigente, completa y clara, cumpliendo los requisitos legales. También se revisa que no existan interacciones, duplicidad de tratamientos o contraindicaciones evidentes.
          div(numero="3" titulo="Brindar información clara y comprensible")
            p.mb-0 El personal debe explicar al usuario aspectos clave del medicamento como: nombre, dosis, vía y horario de administración, duración del tratamiento, posibles efectos adversos, precauciones especiales, interacciones relevantes y condiciones de almacenamiento.
          div(numero="4" titulo="Lenguaje accesible y adaptado")
            p.mb-0 Se debe emplear un lenguaje sencillo, sin tecnicismos, y adaptado a las capacidades cognitivas del paciente o su cuidador. En caso necesario, se deben emplear recursos visuales, ejemplos prácticos o materiales impresos de apoyo.
          div(numero="5" titulo="Confirmación de comprensión")
            p.mb-0 Es importante verificar que el usuario haya comprendido la información proporcionada. Esto puede incluir preguntas de control o solicitar que el paciente repita las instrucciones en sus propias palabras.
          div(numero="6" titulo="Canales de orientación y seguimiento")
            p.mb-0 El protocolo debe incluir información sobre qué hacer en caso de efectos adversos, dudas posteriores o necesidad de interrumpir el tratamiento. Se puede proporcionar un número de contacto o remitir al profesional correspondiente.
          div(numero="7" titulo="Registro de la interacción")
            p.mb-0 Toda la información entregada al usuario y las recomendaciones especiales deben quedar documentadas, como parte del soporte de atención y para fines de trazabilidad y mejora continua.
      .col-lg-5.order-lg-2.d-none.d-lg-block(data-aos="fade-left")
        figure
          img(src='@/assets/curso/temas/tema3/img09.png', alt='Imagen decorativa')
    
    p.mb-5(data-aos="fade-right") Una lista de verificación (<em>checklist</em>) es una herramienta útil para asegurar que el personal siga todos los pasos del protocolo de servicio e información al usuario de forma sistemática. A continuación, se presenta un ejemplo claro y práctico, organizado en formato de tabla para facilitar su aplicación:

    .titulo-sexto.color-acento-contenido(data-aos="fade-right")
      h5 Tabla 1.
      span <em>Lista de verificación para el protocolo de servicio e información al usuario.</em>          
    .tabla-a.color-acento-contenido.mb-5
      table
        thead
          tr(data-aos="fade-right")
            th(style= "width: 10%") Ítem
            th(style= "width: 50%") Descripción
            th(style= "width: 20%") Cumplimiento (✔/✘)
            th(style= "width: 20%") Observaciones
        tbody
          tr(data-aos="fade-right")
            td.text-center.text-bold(style="background-color: #F6F6F6") 1.
            td(style="background-color: #F6F6F6") Se realiza una recepción cordial y se verifica la identidad del usuario.
            td(style="background-color: #F6F6F6") 
            td(style="background-color: #F6F6F6") 
          tr(data-aos="fade-right")
            td.text-center.text-bold 2.
            td Se verifica la validez y legalidad de la fórmula médica (fecha, firma y número de registro).
            td 
            td 
          tr(data-aos="fade-right")
            td.text-center.text-bold(style="background-color: #F6F6F6") 3.
            td(style="background-color: #F6F6F6") Se revisa que no haya contraindicaciones, duplicidad o errores en la prescripción.
            td(style="background-color: #F6F6F6")
            td(style="background-color: #F6F6F6") 
          tr(data-aos="fade-right")
            td.text-center.text-bold 4.
            td Se proporciona información clara sobre el nombre del medicamento y su uso.
            td
            td 
          tr(data-aos="fade-right")
            td.text-center.text-bold(style="background-color: #F6F6F6") 5.
            td(style="background-color: #F6F6F6") Se explica la dosis, vía y horario de administración.
            td(style="background-color: #F6F6F6")
            td(style="background-color: #F6F6F6")  
          tr(data-aos="fade-right")
            td.text-center.text-bold 6.
            td Se informa sobre la duración del tratamiento y condiciones de almacenamiento.
            td
            td  
          tr(data-aos="fade-right")
            td.text-center.text-bold(style="background-color: #F6F6F6") 7.
            td(style="background-color: #F6F6F6") Se advierte sobre posibles efectos adversos y precauciones.
            td(style="background-color: #F6F6F6")
            td(style="background-color: #F6F6F6")  
          tr(data-aos="fade-right")
            td.text-center.text-bold 8.
            td Se utiliza lenguaje claro, sin tecnicismos, y adaptado al nivel del usuario.
            td
            td  
          tr(data-aos="fade-right")
            td.text-center.text-bold(style="background-color: #F6F6F6") 9.
            td(style="background-color: #F6F6F6") Se verifica la comprensión del usuario mediante preguntas o retroalimentación.
            td(style="background-color: #F6F6F6")
            td(style="background-color: #F6F6F6")  
          tr(data-aos="fade-right")
            td.text-center.text-bold 10.
            td Se indica a quién acudir en caso de dudas o eventos adversos (canal de contacto).
            td
            td  
          tr(data-aos="fade-right")
            td.text-center.text-bold(style="background-color: #F6F6F6") 11.
            td(style="background-color: #F6F6F6") Se realiza registro escrito de la dispensación y de las recomendaciones dadas.
            td(style="background-color: #F6F6F6") 
            td(style="background-color: #F6F6F6") 
    
    p.mb-5(data-aos="fade-right") Esta lista puede ser usada como instrumento para:

    .row.mb-5
      .col-md-6.col-lg.tarjeta--tabla.p-4(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-4
            img(src='@/assets/curso/temas/tema3/img10.svg' alt='Imagen decorativa')
        h5.text-center Capacitar al personal en formación
      .col-md-6.col-lg.tarjeta--tabla.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-4
            img(src='@/assets/curso/temas/tema3/img11.svg' alt='Imagen decorativa')
        h5.text-center Supervisar el cumplimiento del protocolo en un entorno real
      .col-md-6.col-lg.tarjeta--tabla.p-4(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-4
            img(src='@/assets/curso/temas/tema3/img12.svg' alt='Imagen decorativa')
        h5.text-center Implementar auditorías internas de calidad
      .col-md-6.col-lg.tarjeta--tabla.p-4(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-4
            img(src='@/assets/curso/temas/tema3/img13.svg' alt='Imagen decorativa')
        h5.text-center Identificar oportunidades de mejora continua  

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Manual de Buenas Prácticas de Dispensación (MBPD)
    
    p.mb-5(data-aos="fade-right") El Manual de Buenas Prácticas de Dispensación (MBPD) constituye una herramienta fundamental en los servicios farmacéuticos, ya que establece los lineamientos técnicos, administrativos y éticos que deben seguirse para garantizar una dispensación segura, eficaz y centrada en el usuario. Su contenido está basado en la normatividad vigente del Ministerio de Salud y Protección Social y recoge los estándares internacionales de calidad farmacéutica. Este manual contempla aspectos como:

    .row.justify-content-center.mb-5
      .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
        .cajon.cajon.C01.p-4
          ul.lista-ul--color
            li 
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | La organización del servicio.
            li 
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | Los requisitos para el almacenamiento adecuado de medicamentos.
            li 
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | Las condiciones del área de dispensación.
            li
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | La capacitación del personal.
            li 
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | El sistema de gestión documental.
            li 
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | El control de inventarios.
            li.mb-0
              img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
              | Los procedimientos normalizados de trabajo (PTN) para la dispensación.
      .col-lg-3.col-md-4.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img14.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-right") Cada uno de estos componentes tiene como objetivo principal proteger la salud del paciente, garantizar el uso racional de medicamentos y prevenir errores en la administración o interpretación de las fórmulas médicas.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0 El MBPD también establece los criterios para la atención humanizada, el registro de las actividades realizadas, la trazabilidad del proceso de entrega y la orientación adecuada al usuario, con énfasis en la responsabilidad ética del talento humano en salud. La implementación rigurosa de este manual es clave para promover la mejora continua, fortalecer la confianza del usuario y asegurar la calidad en los procesos del servicio farmacéutico.

    p(data-aos="fade-right") La aplicación del MBPD en el entorno real del servicio farmacéutico implica la adopción de prácticas estandarizadas y sistemáticas que guían al personal en cada etapa del proceso de dispensación. Esto se traduce en la validación cuidadosa de las fórmulas médicas, la revisión de posibles interacciones farmacológicas, la entrega oportuna y adecuada de los medicamentos, y la educación al paciente sobre su uso correcto. Además, permite realizar auditorías internas, monitorear indicadores de calidad y ajustar procesos según los hallazgos encontrados. Su implementación efectiva contribuye a reducir errores, mejorar la seguridad del paciente y garantizar el cumplimiento de la normatividad sanitaria vigente.

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Responsabilidades del personal
    
    p.mb-5(data-aos="fade-right") El personal involucrado en la dispensación de medicamentos desempeña un rol fundamental en la garantía de la calidad del servicio farmacéutico y en la protección de la salud del usuario. Cada miembro del equipo tiene responsabilidades definidas que deben ser asumidas con profesionalismo, ética y cumplimiento riguroso de los procedimientos establecidos. Entre las principales responsabilidades se encuentran:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta--BG04.p-4
        .row.justify-content-center.mb-4
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img15.svg' alt='Imagen decorativa')
        h4.text-center Verificación de fórmulas médicas
        p.mb-0 Confirmar la validez, legibilidad, dosificación y prescripción adecuada, de acuerdo con la normatividad vigente.
      .tarjeta.tarjeta--BG04.p-4
        .row.justify-content-center.mb-4
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img16.svg' alt='Imagen decorativa')
        h4.text-center Preparación y entrega de medicamentos
        p.mb-0 Realizar el proceso de dispensación conforme a los protocolos establecidos, verificando presentación, dosis, lote y fecha de vencimiento.
      .tarjeta.tarjeta--BG04.p-4
        .row.justify-content-center.mb-4
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img17.svg' alt='Imagen decorativa')
        h4.text-center Atención al usuario
        p.mb-0 Brindar información clara, precisa y suficiente sobre el uso adecuado del medicamento, posibles efectos adversos, almacenamiento y cumplimiento del tratamiento.
      .tarjeta.tarjeta--BG04.p-4
        .row.justify-content-center.mb-4
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img18.svg' alt='Imagen decorativa')
        h4.text-center Registro y trazabilidad
        p.mb-0 Documentar cada entrega realizada, mantener actualizados los sistemas de información y garantizar la trazabilidad del medicamento dispensado.
      .tarjeta.tarjeta--BG04.p-4
        .row.justify-content-center.mb-4
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img19.svg' alt='Imagen decorativa')
        h4.text-center Manejo de quejas o eventos adversos
        p.mb-0 Canalizar oportunamente las observaciones del usuario y reportar cualquier irregularidad o sospecha de reacción adversa.
      .tarjeta.tarjeta--BG04.p-4
        .row.justify-content-center.mb-4
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img20.svg' alt='Imagen decorativa')
        h4.text-center Cumplimiento del MBPD
        p.mb-0 Aplicar de forma estricta los lineamientos del Manual de Buenas Prácticas de Dispensación y participar activamente en procesos de mejora continua.
      .tarjeta.tarjeta--BG04.p-4
        .row.justify-content-center.mb-4
          .col-lg-6.col-sm-4.col-6
            img(src='@/assets/curso/temas/tema3/img21.svg' alt='Imagen decorativa')
        h4.text-center Capacitación continua
        p.mb-0 Mantenerse actualizado en normativas, nuevos medicamentos, tecnologías y estándares de calidad para asegurar un servicio seguro y eficiente.  
    
    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-4(data-aos="fade-right") Estas responsabilidades se extienden tanto al personal técnico como al profesional del área de farmacia, quienes deben actuar con responsabilidad y dentro del marco legal, garantizando la seguridad del paciente y la calidad del servicio ofrecido.

    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Indicadores de seguimiento y mejora

    p(data-aos="fade-right") Los indicadores de seguimiento y mejora permiten evaluar de forma sistemática la calidad del servicio de dispensación de medicamentos, identificar desviaciones en los procesos y promover acciones correctivas y preventivas. Estos indicadores son fundamentales para la gestión de la calidad, la toma de decisiones y la mejora continua en el servicio farmacéutico.
    p.mb-5(data-aos="fade-right") Algunos de los indicadores más utilizados en el contexto de dispensación son:

    .tarjeta.tarjeta--BG07.p-md-5.p-4.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Índice de errores en la dispensación
              p.mb-0 Mide la cantidad de errores detectados en relación con el total de fórmulas dispensadas. Por ejemplo, si en un mes se dispensaron 1.000 fórmulas y se registraron 5 errores, el índice sería del 0,5 %.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img22.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Tiempo promedio de atención al usuario
              p.mb-0 Evalúa la eficiencia del servicio midiendo el tiempo desde la recepción de la fórmula hasta la entrega del medicamento. Si el promedio supera los 10 minutos, puede ser necesario revisar los flujos de trabajo.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img23.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Índice de devoluciones o no conformidades
              p.mb-0 Registra la frecuencia de medicamentos devueltos por errores o inconformidades, como cuando el paciente recibe un medicamento distinto al prescrito.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img24.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Nivel de satisfacción del usuario
              p.mb-0 Se obtiene a través de encuestas aplicadas al finalizar la atención. Por ejemplo, si el 85 % de los usuarios califica como “satisfactoria” su experiencia, se considera un resultado positivo.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img25.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Tasa de quejas y reclamos
              p.mb-0 Permite monitorear la cantidad de quejas, como demoras excesivas o fallas en la información entregada.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img26.jpg', alt='Imagen decorativa')
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Cumplimiento del Manual de Buenas Prácticas de Dispensación (MBPD)
              p.mb-0 Se evalúa mediante auditorías internas, que revisan aspectos como higiene, rotulación adecuada y entrega informada de medicamentos.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img27.jpg', alt='Imagen decorativa')

    .row.justify-content-center.mb-0
      .col-lg-10
        p(data-aos="fade-right") El análisis periódico de estos indicadores facilita la implementación de estrategias de mejora continua, fortalece la cultura de calidad en el servicio farmacéutico y contribuye a la seguridad del paciente.

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

<style lang="sass"></style>
