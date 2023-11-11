README 
CREACIÓN DE APLICACIÓN SENCILLA WEB 
1.	Realización de una aplicación web sencilla con tecnología reactiva.
Realicé un aplicativo web de un chat sencillo, se hizo uso de node.js y sockets
2.	La funcionalidad que debe presentar este chat es el logueo del usuario que ingresará, como se ve en las siguientes imagenes:
![image](https://github.com/jeforero0315/taller3/assets/149447477/e7036362-72b8-4cbc-adb1-58c06918a0ac)

 
Se puede escribir y recibir el mensaje de un usuario a otro:
 ![image](https://github.com/jeforero0315/taller3/assets/149447477/afdaca1f-3349-4b72-8a13-82e22912f51b)

3.	Se crea la imagen en docker y se sube a Docker Hub
![image](https://github.com/jeforero0315/taller3/assets/149447477/66d9f3ac-50c9-4a65-ac2c-5b9890a27458)


4.	Teniendo la imagen en docker y la aplicación funcionando de forma correcta, se procede a hacer el proceso de AWS CLI, en donde se debe hacer la configuración respectiva, con los siguientes datos:
![image](https://github.com/jeforero0315/taller3/assets/149447477/f1f6488b-4e37-42b3-9880-68ff8a3528ce)


5.	Se agregan esos datos al shell de aws CLI
![image](https://github.com/jeforero0315/taller3/assets/149447477/80f1bda5-9af3-40fb-96c9-b2d067e85a9c)

6.	Se hace la creación del par de llaves

![image](https://github.com/jeforero0315/taller3/assets/149447477/44c72134-9266-40a1-854d-ebb8152a45c4)


7.	Se rectifica la existencia de las llaves en la carpeta

![image](https://github.com/jeforero0315/taller3/assets/149447477/0f87193e-b4ef-444d-bdb2-712d672a81d9)

8.	Se hace la ejecución de Shell script, debe estar en la misma ruta

![image](https://github.com/jeforero0315/taller3/assets/149447477/678c743d-57d1-4c67-b856-4fe1dc96bc4a)


Script: (el script está adjunto en git)

![image](https://github.com/jeforero0315/taller3/assets/149447477/c5a1bf75-120d-43f8-b6e1-2b53bb83dc9e)


9.	Se ejecuta el proceso del script para que se inicialicen las instancias y se instale docker.

 ![image](https://github.com/jeforero0315/taller3/assets/149447477/4c9f5132-db7e-4501-b152-4856f68047ec)

<img width="422" alt="image" src="https://github.com/jeforero0315/taller3/assets/149447477/609cdb86-4173-41af-a0b3-c48aeeb882a2">

![image](https://github.com/jeforero0315/taller3/assets/149447477/fad3b2b8-262a-4ed7-b3f7-fa35517278b6)

10.	Se comprueba que el aplicativo web funcione en 3 instancias:

 ![image](https://github.com/jeforero0315/taller3/assets/149447477/00ef5c5d-7b08-4724-bbb8-5c4f7343c834)

Instancia 1
 
![image](https://github.com/jeforero0315/taller3/assets/149447477/2f3c2f2e-14b6-4077-8e80-ecd865494111)

![image](https://github.com/jeforero0315/taller3/assets/149447477/06cb6923-cc5f-431e-a330-a79de86d6bb5)

Nota: para el correcto funcionamiento, se tuvo que cambiar al puerto correspondiente, ya que esta aplicación se ejecuta en el puerto 2000

![image](https://github.com/jeforero0315/taller3/assets/149447477/ce3909e4-2827-4eb7-98d9-acacaaef233c)

Instancia 2
![image](https://github.com/jeforero0315/taller3/assets/149447477/35d3a86b-4d3c-4ca4-ab41-dd0c5ba0d5b2)

![image](https://github.com/jeforero0315/taller3/assets/149447477/f6a84e86-8579-4d62-9b61-6ab353225a7a)

![image](https://github.com/jeforero0315/taller3/assets/149447477/7bdb560c-40e9-43f7-a0e1-c39da28e6aa4)

![image](https://github.com/jeforero0315/taller3/assets/149447477/e53cd852-b564-488a-9fa9-87523d85ab38)

![image](https://github.com/jeforero0315/taller3/assets/149447477/37e06d02-8715-43a8-ae50-b9188bc71945)

