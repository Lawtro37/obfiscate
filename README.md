# Obfiscate

## Features

- Obfuscation of code to make it difficult to understand.
- Functional programming paradigm.
- function random delay
- function and variable numbering

## getting started

### Configuration

To configure the obfuscation process, you can set the following options:

- `obfuscationSeed`: The seed value used for the random number generator during obfuscation. The same seed value will produce the same obfuscated code each time.
- `maxFileSize`: The maximum allowed file size in characters for the obfuscated code.
- `obfuscatedFilePath`: The path to the .obf file containing your obfuscated code.

### Examples

coming soon...
**feal free to add examples**

## Security Warning

**Obfiscate** is designed for educational and recreational purposes only. It is not suitable for commercial use or for running untrusted code, as the obfuscation process does not provide true security.

The use of `eval` and obfuscated code poses security risks, and executing obfuscated code from untrusted sources can be dangerous. Do not use this library in production environments or to run code from untrusted sources.

## Documentation

### Normalised Code "~"
Normalised code ensures that your code is not obfuscated if it is between two "~" characters. However, excessive usage of normalised code may cause the code to refuse to run.

Note: The allowed amount of normalised code can be changed within the config.json file, but it is not encouraged.

### Dead Modifier "^"
At least 10% of your code must be dead modifiers "^". Dead modifiers do not count if they are next to each other.

### Capitalisation Modifier "`"
This modifier will simply capitalise the next character if possible.

### createVariable(value)
This function is used to create a new variable. The `value` parameter represents the initial value of the variable. it can be acsesed by its index wich is determend by when this function is called.                                                                                     
```javascript
createVariable("test1") <-- index: 0
createVariable("test2") <-- index: 1
createVariable("test3") <-- index: 2
```

### changeVariable(index, value)
This function is used to change the value of an existing variable. The `index` parameter represents the index of the variable to be changed, and the `value` parameter represents the new value to assign to the variable. The function updates the value of the variable at the specified index.
```javascript
createVariable(10);                     <-- variable 0 has a value of 10
changeVariable(0, 100)                  <-- variable 0 now has a value of 100
```

### getVariable(index)
This function is used to retrieve the value of a variable. The `index` parameter represents the index of the variable to be retrieved. The function returns the value of the variable at the specified index in the variables array.
```javascript
createVariable(10);                     <-- variable 0 has a value of 10
changeVariable(0, getVariable(0) + 10); <-- variable 0 increased by 10
console.log(getVariable(0));            <-- this outputs 20
```

### createFunction(code)
This function is used to create a new function. The `code` parameter represents the code block of the function. then uses that code to create a new function.
```javascript
createVariable(10);  
createfunction("                   
  changeVariable(0, getVariable(0) + 10); 
  console.log(getVariable(0));          
")
//a new function has been created
```

### runFunction(index)
This function is used to run a function. The `index` parameter represents the index of the function to be executed. 

```javascript
createVariable(10);
createfunction("                   
  changeVariable(0, getVariable(0) + 10); 
  console.log(getVariable(0));          
")

runFunction(0); <-- outputs 20
runFunction(0); <-- outputs 30
```

Note: The runFunction function randomly delays the execution of the function within a specified range of time, that can be changed within the `config.json` file but is not encoraged.

**Feel free to provide additional details or examples in this documentation to help other users understand the effects and usage of these modifiers and functions.**

## Contributing

Contributions to **Obfiscate** are welcome! Feel free to open issues or submit pull requests for bug fixes, improvements, or new features.

**contributers: Lawton "Lawtro" kelly (createor)**

## License

This project is licensed under the MIT License.
