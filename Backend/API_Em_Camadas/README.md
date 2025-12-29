# API Simples em Camadas – Exemplo Educacional

Este projeto é uma API simples desenvolvida com Express, o principal objetivo é demonstrar o conceito de arquitetura em camadas aplicado ao desenvolvimento de uma API.
Ele é um exemplo introdutório, servindo de base para projetos mais complexos que serão evoluídos gradualmente ao longo do curso.

## Objetivo do Exemplo

O foco deste exemplo é ensinar:
- Como organizar uma aplicação backend em camadas bem definidas
- A separação clara de responsabilidades entre:
  - Controller
  - Service
  - Repository
- Boas práticas iniciais para construção de APIs escaláveis e de fácil manutenção

## Arquitetura em Camadas

A aplicação é estruturada seguindo o padrão abaixo:

### Controller
Responsável por:
- Receber as requisições HTTP
- Validar dados de entrada básicos
- Chamar os serviços apropriados
- Retornar as respostas ao cliente

### Service
Responsável por:
- Conter as regras de negócio
- Orquestrar as operações da aplicação
- Garantir que a lógica da aplicação não fique acoplada às rotas ou ao banco de dados

### Repository
Responsável por:
- Acessar e manipular os dados
- Isolar completamente a forma como os dados são armazenados
- Trabalhar exclusivamente através da camada de abstração de dados

## Abstração de Dados
Neste exemplo, não é utilizado um banco de dados real.  
Os dados são armazenados em arrays em memória, por meio de uma camada de abstração que simula um banco de dados.
Isso permite:
- Foco total na arquitetura
- Facilidade de entendimento
- Evolução futura para bancos reais (SQL ou NoSQL) sem alterar as regras de negócio

## Domínio da Aplicação
O projeto trabalha com as seguintes entidades:
- Aluno
- Curso
- Matrícula

Regras principais:
- Um Aluno pode estar matriculado em N cursos
- Uma Matrícula representa o vínculo entre Aluno e Curso

Esse domínio simples foi escolhido para facilitar o entendimento da separação de responsabilidades entre as camadas.

## Conclusão
Este projeto não tem como objetivo ser uma API completa de produção, mas sim servir como material didático.