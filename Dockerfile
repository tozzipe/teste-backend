FROM node:alpine
WORKDIR /app
COPY package*.json ./
COPY .env ./

RUN yarn

# Adicione a instalação global do Sequelize CLI (opcional)
RUN yarn global add sequelize-cli

COPY . .

EXPOSE 3000

# Comando para esperar o serviço do banco de dados estar pronto
CMD ["wait-for-it", "db:3306", "--", "sh", "-c", "sequelize db:migrate && sequelize db:seed:all && npm start"]
