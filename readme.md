<h4 align="center"> 
	Encurtado de Links  
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 

</p>

## ✅ Tecnologias

| Tecnologia         | Versão   |
| ------------------ | -------- |
| Node               | v20.11.0 |
| Express            |          |
| express-rate-limit | v7.2.0   |
| Mongoose           | v8.2.3   |
| ShortId            | v2.2.16  |
| Docker             | v3.8     |
| Docker compose     |          |

## 💻 Sobre o projeto

Projeto encurtador de url com validações e containização dos serviços.A idéia do
produto é um usuário possuir uma url da internet e encurta-lo para utilizar em outros
sites ou redes sociais.

## 🔐 Segurança

Rate Limit para evitar muitas requisições seguidas, para testar, está definido que o
usuário poderá fazer 5 requisições seguidas e foi estipulado um tempo de 1 minuto,
para poder realizar novamente a requisição.

## 🎨 Layout

Layout ainda a definir

---

## 🚀 Como executar o projeto

💡O projeto está em um container junto com o banco de dados.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes
ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). Além
disto é bom ter um editor para trabalhar com o código como
[VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone  https://github.com/Williamluqui/encurtadordelink.git

# Instale as dependências caso queira (o docker já faz o processo de rodar na sua máquina).
$ npm install


# Rodar o docker compose
# Obs.:É necessario ter o docker instalado na máquina

$ docker-compose up --build
# Com esse comando já será capaz de fazer todo o processo de encurtamento da url.
```

#### 🧭 Rodando a aplicação

```bash
# Utilize a sua ferramenta para realizar a requisição.

Body

{"url":"https://suaurlparaencurtar.com"}

Rotas

$ POST http://localhost:3333/cutmyurl
$ GET http://localhost:3333/mUEoWKfEJ

# Basta clicar no link urlShort para ser redirecionado para o link original, ex:
```

```bash
Response
{
    "data": {
        "_id": "6600fd173a01c69ea86f2796",
        "url": "https://suaurlparaencurtar.com",
        "hash": "mUEoWKfEJ",
        "urlShort": "https://localhost:3333/mUEoWKfEJ",
        "createdAt": "2024-03-25T04:27:03.749Z",
        "updatedAt": "2024-03-25T04:27:03.749Z",
        "__v": 0
    }
}
```

```bash
Base do arquivo .env do container

DATABASE_URL="mongodb://root:example@mongo:27017/"

# Essas são credênciais válidas para a comunicação entre o mongo e a aplicação.
```
