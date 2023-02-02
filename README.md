# Go Dev!
![node version](https://img.shields.io/static/v1?label=node&message=v16.16.0&color=blue)
![jdk version](https://img.shields.io/static/v1?label=JDK&message=v19&color=red)
![postgresSQL version](https://img.shields.io/static/v1?label=PostgresSQL&message=v15&color=green)

Projeto de final de curso, feito por [Gabriela Gonçalves](https://github.com/gabriela-ogoncalves) e [Marco Paulo Cardoso](https://github.com/marcopaulo7), com as tecnologias:
- [React JS](https://github.com/facebook/create-react-app)
- [JDK](https://www.oracle.com/java/technologies/javase/jdk19-archive-downloads.html)
- [PostgresSQL 15](https://www.postgresql.org/download/)

Implementamos uma plataforma de ensino de programação para pessoas leigas, curiosas, que estão ingressando agora na área de Tecnologia da Informação e para quem deseja aprofundar conceitos. Baseado no conceito do Duolingo, com o Go Dev você pode aprender programação brincando.

## Requisitos

* [JDK](https://www.oracle.com/java/technologies/javase/jdk19-archive-downloads.html)
* [Postgres 15](https://www.postgresql.org/download/)

### Criando o banco de dados

Crie um banco de dados chamado `godev_db`. Você pode se guiar com a [documentação](https://www.postgresql.org/docs/current/tutorial-createdb.html).

## Configurando o projeto

Para configurar o `front-end` do projeto, você precisa rodar o comando abaixo:

```(shell)
make setup
```

Para configurar o `back-end`, caso você esteja usando o sistema operacional **Linux** ou **Mac**, rode o seguinte comando:

```(shell)
chmod 777 ./mvnw

```

## Rodando o projeto

Você pode rodar o `front-end` do projeto utilizando o comando abaixo no seu terminal:

```(shell)
make run
```

Para visualizar no navegador, acesse a URL [`http://localhost:3000`](http://localhost:3000).

Para rodar o `back-end`, primeiro será necessário executar o banco de dados e depois a API.

Para executar o **banco de dados**, execute os seguintes comandos:

```(shell)
sudo -u postgres psql
```

O comando acima abrirá o postgres. Sendo assim, será necessário abrir ou criar o banco de dados do go dev.

Caso ainda não tenha criado o banco de dados, rode os comandos:

```(shell)
CREATE DATABASE godev_db;
```

Para executar o banco, execute o comando:

```(shell)
\c godev_db
```

Você deve receber a mensagem `You are now connected to database "godev_db" as user "postgres".` ou algo semelhante.


Para iniciar a **API** entre na pasta api:

```(shell)
cd api/
```

E rode o comando abaixo no terminal:

```(shell)
./mvnw spring-boot:run
```

## Testes

Foram implementados testes unitários, que podem ser executados através do comando:

```(shell)
make test
```
