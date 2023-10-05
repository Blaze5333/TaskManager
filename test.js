function countOccurrences(arr) {
    const result = {};
  
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      if (result[item]) {
        result[item]++;
      } else {
        result[item] = 1;
      }
    }
  
    return result;
  }
  
  const myArray = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  const occurrenceArray = countOccurrences(myArray);
  console.log(occurrenceArray);