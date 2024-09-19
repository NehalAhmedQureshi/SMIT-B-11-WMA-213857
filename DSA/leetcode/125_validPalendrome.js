let ispalendrome = () => {
      let s = "A man, a plan, a canal: Panama"
      s = s.toLowerCase();
      s = s.replaceAll(/[^a-z0-9]/g, "");      
      console.log(s);
      for (let i = 0; i < s.length; i++) {
        if (s[i] !== s[s.length - i - 1]) {
          return false;
        }
      }
    
      return true;
}

console.log(ispalendrome());