## In this example: 

Run `yarn lint`. 

You will get a mixture of of warnings and errors. 

Comment out the error line in `test.js`. 

Run `yarn lint`. You get warnings only. 

Run `yarn lint:strict`. Note that the process exits with code 1 - meaning this will cause CI for example to encounter an error and stop. 

Using the `--max-warnings=0` flag is how we prevent devs from pushing code that has warnings, without making them all red squiggles. 

