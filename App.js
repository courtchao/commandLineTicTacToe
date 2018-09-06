  var prompt = require('prompt');
 

  let board = '';


  //
  // Start the prompt
  //
  prompt.start();
 
  //
  // Get two properties from the user: username and email
  //
  console.log('To play, input where you want to place your move (ie. A1, C3, etc)')
  prompt.get(['MoveSelection'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  move: ' + result.MoveSelection);
  });

  //   A   B   C
  // 1   |   |
  //   ---------
  // 2   |   |
  //   ---------
  // 3   |   |

