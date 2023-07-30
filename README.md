# Projeto final - s18 | Ficha treino-musculação-API </b>

Projeto de conclusão do curso de Back-End com foco em Javascript, turma On22-B3. Esta API é um projeto para cadastrar treinos de musculação.


## <b> Objetivo </b>
</br>
Essa aplicação tem como propósito ajudar a manipular dados de treino de musculação, tendo em vista que utilizar uma ficha auxilia no controle do rendimento do treino. A temática utilizada como pano de fundo no desenvolvimento dessa API foi escolhida pensando na importância que a atividade física tem em promover qualidade de vida, contribuindo para o bem-estar geral e a prevenção de diversas doenças crônicas.


## <b> Funcionalidades </b>
</br>

✔️ Cadastrar novos treinos

✔️ Listar todas os treinos

✔️ Visualizar um treino específico pelo ID

✔️ Atualizar um treino específico pelo ID

✔️ Remover um treino específico pelo ID no banco de dados

________________________________________
### 🏗️ **Arquitetura MVC**
________________________________________

```
📁 ficha_treino API
|
|- 📁 node_modules
|- 📁 Swagger
| |- 📄 swagger_output.json
|- 📁 src
| |- 📁 database
| |- 📄 bdConnect.js
| |- 📁 controllers
|- 📄 treinoController.js
| |- 📁 models
|- 📄 treinoModel.js

| |- 📁 routes
|- 📄 treinoRoutes.
|
| |- 📄 app.js
|
|- 📄 .env
|- 📄 .env.example
|- 📄 .gitignore
|- 📄 package-lock.json
|- 📄 pakage.json
|- 📄 README.md
|- 📄 server.js
|- 📄 Swagger.js
|- 📁 material
```
<br>

<br>
```
</br>

## <b> Tecnologias e Dependências </b>
</br>

| FERRAMENTA   |  DESCRIÇÃO |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interação com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
| `npm`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram guardados.|
| `Postman` | Interface gráfica para realizar os testes.|
| `dotenv`| Dependência  para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa prática para configurações em geral.|
| `swagger-autogen`| Gera a documentação.|
| `Reder`| hospeda a documentação.|


</br>
</br>
A documentação da API está disponível nos endereços:
- Hospedagem do [projeto](https://api-treino.onrender.com/).
- [Documentação](https://api-treino.onrender.com/minha-rota-de-documentacao/).
- Apresentação do [projeto](https://www.canva.com/design/DAFp-Dq9wR4/NsZUtU4GK3UVsBXjhPwgSw/view?utm_content=DAFp-Dq9wR4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink).

</br>

## <b> Instalações </b>

```bash
# Clonar o repositório
$ git clone https://github.com/ModoEconomico/Projeto-Final-S18

# Entrar na pasta do repositório
$ cd Ficha_TreinoInferiores_API

# Dependências Instaladas
- npm install
- npm init -y
- npm install express@^4.18.2
- npm install cors@^2.8.5
- npm install nodemon@^3.0.1
- npm install mongoose@^7.4.1
- npm i dotenv@^8.6.0
- npm install bcrypt@5.1.0
- npm install jsonwebtoken@^9.0.1
- npm install swagger-autogen@^2.23.5
- npm install swagger-ui-express@^5.0.0

# Executar o servidor
$ npm start
```
</br>

### 📌 **Rotas - EndPoint**

<br>

📢 Todas as rotas existentes neste projeto:

- Dança

| Verbo | EndPoint | Descrição da Rota | Status | 
| ------ | --------------- | -------------------------------------------|
| POST | /add | Adicionar um novo exercício | 201 |
| GET | /all | Listar todos os exercícios | 200 | |
| PATCH | /:id | Altera um exercício | 200 | 
| GET | /:id | Mostrar os exercícios pelo ID | 200 | 
| DELETE | /:id | Remove um exercício | 200 |
<br>

 ## <b> Agradecimentos </b>
</br>
