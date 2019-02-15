// Some fake data
import {
  usuarios
} from './data';

// The resolvers
module.exports = {
  Query: {
    ping: () => 'Está todo ok!!!',
    usuarios: () => usuarios,
    usuario: (_, args) => {
      return usuarios.filter(usuario => {
        return usuario.id === args.id;
      })[0];
    },
    usuariosXSexo: (_, args) => {
      return usuarios.filter(usuario => {
        return usuario.sexo === args.sexo;
      });
    }
  },
  Mutation: {
    modificarUsuario: (_, args) => usuarios.map(usuario => {
      if (args.id === usuario.id) {
        usuario.nombre = args.nombre || usuario.nombre;
        usuario.apellido = args.apellido || usuario.apellido;
        usuario.profesion = args.profesion || usuario.profesion;
        usuario.sexo = args.sexo || usuario.sexo;
        console.log(usuario);
      }
      return usuario;
    }).filter(usuario => {
      return usuario.id === args.id;
    })[0]
  }
};