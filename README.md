# Coding-interview-backend-level-3 resuelto

## Instrucciones para ejecutar y probar el proyecto usando Dev Containers en VSCode

### Requisitos previos

- Visual Studio Code instalado
- Extensión "Remote - Containers" de VSCode instalada
- Docker Desktop instalado y en ejecución
- Clonar el repositorio
- Instalar las dependencias ejecutando: `npm install`

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

## Endpoints para pruebas locales al iniciar el servidor en desarrollo

1. ping: 
```
curl --location 'http://localhost:3000/ping'
```

2. Create Item: 
```
curl --location 'http://localhost:3000/items' \
--header 'Content-Type: application/json' \
--data '{
  "name": "The third item",
  "price": 30.31
}'
```

3. Get All Items: 
```
curl --location 'http://localhost:3000/items'
```

4. Get Item by ID: 
```
curl --location 'http://localhost:3000/items/7'
```

5. Update Item
```
curl --location --request PUT 'http://localhost:3000/items/13' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Item 13 Updated",
    "price": 11.00
}'
```

6. Delete Item
```
curl --location --request DELETE 'http://localhost:3000/items/1' \
--header 'Content-Type: application/json' \
--data '{
}'
```

7. Wipe All Items Data (Util para limpiar la base de datos antes de ejecutar el script de pruebas)
```
curl --location --request DELETE 'http://localhost:3000/items' \
--header 'Content-Type: application/json' \
--data '{
}'
```

## Notas adicionales

- Si necesitas detener el servidor, puedes usar Ctrl+C en la terminal.
- Para salir del contenedor y volver a tu entorno local, haz clic en el botón "><" en la esquina inferior izquierda y selecciona "Reopen folder locally".
- Si realizas cambios en la configuración del contenedor, es posible que necesites reconstruirlo. Puedes hacerlo seleccionando "Rebuild Container" en el menú del botón "><".

# Muy agradecido por la oportunidad.
