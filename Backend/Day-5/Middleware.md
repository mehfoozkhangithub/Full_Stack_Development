# Middleware

> Middleware :- something in middle of the somthing

> is just a function -> rune once the req is made, but before the response sent

> -> has access to the request object, and the next function

1. custom middleware :- logger, timelogger, etc.
1. expressinbuilt middleware :- express.json(),express.text(), express.route();
1. community middleware - cors, multer.

#### define what is query and param?

- `query` -> **google.com?q=masai** _this is query where out ? this symbol started form_

- `params` -> **studentsData.com/52 or studendData.com/:studentId** _this is the param where our endpoint have some value_
