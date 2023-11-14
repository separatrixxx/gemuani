# Укажите базовый образ
FROM node:latest

# Создайте директорию приложения
WORKDIR /usr/src/app

# Установите зависимости приложения
COPY package*.json ./
RUN npm install

# Скопируйте исходный код приложения
COPY . .

# Соберите приложение
RUN npm run build

# Укажите порт, который будет слушать приложение
EXPOSE 3000

# Запустите приложение
CMD [ "npm", "run", "start" ]