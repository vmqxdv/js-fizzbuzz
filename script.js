// Sto usando nodemon per vedere i risultati

try {

  for (let i = 0; i <= 100; i++) {
    let toStamp = i.toString();

    if (toStamp.includes('3')) {
      toStamp = toStamp.replace('3', 'Fizz');
    }; 
    
    if (toStamp.includes('5')) {
      toStamp = toStamp.replace('5', 'Buzz');
    };

    console.log(toStamp);
  };

} catch(err) {
  console.log(err);
};