# blogexercisenest

## Installation

Launch first:

- `yarn install`

## Running the app

- `yarn start`

The project use `mysql` through `typeORM` (so we can change the database later if needed).
If you want to use the project as it is, you need to have `mysqld` running, with database name 'blog'.
Changing the configuration for connecting to the database is in the **ormconfig.json**

## Description

This project intend to be as the blogexercice project with nestjs. It followed the nestjs documentation.

It uses `platform-fastify` instead of `platform-express`.

This project was bootstrap by nest CLI using: `nest new blogexercisenest`
Then we can also bootstrap controller and service with: `nest g controller blog-post`
`nest g service blog-post`
(or 'generate' instead of 'g')

See nestjs documentation. [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

You can access swagger OpenAPI after the project is started at the url: http://localhost:3000/api

## Example of curl command

As this is only the backend, to use it without frontend, you could use curl

Exemple (in JSON, for correct type validation POST and PATCH):

- `curl --header "Content-Type: application/json" -X GET http://localhost:3000/blog-post -H "Origin: http://localhost"`
- `curl --header "Content-Type: application/json" -X POST --data '{"title":"My First Title", "content":"My First Post", "likes":10}' http://localhost:3000/blog-post -H "Origin: http://localhost"`
- `curl --header "Content-Type: application/json" -X DELETE http://localhost:3000/blog-post/1 -H "Origin: http://localhost"`
- `curl --header "Content-Type: application/json" -X PATCH --data '{"content":"My Modified Post", "likes":20}' http://localhost:3000/blog-post/2 -H "Origin: http://localhost"`
