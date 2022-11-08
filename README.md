# Distribucion de bombillos

Un electricista muy cuidadoso está tratando de iluminar al más bajo costo posible las
habitaciones de sus clientes. Las habitaciones que él ilumina, siempre son habitaciones
en forma de matriz. Como los bombillos son muy costosos, él trata de
iluminar toda la habitación utilizando la menor cantidad de los mismos.

## Instalación

El proyecto esta configurado para funcionar con docker y docker-compose, es necesario instalar los siguientes componentes.

[Docker](https://www.docker.com)

[Docker-Compose](https://docs.docker.com/compose/)

Luego de tener instalado todo se necesita ejecutar el siguiente comando en la raiz.

```bash
$ docker-compose up
```

Otra opcion es intalar manualmente el proyecto con npm o yarn situandonos en la carpeta client y servidor respectivamente.

Server

```bash
$ yarn  install
$ yarn run start:dev
```

client

```bash
$ yarn  install
$ yarn run start
```

## Uso

En la carpeta server se encuentran varios archivos de prueba, se puede subir cualquier archivo con una matriz, del siguiente formato.

```bash
000
101
100
```

solo es necesario poner 0 o 1 y asegurarnos de que todas las lineas contenan la misma cantidad de caracteres, cada linea esta separada por un enter, evitando dejar lineas en blanco al final.
