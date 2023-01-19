// {1, 2, 3, 4}

// "ref"

/*
 0: {Array(3) => true}
 1: {Array(3) => false}
*/

const hasDuplicate = arr => new Set(arr).size !== arr.length 

// Map {'a' => 1, 'e' => 2, 'o' => 1}
// Map {'o' => 1}

function isVowel(char){
    return "aeiou".includes(char);
  }
  
  function vowelCount(str){
    const vowelMap = new Map();
    for(let char of str){
      let lowerCaseChar = char.toLowerCase()
      if(isVowel(lowerCaseChar)){
        if(vowelMap.has(lowerCaseChar)){
          vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
        } else {
          vowelMap.set(lowerCaseChar, 1);
        }
      }
    }
    return vowelMap;
  }