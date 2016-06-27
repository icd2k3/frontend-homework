# Seed Frontend Homework

This is waaay over-engineered for what it needs to be, but I wanted to use the same architecture/techniques that I like to use when working on a large-scale application.

If you have any questions, or problems running the local build, please contact me at icd2k3@gmail.com.

## Setup

- Run `npm i` to install all project dependencies
- Run `npm run build` to bundle scripts
- Run `npm run start` to start dev server
- Open localhost:8080 in browser (Chrome preferred)

## Features

- Create a new invoice (including due date)
- Randomly generate invoices
- Edit existing invoice
- Sort invoices list by name, total, or due date
- Delete invoice
- Mark invoice status as paid
- Send invoice preview

## Modules
This project includes some modules that weren't specified in the requirements...
 
- [Redux](https://github.com/reactjs/redux) I know... I know... the instructions said to use [Flux](https://facebook.github.io/flux/) for the data-layer, but Redux is very similar to Flux and I prefer it for large apps. There's a pretty good comparison breakdown [here](http://stackoverflow.com/a/32920459/1411364)

- [redux-logger](https://github.com/evgenyrodionov/redux-logger) Displays every single user action including prev/next full application state. Really handy for debugging, and can be hooked up to error loggers etc.

- [Immutable](https://facebook.github.io/immutable-js/) Can make applications more predictable because you know props/state couldn't have been accidentally changed somewhere in the flow. Also has a pretty handy API for modifying complex data.

- [Postcss](https://github.com/postcss/postcss) For style parsing

- [react-bootstrap](https://react-bootstrap.github.io/) For quickly mocking up UI and helpers for forms, popups, etc.

- [react-widgets](https://jquense.github.io/react-widgets/docs/#/?_k=a7aied) For the date picker field.

## What Could Be Improved?

- No unit test coverage. If you'd like to see examples of test coverage from past projects I'd be happy to send them over!
- Very few comments in code (if I was working with an engineering team I'd definitely be leaving more comments). If you have any questions about parts of the code please let me know.
- Parts of the app could use some additional polish like subtle animations and in general just making it look less bootstrappy.
- Form validation
- Nothing has been optimized for speed or file size.
- Email doesn't send anywhere (but I do log the JSON invoice in the console)

