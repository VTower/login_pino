    //call Pino and config customLevels.foo.length() //40
const pino = require('pino')({customLevels: {
    foo: 100,
    
  }
});


    //another notation for do same thing
    // const pino_C = pino({customLevels: {
    //    foo: --LEVEL--
    //  }
    //});
    // module.exports = pino_C; 
module.exports = pino; 