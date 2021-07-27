function getUniqueCharacter(s) {
    // Write your code here
    //initializing an empty object for storing the characters of the string
    let charFreq = {};
    
    //looping through the string
    for(let i = 0; i< s.length; i++){
        
        //checking if we have the character, if not make one
        if(!charFreq[s[i]]){
            charFreq[s[i]] = 1;
        }else{
            //if the character is already there, add 1
            charFreq[s[i]]++;
        }
    }
    
    //looping through the object
    for(let k of Object.keys(charFreq)){
        //checking if we have a key that is equal to 1 which means that there was only one character found
        if(charFreq[k] === 1){
            //adding 1 because the index starts at 0 in the object
            return s.indexOf(k)+1;
        }
    }
    return -1
}

function funWithAnagrams(text) {
    // Write your code here
    //looping through the elements of the array
    for(let i = 0; i < text.length; i++){
        
        //looping through from the end
        for(let j = text.length - 1; j > i; j--){
            
            //split("") will turn each words into array
            //sort() will sort the character
            //join("") will join the characters into a word
            let firstArr = text[i].split("").sort().join("");
            let secondArr = text[j].split("").sort().join("");
            
            //checking whether the elements are same
            if(firstArr === secondArr){
                
                //if true, splice will remove the element that is indexed at j
                text.splice(j, 1);
            }
        }
    }
    
    //returning the sorted array
    return text.sort();
}
