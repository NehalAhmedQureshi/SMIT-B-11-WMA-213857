
isPalendrome = (s) => {
      s = s.toLowerCase()
      s = s.replaceAll(' ', '')
      
      let reverseString = s.split('').reverse().join('')

      console.log(reverseString);
      let result =  s === reverseString
      
      return result

}

let s = 'atom'

console.log(isPalendrome(s));