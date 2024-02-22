FROM node:11.1.0-alpine

WORKDIR /app

# Agregar package.json y package-lock.json para instalar dependencias
ADD package.json package-lock.json /app/
RUN npm install

# Exponer el puerto 3000 (si es necesario para tu aplicación)
EXPOSE 3000

# Agregar el código de la aplicación
ADD . /app

# CMD ["node", "index"]  <-- Comentado para que se ejecute 'npm test' en su lugar
# Ejecutar las pruebas con mocha
CMD ["npm", "test"]
