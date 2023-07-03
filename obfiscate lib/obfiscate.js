// Helper function to fetch JSON data
async function fetchJson(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    console.error("FetchError:", error);
    throw error;
  }
}

// Display a security warning in the console
console.error(`
  ________     _________      _____       ______     _
 /  _____ \\   |____ ____|    / ___ \\     | ____ \\   | |
 | /     \\_\\      | |       / /   \\ \\    | |   \\ \\  | |
 | |              | |      / /     \\ \\   | |   | |  | |
 | \\______        | |      | |     | |   | |___/ /  | |
 \\______  \\       | |      | |     | |   |  ____/   | |
        | |       | |      | |     | |   | |        | |
  __    | |       | |      \\ \\     / /   | |        |_|
 \\  \\___/ /       | |       \\ \\___/ /    | |         _
  \\______/        |_|        \\_____/     |_|        |_|


`)
console.warn(`
⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️
Security Warning: The following library uses 'eval', 
which can be dangerous and pose security risks. 
This library is not intended for commercial use. 
⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️⚠️

`);
console.log(`
to disable this message goto "config.json" and set securityWarnig to false

`)

// Read the config.json file using fetch
const configUrl = "obfiscate lib/config.json";
fetchJson(configUrl)
.then((config) => {
console.warn("---------------------- settings ----------------------")
console.log("obfuscationSeed: " + config.obfuscationSeed)
console.log("obfFilePath: " + '"' + config.obfFilePath + '"')
console.log("securityWarnig: true")

setTimeout(() => {
console.clear()

let variables = [];

function createVariable(value) {
  variables.push(value);
}

function changeVariable(index, value) {
  variables[index] = value;
}

function getVariable(index) {
  return variables[index];
}

let functions = [];

function createFunction(code) {
  functions.push(code);
}

async function runFunction(index) {
  setTimeout(() => {
    eval('async function run() {'+functions[index]+'} run()');
  }, Math.floor(Math.random() * (config.delays.maxLoopWaitFrames - config.delays.minLoopWaitFrames) + config.delays.minLoopWaitFrames))
}

let capitaliseNext = false;
let Normalised = false;
let string = false;
let space = false
let normalisationScore = 0;
let codeScore = 0;
let deadScore = 0;
let lastChar = "0";

function obfuscateCharacter(char, seed) {
  const random = new Math.seedrandom(seed); // Use a seedable random number generator
  const randomNumber = random(); // Generate a random number between 0 and 1
    if (char !== " ") {
      if (char !== "^") {
        if (char !== "~") {
          if (char !== " " && char !== "." && !Normalised) {
            if (char === "`") {
              capitaliseNext = true;
              return "";
            } else if (capitaliseNext === true) {
              lastChar = char;
              const charCode = char.charCodeAt(0);
              const obfuscatedCharCode = Math.floor(randomNumber * charCode);

              // Adjust the obfuscated character code to ensure it falls within the valid character code range
              const adjustedCharCode = obfuscatedCharCode % 65536;

              const obfuscatedChar = String.fromCharCode(adjustedCharCode);
              capitaliseNext = false;
              codeScore++;
              if (obfuscatedChar == '"' || obfuscatedChar == "'") {
                if (string == false) {
                  string = true;
                } else {
                  string = false;
                }
              }
              return obfuscatedChar;
            } else {
              lastChar = char;
              const charCode = char.charCodeAt(0);
              const obfuscatedCharCode = Math.floor(randomNumber * charCode);

              // Adjust the obfuscated character code to ensure it falls within the valid character code range
              const adjustedCharCode = obfuscatedCharCode % 65536;

              const obfuscatedChar = String.fromCharCode(adjustedCharCode).toLowerCase();
              capitaliseNext = false;
              codeScore++;
              if (obfuscatedChar == '"' || obfuscatedChar == "'") {
                if (string == false) {
                  string = true;
                } else {
                  string = false;
                }
              }
              return obfuscatedChar;
            }
          } else if (char === " ") {
            lastChar = char;
            return " ";
          } else if (char === ".") {
            lastChar = char;
            return ".";
          } else {
            lastChar = char;
            normalisationScore++;
            return char;
          }
        } else {
          if (Normalised == false) {
            Normalised = true;
          } else {
            Normalised = false;
          }
          lastChar = char;
          return "";
        }
      } else {
        if (lastChar == "^") {
          console.warn('invalid placement of dead modifier ("^")');
          return "";
        } else {
          deadScore++;
          lastChar = "^";
          return "";
        }
      }
    } else {
      if(!string){
        space = true
      }
      console.log(codeScore)
      return "";
    }
}

function obfuscateCode(code, seed) {
  if (seed == 0) {
    console.warn("Select an obfuscation seed by placing ~setObfuscationSeed([seed])~ at the start of your script");
  }

  if (code.length > config.maxFileSize) {
    console.error("File size exceeds the maximum allowed size XD");
    return "";
  }

  let obfuscatedCode = "";

  for (let i = 0; i < code.length; i++) {
    const char = code[i];
    let obfuscatedChar;

    obfuscatedChar = obfuscateCharacter(char, seed);

    obfuscatedCode += obfuscatedChar;
  }

  return obfuscatedCode;
}

let seed = config.obfuscationSeed; // Replace 'your-fixed-seed' with your desired seed value
const maxFileSize = 10000; // Maximum allowed file size in characters

// Read the .obf file
const obfFilePath = config.obfFilePath;
if (obfFilePath.endsWith('.obf')) {
  fetch(obfFilePath)
    .then((response) => response.text())
    .then((data) => {
      if (data.length > maxFileSize) {
        console.error("File size exceeds the maximum allowed size");
        return;
      }

      const codeIndex = data.indexOf("\n") + 1;
      const obfuscatedCode = obfuscateCode(data.substring(codeIndex), seed);



      console.warn("----- unobfiscated code -----");
      console.log("");
      console.log(obfuscatedCode);
      console.log("");
      console.error("-------- code output --------");
      console.log("");

      // Check if the obfuscated code contains try and catch statements
      if (space == false) {
        if (codeScore / 10 <= deadScore) {
          if (!obfuscatedCode.includes("function")) {
            if (!obfuscatedCode.includes("var") && !obfuscatedCode.includes("let") && !obfuscatedCode.includes("const")) {
              if (!obfuscatedCode.includes("//")) {
                if (!obfuscatedCode.includes("try") && !obfuscatedCode.includes("catch")) {
                  try {
                    if (normalisationScore >= config.maxNormalisation) {
                      console.error("code is not obfuscated enough )=<");
                    } else if (normalisationScore >= config.maxNormalisation-10) {
                      console.warn("Are you actually going to use the obfuscation |=<");
                      eval(obfuscatedCode); 
                      //console.log("");
                      //console.error("Code Stpooed...");
                    } else {
                      eval(obfuscatedCode);
                      //console.log("");
                      //console.error("Code Stoped...");
                    }
                  } catch (e) {
                    console.error("CodeError: Something bad happened ¯\\_(ツ)_/¯");
                  }
                } else {
                  console.error("Code contains try and catch statements. Skipping execution. (=<");
                }
              } else {
                console.error("Code contains comments. Skipping execution. (=<");
              }
            } else {
              console.error("Code contains variables. Skipping execution. (=<");
              console.error('Use the function "getVariable([index])" and "createVariable([value])" to create variables (=<');
            }
          } else {
            console.error("Code contains functions. Skipping execution. (=<");
            console.error('Use the function "getFunction([index])" and "createFunction([code])" to create functions (=<');
          }
        } else {
          console.error('10% of your code must be dead modifier ("^")');
        }
      } else {
        console.error("Code contains spaces. Skipping execution. (=<");
      }
    })
    .catch((error) => {
      console.error("ObfuscationError:", error);
    });
  }else{
    console.error("Invalid file type. Only .obf files are supported.");
  }
  }, config.securityWarnig ? 10000 : 0)
  }).catch((error) => {
    console.error("ConfigError:", error);
  });

//made By Lawton "Lawtro" Kelly
//contributers:
