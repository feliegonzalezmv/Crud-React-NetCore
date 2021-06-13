# Crud-React-NetCore



_Este proyecto es un CRUD que se conecta a una API expuesta en un Web Service de Azure y que permite consultar una empresa, si esta existe, permite editar algunos datos
 para posteriormente enviar los datos actualizados a un Base de datos SQL. El sitio esta desplegado en github pages._

## Comenzando

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### Pre-requisitos

_Se debe contar con node instalado._

_Este proyecto utiliza la versión:_ `12.16.0`

### Instalación

_Para instalar correctamente el proyecto ejecutar los siguientes pasos._

_Clonar repositorio._

Link del repositorio: <https://github.com/feliegonzalezmv/Crud-React-NetCore>


_Instalar las dependencias._

`yarn || npm install`

_Ejecutar el proyecto._

`yarn start || npm start`


**Importante**: el proyecto en local solo funciona en navegador sin seguridad, debido a que al estar desplegado en azure,
si se lanzan peticiones desde el localhost, estas seran bloqueadas por CORS

_Para abir un navegador sin seguridad el:_

_Abrir la barra de busqueda y ejecutar._ `Windows+R`

_.Luego escribir el siguiente comando:_  `chrome.exe --user-data-dir="C:/Chrome dev session" --disable-web-security`


## Despliegue

_Para desplegar la aplicación:._


-Ejecutar el comando

`yarn build`

-Tomar los archivos de la carpeta 'build' copiarlos y crear una nueva carpeta llamada docs en la raiz del repositorio

-Luego ejecutar `git push` para subir los cambios, esto desplegara automáticamente los cambios en la web

-Cambiar el `index.html` por `index.aspx`

-Desplegar en las pagina el archivo `index.aspx`

## Construido con

- [.Net Core](https://dotnet.microsoft.com/) - Framework API Backend
- [React](https://es.reactjs.org/) - Framework web usado
- [Material UI](https://material-ui.com/) - UI Framework

## Autor

- **Juan Felipe González Ortiz** - _Desarrollador_ - [feliegonzalezmv](https://github.com/feliegonzalezmv)

## Change.log

13/06/2021

-Se despliega la app en github pages
