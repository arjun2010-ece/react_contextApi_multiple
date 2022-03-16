# Project is about using Context API and that too multiple Contexts in a single APP.
Context/index.js file contain all the definations.

for creating different data source :
1. we need only different reducer functions and initialstate as in index.js and
2.  Then we create different provider function utilizing relevant initial state and reducer functions
3.  then in app.js we can wrap a relevant compnent (requiring different data) with different providers
4. for usage Button.js and Hero.js are examples

So now if we can use Context APi, we reallly do not need any external redux packages.

This is the best example of using context API over REDUX.
