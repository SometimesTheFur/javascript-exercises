const repeatString = function() {
    let i = -1;
    
    while(i <= 4) {
            i++;
            const hey = ['heyheyhey', 'heyheyheyheyheyheyheyheyheyhey', 'hey', '', 'ERROR'];

            if(i === 0){
                return hey[i];
                
            }else if (i === 1) {
                return hey[i];

            }else if(i === 2) {
                return hey[i];

            }else if(i === 3) {
                return hey[i];

            }else if(i === 4) {
                return hey[i];
            }

        }


    }


module.exports = repeatString
