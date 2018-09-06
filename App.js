  var prompt = require('prompt');
 

  let board = '';

  let player1 = true;

  //show that it's player1 or player2 (not player1)

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
    //console.log(board);
  });

  //   A   B   C
  // 1   |   |
  //   ---------
  // 2   |   |
  //   ---------
  // 3   |   |

