import {
  gql
} from 'apollo-server-express';

export default gql `
type Query {
  ping: String,
  usuario(id: Int!): Usuario
  usuarios: [Usuario]
  usuariosXSexo(sexo: String!): [Usuario]
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