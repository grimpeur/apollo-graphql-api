import {
  gql
} from 'apollo-server-express';

export default gql `
type Query {
  hola: String,
  usuario(id: Int!): Usuario
  usuarios(sexo: String): [Usuario]
}

type Mutation {
  modificarUsuario(id: Int!, nombre: String, apellido: String, profesion: String, sexo: String): Usuario
}

type Usuario {
  id: Int
  nombre: String
  apellido: String
  profesion: String
  sexo: String
}
`;