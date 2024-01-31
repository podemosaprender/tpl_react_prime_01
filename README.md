# The shortest path to learn React

The code is organized for you to start from any point and **practice** and learn **gradualy**, most important but less demanding tasks first.

However you'll be learning the same tools we will use for any professional project:

* React, hooks, functional components, etc.
* [ReduxToolKit](https://redux-toolkit.js.org)
* [PrimeReact](https://primereact.org/), [PrimeFlex](https://primeflex.org/)

## Install

~~~
git clone https://github.com:podemosaprender/tpl_react_prime_01.git react_practice_1
cd react_practice_1
npm i
~~~

Notice the number `_1` in the end, if you can't repair your code, just delete the folder or make a new clone with another number and repeat.

You'll also want to install following plugins in your browser:

* Redux DevTools for [Chrome](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/)
* React DevTools for [Chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihin) or [Firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)

## Run

~~~
npm run dev
~~~

Click the link or paste in your browser address bar the url,
it looks like `http://localhost:5173/`

You should see a page like the one at https://viejo.podemosaprender.org/tpl_react_prime_01/

## Learn!

### Penny wise, pound foolish?

Programming languages and computers in general are plagued by silly, meaningless details: punctuation characters or commands you _have to_ type for programs to work as you want. It's wrong and **not your fault**.

To make things worse most of these meaningless details change every year, old meaningless details disappear, new meaningless details are born. Whole programming languages and tools appear and disappear quite often too! For years everybody was using DBase, or VisualBasic, both long gone!

Don't waste your time looking for a reason (unless you are an anthropologist willing to do research on the subject, then contact me!) just figure out how to circumvent the problems as you do with the bad design or poor execution in other thinks: banks, taxes, door handles, etc.

Focus on the big picture, keep business goals in mind, and use the same instincts that let you navigate modern life. Especially that you can copy a phrase you read or hear, change a word to give it the meaning you want, compose a larger text with words and phrases you found elsewhere.

### Find the bigger blocks

**Goal:** change text, add or rearrange elements on any page or _page component_.

Start by looking at [src/App.jsx](./src/App.jsx)

1. What things repeat or look the same? What are the differences?
2. Find the texts you see on the **rendered page**, as you see it in the browser e.g. "Hola!"
    Can you change it for other text and save the file? Does it change on the rendered page?
    What happens with other texts?
3. What happens if you copy the whole line with the text and repeat it?

### Copy and compose

**Goal:** build any screen you want composing existing blocks, thus called _components_.

Now look at [src/components/micalendar.jsx](./src/components/micalendar.jsx)
It's just the example from [PrimeReact](https://primereact.org/calendar/#basic) with a few changes.

Let's
1. create a new file `src/components/miorgchart.jsx`
2. copy another example from [PrimeReact](https://primereact.org/organizationchart/#basic)
3. copy how it's used in [src/App.jsx](./src/App.jsx) **your program will break, errors will be shown on the console**
4. find and fix the few differences between [src/components/micalendar.jsx](./src/components/micalendar.jsx) and `src/components/miorgchart.jsx` till it works again (it will!)
5. now try changing the names inside the boxes (unless you are from France, of course)

### Fill in the blanks: what *function* does it have, how does it *function*

**Goal:** avoid repeating code you'll have to read and maintain later, express what you **want** anywhere and **how** to show it in a single file and **function**.

e.g. you may want a very persuasive "buy" button with the price. The problem is nobody knows what looks persuasive until you show it to your clients and see their reaction. So you can create a `<PersuasiveBuyButton price="9.99" />` and use it everywhere, because you know **what** you want from the get go. You can create `components/persuasive_button.jsx` with the first *implementation* using just a regular button, perhaps bigger or with some color because you don't know **how** to make it persuasive yet. Then you can change just the implementation in `components/persuasive_button.jsx` and check how it looks in every place you used it, no other changes required.

In [src/App.jsx](./src/App.jsx) you'll see two *instances* of the *component* `Saludo` with different messages.

1. Change the messages, add other instances with different messages.
2. See how it's also used in [src/components/saludo_usuaria.jsx](./src/components/saludo_usuaria.jsx)
3. Try the `PersuasiveBuyButton` example.

As you have noticed the word **function** appears many times in our code. You've also seen a shorter form that looks like `() => something`. Functions are such a powerful idea that you learn in the 3rd or 4th year of a degree in Computer Science that [anything that can be computed can be expressed with functions](https://en.wikipedia.org/wiki/Lambda_calculus)

### Understanding function, state and change

**Goal:** ensure your program is always in a state you predicted as consistent and desirable.

Imagine this tic-tac-toe-playing AI: a book with [all possible boards](https://en.wikipedia.org/wiki/Tic-tac-toe), you look at the current state of the board, find it in the book and the next move besides it (BTW ChatGPT is just a bigger version of this)

Of course the book defines a **function** `(current_state) => next_move_for[current_state]` where `next_move_for` is just a table with two columns: "board now" and "board after we move", and one row for each possible state of the board, pretty much like a **dictionary**. Notice any table defines many functions, the columns you use to search are called *parameters* and the ones you want to know *return value*. For brevity you may say "odd numbers" instead of 1,3,5,7,9,11,13,... (infinity) but for speed you also memorized the multiplication tables even if you can compute the values by adding. It's your choice.

What we like of using functions to express **what** we want is we can say `stateAfter= ourRules(stateNow, whatHappened)` and focus on `ourRules` to make sure we don't end in an undesirable state.

React **components** are just **functions** `whatToShow = miComponent(currentState)`. When the **state** changes React evaluates the function again and updates what is shown on our web browser with the new result.

How do we manage to register and transform the state? We use Redux, and ReduxDevTools are a great tool to learn Computer Science too.

1. Open Redux Tools from the developer console (XXX:image?)
2. Change the values in the form and press "OK"
3. Notice `SaludoUsuaria` changed! and there is a new line in the ReduxDevTools window. You can explore there the previous and current state and what happened.
4. Change the values again, press "OK" and see. You can also move back and forth through the *state history* in ReduxDevTools and see the screen "at this or that time".
5. Check in [./src/components/miform.jsx](./src/components/miform.jsx) how we sent a `memoriaPoner` message telling what happened when the button is pressed.
6. Check in [./src/components/saludo_usuaria.jsx](./src/components/saludo_usuaria.jsx) how we *watch* for a given *key* in the state *dictionary* to return what to show in accordance with the current state.

This powerful pattern let's us write our programs in small parts,
* Most are just *how* to display *what* we want, e.g. all PrimeReact components and many others like `Saludo`, etc. That's where we prefer to keep most of our code so we can reason about how it works just by looking at on function or file: this code has no side effects to the world nor the world can unexpectedly affect it's behaviour. We call these functions **pure**.
* A few watch for changes in the state, like `SaludoUsuaria` that just gets the name and calls the pure function component `Saludo`.
* Fewer less *send messages* to our program so we can apply our rules and define a new state.

### That's how the world functions

We can call a function to read data from a Google spreadsheet, or asset prices. We can show a list of products and ask the user which they want to buy. You can think of all of this as functions:

* `currentSpreadsheetData= fetch('http://google.com/horrible_very_long_url', now())`
* `currentBTCprice= fetch('http://binance.com/BTC/...')`
* `whatTheyBought= askUserWhatTheyWantToBuy(catalog)`

XXX:add easy to use functions and examples.

### Practical function and data structure patterns

XXX: map, filter, Object.keys, etc. in the console, then with react jsx.
XXX: Promises, async/await
