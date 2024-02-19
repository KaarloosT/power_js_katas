const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
    let noDuplicates = [];
    for (let i = 0; i < param.length; i++) {
        if (noDuplicates.indexOf(param[i]) === -1) {
            noDuplicates.push(param[i]);
        }
    }
    return noDuplicates;
  }

console.log(removeDuplicates(duplicates));