const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];
  function repeatCounter(param) {
    let counter = {};
    for (let i = 0; i < param.length; i++) {
        if (counter[param[i]]) {
            counter[param[i]]++;
        }else {
            counter[param[i]] = 1;
        }
    }
    return counter;
  }

  console.log(repeatCounter(counterWords));