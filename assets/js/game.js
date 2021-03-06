// Game States
// "WIN" - Player robot has defeated all enemy robots
//    * Fight all enemy robots
//    * Defeat each enemy robot
// "LOSE" - Player robot's health is zero or less

 var shopOptionPrompt;
 var shop = function () {
     

   // ask player what they'd like to do
   var shopOptionPrompt = window.prompt(
     "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.")
       // use switch to carry out action
             switch (shopOptionPrompt) {
               case "REFILL": // new case
               case "refill":
                 if (playerMoney >= 7) {
                   window.alert(
                     "Refilling player's health by 20 for 7 dollars."
                   );

                   // increase health and decrease money
                   playerHealth = playerHealth + 20;
                   playerMoney = playerMoney - 7;
                 } else {
                   window.alert("You don't have enough money!");
                 }
                 break;
               case "UPGRADE": // new case
               case "upgrade":
                 if (playerMoney >= 7) {
                   window.alert(
                     "Upgrading player's attack by 6 for 7 dollars."
                   );

                   // increase attack and decrease money
                   playerAttack = playerAttack + 6;
                   playerMoney = playerMoney - 7;
                 } else {
                   window.alert("You don't have enough money!");
                 }
                 break;
               case "LEAVE": // new case
               case "leave":
                 window.alert("Leaving the store.");

                 // do nothing, so function will end
                 break;
               default:
                 window.alert("You did not pick a valid option. Try again.");

                 // call shop() again to force player to pick a valid option
                 shop();
                 break;
             }
            };
            

   var playerName;
   var playerHealth;
   var playerAttack;
   var playerMoney;

   var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
   var enemyHealth = 50;
   var enemyAttack = 12;
   // function to start a new game
   var startGame = function () {
     // reset player stats
     playerName = window.prompt("What is your robot's name?");
     playerHealth = 10;
     playerAttack = 10;
     playerMoney = 10;

     for (var i = 0; i < enemyNames.length; i++) {
       if (playerHealth > 0) {
                               window.alert(
                                 "Welcome to Robot Gladiators! Round " + (i + 1)
                               );
                               console.log(
                                 "Welcome to Robot Gladiators! Round " + (i + 1)
                               );

                               var pickedEnemyName = enemyNames[i];

                               enemyHealth = 50;

                               fight(pickedEnemyName);
                               // if we're not at the last enemy in the array
                               if (i < enemyNames.length - 1) {
                                 shop();
                               }
                             } else {
         window.alert("You have lost your robot in battle! Game Over!");
         endGame();
         break;
       }
     }
     endGame();
     // other logic remains the same...
   };

   var endGame = function () {
     window.alert("The game has now ended. Let's see how you did!");

     // if player is still alive, player wins!
     if (playerHealth > 0) {
         
       window.alert(
         "Great job, you've survived the game! You now have a score of " +
           playerMoney +
           "."
       );
     } else {
       window.alert("You've lost your robot in battle.");
     }

     var storeConfirm = window.confirm(
       "The fight is over, visit the store before the next round?"
     );

     // if yes, take them to the store() function
     if (storeConfirm) {
       shop();
     }
     // ask player if they'd like to play again
     var playAgainConfirm = window.confirm("Would you like to play again?");

     if (playAgainConfirm) {
       // restart the game
       startGame();
     } else {
       window.alert("Thank you for playing Robot Gladiators! Come back soon!");
       throw new Error("Abort session");
     }
   };

   var fight = function (enemyName) {
     while (playerHealth > 0 && enemyHealth > 0) {
       // ask user if they'd liked to fight or run
       var promptFight = window.prompt(
         'Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
       );

       // if user picks "skip" confirm and then stop the loop
       if (promptFight === "skip" || promptFight === "SKIP") {
         // confirm user wants to skip
         var confirmSkip = window.confirm("Are you sure you'd like to quit?");

         // if yes (true), leave fight
         if (confirmSkip) {
           window.alert(
             playerName + " has decided to skip this fight. Goodbye!"
           );
           // subtract money from playerMoney for skipping
           playerMoney = playerMoney - 10;
           console.log("playerMoney", playerMoney);
           break;
         }
       }

       // remove enemy's health by subtracting the amount set in the playerAttack variable
       enemyHealth = enemyHealth - playerAttack;
       console.log(
         playerName +
           " attacked " +
           enemyName +
           ". " +
           enemyName +
           " now has " +
           enemyHealth +
           " health remaining."
       );

       // check enemy's health
       if (enemyHealth <= 0) {
         window.alert(enemyName + " has died!");

         // award player money for winning
         playerMoney = playerMoney + 20;

         // leave while() loop since enemy is dead
         break;
       } else {
         window.alert(
           enemyName + " still has " + enemyHealth + " health left."
         );
       }

       // remove players's health by subtracting the amount set in the enemyAttack variable
       playerHealth = playerHealth - enemyAttack;
       console.log(
         enemyName +
           " attacked " +
           playerName +
           ". " +
           playerName +
           " now has " +
           playerHealth +
           " health remaining."
       );

       // check player's health

       if (playerHealth <= 0) {
         window.alert(playerName + " has died!");
         // leave while() loop if player is dead
         break;
       } else {
         window.alert(
           playerName + " still has " + playerHealth + " health left."
         );
       }
     }
   };

   for (var i = 0; i < enemyNames.length; i++) {
     if (playerHealth > 0) {
       window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

       // pick new enemy to fight based on the index of the enemyNames array
       var pickedEnemyName = enemyNames[i];

       // reset enemyHealth before starting new fight
       enemyHealth = 50;

       // use debugger to pause script from running and check what's going on at that moment in the code
       // debugger;

       // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
       fight(pickedEnemyName);
     } else {
       window.alert("You have lost your robot in battle! Game Over!");
       break;
     }

     // function to start a new game
     var startGame = function () {
       // reset player stats
       playerHealth = 100;
       playerAttack = 10;
       playerMoney = 10;

       // play again
       startGame();
     };

     for (var i = 0; i < enemyNames.length; i++) {
       if (playerHealth > 0) {
         window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
         console.log("Welcome to Robot Gladiators! Round " + (i + 1));

         var pickedEnemyName = enemyNames[i];

         enemyHealth = 50;

         fight(pickedEnemyName);

         // if we're not at the last enemy in the array
         if (i < enemyNames.length - 1) {
           shop();
         } else {
           window.alert("You have lost your robot in battle! Game Over!");
           break;
         }
         var endGame = function () {
           window.alert("The game has now ended. Let's see how you did!");

           // if player is still alive, player wins!
           if (playerHealth > 0) {
             window.alert(
               "Great job, you've survived the game! You now have a score of " +
                 playerMoney +
                 "."
             );
           } else {
             window.alert("You've lost your robot in battle.");

             // ask player if they'd like to play again
             var playAgainConfirm = window.confirm(
               "Would you like to play again?"
             );

             if (playAgainConfirm) {
               // restart the game
               startGame();
             } else {
               window.alert(
                 "Thank you for playing Robot Gladiators! Come back soon!"
               );

               if (playerHealth > 0 && i < enemyNames.length - 1) {
                 // ask if user wants to use the store before next round
                 var storeConfirm = window.confirm(
                   "The fight is over, visit the store before the next round?"
                 );

                 // if yes, take them to the store() function
                 if (storeConfirm) {
                   shop();
                 }
               }
             }
        

             // if we're not at the last enemy in the array
             if (i < enemyNames.length - 1) {
               shop();
             }
           }
         };
       }
     }
   }
var playerName;
var playerHealth;
var playerAttack;
var playerMoney;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


var randomNumber = function (min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};


// function to start a new game
var startGame = function () {
  // reset player stats
  playerName = window.prompt("What is your robot's name?");
  playerHealth = 10;
  playerAttack = 10;
  playerMoney = 10;

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      console.log("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];

      enemyHealth = randomNumber();

      fight(pickedEnemyName);
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      endGame();
      break;
    }
  }
  endGame();
  // other logic remains the same...
};

var endGame = function () {
  window.alert("The game has now ended. Let's see how you did!");

  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert(
      "Great job, you've survived the game! You now have a score of " +
        playerMoney +
        "."
    );
  } else {
    window.alert("You've lost your robot in battle.");
  }

  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");

  if (playAgainConfirm) {
    // restart the game
    startGame();
  } else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    throw new Error("Abort session");
  }
};

var fight = function (enemyName) {
  while (playerHealth > 0 && enemyHealth > 0) {
    // ask user if they'd liked to fight or run
    var promptFight = window.prompt(
      'Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.'
    );

    // if user picks "skip" confirm and then stop the loop
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm user wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
      }
    }

    // generate random damage value based on player's attack power
var damage = randomNumber(playerAttack - 3, playerAttack);

enemyHealth = Math.max(0, enemyHealth - damage);
    console.log(
      playerName +
        " attacked " +
        enemyName +
        ". " +
        enemyName +
        " now has " +
        enemyHealth +
        " health remaining."
    );

    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");

      // award player money for winning
      playerMoney = playerMoney + 20;

      // leave while() loop since enemy is dead
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }

    // remove players's health by subtracting the amount set in the enemyAttack variable
    var damage = randomNumber(enemyAttack - 3, enemyAttack);
    playerHealth = Math.max(0, playerHealth - damage);
    console.log(
      enemyName +
        " attacked " +
        playerName +
        ". " +
        playerName +
        " now has " +
        playerHealth +
        " health remaining."
    );

    // check player's health

    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      // leave while() loop if player is dead
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

for (var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];

    // reset enemyHealth before starting new fight
   enemyHealth = Math.floor(Math.random() * 21) + 40;

    // use debugger to pause script from running and check what's going on at that moment in the code
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
  } else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
  }

  // function to start a new game
  var startGame = function () {
    // reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    // play again
    startGame();
  };

  for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
      console.log("Welcome to Robot Gladiators! Round " + (i + 1));

      var pickedEnemyName = enemyNames[i];

      enemyHealth = randomNumber( 40,60);

      fight(pickedEnemyName);
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
    var endGame = function () {
      window.alert("The game has now ended. Let's see how you did!");

      // if player is still alive, player wins!
      if (playerHealth > 0) {
        window.alert(
          "Great job, you've survived the game! You now have a score of " +
            playerMoney +
            "."
        );
      } else {
        window.alert("You've lost your robot in battle.");

        // ask player if they'd like to play again
        var playAgainConfirm = window.confirm("Would you like to play again?");

        if (playAgainConfirm) {
          // restart the game
          startGame();
        } else {
          window.alert(
            "Thank you for playing Robot Gladiators! Come back soon!"
          );
        }
      }
    };
  }
  // start the game when the page loads
  startGame();
}
startGame();

