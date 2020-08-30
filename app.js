
const colors = require('colors');
const argv = require('yargs')
                .command('listar', 'imprime en consola la tabla de multi'.red, {
                  base: {
                    demand: true,
                    alias: 'b'
                  },
                  limite:{
                    alias: 'l',
                    default: 10
                  }
                })
                .help()
                .argv;

const {crearArchivo} = require('./multiplica/multiplicar')


//let base = '5';
// console.log(process.argv)

let comando  = argv._[0];

switch(comando ){

  case 'listar':
    console.log('listar')
    break;
  case 'crear':
    crearArchivo(argv.base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(err => console.log(err))

    console.log('crear'.inverse)

    break;

      default:
        console.log('comando no reconocido'.underline.blue)

}


  







// let argv2 = process.argv;

// console.log('limite', argv.limite)
// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]



