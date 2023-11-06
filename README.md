# Betting app

This is a template of a Betting app that was built on the [T3 Stack](https://create.t3.gg/) which was bootstrapped with `create-t3-app`.

## What's the tech stack?

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Required on your machine

- [Postgresql](https://www.postgresql.org/) 
- [Nodejs](https://nodejs.org/en)
- [Yarn](https://yarnpkg.com/)

## Installation steps

- [Create a user and database](https://medium.com/coding-blocks/creating-user-database-and-adding-access-on-postgresql-8bfcd2f4a91e)

### Copy .env.example to .env. 

- Fill in your database credentials according to the template
- Fill in the `NEXTAUTH_SECRET` variable from the output of the `openssl rand -base64 32` command.

### install dependencies

```
yarn install
```

### Migrate the prisma schema

```
yarn db:push
```

### Seed the database with test data

```
yarn db:seed
```

### Then, start the development server

```
yarn dev
```
