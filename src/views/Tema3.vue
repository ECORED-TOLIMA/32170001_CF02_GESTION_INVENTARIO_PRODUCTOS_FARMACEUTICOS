<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1 Procedimiento técnico de dispensación farmacéutica
    
    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img01.png', alt='Imagen decorativa')

    p.mb-0(data-aos="fade-down") La dispensación es una actividad central del servicio farmacéutico, cuyo objetivo es garantizar que el usuario reciba el medicamento correcto, en condiciones adecuadas, con toda la información necesaria para su uso seguro, eficaz y racional. Para cumplir con este objetivo, se deben aplicar protocolos definidos en el Manual de Buenas Prácticas de Dispensación (MBPD), los cuales regulan cada etapa del proceso.
    
    separador
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Fases del proceso de dispensación
    
    p.mb-5(data-aos="fade-down") El proceso de dispensación farmacéutica comprende una serie de fases secuenciales que garantizan la entrega segura, eficaz y legal de los medicamentos prescritos. Este proceso no se limita a la entrega física del medicamento, sino que incluye actividades previas y posteriores que aseguran una atención integral al usuario y la correcta utilización del fármaco. Las principales fases son:

    .tarjeta.tarjeta--BG03.p-4.p-md-5.mb-0
      LineaTiempoC.color-acento-botones(text-small)(data-aos="flip-up")
        .row(titulo="a.")
          .col-lg-5.mb-4.mb-md-0.order-lg-1.order-2
            h4 Recepción y validación de la prescripción médica
            p Se verifica que la fórmula médica cumpla con los requisitos legales y técnicos, tales como la identificación del paciente, del profesional prescriptor, del medicamento (principio activo, dosis, vía de administración, frecuencia y duración del tratamiento), además de su vigencia.
          .col-lg-7.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img02.jpg', alt='Imagen decorativa')

        .row(titulo="b.")
          .col-lg-5.mb-4.mb-md-0.order-lg-1.order-2
            h4 Verificación de disponibilidad del medicamento
            p Se consulta el inventario y se asegura que el medicamento prescrito esté disponible y en condiciones óptimas de conservación. En caso de no contar con el medicamento, se siguen los protocolos institucionales para su adquisición o notificación al usuario.
          .col-lg-7.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img03.jpg', alt='Imagen decorativa')

        .row(titulo="c.")
          .col-lg-5.mb-4.mb-md-0.order-lg-1.order-2
            h4 Preparación del medicamento
            p Consiste en la selección del producto, el cotejo con la fórmula médica y la preparación del despacho, asegurando las condiciones de seguridad, limpieza y trazabilidad del proceso.
          .col-lg-7.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img04.jpg', alt='Imagen decorativa')

        .row(titulo="d.")
          .col-lg-5.mb-4.mb-md-0.order-lg-1.order-2
            h4 Información y orientación al usuario
            p Se brinda al paciente o cuidador una explicación clara sobre la posología, vía de administración, posibles efectos adversos, interacciones y condiciones de almacenamiento, con el fin de fomentar el uso racional del medicamento.
          .col-lg-7.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img05.jpg', alt='Imagen decorativa')

        .row(titulo="e.")
          .col-lg-5.mb-4.mb-md-0.order-lg-1.order-2
            h4 Registro de la dispensación
            p Se documenta la entrega del medicamento en los sistemas informáticos o físicos, garantizando trazabilidad y respaldo legal de la actuación del profesional.
          .col-lg-7.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img06.jpg', alt='Imagen decorativa')

        .row(titulo="f.")
          .col-lg-5.mb-4.mb-md-0.order-lg-1.order-2
            h4 Seguimiento y manejo de situaciones especiales
            p Se atienden devoluciones, quejas, reportes de eventos adversos y se da orientación complementaria si el usuario lo requiere. Esta fase puede incluir acciones de farmacovigilancia o educación continuada.
          .col-lg-7.order-lg-2.order-1.mb-lg-0.mb-4
            figure
              img(src='@/assets/curso/temas/tema3/img07.jpg', alt='Imagen decorativa')

    separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Protocolos de servicio e información al usuario
    
    .row.justify-content-center.mb-5(data-aos="flip-up")(style="display: flex; width: 100%; margin: auto;")
      .col-lg-8.col-12.order-lg-2.order-2
        p(data-aos="fade-down") Los protocolos de servicio en la dispensación farmacéutica son guías estructuradas que definen los pasos, criterios y responsabilidades que debe seguir el personal encargado para asegurar una atención eficiente, segura, ética y centrada en el usuario. Estos protocolos son fundamentales para estandarizar la calidad del servicio, reducir errores y garantizar el cumplimiento de las normas sanitarias y de atención al usuario.
        .cajon.cajon.C01.color-primario.p-4.mb-3
          p.mb-0(data-aos="fade-down") Uno de los aspectos más relevantes dentro de estos protocolos es la información al usuario, que busca fomentar el uso adecuado del medicamento, prevenir riesgos asociados al tratamiento y fortalecer la relación entre el personal de salud y el paciente.
        p(data-aos="fade-down") Los componentes clave del protocolo de servicio e información al usuario incluyen:
      .col-lg-4.col-md-7.col-12.mb-3.order-lg-1.order-1.mb-lg-0
        .row.justify-content-center(data-aos="flip-up")
          .col
            figure
              img(src='@/assets/curso/temas/tema3/img08.svg', alt='Imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      .col-lg-11.col-12
        .row.justify-content-center.align-items-center(style="display: flex; width: 100%; margin: auto;")
          .col-lg-7.col-12.mb-5.mb-md-0.order-lg-1.order-2.mb-lg-0
            LineaTiempoD.color-acento-botones.especial
              .row(numero="1" titulo="Recepción cordial y verificación de identidad")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Se inicia con un saludo respetuoso, confirmación de identidad del paciente y verificación de la fórmula médica. Esta interacción debe ser empática y respetar la confidencialidad del usuario.

              .row(numero="2" titulo="Validación de la prescripción")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Antes de la entrega, se verifica que la fórmula esté vigente, completa y clara, cumpliendo los requisitos legales. También se revisa que no existan interacciones, duplicidad de tratamientos o contraindicaciones evidentes.

              .row(numero="3" titulo="Brindar información clara y comprensible")
                .col-12.mb-4.mb-md-0
                  p.mb-0 El personal debe explicar al usuario aspectos clave del medicamento como: nombre, dosis, vía y horario de administración, duración del tratamiento, posibles efectos adversos, precauciones especiales, interacciones relevantes y condiciones de almacenamiento.

              .row(numero="4" titulo="Lenguaje accesible y adaptado")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Se debe emplear un lenguaje sencillo, sin tecnicismos, y adaptado a las capacidades cognitivas del paciente o su cuidador. En caso necesario, se deben emplear recursos visuales, ejemplos prácticos o materiales impresos de apoyo.

              .row(numero="5" titulo="Confirmación de comprensión")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Es importante verificar que el usuario haya comprendido la información proporcionada. Esto puede incluir preguntas de control o solicitar que el paciente repita las instrucciones en sus propias palabras.

              .row(numero="6" titulo="Canales de orientación y seguimiento")
                .col-12.mb-4.mb-md-0
                  p.mb-0 El protocolo debe incluir información sobre qué hacer en caso de efectos adversos, dudas posteriores o necesidad de interrumpir el tratamiento. Se puede proporcionar un número de contacto o remitir al profesional correspondiente.

              .row(numero="7" titulo="Registro de la interacción")
                .col-12.mb-4.mb-md-0
                  p.mb-0 Toda la información entregada al usuario y las recomendaciones especiales deben quedar documentadas, como parte del soporte de atención y para fines de trazabilidad y mejora continua.
          .col-lg-5.col-sm-4.col-5.order-lg-2.order-1.mb-lg-0.mb-4.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img09.png', alt='Imagen decorativa')
    
    p.mb-5(data-aos="fade-down") Una lista de verificación (<em>checklist</em>) es una herramienta útil para asegurar que el personal siga todos los pasos del protocolo de servicio e información al usuario de forma sistemática. A continuación, se presenta un ejemplo claro y práctico, organizado en formato de tabla para facilitar su aplicación:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span <em>Lista de verificación para el protocolo de servicio e información al usuario.</em>          
        .tabla-a.color-acento-contenido
          table
            thead
              tr
                th(data-aos="fade-down")(style= "width: 10%") Ítem
                th(data-aos="fade-down")(style= "width: 50%") Descripción
                th(data-aos="fade-down")(style= "width: 20%") Cumplimiento (✔/✘)
                th(data-aos="fade-down")(style= "width: 20%") Observaciones
            tbody
              tr
                td.text-center.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 1.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Se realiza una recepción cordial y se verifica la identidad del usuario.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
              tr
                td.text-center.text-bold(data-aos="fade-down") 2.
                td(data-aos="fade-down") Se verifica la validez y legalidad de la fórmula médica (fecha, firma y número de registro).
                td(data-aos="fade-down") 
                td(data-aos="fade-down") 
              tr
                td.text-center.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 3.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Se revisa que no haya contraindicaciones, duplicidad o errores en la prescripción.
                td(data-aos="fade-down")(style="background-color: #F6F6F6")
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
              tr
                td.text-center.text-bold(data-aos="fade-down") 4.
                td(data-aos="fade-down") Se proporciona información clara sobre el nombre del medicamento y su uso.
                td(data-aos="fade-down")
                td(data-aos="fade-down") 
              tr
                td.text-center.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 5.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Se explica la dosis, vía y horario de administración.
                td(data-aos="fade-down")(style="background-color: #F6F6F6")
                td(data-aos="fade-down")(style="background-color: #F6F6F6")  
              tr
                td.text-center.text-bold(data-aos="fade-down") 6.
                td(data-aos="fade-down") Se informa sobre la duración del tratamiento y condiciones de almacenamiento.
                td(data-aos="fade-down")
                td(data-aos="fade-down")  
              tr
                td.text-center.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 7.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Se advierte sobre posibles efectos adversos y precauciones.
                td(data-aos="fade-down")(style="background-color: #F6F6F6")
                td(data-aos="fade-down")(style="background-color: #F6F6F6")  
              tr
                td.text-center.text-bold(data-aos="fade-down") 8.
                td(data-aos="fade-down") Se utiliza lenguaje claro, sin tecnicismos, y adaptado al nivel del usuario.
                td(data-aos="fade-down")
                td(data-aos="fade-down")  
              tr
                td.text-center.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 9.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Se verifica la comprensión del usuario mediante preguntas o retroalimentación.
                td(data-aos="fade-down")(style="background-color: #F6F6F6")
                td(data-aos="fade-down")(style="background-color: #F6F6F6")  
              tr
                td.text-center.text-bold(data-aos="fade-down") 10.
                td(data-aos="fade-down") Se indica a quién acudir en caso de dudas o eventos adversos (canal de contacto).
                td(data-aos="fade-down")
                td(data-aos="fade-down")  
              tr
                td.text-center.text-bold(data-aos="fade-down")(style="background-color: #F6F6F6") 11.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") Se realiza registro escrito de la dispensación y de las recomendaciones dadas.
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
                td(data-aos="fade-down")(style="background-color: #F6F6F6") 
    
    p.mb-5(data-aos="fade-down") Esta lista puede ser usada como instrumento para:

    .row.mb-5(data-aos="flip-up")
      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img10.svg' alt='AvatarTop')
        h5.text-center(data-aos="fade-down") Capacitar al personal en formación

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img11.svg' alt='AvatarTop')
        h5.text-center(data-aos="fade-down") Supervisar el cumplimiento del protocolo en un entorno real

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img12.svg' alt='AvatarTop')
        h5.text-center(data-aos="fade-down") Implementar auditorías internas de calidad

      .col-md-6.col-lg.tarjeta--tabla.p-4
        .row.justify-content-center.mb-3
          .col-4
            img(src='@/assets/curso/temas/tema3/img13.svg' alt='AvatarTop')
        h5.text-center(data-aos="fade-down") Identificar oportunidades de mejora continua
              

    separador
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Manual de Buenas Prácticas de Dispensación (MBPD)
    
    p.mb-5(data-aos="fade-down") El Manual de Buenas Prácticas de Dispensación (MBPD) constituye una herramienta fundamental en los servicios farmacéuticos, ya que establece los lineamientos técnicos, administrativos y éticos que deben seguirse para garantizar una dispensación segura, eficaz y centrada en el usuario. Su contenido está basado en la normatividad vigente del Ministerio de Salud y Protección Social y recoge los estándares internacionales de calidad farmacéutica. Este manual contempla aspectos como:

    .row.justify-content-center.mb-5(data-aos="flip-up")
      .col-lg-10.col-12
        .row.justify-content-center(style="display: flex; width: 100%; margin: auto;")
          .col-lg-8.col-12.order-lg-1.order-2
            .cajon.cajon.C01.p-4
              ul.lista-ul--color
                li.mb-3 
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | La organización del servicio.
                li.mb-3 
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Los requisitos para el almacenamiento adecuado de medicamentos.
                li.mb-3 
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Las condiciones del área de dispensación.
                li.mb-3
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | La capacitación del personal.
                li.mb-3 
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | El sistema de gestión documental.
                li.mb-3 
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | El control de inventarios.
                li.mb-0
                  img(src="@/assets/curso/temas/ico01.svg", alt="imagen decorativa", style="width: 12px; margin-right: 10px; vertical-align: middle;")
                  | Los procedimientos normalizados de trabajo (PTN) para la dispensación.
          .col-lg-4.col-md-7.col-10.order-lg-2.order-1.mb-lg-0
            .row.justify-content-center(data-aos="flip-up")
              .col
                figure
                  img(src='@/assets/curso/temas/tema3/img14.svg', alt='Imagen decorativa')

    p.mb-5(data-aos="fade-down") Cada uno de estos componentes tiene como objetivo principal proteger la salud del paciente, garantizar el uso racional de medicamentos y prevenir errores en la administración o interpretación de las fórmulas médicas.

    .row.justify-content-center.mb-5
      .col-lg-10.col-12
        .cajon.cajon.C01.color-primario.p-4
          p.mb-0(data-aos="fade-down") El MBPD también establece los criterios para la atención humanizada, el registro de las actividades realizadas, la trazabilidad del proceso de entrega y la orientación adecuada al usuario, con énfasis en la responsabilidad ética del talento humano en salud. La implementación rigurosa de este manual es clave para promover la mejora continua, fortalecer la confianza del usuario y asegurar la calidad en los procesos del servicio farmacéutico.

    p.mb-0(data-aos="fade-down") La aplicación del MBPD en el entorno real del servicio farmacéutico implica la adopción de prácticas estandarizadas y sistemáticas que guían al personal en cada etapa del proceso de dispensación. Esto se traduce en la validación cuidadosa de las fórmulas médicas, la revisión de posibles interacciones farmacológicas, la entrega oportuna y adecuada de los medicamentos, y la educación al paciente sobre su uso correcto. Además, permite realizar auditorías internas, monitorear indicadores de calidad y ajustar procesos según los hallazgos encontrados. Su implementación efectiva contribuye a reducir errores, mejorar la seguridad del paciente y garantizar el cumplimiento de la normatividad sanitaria vigente.

    separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Responsabilidades del personal
    
    p.mb-5(data-aos="fade-down") El personal involucrado en la dispensación de medicamentos desempeña un rol fundamental en la garantía de la calidad del servicio farmacéutico y en la protección de la salud del usuario. Cada miembro del equipo tiene responsabilidades definidas que deben ser asumidas con profesionalismo, ética y cumplimiento riguroso de los procedimientos establecidos. Entre las principales responsabilidades se encuentran:

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-up")
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta--BG04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img15.svg' alt='AvatarTop')
          h4.text-center Verificación de fórmulas médicas
          p Confirmar la validez, legibilidad, dosificación y prescripción adecuada, de acuerdo con la normatividad vigente.

        .tarjeta.tarjeta--BG04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img16.svg' alt='AvatarTop')
          h4.text-center Preparación y entrega de medicamentos
          p Realizar el proceso de dispensación conforme a los protocolos establecidos, verificando presentación, dosis, lote y fecha de vencimiento.

        .tarjeta.tarjeta--BG04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img17.svg' alt='AvatarTop')
          h4.text-center Atención al usuario
          p Brindar información clara, precisa y suficiente sobre el uso adecuado del medicamento, posibles efectos adversos, almacenamiento y cumplimiento del tratamiento.

        .tarjeta.tarjeta--BG04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img18.svg' alt='AvatarTop')
          h4.text-center Registro y trazabilidad
          p Documentar cada entrega realizada, mantener actualizados los sistemas de información y garantizar la trazabilidad del medicamento dispensado.

        .tarjeta.tarjeta--BG04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img19.svg' alt='AvatarTop')
          h4.text-center Manejo de quejas o eventos adversos
          p Canalizar oportunamente las observaciones del usuario y reportar cualquier irregularidad o sospecha de reacción adversa.

        .tarjeta.tarjeta--BG04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img20.svg' alt='AvatarTop')
          h4.text-center Cumplimiento del MBPD
          p Aplicar de forma estricta los lineamientos del Manual de Buenas Prácticas de Dispensación y participar activamente en procesos de mejora continua.

        .tarjeta.tarjeta--BG04.p-4
          .row.justify-content-center.mb-3
            .col-lg-6.col-sm-4.col-6
              img(src='@/assets/curso/temas/tema3/img15.svg' alt='AvatarTop')
          h4.text-center Capacitación continua
          p Mantenerse actualizado en normativas, nuevos medicamentos, tecnologías y estándares de calidad para asegurar un servicio seguro y eficiente.  
    
    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p(data-aos="fade-down") Estas responsabilidades se extienden tanto al personal técnico como al profesional del área de farmacia, quienes deben actuar con responsabilidad y dentro del marco legal, garantizando la seguridad del paciente y la calidad del servicio ofrecido.

    separador
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Indicadores de seguimiento y mejora

    p(data-aos="fade-down") Los indicadores de seguimiento y mejora permiten evaluar de forma sistemática la calidad del servicio de dispensación de medicamentos, identificar desviaciones en los procesos y promover acciones correctivas y preventivas. Estos indicadores son fundamentales para la gestión de la calidad, la toma de decisiones y la mejora continua en el servicio farmacéutico.
    p.mb-5(data-aos="fade-down") Algunos de los indicadores más utilizados en el contexto de dispensación son:

    .tarjeta.tarjeta--BG05.p-md-5.p-4.mb-5(data-aos="flip-up")
      .tarjeta.tarjeta--blanca.p-4.p-md-5
        PasosB.color-acento-botones 
          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Índice de errores en la dispensación
              p Mide la cantidad de errores detectados en relación con el total de fórmulas dispensadas. Por ejemplo, si en un mes se dispensaron 1.000 fórmulas y se registraron 5 errores, el índice sería del 0,5%.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img22.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Tiempo promedio de atención al usuario
              p Evalúa la eficiencia del servicio midiendo el tiempo desde la recepción de la fórmula hasta la entrega del medicamento. Si el promedio supera los 10 minutos, puede ser necesario revisar los flujos de trabajo.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img23.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Índice de devoluciones o no conformidades
              p Registra la frecuencia de medicamentos devueltos por errores o inconformidades, como cuando el paciente recibe un medicamento distinto al prescrito.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img24.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Nivel de satisfacción del usuario
              p Se obtiene a través de encuestas aplicadas al finalizar la atención. Por ejemplo, si el 85% de los usuarios califica como “satisfactoria” su experiencia, se considera un resultado positivo.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img25.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Tasa de quejas y reclamos
              p Permite monitorear la cantidad de quejas, como demoras excesivas o fallas en la información entregada.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img26.jpg', alt='Imagen decorativa')

          .row.justify-content-center.p-4(titulo="")
            .col-lg-5.order-lg-1.order-2
              h4 Cumplimiento del Manual de Buenas Prácticas de Dispensación (MBPD)
              p Se evalúa mediante auditorías internas, que revisan aspectos como higiene, rotulación adecuada y entrega informada de medicamentos.
            .col-lg-7.col-10.order-lg-2.order-1.mb-lg-0.mb-4
              figure
                img(src='@/assets/curso/temas/tema3/img27.jpg', alt='Imagen decorativa')

    .row.justify-content-center.mb-0
      .col-lg-10.col-12
        p(data-aos="fade-down") El análisis periódico de estos indicadores facilita la implementación de estrategias de mejora continua, fortalece la cultura de calidad en el servicio farmacéutico y contribuye a la seguridad del paciente.

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
