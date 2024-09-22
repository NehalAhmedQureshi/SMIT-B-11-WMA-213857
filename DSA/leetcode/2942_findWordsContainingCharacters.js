let findWordsContaining = function(words, x) {
      words = ['leet' , 'code']
      x = 'e'
      let includeX = []
      for (let i = 0; i < words.length; i++) {
            if (words[i].includes(x)) {
                  includeX.push(i)
            }
            
      }
      return includeX;
    
};

console.log(findWordsContaining());