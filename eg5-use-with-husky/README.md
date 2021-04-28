## In this example: 

Open `src/test.js` and write some code, make some lint errors or badly formated code. 

Run `yarn lint`. 

You will get warnings/errors. 

Run `yarn prettier:check` you will get warnings/errors. 

`git add -A && git commit`

You can commit the code. 

`git push`

You can push the code. 

Now, create/edit `~/.huskyrc`. 

Add the following lines: 

```
export FOO_BAR_USE_HUSKY_PRECOMMIT="true"
export FOO_BAR_USE_HUSKY_PREPUSH="true"
```

Edit your file again, and now try: 

```
git add -A && git commit
```

This time, the code will be formatted before you commit it. 

Run `git push` this time the push will not be allowed because you have lint errors. 






