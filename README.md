# Como correr la aplicacion

### Requisitos:
- Tener docker instalado.
- Terner nodejs instalado



### Backend

<a href="http://localhost:8000/api/v1/video/">Backend</a>

<p>
En el directorio raiz del proyecto debe correr el comando de docker, esto levantara el backend en django en modo desarrallo asegure de que la envar ```DEBUG=1``` pude verificarlo entrando al contenedor backend y haciendo ```echo $DEBUG``` y debe salir ```1```

<code>docker-compose up</code>

#### API Doc
- La documentacion de la api la puedes encontrar en la carpeta ```/docs/postman-collections``` encontraras dos archivos json, estos son colecciones de posmant, debes importarlos dentro de pposmas y podras ver tanto las variables de entorno como las request.


### Frontend
<a href="http://localhost:5173/">Frontend</a>

Correr los comando dentro de la carpera de frontend.

- Instalar las dependencias ```yarn install``
- Correr el comando ```yarn dev``` o ```npm run dev```

</p>

- ### ¿Cómo decidió las opciones técnicas y arquitectónicas utilizadas como parte de su solución?

La decicion de las diferentes herramientas a utiliazr nacen, primeramente de los requerimientos expuestos en el proyecto.

Luego de eso se decide implementar docker compose debido a la orquestacion de los diferentes contenedores a utilizar.

Se utilizo como servidor nginx por su facilidad y versatilidad en la configuracio, ademas porque es muy liviano y robusto.

Se Decidio usar como basae de dato SQLite debido a que los datos se deseaban mantener igual a los del json y asi poder implementar todo el poder de una base de datos y no usar el json de demo directamente.

Se escogio Vite como handler de react deviddo a que en algun momento se tuvo la intencion de renderizar el template directamente desde djando, pero por cuestiones de tiempo no se alcanzo a implementar. Otra gran ventaja es su velocidad para la compilacion.

Las demas librerias usadas como django_rest_framework, rtk_query entre otras se usaron porque ya vengo trabajando con ellas de hace varios meses y son extremadamente fiables para las implementacionnes en las que he podido trabajar.

- ¿Hay alguna mejora que pueda hacer en su envío?

Implementar los puntos que hicieron falta, como las pruebas E2E, y Unitarias, tanto de front como de backend.

Mejorar aspectos a nivel del scafolding, y organizacion de archivos.

Configurar el linter, husky, pretier entre otras herramientas.

Configurar los entornos dev y prod.

Optimizar las imagenes docker y la renderizacion del codigo js.


- ¿Qué haría de manera diferente si se le asignara más tiempo?

Configurar el renderizado de react desde django.

Mejoar la manera como se cargan las imagenes.

Optimizar el codigo del backend par a usar la authenticacion en las rutas

terminar el login de.

Construir las rutas faltantes.

Hacer los script par a CI/CD

Ajuustar issues visuales en algunos componentes.

exit

### Scrips Utiles
Variable de entorno: export DEBUG=1
Guardar e un fichero las bibliotecas instaladas: pip freeze > requirements.txt
Correr usando el server de Guinicorn: python -m gunicorn checdoc.wsgi:application --reload --workers 4
