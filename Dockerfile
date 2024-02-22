FROM node:11.1.0-alpine

WORKDIR /app

# Instalar Mocha globalmente
RUN npm install -g mocha

# Agregar package.json y package-lock.json para instalar dependencias
ADD package.json package-lock.json /app/
RUN npm install

# Exponer el puerto 3000 (si es necesario para tu aplicación)
EXPOSE 3000

# Agregar el código de la aplicación
ADD . /app

# Ejecutar las pruebas con mocha
CMD ["npm", "test"]



