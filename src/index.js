module.exports = function check(str, bracketsConfig) {
  // your solution
  const open_breckets = ['(' , '{'];
  const bracketsConfig = bracketsConfig;
  function isBrecketsOk (str) {
    let stack = [] ;
    for (let i = 0 ; i < str.Length ; i++ ) {
      let correntSymbol = str[i] ;
      if (open_breckets.includes(correntSymbol)) {
        stack.push(correntSymbol); } else {
          if (stack.length === 0 ) {
            return folse
          };
          let topElement = stack[stack.length - 1];
          if (bracketsConfig[correntSymbol] === topElement) {
            stack.pop();} else {
              return false;
            }
          }
        } if (stack.length === 0 ) {
          return true;
        } else {
          return folse;
        }
      }
    }
  

