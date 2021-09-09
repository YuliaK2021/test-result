export const getLastWordLength = str => {
    if(!str){
        return 0
      }
      const wordArray = str.split(' ').filter(x=>x!=='')
      const lastWord = wordArray[wordArray.length - 1]
      return lastWord.length
  };