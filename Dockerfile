# Usa una imagen base con Node.js
FROM node:16

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json al directorio de trabajo
COPY package*.json ./


# Instala las dependencias
RUN npm install

# Copia el resto de la aplicación
COPY . .

#
EXPOSE 80

# Ejecuta tu aplicación Node.js
CMD ["node", "server.js"]
