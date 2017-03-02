exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {

    return fn.apply( null , arr ) ;
  },

  speak: function(fn, obj) {

    var fnConContexto = fn.bind ( obj ) ;
    return fnConContexto() ;

  },

  functionFunction: function(str) {
      return function stringer( str2 )
       {
         return str + ', ' + str2 ;
       }
  },

  makeClosures: function(arr, fn) {

    return fn.apply ( fn , arr ) ;
  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
