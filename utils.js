import chalk from 'chalk';

export class Console {
    // External variable to control logging behavior
    static showLogs = true;

    // Helper method to get the caller line number
    static getCallerLine() {
        const stack = (new Error()).stack.split('\n');
        // The 3rd element in the stack array should be the caller (index 2 because arrays are 0-indexed)
        const caller = stack[3].trim();
        return caller;
    }

    // Method to log messages
    static info(...messages) {
        if (Console.showLogs) {
            const callerLine = Console.getCallerLine();
            const line = callerLine.split('/')
            console.log('-')
            console.log(`${chalk.cyan('Info:')} ${line[line.length -1]}]`,
                  ...messages
                );
            
        }
    }
    // Method to log messages
    static warn(...messages) {
        const warning = chalk.hex('#FFA500');
        if (Console.showLogs) {
            const callerLine = Console.getCallerLine();
            const line = callerLine.split('/')
            console.log('-')
            console.log(`${warning('Warn:')} ${line[line.length -1]}]`,
                  ...messages
                );
            
        }
    }
    
    // Method to log error messages in red
    static errorLog(...messages) {
        if (Console.showLogs) {
            const callerLine = Console.getCallerLine();
            const line = callerLine.split('/')
            console.log('-')
            console.log(chalk.red('Error'), `${chalk.green('[File & Line No:')} ${line[line.length - 1]}]`, ...messages.map(message => chalk.blue.bgRed.bold(message)));
            
        }
    }
}


// Usage example
Console.showLogs = true;  // Set to false to disable logging