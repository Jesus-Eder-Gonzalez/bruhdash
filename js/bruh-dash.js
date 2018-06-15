var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

global.bruhdash = {

  // returns the first element of an array
  first: function (array) {
      return array.shift();
  },

  // returns the last element of an array
  last: function (array) {
    return array.pop();
  },

  // returns the index of the first matching element from left to right
  indexOf: function (array, number) {
    return array.findIndex(x => x === number);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (array, number) {
    return array.lastIndexOf(number);
  },

  // returns an array with all elements except for the last element
  initial: function (array) {
    array.pop()
    return array;
  },
  
  // returns an array with all falsey values removed
  compact: function(array) {
    return array.filter(x => x > 0);
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (array, start, end) {
    return array.slice(start, end);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(array, number){
    if (number > 0) {
      return array.slice(number,array.length);
    } else if (number === 0){
      return array;
    } else {
      return array.slice(1,array.length);
    }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(array, number) {
    if (number > 0) {
      return array.slice(0,array.length-number);
    } else if (number === 0){
      return array;
    } else {
      return array.slice(0,array.length-1);
    }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (array, number) {
    if(number > 0) {
      return array.slice(0,number);
    } else if (number === 0){
      return [];
    } else {
      return array.slice(0,1);
    }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (array, number) {
    if(number > 0) {
      return array.slice(array.length - number,array.length);
    } else if (number === 0){
      return [];
    } else {
      return array.slice(array.length-1,array.length);
    }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(array, number, start, end) {
    return array.fill(number,start,end);
  },

  // removes all given values from an array
  pull: function (array, ...removeElement) {
    var processedArr = array.splice(0,array.length);
    for (i = 0; i < removeElement.length; i++){
      processedArr = processedArr.filter(x => x !== removeElement[i]);
    }
    return processedArr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (array, index) {
    var result = [];
    index.forEach(x => result.push(array[x]));
    return result;
  },

  // creates an array excluding all the specified values
  without: function(array, ...removeElement) {
    var processedArr = array.splice(0,array.length);
    for (i = 0; i < removeElement.length; i++){
      processedArr = processedArr.filter(x => x !== removeElement[i]);
    }
    return processedArr;
  },

  // returns an array with specified values excluded
  difference: function(array1, array2) {
    var difference = array1.slice(0,array1.length);
    array2.forEach(x => {
      difference = difference.filter(y => y !== x);
    });
    return difference;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (array1, array2) {
    var zipArr = [];
    for(i = 0; i < array1.length; i++){
      zipArr.push([array1[i],array2[i]]);
    }
    return zipArr;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (array) {
    var zip1 = [];
    var zip2 = [];

    array.forEach(x => {
      zip1.push(x[0]);
      zip2.push(x[1]);
    });

    return [zip1,zip2];
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(array, chunk){
    console.log(array);
    var chunks = [];
    if(chunk >= array.length && array.length > 0){
      return [array];
    } else if (chunk === 0 || array.length === 0) {
      return [];
    } else {
        var tempArr = [];
        var length = array.length;
        for(i = 1; i < length+1; i++){
          tempArr.push(array.shift());
          console.log(i%chunk + " " + i);
          if (i%chunk === 0 ) {
            chunks.push(tempArr);
            tempArr = [];
          }
        }
        if (tempArr !== []){
           chunks.push(tempArr);
        }

        return chunks;
    }
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(collection, func) {

    if (collection instanceof Array){
      return collection.map(func);
    } else {
      return Object.values(collection).map(func);
    }

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function(collection, func) {

    if (collection instanceof Array){
      return collection.map(func);
    } else {
      return Object.values(collection).map(func);
    }
  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function(collection, predicate) {

    if (collection instanceof Array){
      return collection.filter(predicate);
    } else {
      return Object.values(collection).filter(predicate);
    }
  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function(collection, accumulator) {
    if (collection instanceof Array){
      return collection.reduce(accumulator);
    } else {
      return Object.values(collection).reduce(accumulator);
    }
  }
};
