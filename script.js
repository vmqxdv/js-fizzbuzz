// Sto usando nodemon per vedere i risultati

try {

  for (let i = 1; i <= 100; i++) {
    if (!(i % 3) && !(i % 5)) {
      console.log('FizzBuzz');
      continue;
    };

    if (!(i % 3)) {
      toStamp = 'Fizz';
      console.log('Buzz');
      continue;
    }; 
    
    if (!(i % 5)) {
      console.log('Buzz');
      continue;
    };

    console.log(i);
  };

} catch(err) {
  console.log(err);
};