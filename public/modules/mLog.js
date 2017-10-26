const moment = require('moment');
const colors = require('colors');

module.exports = {

  err: function(string) {
    console.log(("[" + moment().format('MMMM Do, YYYY h:mm:ss A') + "]" + " ERR  :: The URL " + string ).red);
  },

  info: function(string){
     console.log(("[" + moment().format('MMMM Do, YYYY h:mm:ss A') + "]" + " INFO ::  " + string ).cyan);
  }

}

/*function info(string) {
 console.log(("[" + moment().format('MMMM Do, YYYY h:mm:ss A') + "]" + " INFO ::  " + string ).blue);
}
}*/
