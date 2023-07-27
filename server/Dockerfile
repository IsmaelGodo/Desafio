# Utilizar la imagen base de Node.js 14
FROM node:14

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el código del servidor al directorio de trabajo
COPY ./server ./server

# Instalar las dependencias del servidor
RUN cd server && npm install

# Definir una variable de entorno para la conexión a PostgreSQL
ENV PG_USER=
ENV PG_HOST=
ENV PG_DATABASE=
ENV PG_PASSWORD=

# Exponer el puerto 4000 para el servidor Node.js
EXPOSE 4000

# Iniciar el servidor
CMD ["sh", "-c", "cd server && npm start"]