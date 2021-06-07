function permAlone(str) {
    let strArray=str.split('');
    
      function recursivePermute(stringArray, outputArray, index) {
    
        const newLetter = stringArray[index];
      
    
        let newArray = [];
    
    for(let j=0;j<outputArray.length;j++){
    
      const target = outputArray.length==1?outputArray:outputArray[j]
    
        for (let i = 0; i < target.length + 1; i++) {
    
          target.splice(i, 0, newLetter);
          newArray.push([...target]);
          target.splice(i, 1);
        }
      }
        if (index + 1 == stringArray.length) {
          return newArray;
        }
    
        index++;
        return recursivePermute(stringArray, newArray, index);
      }
    
    console.log(recursivePermute(strArray,[...strArray[0]],1));
    
    return str
    }