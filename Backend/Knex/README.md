# API Simples em Camadas com Knex – Exemplo Educacional

Este é o teceiro exemplo, uma API simples utilizando Knex como Query Builder / ORM para acesso a banco de dados e Swagger para documentação da API. Substituímos o armazenamento em memória por um banco de dados relacional.

## Objetivo do Exemplo

Este exemplo tem como objetivo ensinar:
- Como manter a arquitetura em camadas mesmo utilizando banco de dados
- O papel do Knex como Query Builder / ORM

## Persistência de Dados com Knex

Diferente dos exemplos anteriores, neste projeto os dados são persistidos em banco de dados por meio do Knex.
O Knex atua como:
- Um Query Builder, facilitando a escrita de SQL
- Uma camada intermediária entre a aplicação e o banco
- Um ponto central para manutenção e evolução das consultas

Essa abordagem permite:
- Código mais limpo e organizado
- Facilidade de manutenção
- Portabilidade entre bancos de dados

## Conclusão

Este exemplo tem caráter educacional, demonstrando como evoluir uma API simples para um cenário mais realista, mantendo boas práticas de arquitetura, uso de banco de dados e documentação.
Ele serve como base sólida para projetos backend mais robustos utilizando Express, Knex e Swagger.