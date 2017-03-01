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
      return function stringer( word )
       {
         var phrase ;
         if ( word = 'world')
         {
           phrase = 'Hello, ' + word ;
         } else {
           phrase = 'Hai, ' + word ;
         }

         return phrase ;
       }
  },

  makeClosures: function(arr, fn) {

    return fn.apply ( arr ) ;
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
