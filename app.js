import { Console as log } from "./utils.js";


// Test the logging behavior
log.info("This is a normal log message from Console.log.");
log.errorLog("This is an error message from Console.errorLog.");

// Toggle the logging behavior
// Console.showLogs = false;
log.warn('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz');
log.errorLog("This error message will not be shown.");