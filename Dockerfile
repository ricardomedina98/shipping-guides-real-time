# Usar la imagen oficial de Node.js como imagen base
FROM node:14

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar los archivos de paquetes y sus bloqueos
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar todos los archivos del proyecto al directorio de trabajo
COPY . .

# Exponer el puerto en el que la app se ejecuta
EXPOSE 3000

# Comando para ejecutar la app
CMD ["node", "app.js"]