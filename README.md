## A caveat with all examples, and working with ESlint and code configuration generally.  

VSCode sometimes doesn't respond to config changes, or installing new dependencies etc. 

As such, _you should always treat what the CLI gives you as truth_. 

Often closing VSCode and reopening will solve any issues. 

## What is ESLint? 

- Configurable code style analyser. 
- Customisable - you can write your own linting plugins. 
- Can enforce code style (tabs vs spaces, brackets or not) as well as syntatic code smells (reassigning variables, using the 'var' keyword, etc). 

## What is Prettier? 

- _Opinionated_ code style. 
- While it has some options, it is _by design_ not intended to be customisable. 

## Some misconceptions 

- "Prettier can do autoformatting for you, eslint can't"
    - Not true. Any thing that has the 'fix' (magnifying glass) can be fixed when running `eslint --fix`. 
- "ESLint and Prettier do different things" 
     - Not true. ESLint can do _more_ than prettier, but everything that Prettier can do, ESLint has rules to do as well.  

## So if ESLint can do everything that Prettier does, then why use Prettier? 

I used to hold this view. But I've come around on Prettier. Basically rather than configuring every little bit of code style for your ESlint, and then that potentially being changed, let's just use Prettier and then apply some linting rules on top. 


## Example 1 - Conflicts between eslint and prettier. 

1. Navigate to `eg1-conflict` run `yarn`. 
2. Open `src/files.js`. 
3. Run `yarn lint:fix` notice how the the code changes. 
4. Run `yarn prettier:write` notice that the code changes again. 

This is because our rules are inherrently conflicting. 

Eslint wants to enforce single quotes, prettier wants to enforce double quotes. 

**Fortunately, there is a good tool that helps here!** 

5. Run `yarn prettier:checkconfig` 

We get a warning about which rules conflict. 


## Extending ESLint configs. 

It's quite common for configs to extend a precanned set of eslint guidelines. 

### Example 2 - Extending airbnb base. 


Pretty straight forward. 

What I don't like about extending airbnb specifically: 

- All rules are error.
    - This question asks about dealing with this: https://stackoverflow.com/questions/46517832/how-to-extend-airbnb-eslint-but-with-warnings-instead-of-errors, but there isn't really a nice solution. 
- I don't like all the rules. 

IMO: 

- Just roll your own. Just because something is from airbnb, doesn't mean it is good.
- It is better to understand the rules you are using. 
- A lot of the rules, prettier is doing anyway. 



## Example 3 - Integrating ESLint and Prettier 

There are two tools/configurations you will often seen when using both ESLint and Prettier. 

### 1. Extending `eslint-config-prettier`

This is **neccesary**, if you are extending any other configs (like airbnb). What it does is turn off any rules they may have turned on. You just need to put the prettier config at the end of the extends list. 

_Note that extending the prettier config **will not** disable any conflicting rules you put in the `rules` section_. 

### 2. Adding the prettier-plugin/prettier rules. 

You can also add `prettier/prettier` to the rules. This treat your prettier rules as a single eslint rule and provide autofixing via the `eslint --fix`  mechanism. 

This isn't neccesary, and IMO is just distracting. It gives yellow warnings for white space stuff - I would rather leave that for a husky hook. (More on that later). 






## Example 4 - Warnings vs Errors, 

I think the distinction is great!

Maybe ESLint should have mooore levels of distinction!

For me: 

- Warning = ok to ignore for now, but should clean up before creating a PR. 
- Error: Something is wrong, you should deal with this now. 

This brings me back to what I don't like about the airbnb config - it trains you to ignore red errors, when they likely don't matter. 
For me - ok it ignore yellow errors for now -  but you should be dealing with red errors immediately. 

Can still enforce warnings with --max-warnings. 


## Example 5 - Use with Husky. 

Husky is just a a convenient wrapper around git hooks. 

Git hooks are used to run arbitrary commands on the developers computer, typically precommit or prepush. 

Common use cases are: 

- Code formatting (pre commit) 
- Running tests (pre push) 

## Why use them? 

- Convenience/Speed. It sucks to push your changes and then find out an hour later it's failed on a lint or formatting error. 

### Some things to note: 

- Hooks might not run if you are using a non-terminal git client (eg sourcetree or VSCode)
    - Source tree solution?: https://jira.atlassian.com/browse/SRCTREE-7184?error=login_required&error_description=Login+required&state=e6f04868-439f-41c7-ae95-ea622aa29ae0 
    - Solution is mostly to open sourcetree via command line. 
- Husky hooks can always be skipped with `--no-verify` 
- So don't rely on git hooks to maintain code formatting etc - make sure you are running those in your CI pipeline as well. 
- Yes VSCode can be configured to format on save. But not everyone uses VSCode or has the same VSCode config. 


### Opting in to using husky. 

- Husky will look for a `.huskyrc` file in your home (`~`) directory. 
- We can use this to set flags about wheter to use husky or not. 

### - See example 5. 



