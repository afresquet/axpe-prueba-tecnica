# AXPE Prueba Técnica - Alvaro Fresquet

Esta solución utiliza la librería `@react-google-maps/api` como interfaz con la API de Google.

La app consiste de un mapa a pantalla completa con un input flotando en la parte de arriba. Al buscar en dicho input aparecen las sugerencias de lugares.

Al seleccionar un lugar, este es despachado a Redux. Luego un componente de markers se subscribe al estado de Redux, y muestra los markers.

## Instalación

1. Clonar este repositorio.
2. Instalar [Node.JS](www.nodejs.org).
3. Introducir la API Key de Google (require Javascript Maps API y Places API) en un archivo `.env` en la raíz del proyecto (referirse al archivo `.env.example` para un ejemplo).
4. Ejecutar el comando `npm install`.
5. Ejecutar el comando `npm start`.
