# Parcial realizado por: Brenda Catalina Barahona Pinilla 

## Tabla de contenido

1. [Instrucciones: Cómo correr el proyecto](#intrucciones)
2. [Detalles: Decisiones y proceso](#Detalles)
3. [Descripción: Elementos utilizados](#Descripcion)

## Instrucciones
### Prerequisitos:
Antes de comenzar, asegúrate de tener instalado lo siguiente en tu sistema:
- Node.js: [Descargar e instalar Node.js](https://nodejs.org)
- Instalar el repositorio para correr el back de la aplicacion. Las instrucciones y el repositorio se encuentran en el siguiente link https://github.com/isis3710-uniandes/Parcial2_BE_S2. Hay que tener en cuenta, que se debe habilitar los permisos de CORS, para esto seguir estos pasos: 
1. Con el repositorio abrierto con el editor de preferencia, abrir el archivo "main.ts"
2. Debajo de la línea de código ```const app = await NestFactory.create(AppModule);``` colocar ```app.enableCors();``` y guardar los cambios.
3. Seguir las instrucciones descritas en el repositorio del Back para correr la aplicación.


### Instalación 
1. Clonar el repositorio actual: ```git clone https://github.com/Brenda-cbp/parcial2Web.git```
2. Ir a la carpeta "/parcial2".
3. Correr ```npm i``` en la terminal.
4. Luego, ```npm start``` . Esto corre la aplicación en "development mode".

## Detalles

### Decisiones: 
1. Se decidió no hacer uso de las urls que estaban desplegadas en el back, esto por tres motivos:  
  - Se tiene un número de créditos limitados (o solicitudes) para el back. 
  - Existía la posibilidad de que, por tantas peticiones al tiempo (en el tiempo del parcial), el back se cayera. 
  - En el despliegue, y al leer las URLs, aparecía un problema de CORS, para el cual se tuvo que descargar el repo del back en local y modificarlo. (Esta modificación se mencionó en los prerequisitos de este README.
2. El proyecto sigue la siguiente estructura destacable: 
  - Los componentes y los .css de los estilos manejados se encuentran en la carpeta "Components"
  - Los archivos para manejar la internacionalización se encuentran en la carpeta "locales"
  - El archivo donde se declaran las rutas se encuentra en la carpeta "routes"
  - Se eliminan los archivos App.js y App.css. 
  - Se hace uso de Index.js donde se llaman las rutas declaradas anteriormente.
3. En el proceso de internacionalización se decidió manejar 2 idiomas, Ingles y Español.
4. Para este mismo proceso (internacionalización) se dejaron nombres intactos los nombres propios, como "Tu Librería Aliada".
5. Para el manejo del Rol, se hace uso de los paramétros entre componentes.

### Proceso: 


## Descripción

Aquí puedes escribir la conclusión.


