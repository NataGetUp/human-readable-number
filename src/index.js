module.exports = function toReadable (number) {
    let arr = number.toString().split('').map(int => parseInt(int, 10));
    const one = {
        0: '', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'
    }

    const ten = {
        0: '', 1: 'one', 2: 'twen', 3: 'thir', 4: 'for', 5: 'fif', 6: 'six', 7: 'seven', 8: 'eigh', 9: 'nine'
    }

    const teen = {
        0: 'ten', 1: 'eleven', 2: 'twelve', 3: 'thir', 4: 'four', 5: 'fif', 6: 'six', 7: 'seven', 8: 'eigh', 9: 'nine'
    }

    let newStr = '';

    arr.forEach(function(item, i, arr) {
        if (arr.length === 1) {
            if (item === 0) {
                newStr += 'zero' 
            } else {
                newStr += one[item];
            }
        }
        else if (arr.length === 2) {
            if (i === 0) {
                if(item === 1) {
                    if (arr[[i + 1]] === 1) {
                        newStr += teen[arr[[i + 1]]]; 
                    } else if (arr[[i + 1]] === 0) {
                        newStr += 'ten';
                    } else if (arr[[i + 1]] === 2) {
                        newStr +='twelve';
                    } else {
                        newStr += teen[arr[[i + 1]]] + 'teen';
                    }
                    arr[[i + 1]] = 0;

                } else {
                newStr += ten[item] + 'ty'; 
                }
            }
            else if (i === 1 && item !== 0) {
                newStr += ' ' + one[item];  
            }
        } else if (arr.length === 3) {
            if (i === 0) {
                newStr += one[item] + ' ' + 'hundred';
                  
            }
            else if (i === 1 && item !== 0) {
                if(item === 1) {
                    if (arr[[i + 1]] === 1) {
                        newStr += ' ' + teen[arr[[i + 1]]]; 
                    } else if (arr[[i + 1]] === 0) {
                        newStr += ' ' + 'ten';
                    } else if (arr[[i + 1]] === 2) {
                        newStr += ' ' + 'twelve';
                    }
                    else {
                        newStr += ' ' + teen[arr[[i + 1]]] + 'teen';  
                    }
                    arr[[i + 1]] = 0;
                } else {
                newStr += ' ' + ten[item] + 'ty'; 
                } 
            } else if (i === 2 && item !== 0) {
                newStr += ' ' + one[item];
            }
        }
      });
    return newStr;
}
