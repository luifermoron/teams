# Welcome to Teams Backend  ⚽

This repository contains best practices for developing an API-based project built with Node.js and Express. You can retrieve team countries from the 2010 FIFA World Cup (when Spain won its first tournament) and their players.

## Features

* 🏛️ Clean Architecture: It is based on clean architecture principles, with separated domains (entities, repositories), Application with use cases (business logic), and drivers (Express, middleware, and routes). This ensures a maintainable project that follows a proven structure.
* 🛣️ Route-based Versioning: With route-based versioning, the API can scale by creating new routes while maintaining existing ones. It simply requires adding a parameter in the header. No worries a middleware will handle it👌.
* 💉 Dependency Injection: Using dependency injection makes the code cleaner and easier to understand, reducing boilerplate code and allowing you to focus on what is really important.
* 🔒 Helmet: Using Helmet helps us, among other things, to remove headers that could be used by attackers.
* 💿 I/O Polling: We intentionally used a .json file as a database to practice the I/O polling phase of Node.js for non-blocking operations. If you want to use another database, send a PR 😉.

Let's explore the APIs in more detail:

First create an .env file with the values:

```sh
NODE_ENV=development (or production)
ALLOWED_ORIGINS=https://your-production-domain.com/
```

Simply start the server with:

```sh
yarn install

yarn start
```


## API Usage
### Teams
Get all teams API - VERSION I:

```sh
curl -H "version: v1" http://localhost:3000/api/teams
```

Get all teams API - VERSION II:

```sh
curl -H "version: v2" http://localhost:3000/api/teams
```

### Players
Get all players by Team ID:

```sh
curl -H "version: v1" http://localhost:3000/api/players/:teamid/
```

## Credits
* Based on [another project I have](https://github.com/luifermoron/node-express-boilerplate).
* Thanks to [@codemzy](https://www.codemzy.com/blog/nodejs-api-versioning) for such a great article about future-proof API versioning.

## Author

👤 **Luis Morón**

- Website: luifermoron.com
- Github: [@luifermoron](https://github.com/luifermoron)
- LinkedIn: [@luifermoron](https://linkedin.com/in/luifermoron)

## Show your support

Give a ⭐️ if this project helped you!