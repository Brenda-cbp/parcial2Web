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
6. Se hacen pequeños cambios para que la aplicación tenga sentido por ejemplo: 
- Para el login, se deja solo como label "Email" o "Correo electrónico", según el idioma que corresponda (es decir,no se especifica el "username"). Esto debido a que en el enunciado se pide realizar una validación únicamente del email y no del user name, de igual manera, en el back solo se recibe el email. Por este motivo no se siguó el mockup original y no se tuvo en cuenta el username.
- En la traducción de "Forgot password?" se decidió traducir esto por "Recuperar contraseña".

### Proceso: 


## Descripción
Para el desarrollo de la aplicación se hizo uso de los siguientes componentes y elementos: 
* Uso del hook de estado en react para el manejo de variables. (useState): Se usa para el manejo de variables como los errores de los formularios, los inputs de los formularios, las variables como la lista de libros y la información de un libro en específico)
* Uso del hook de efecto para hacer las peticiones al Back cuando se renderiza el componente. (useEffect). Se utiliza en los componentes "book" y "detail". Esto para hacer los llamados al back para obtener la lista de libros y el detalle de libro escogido. Este hook se ejecuta después de que el componente se ha renderizado en el DOM.
* Uso de React router para el manejo de las rutas. (useNavigate, useLocation, Route, Routes, BrowserRouter). 
1. Routes y Route se utilizan en el archivo "routes.jsx" para definir las dos rutas que se utilizan en el proyecto, las cuales son "/" para el Login y "/books" para la homepage
2. BrowserRouter se utiliza para habilitar la navegación y enrutamiento de la aplicación. Esto se usa en el archivo index.js
3. En el Login se utiliza useNavigate para crear una variable navigate, para hacer la redirección de la página cuando, al hacer login, se recibe el json de la petición con un estado 200. En este se pasa por parámetro el rol del usuario logueado, 
4. useLocation se utiliza en el componente de Books, para obtener el parámetro que se envío, el cual está descrito en el punto inmediatmente anterior. 
* Uso componentes de react-bootstrap para el manejo de componentes responsivos de la aplicación. (Col, Row, Container, Button, Form, Card). Se utilizaron estos componentes para seguir lo indicado en el enunciado sobre como se debería ver el front)
* Uso de componentes de la librería "react-intl" para realizar todo el proceso de internacionalización. (IntlProvider, FormattedMessage, useIntl)
5. El primero se utiliza en el archivo Index.js para encapsular los componentes, especificar el lenguaje y el archivo de mensajes que se debe leer. 
6. El segundo se usa para reemplazar el texto estático y reemplazarlo según el idioma que se esté manejando en el navegador. Para esto se usa un "id", y este se busca en el .json del lenguaje correspondiente. 
7. El último se utiliza para obtener, según el id, la traduccion o valor correspondiente que se encuentra en el .json del lenguaje a traducir. La diferencia con el segundo, es que este no es como tal un componente que se renderiza. Este se usa cuando no se puede utilizar el segundo componente descrito, porque, si se llegara a utilizar, se obtendría un "[object:Object]". Este último componente se utiliza para la obtencion de los mensajes de error del formulario en el archivo "login.jsx", y para la traducción del contenido de "book.available_online", el cual, si es true, se muestra "Yes" o "Sí", según sea el caso. 
* Uso de navigator para la obtención del idoma configurado en el Explorador. Esto se utiliza en el archivo Index.js de la siguiente manera ```userLanguage = navigator.language || navigator.userLanguage;```



