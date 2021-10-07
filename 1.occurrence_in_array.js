/**
 * Given an array of int, print each number against how much time they occur in the array
 * example: [4,6,5,3,2,7,6,5] 
 * Answer : 4-> 1, 6->2, 5->2, 3->1, 2->1, 7->1
 */

 var findOccurrence = (str, pat) => {
    var strLen = str.length,
        patLen = pat.length,
        limit = strLen - patLen;

    console.log(`String Length ${strLen}`);
    console.log(`Pattern Length ${patLen}`);

    if(patLen <= strLen) {
        for(var i = 0; i <= limit; i++) {
            for(var j = 0; j < patLen; j++) {
                if(pat[j] !== str[i + j])
                    break;
            }

            console.log(`${j} === ${patLen}`);
            if(j === patLen)
                console.log(`Pattern found at position ${i}`);
        }
    } else {
        console.log(`Pattern not found`);
    }
 }

 findOccurrence('AABAAAB', 'AA');