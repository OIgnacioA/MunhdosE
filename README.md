# MunhdosE

° cambié el tipo de archivo en Jenkinsfile.all, para que pueda ejecutarse en windows. 
    Reemplazar comandos de shell Linux con comandos de shell de Windows: Se cambiaron los comandos de shell (sh) por los comandos de shell de Windows (bat) para que sean compatibles con el sistema operativo Windows.

    Eliminación de comandos específicos de Linux: Se eliminaron los comandos específicos de Linux, como sshpass y sleep, que no son compatibles con Windows. Estos comandos eran utilizados para interactuar con Kubernetes y esperar un período de tiempo, respectivamente.

    Adaptación de rutas de archivo: Se ajustaron las rutas de archivo para que sean compatibles con el formato de ruta de archivo de Windows, utilizando barras invertidas () en lugar de barras inclinadas (/).

    En resumen, los cambios se realizaron para asegurar que los comandos y las rutas de archivo sean compatibles con el sistema operativo Windows, ya que el Jenkins estaba ejecutándose en un entorno Windows y no en Linux.



° comenté una parte del JenkinsFile.all por que aun no estoy trabajando con kubernetes.


    Construir una imagen de Docker: En la etapa "Building image", se ejecuta el comando docker build para construir una imagen de Docker con el nombre testapp.

    Ejecutar pruebas: En la etapa "Run tests", se ejecuta un contenedor Docker a partir de la imagen testapp creada en la etapa anterior, y dentro de este contenedor se ejecutan pruebas utilizando el comando npm test.

° Otras etapas comentadas: Las etapas restantes del pipeline están comentadas. Originalmente, estas etapas estaban destinadas a desplegar la imagen de Docker en un          entorno  de Kubernetes, pero han sido desactivadas mediante comentarios.



° DockerFile: 


    Hemos actualizado el Dockerfile para incluir la instalación de las dependencias de prueba, como mocha, y hemos modificado el comando CMD para ejecutar las pruebas automáticamente al iniciar el contenedor. Esto soluciona el error "mocha: not found" al intentar ejecutar las pruebas, ya que ahora mocha está disponible dentro del contenedor.


° Dependences:

 Se corrigió el problema actualizando la versión de mocha en package.json a ^5.2.0 para que coincida con la versión utilizada en el Dockerfile y evitar incompatibilidades.


° Mocha 
    Instalé globalmente la herramienta Mocha en la máquina local utilizando npm.
    Esto permite que Jenkins acceda a Mocha para ejecutar las pruebas sin problemas durante el pipeline.
    Ahora Jenkins puede ejecutar las pruebas sin el error "mocha: not found".
    Este paso asegura que Jenkins tenga acceso a todas las herramientas necesarias para ejecutar las pruebas de manera efectiva.