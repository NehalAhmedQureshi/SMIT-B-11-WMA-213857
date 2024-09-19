function romanToInt(s) {
    // console.log(s.length)
    const symbols = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }

    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let curr = s[i]
        let next = s[i+1]
        
        if(symbols[curr] < symbols[next]){
            total -= symbols[curr]
        }else {
            total += symbols[curr]
        }

    }
    return total;
}

romanToInt("LVIII")