## Este projeto é um sistema de gerenciamento de produtos que permite realizar operações básicas de CRUD (Create, Read, Update, Delete) usando Laravel como backend e Angular como frontend. Utiliza o banco de dados PostgreSQL para armazenar informações sobre os produtos.

## Tecnologias utilizadas: 
| PHP 8.3.0 | Laravel 10.33.0 | Angular 17 | PostgreSQL |


## Configuração do backend: 

Necessário PHP 8.3.0 e composer. 

Para a instalação de dependencias execute o comando no cmd:

### composer install 

Após isso, será necessário configurar o arquivo .env, esse arquivo serve para configurar o banco de dados, coloque as informações como nome do banco de dados, usuario e senha. 

Após isso será necessário fazer a migração do banco de dados, você pode fazer através do comando: 

### php artisan migrate 

Logo depois, execute o comando para iniciar o servidor: 

### php artisan serve

O Laravel será iniciado e estará disponível em http://localhost:8000 por padrão.

## Configuração do frontend: 

Será necessário o Angular na versão 17. 

Para a instalação de dependencias execute o comando no cmd:

### npm install

Após a instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento Angular:

### ng serve

O Angular será iniciado e estará disponível em http://localhost:4200 por padrão, o projeto está rodando no http://localhost:4200/produtos



### Problemas e melhorias a serem implementadas: 

Tive dificuldades em implementar os métodos POST E DELETE, estarei fazendo melhorias para resolver alguns bugs que surgiram nesses endpoints. 
Implementarei testes unitários. 
Implementarei validações para evitar mais bugs no código. 
