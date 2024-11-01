1. Visão Geral
Este projeto consiste em uma API construída com Node.js, um front-end em React.js, utilizando o banco de dados PostgreSQL. Também são fornecidos testes automatizados utilizando Jest para a API e o front-end, e Cypress para testes end-to-end (E2E) no front-end.

Estrutura do Projeto:

project-root/
├── API/         # API em Node.js
│   ├── tests/   # Testes da API com Jest
│   ├── package.json
|   |---index.js    
│   ├── Dockerfile
├── FRONT/client/    # Front-end em React.js
│   ├── cypress/ # Testes E2E com Cypress
│   ├── src/
│   ├── package.json
│   ├── Dockerfile
├── docker-compose.yml


2. Instalação de Dependências
2.1. Dependências para a API (Node.js)
Navegue até o diretório da API:

cd API

Instale as dependências:

npm install

2.2. Dependências para o Front-end (React.js)
Navegue até o diretório do front-end:

cd FRONT\client

Instale as dependências:

npm install


3. Configuração do Banco de Dados PostgreSQL
Se você está rodando o banco de dados localmente, configure o PostgreSQL com os seguintes detalhes (ou modifique conforme necessário, estão presentes em index.js):

POSTGRES_USER=postgres
POSTGRES_PASSWORD=123456
POSTGRES_DB=appdb
POSTGRES_HOST=localhost
POSTGRES_PORT=5432

Criar Tabela no PostgreSQL
Crie as tabelas necessárias no banco:

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  description TEXT
);


4. Executando a Aplicação
4.1. Executando a API
Navegue até o diretório da API e inicie o servidor:

cd API
node index.js

A API estará rodando no http://localhost:5000.

4.2. Executando o Front-end
Navegue até o diretório do front-end e inicie o servidor:

cd FRONT\client
npm start

O front-end estará rodando no http://localhost:3000.

5. Executando os Testes
5.1. Testes da API com Jest
Para rodar os testes da API, navegue até o diretório da API e execute:

npm test

5.3. Testes E2E do Front-end com Cypress
Para executar os testes end-to-end no front-end usando Cypress, siga os passos:

Certifique-se de que o front-end está rodando (npm start).

Abra o Cypress com o seguinte comando:

npx cypress open

Se preferir rodar os testes em modo headless:

npx cypress run


Funcionalidades: Este codigo apresenta um CRUD de "itens", podendo cadastrar/visualizar/editar/remover nome e descrição.
Possui testes automatizados de API e E2E. 

Não conseguido implementar: 
Finalizar execução de testes unitários para o front-end: Devido a um erro que não corrigi a tempo que impedia de executar todos os testes, esse erro envolve as depêndencias instaladas no projeto.
Finalizar execução com Docker: Devido ao processo lento para subir um container, não foi possivel finalizar a execução final do projeto com integração ao docker, foi apresentado erros ao subir a API para o docker.

Porque escolhido as tecnologias apresentadas.

Node.js, React.js e Cypress: Verifiquei em uma das vagas de desenvolvimento que já foram fechadas, que o Fiesc utiliza o Node.js e React.js, então busquei realizar um sistema simples na mesma linguagem. Utilizei Cypress devido a maior facilidade, tenho já um projeto pessoal finalizado que busquei realizar testes E2E com Cypress.


(Está presente os meus documentos no repositório como minha comprovação de conclusão escolar, e minha CNH).


# Processo seletivo - QA

Bem vindo, candidato. 

Estamos felizes que você esteja participando do processo seletivo para a vaga de QA do Senai - Soluções Digitais.

A prova deverá utilizar as seguintes tecnologias: 
- Linguagem de programação orientada a objeto
- Banco de dados PostgreSQL
- Testes unitários
- Testes de API
- Testes E2E
- Docker
- GIT

Na etapa da entrevista deverá ser apresentado a aplicação em funcionamento.

## Instruções para a execução da prova

***O documento com os requisitos do que precisa ser desenvolvido será enviado por e-mail no horário previsto em edital.***

A prova será uma aplicação web dividida em backend e frontend. Você pode escolher a tecnologia que achar conveniente (PHP, JAVA, etc...).

Fica a escolha do candidato quais frameworks e servidores serão utilizados, desde que seja uma aplicação web. 

***O Banco utilizado na prova deverá ser PostgreSQL.***

Esse repositório possui apenas esse Readme com as instruções da prova. No entanto, **todo desenvolvimento deve ser commitado nesse repositório** até a data citada no email, enviado por nossa equipe.

Commite nesse repositório o script utilizado na criação do banco de dados (se aplicável).

Por fim, altere esse arquivo com as instruções de como poderemos testar o seu código (quais libs usar, qual servidor, etc) abaixo.

## Informações extras

- Descreva ao final deste documento (Readme.md) o detalhamento de funcionalidades implementadas, sejam elas já descritas na modelagem e / ou extras.
- Detalhar também as funcionalidades que não conseguiu implementar e o motivo.
- Caso tenha adicionado novas libs ou frameworks, descreva quais foram e porque dessa agregação.

(Escreva aqui as instruções para que possamos corrigir sua prova, bem como qualquer outra observação sobre a prova que achar pertinente compartilhar)
