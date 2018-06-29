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
    return array[0];
      //return array.shift();
  },

  // returns the last element of an array
  last: function (array) {
    return array[array.length-1];
    //return array.pop();
  },

  // returns the index of the first matching element from left to right
  indexOf: function (array, number) {

    for(i = 0; i < array.length; i++){
      if(number === array[i]) {
        return i;
      }

    }
    return -1;

    //return array.findIndex(x => x === number);
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (array, number) {
    
    for(i = (array.length-1); i > -1; i--){
      if(number === array[i]) {
        return i;
      }
    }
    return -1;
    
    //return array.lastIndexOf(number);
  },

  // returns an array with all elements except for the last element
  initial: function (array) {
    var firstArr = new Array(array.length-1);

    for(i = 0; i < array.length-1; i++){
      firstArr[i] = array[i];
    }
    return firstArr;
  },
  
  // returns an array with all falsey values removed
  compact: function(array) {

    var count = 0;
    for (i = 0; i < array.length; i++){
      if(array[i]>0) {
        count++;
      }
    }

    var compArr = new Array(count);
    var index = 0;

    for (i = 0; i < array.length; i++) {
      if(array[i]>0){
        compArr[index] = array[i];
        index++;
      }
    }

    return compArr;
    //return array.filter(x => x > 0);
  },

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (array, start, end) {

    var sliceArr = new Array(end - start);
    var index = 0;

    for (i = start; i < end; i++) {
      sliceArr[index] = array[i];
      index++;
    }
    
    return sliceArr;
    //return array.slice(start, end);
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(array, number){

    if (number > 0) {
      var sliceArr = new Array(array.length - number);
      var index = 0;
  
      for (i = number; i < array.length; i++) {
        sliceArr[index] = array[i];
        index++;
      }
      
      return sliceArr;

    } else if (number === 0){
      return array;
    } else {

      var sliceArr = new Array(array.length - 1);
      var index = 0;
  
      for (i = 1; i < array.length; i++) {
        sliceArr[index] = array[i];
        index++;
      }
      
      return sliceArr;
      
    }

    // if (number > 0) {
    //   return array.slice(number,array.length);
    // } else if (number === 0){
    //   return array;
    // } else {
    //   return array.slice(1,array.length);
    // }
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(array, number) {

    if (number > 0) {
      var sliceArr = new Array(array.length - number);
      var index = 0;
  
      for (i = 0; i < array.length - number; i++) {
        sliceArr[index] = array[i];
        index++;
      }
      
      return sliceArr;

    } else if (number === 0){
      return array;
    } else {

      var sliceArr = new Array(array.length - 1);
      var index = 0;
  
      for (i = 0; i < array.length - 1; i++) {
        sliceArr[index] = array[i];
        index++;
      }
      
      return sliceArr;
      
    }

    // if (number > 0) {
    //   return array.slice(0,array.length-number);
    // } else if (number === 0){
    //   return array;
    // } else {
    //   return array.slice(0,array.length-1);
    // }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (array, number) {

    if (number > 0 && array.length > number) {
      var sliceArr = new Array(number);
      var index = 0;
  
      for (i = 0; i < number; i++) {
        sliceArr[index] = array[i];
        index++;
      }
      
      return sliceArr;

    } else if (number === 0){
      return [];
    } else if (number > array.length) {
      return array;
    } else {
      return [array[0]];
    }

    // if(number > 0) {
    //   return array.slice(0,number);
    // } else if (number === 0){
    //   return [];
    // } else {
    //   return array.slice(0,1);
    // }
  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (array, number) {

    if (number > 0 && array.length > number) {
      var sliceArr = new Array(array.length - number);
      var index = 0;
  
      for (i = number-1; i < array.length; i++) {
        sliceArr[index] = array[i];
        index++;
      }
      
      return sliceArr;

    } else if (number === 0){
      return [];
    } else if (number > array.length) {
      return array;
    } else {
      return [array[array.length-1]];
    }

    // if(number > 0) {
    //   return array.slice(array.length - number,array.length);
    // } else if (number === 0){
    //   return [];
    // } else {
    //   return array.slice(array.length-1,array.length);
    // }
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function(array, number, start, end) {
    if (start >= 0 && end >= 0){
      for (i = start; i < end; i++){
        array[i] = number;
      }
  
      return array;
    } else {
      for (i = 0; i < array.length; i++){
        array[i] = number;
      }
      return array;
    }

    //return array.fill(number,start,end);
  },

  // removes all given values from an array
  pull: function (array, ...removeElement) {
    var length =  array.length;
    if (removeElement.length < 1) {
      return array;
    }

    for (i = 0; i < array.length; i ++){
      for (j = 0; j < removeElement.length; j++) {
        if (array[i] === removeElement[j]){
          length --;
          array [i] = 'Delete';
        }
      }
    }

    var processedArr = new Array (length);
    var index = 0;
    for (i = 0; i < array.length; i ++) {
      if (array[i] !== 'Delete'){
        processedArr[index] = array[i];
        index ++;
      }

    }

    return processedArr;
    // var processedArr = array.splice(0,array.length);
    // for (i = 0; i < removeElement.length; i++){
    //   processedArr = processedArr.filter(x => x !== removeElement[i]);
    // }
    // return processedArr;
  },

  // removes elements of an array corresponding to the given indices
  pullAt: function (array, index) {
    var result = new Array (index.length);
    var sort = index.sort();

    var inx = 0;
    for (i = 0; i < array.length; i++) {
      if (i === sort[inx]){
        result[inx] = array[i];
        inx++;
      }
    }

    return result;

    // var result = [];

    // index.forEach(x => result.push(array[x]));
    // return result;
  },

  // creates an array excluding all the specified values
  without: function(array, ...removeElement) {
    var result;
    var inx = 0;
    var length = array.length;

    for (i = 0; i < array.length; i++) {
      for (j = 0; j < removeElement.length; j++) {
        if (array[i] === removeElement[j]){
          array[i] = 'DELETE';
          length--;
        }
      }

    }

    result = new Array(length);

    for (i = 0; i < array.length; i++){
      if(array[i] !== 'DELETE'){
        result[inx] = array[i];
        inx++;
      }
    }
    return result;

    // var processedArr = array.splice(0,array.length);
    // for (i = 0; i < removeElement.length; i++){
    //   processedArr = processedArr.filter(x => x !== removeElement[i]);
    // }
    // return processedArr;
  },

  // returns an array with specified values excluded

  difference: function(array1, array2) {
    var result;
    var inx = 0;
    var length = array1.length;

    for (i = 0; i < array1.length; i++) {
      for (j = 0; j < array2.length; j++) {
        if (array1[i] === array2[j]){
          array1[i] = 'DELETE';
          length--;
        }
      }

    }
    console.log(array1[i])
    result = new Array(length);

    for (i = 0; i < array1.length; i++){
      if(array1[i] !== 'DELETE'){
        result[inx] = array1[i];
        inx++;
      }
    }

    return result;
    // var difference = array1.slice(0,array1.length);
    // array2.forEach(x => {
    //   difference = difference.filter(y => y !== x);
    // });
    // return difference;
  },

  /*******************
   *  STRETCH GOALS! *
   *******************/ 

  // creates an array of grouped elements
  zip: function (array1, array2) {
    var zipArr = [];
    for(i = 0; i < array1.length; i++){
      zipArr[i] = [array1[i],array2[i]];
      // zipArr.push([array1[i],array2[i]]);
    }
    return zipArr;
  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function (array) {
    var zip1 = [];
    var zip2 = [];

    for(i = 0; i < array.length; i++) {
      zip1[i] = array[i][0];
      zip2[i] = array[i][1];
    }
    // array.forEach(x => {
    //   zip1.push(x[0]);
    //   zip2.push(x[1]);
    // });

    return [zip1,zip2];
  },

  // creates an array of elements into groups of length of specified size
  chunk: function(array, chunk){
    // console.log(array);
    var currIndex = 0;
    var chunkIndex = 0;
    var chunks = [];
    if(chunk >= array.length && array.length > 0){
      return [array];
    } else if (chunk === 0 || array.length === 0) {
      return [];
    } else {
        var tempArr = new Array();
        var length = array.length;
        for(i = 1; i < length+1; i++){
          tempArr[currIndex] = array[i-1];
          currIndex++;
          // tempArr.push(array.shift());
          // console.log(i%chunk + " " + i);
          if (i%chunk === 0 ) {
            chunks[chunkIndex] = tempArr;
            // chunks.push(tempArr);
            chunkIndex++;
            tempArr = [];
            currIndex = 0;
          }
        }
        if (tempArr !== []){
          chunks[chunkIndex] = tempArr;
          chunkIndex++;
          //  chunks.push(tempArr);
           currIndex = 0;
        }

        return chunks;
    }
  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function(collection, func) {

    if (collection instanceof Array) {

      var forArr = [];

      for (i = 0; i < collection.length; i++) {
        forArr[i] = func(collection[i]);
        // forArr.push(func(collection[i]));
      }

      return forArr;
    } else {

      var tempArr = Object.values(collection);
      var forObj = [];

      for (i = 0; i < tempArr.length; i++) {
        forObj[i] = func(tempArr[i]);
        // forObj.push(func(tempArr[i]));
      }
      
      return forObj;
    }

    // if (collection instanceof Array){
    //   return collection.map(func);
    // } else {
    //   return Object.values(collection).map(func);
    // }

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function(collection, func) {

    if (collection instanceof Array) {

      var mapArr = [];

      for (i = 0; i < collection.length; i++) {
        mapArr[i] = func(collection[i]);
        // mapArr.push(func(collection[i]));
      }

      return mapArr;
    } else {

      var tempArr = Object.values(collection);
      var mapObj = [];

      for (i = 0; i < tempArr.length; i++) {
        mapObj[i] = func(tempArr[i]);
        // mapObj.push(func(tempArr[i]));
      }
      
      return mapObj;
    }

    // if (collection instanceof Array){
    //   return collection.map(func);
    // } else {
    //   return Object.values(collection).map(func);
    // }

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/ 

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function(collection, predicate) {
    var currIndex = 0;
    var truthyElements = []; 

    if (collection instanceof Array){
      console.log(collection);
      for (i = 0; i < collection.length; i++){
          if(predicate(collection[i])) {
            truthyElements[currIndex] = collection[i];
            currIndex++;
          }
      }
      return truthyElements;
      // return collection.filter(predicate);
    } else {
      // var objArr = Object.values(collection);
      var objArr = [];
      var index = 0;
    
      for (x in collection){
        objArr[index] = collection[x];
        index++;
      }

      console.log(objArr);

      for (i = 0; i < objArr.length; i++){
        if(predicate(objArr[i])) {
          truthyElements[currIndex] = objArr[i];
          currIndex++;
        }
      }

      return truthyElements;
      // return Object.values(collection).filter(predicate);
    }
  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function(collection, accumulator) {
    var result = 0;
    if (collection instanceof Array){
      console.log(collection + " " + accumulator);
      for(i = 0; i < collection.length; i++){
        result = accumulator(result,collection[i]);
      }
      // return collection.reduce(accumulator);
      return result;
    } else {
      for(x in collection) {
        result = accumulator(result,collection[x]);
      }
      return result;
      // return Object.values(collection).reduce(accumulator);
    }
  }
};
