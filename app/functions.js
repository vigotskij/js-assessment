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
      var t = typeof str() ;
      return t ;
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
