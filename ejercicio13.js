const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, name) {
    for (let i = 0; i < param.length; i++) {
        if (param[i] === name) {
            return true;
        }
    }
    return false;
  }

    console.log(finderName(nameFinder, 'Logan'));