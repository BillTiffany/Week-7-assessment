
//1) SUM ZERO 
let addToZero = (array, sum) => {
    let hashMap = {},
      results = []

        for (let i = 0; i < array.length; i++){
            if (hashMap[array[i]]){
                results.push([hashMap[array[i]], array[i]]) 
            }else{
                hashMap[sum - array[i]] = array[i];
            }
          }
         return results;
          }
          
    
console.log("two numbers in array adding to O",addToZero([1,2,3,-2,-1,10,25,19,-19,25,17,21,99,-99,2000,1200,75,18,92],0));
console.log("two numbers in the array adding to 20",addToZero([2,4,6,8,10,12,14,16,18,20],20))
//Runtime complexity O(n^2)

//2) Unique Characters
function hasUniqueChars(str) {
    return new Set(str).size == str.length;
  }
  
  console.log(hasUniqueChars('abc'));    //true
  console.log(hasUniqueChars('abcabc')); //false
  console.log(hasUniqueChars('Monday')) //true
  console.log(hasUniqueChars('Moonday'))//false
  //Runtime complexity O(1)

//3) Pangram Sentence?
function isPangram(string) {
    return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(string)
}

console.log(isPangram('The quick brown fox jumped over the lazy dog'))//false
console.log(isPangram("The quick brown fox jumps over the lazy dog."));// true
console.log(isPangram("This is not a pangram."));// false
console.log(isPangram("Pack my box with five dozen liquor jugs."));// true
console.log(isPangram("This isn't a pangram!"));// false
console.log(isPangram("Detect Pangram"));// false
console.log(isPangram("How quickly daft jumping zebras vex."));// true
//Runtime complexity O(1)



//4) Longest Word
function findLongestWord(arr) {
let longest = "";
for (let i = 0; i < arr.length; i++) {
    if(arr[i].length > longest.length) {
        longest = arr[i];
    }
}
    return longest;
}


console.log("longest name/word is:",findLongestWord(["bill", 'billy', 'William','Will', 'Willy','Billiam',"John Jacob Jingleheimer Schmidt"]))
//Runtime complexity O(n)