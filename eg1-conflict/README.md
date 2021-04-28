## In this example: 


Open `src/file.js`

Run `yarn lint:fix` and then `yarn prettier:write` and then `yarn lint:fix` again. Note that the file keeps changing. 

This is because eslint and prettier in this configuration have different opinions about how the code should be formatted. 

Run `yarn prettier:checkconfig` and this will tell you which rules are in conflict. 

