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

You can find example code in the examples/ directory.

## Security Warning

**Obfiscate** is designed for educational and recreational purposes only. It is not suitable for commercial use or for running untrusted code, as the obfuscation process does not provide true security.

The use of `eval` and obfuscated code poses security risks, and executing obfuscated code from untrusted sources can be dangerous. Do not use this library in production environments or to run code from untrusted sources.

## Documentation

### normalised code "~"

### createVariable(value)
This function is used to create a new variable and add it to the variables array. The `value` parameter represents the initial value of the variable. The function pushes the `value` to the variables array, effectively creating a new variable.

### changeVariable(index, value)
This function is used to change the value of an existing variable in the variables array. The `index` parameter represents the `index` of the variable to be changed, and the `value` parameter represents the new value to assign to the variable. The function updates the value of the variable at the specified index in the variables array.

### getVariable(index)
This function is used to retrieve the value of a variable from the variables array. The `index` parameter represents the index of the variable to be retrieved. The function returns the value of the variable at the specified index in the variables array.

### createFunction(code)
This function is used to create a new function and add it to the functions array. The `code` parameter represents the code block of the function. then uses that code to create a new function.

### runFunction(index)
This function is used to run a function. The `index` parameter represents the index of the function to be executed. The function uses setTimeout to delay the execution of the function. Inside the setTimeout callback, the eval function is used to evaluate the code of the function at the specified `index` in the functions array, wrapped inside an async function. This allows for the function to be executed asynchronously.

Note: The runFunction function randomly delays the execution of the function within a specified range of time, using the Math.random function and the config.delays options.
## Contributing

Contributions to **Obfiscate** are welcome! Feel free to open issues or submit pull requests for bug fixes, improvements, or new features.

## License

This project is licensed under the MIT License.
