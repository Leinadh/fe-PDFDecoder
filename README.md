# fe-PDFDecoder

## Aplicacion
Aplicacion desarrollada en la Hackathon BBVA 2020
Puedes ver el repositorio del beckend aqui https://github.com/Leinadh/be-PDFDecoder

Esta aplicacion consiste en detectar variables financieras como son activos, pasivos, patrimonios, etc de PYMES que desean solicitar algun servicio del banco. Actualmente la deteccion de estas se realizar de manera manual. Por ello, es necesario automatizar el proceso mencionado. Para ello, se uso el servicio de AWS Textract como OCR(Optical Character Recognition). Luego, a partir de algoritmos de machine learning y analisis de texto, se detectaron las variables correspondientes.  

Pasos:
1. Cargar documentos de Balance General y/o Estado de Perdidas y Ganancias a la aplicacion web.
2. La aplicacion muestra como resultado las variables encontradas asi como los valores. Ademas, se pueden editar los valores de las variables que no se pudieron enncontrar asi como observar las variables y valores resaltadas en el documento.
3. Luego de validar la informacion, se pueden descargar los resultados.

   Paso 1<br/>
   <img src="images/front1.jpeg" width="500" />

   Paso 2<br/>
   <img src="images/front3.jpeg" width="500" />
   <img src="images/front4.jpeg" width="500" />
   <img src="images/front5.jpeg" width="500" />
   <img src="images/front10.jpeg" width="500" />
   
   Paso 3<br/>
   <img src="images/front11.jpeg" width="500" />

   
