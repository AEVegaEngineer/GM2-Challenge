# Coding-interview-backend-level-3 resuelto

## Instrucciones para ejecutar y probar el proyecto usando Dev Containers en VSCode

### Requisitos previos

- Visual Studio Code instalado
- Extensión "Remote - Containers" de VSCode instalada
- Docker Desktop instalado y en ejecución

### Configuración del entorno de desarrollo

1. Abre el proyecto en Visual Studio Code.

2. Asegúrate de que Docker Desktop esté en ejecución.

3. En la esquina inferior izquierda de VSCode, haz clic en el icono verde "><" o presiona F1 y busca "Remote-Containers: Reopen in Container".

4. VSCode reconstruirá y abrirá el proyecto en un contenedor. Este proceso puede tardar unos minutos la primera vez.

## Ejecutar el proyecto

Una vez que el contenedor esté en funcionamiento:

1. Abre una nueva terminal en VSCode (Terminal -> New Terminal).

2. Ejecuta el siguiente comando para iniciar el servidor de desarrollo: `npm run dev`

3. El servidor debería estar ahora en funcionamiento y accesible.

## Ejecutar pruebas

Para ejecutar las pruebas del proyecto:

1. En la terminal de VSCode dentro del contenedor, ejecuta: `npm run test`

2. Esto ejecutará todas las pruebas configuradas en el proyecto.

## Notas adicionales

- Si necesitas detener el servidor, puedes usar Ctrl+C en la terminal.
- Para salir del contenedor y volver a tu entorno local, haz clic en el botón "><" en la esquina inferior izquierda y selecciona "Reopen folder locally".
- Si realizas cambios en la configuración del contenedor, es posible que necesites reconstruirlo. Puedes hacerlo seleccionando "Rebuild Container" en el menú del botón "><".

# Muy agradecido por la oportunidad.
