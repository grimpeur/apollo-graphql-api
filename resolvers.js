// Some fake data
import {
  usuarios
} from './bd';

// The resolvers
module.exports = {
  Query: {
    hola: () => 'Mundo',
    usuarios: (args) => {
      if (args.sexo) {
        return usuarios.filter(usuario => {
          return usuario.sexo === args.sexo;
        });
      } else {
        return usuarios;
      }
    },
    usuario: (args) => {
      console.log('entro a usuario');
      console.log(args);
      return usuarios.filter(usuario => {
        return usuario.id === args.id;
      })[0];
    }
  },
  Mutation: {
    modificarUsuario: (args) => usuarios.map(usuario => {
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