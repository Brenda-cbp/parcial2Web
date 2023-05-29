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
En las secciones anterioes y en la sección siguiente, se habla sobre las decisiones, componenes que se usaron y diseño. Todo esto fue el proceso para la realización del parcial. Sin embargo, primero se decidió comenzar por la construcción de los componentes de Books y Detail, luego se realizó el forms, junto con sus validaciones. Se probó todo y luego se hizo el manejo de los roles. Finalmente, se realizaron ajustes en los css y se realizó todo el proceso de internacionalización. 

En esta sección, se evitará hacer repetición de lo ya mencionado en este README, por lo que se mostrarán los resultados y los casos que se manejaron en la página. Primero se mostrarán los Resultados en Inglés, y luego en Español. 
Antes de cada imagen se muestra una pequeña descripción con más información.
#### Log-in : Inglés
Inicio de la página Login en Inglés:
![image](https://github.com/Brenda-cbp/parcial2Web/assets/60158853/5ed15180-b96e-4625-b327-28bbd2d5e727)
Inicio de la página Login en Inglés con errores por campos de Email y Contraseña vacíos:
![image](https://github.com/Brenda-cbp/parcial2Web/assets/60158853/24458a57-3984-4f7b-8eaa-5addc18faa25)
Inicio de la página Login en Inglés con errores por no cumplir validaciones o reglas establecidas (formato de email y largo de la contraseña):
![image](https://github.com/Brenda-cbp/parcial2Web/assets/60158853/e2b50309-09d2-41d3-a6aa-4ea1fe478dec)

#### HomePage : Inglés
HomePage en Inglés, después de hacer login satisfactoriamente:
![image](https://github.com/Brenda-cbp/parcial2Web/assets/60158853/1501afdd-2bd7-4c30-b937-569e3d224687)
##### HomePage para rol No administrativo : Inglés
Vista en Inglés con el detalle de un libro que tiene "Available_onile" en **false. (se muestra No)** Esta vista es para un **NO** administrativo:
![image](https://github.com/Brenda-cbp/parcial2Web/assets/60158853/fc491740-354e-4fc9-a09d-54afc12529a6)
Vista en Inglés con el detalle de un libro que tiene "Available_onile" en **true. (se muestra Yes)** Esta vista es para un **NO** administrativo:
![image](https://github.com/Brenda-cbp/parcial2Web/assets/60158853/be618c61-533d-482e-bd7c-851e3dae81c3)

##### Homepage para rol administrativo : Inglés
Note que, al ser el Rol Administrativo, la información se muestra a manera de input para que esta se pueda editar (también se puede notar el cursor para editar en las imagenes)
Vista en Inglés con el detalle de un libro que tiene "Available_onile" en **false. (se muestra No)** Esta vista es para un **administrativo**:
![image](https://github.com/Brenda-cbp/parcial2Web/assets/60158853/2bd9282a-6326-4140-a3f2-b2dc31b138a2)
Vista en Inglés con el detalle de un libro que tiene "Available_onile" en **true. (se muestra Yes)** Esta vista es para un **administrativo**:
![image](https://github.com/Brenda-cbp/parcial2Web/assets/60158853/22aae9c1-fed9-4810-aa6b-d5d4f9cd95be)

#### Log-in : Español 
Inicio de la página Login en Español:
![image](https://github.com/Brenda-cbp/parcial2Web/assets/60158853/f0add610-03a5-4cd5-8614-04d92fb82c8b)
Inicio de la página Login en Español con errores por campos de Email y Contraseña vacíos:
![image](https://github.com/Brenda-cbp/parcial2Web/assets/60158853/c24862dc-d34c-4f18-96a9-d471b710f1da)
Inicio de la página Login en Español con errores por no cumplir validaciones o reglas establecidas (formato de email y largo de la contraseña):
![image](https://github.com/Brenda-cbp/parcial2Web/assets/60158853/536451c1-e255-455e-8f84-4b333d6b3c65)

#### HomaPage : Español
HomePage en Español, después de hacer login satisfactoriamente:
![image](https://github.com/Brenda-cbp/parcial2Web/assets/60158853/833ad3bd-2959-439b-9a9d-e6345ac30f34)

##### Homepage para rol No administrativo : Español
Vista en Español con el detalle de un libro que tiene "Available_onile" en **false. (se muestra No)** Esta vista es para un **NO** administrativo:
![image](https://github.com/Brenda-cbp/parcial2Web/assets/60158853/a7fedfb8-a54c-4346-869a-a190ec4733da)
Vista en Español con el detalle de un libro que tiene "Available_onile" en **true. (se muestra Sí)** Esta vista es para un **NO** administrativo:
![image](https://github.com/Brenda-cbp/parcial2Web/assets/60158853/d1c97756-86ba-479b-ba7b-92b5364495ec)

##### Homepage para rol administrativo : Español
Note que, al ser el Rol Administrativo, la información se muestra a manera de input para que esta se pueda editar (también se puede notar el cursor para editar en las imagenes).
Vista en Español con el detalle de un libro que tiene "Available_onile" en **false. (se muestra No)** Esta vista es para un **administrativo**:
![image](https://github.com/Brenda-cbp/parcial2Web/assets/60158853/05c5e28d-3343-4ff3-8a40-932734a06909)
Vista en Español con el detalle de un libro que tiene "Available_onile" en **true. (se muestra Sí)** Esta vista es para un **administrativo**:
![image](https://github.com/Brenda-cbp/parcial2Web/assets/60158853/e4e36fd9-4dbc-4a3a-8182-d1588f2db736)


## Descripción
Para el desarrollo de la aplicación se hizo uso de los siguientes componentes y elementos: 
1. Uso del hook de estado en react para el manejo de variables. (useState): Se usa para el manejo de variables como los errores de los formularios, los inputs de los formularios, las variables como la lista de libros y la información de un libro en específico)
2. Uso del hook de efecto para hacer las peticiones al Back cuando se renderiza el componente. (useEffect). Se utiliza en los componentes "book" y "detail". Esto para hacer los llamados al back para obtener la lista de libros y el detalle de libro escogido. Este hook se ejecuta después de que el componente se ha renderizado en el DOM.
3. Uso de React router para el manejo de las rutas. (useNavigate, useLocation, Route, Routes, BrowserRouter). 
  * Routes y Route se utilizan en el archivo "routes.jsx" para definir las dos rutas que se utilizan en el proyecto, las cuales son "/" para el Login y "/books" para la homepage
  * BrowserRouter se utiliza para habilitar la navegación y enrutamiento de la aplicación. Esto se usa en el archivo index.js
  * En el Login se utiliza useNavigate para crear una variable navigate, para hacer la redirección de la página cuando, al hacer login, se recibe el json de la petición con un estado 200. En este se pasa por parámetro el rol del usuario logueado, 
  * useLocation se utiliza en el componente de Books, para obtener el parámetro que se envío, el cual está descrito en el punto inmediatmente anterior. 
4. Uso componentes de react-bootstrap para el manejo de componentes responsivos de la aplicación. (Col, Row, Container, Button, Form, Card). Se utilizaron estos componentes para seguir lo indicado en el enunciado sobre como se debería ver el front)
5. Uso de componentes de la librería "react-intl" para realizar todo el proceso de internacionalización. (IntlProvider, FormattedMessage, useIntl)
* El primero se utiliza en el archivo Index.js para encapsular los componentes, especificar el lenguaje y el archivo de mensajes que se debe leer. 
* El segundo se usa para reemplazar el texto estático y reemplazarlo según el idioma que se esté manejando en el navegador. Para esto se usa un "id", y este se busca en el .json del lenguaje correspondiente. 
* El último se utiliza para obtener, según el id, la traduccion o valor correspondiente que se encuentra en el .json del lenguaje a traducir. La diferencia con el segundo, es que este no es como tal un componente que se renderiza. Este se usa cuando no se puede utilizar el segundo componente descrito, porque, si se llegara a utilizar, se obtendría un "[object:Object]". Este último componente se utiliza para la obtencion de los mensajes de error del formulario en el archivo "login.jsx", y para la traducción del contenido de "book.available_online", el cual, si es true, se muestra "Yes" o "Sí", según sea el caso. 
6. Uso de navigator para la obtención del idoma configurado en el Explorador. Esto se utiliza en el archivo Index.js de la siguiente manera ```userLanguage = navigator.language || navigator.userLanguage;```



