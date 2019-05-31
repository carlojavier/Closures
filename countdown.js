var countdownGenerator = function (x) {
  /* your code here */
  var launch = x + 1;
  // console.log(launch);

   return function () {
      launch -= 1;
      if (launch > 0) {
        console.log("T-minus " + launch + "... ");
      } else if (launch === 0) {
        console.log('Blast Off!')
      } else {
        console.log('Rockets already gone, bub!')
      }

};
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!