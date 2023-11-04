# Use uma imagem base do Node.js
FROM node:14

# Crie o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copie o arquivo package.json e o arquivo package-lock.json (se existir) para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do aplicativo
RUN npm install

# Copie o código-fonte do aplicativo para o diretório de trabalho
COPY . .

# Exponha a porta em que a aplicação será executada
EXPOSE 3000

# Comando para esperar o serviço do banco de dados estar pronto
CMD ["bash", "-c", "npx sequelize db:migrate && npx sequelize db:seed:all && npm start"]
