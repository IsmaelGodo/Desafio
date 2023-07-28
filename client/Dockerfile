# Utilizar la imagen base de Node.js 14
FROM node:14

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el código del cliente al directorio de trabajo
COPY . .

# Instalar las dependencias del cliente
RUN npm install

# Iniciar el cliente
CMD ["sh", "-c", "cd client && npm run dev -- --port 5173 --host 0.0.0.0"]