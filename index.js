const Koa = require('koa');
const { ApolloServer, gql } = require('apollo-server-koa');

const books = [
    {
       title: 'Harry Potter and the Chamber of Secrets',
       author: 'J.K. Rowling',
    },
    {
       title: 'Jurassic Park',
       author: 'Michael Crichton',
    },
    {
       title: 'Jurassic Park',
       author: 'Michael Crichton',
    },
    {
       title: 'Jurassic Park',
       author: 'Michael Crichton',
    },
];

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const resolvers = {
 Query: {
  books: () => books,
 },
};

const server = new ApolloServer({ typeDefs, resolvers });

const app = new Koa();
server.applyMiddleware({ app });
// alternatively you can get a composed middleware from the apollo server
// app.use(server.getMiddleware());

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`),
);
