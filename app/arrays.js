exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
	return arr.indexOf( item ) ;
  },

  sum: function(arr) {
	function suma( arr2 )
	{
		let result = 0 ;
		for ( let idx = 0 ; idx < arr2.length ; idx++ )
		{
			result += arr2[ idx ] ;
		} 
		return result ;
	}
	return suma( arr ) ;  
  },

  remove: function(arr, item) {
	let idx = -1 ;
	do{
		arr.splice( idx , 1 ) ;
	} while ( ( idx = ( arr.indexOf( item , idx + 1 ) ) )!== -1 ) ;
	return arr ; 
  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {
  	let idx = -1 ;
  	let result = [] ;
  	let subIdx = 0 ;
	while ( ( idx = ( arr.indexOf( item , idx + 1 ) ) )!== -1 )
	{

		result[ subIdx ] = idx ;
		subIdx++ ;
	}
  }
};
