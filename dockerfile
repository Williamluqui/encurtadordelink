
# Ultima versão node 
FROM node:lts-alpine3.19

ENV NODE_VERSION 20.11.1

# Cria um diretorio
RUN mkdir -p /usr/src/app
# Define o diretório de trabalho
WORKDIR /usr/src/app

# Atualizar e Instalar dependencias 
RUN apk update && apk upgrade

# Removendo node_modules da pasta raiz 
RUN rm -rf ./node_modules
RUN rm -rf package-lock.json

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

RUN npm run build

RUN npm prisma generate

EXPOSE 3333 

# Comando padrão para iniciar a aplicação
CMD [ "npm", "start" ]