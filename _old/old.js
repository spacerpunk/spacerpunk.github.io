//  function processCommand(cmd) {
//      //addToOutput(`C:\\> ${cmd}`);
//      
//      const lowerCmd = cmd.toLowerCase();
//  
//      switch(cmd.toLowerCase()) {
//          case 'about':
//              typeText("Hello there! My name is Nicolás Requena AKA *Spacerpunk*.");
//              break;
//          case 'help':
//              typeText("Available commands: ABOUT, HELP, CLEAR");
//              break;
//          case 'banner':
//              addToOutput(asciiBanner);
//              break;
//          case 'clear':
//              terminalContent.innerHTML = '';
//              break;
//          default:
//              addToOutput(`Command not recognized: ${cmd}`);
//      }
//      
//      createInputLine();
//  }