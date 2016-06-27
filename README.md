# Seed Frontend Homework

This is waaay over-engineered for what it needs to be, but I wanted to use the same architecture/techniques that I would use when working in a large-scale application.

If you have any questions, or problems running the local build, please contact me at icd2k3@gmail.com.

## Setup

- Run `npm i` to install all project dependencies
- Run `npm run build` to bundle scripts
- Run `npm run start` to start dev server
- Open localhost:8080 in browser (Chrome preferred)

## Modules
This project includes some modules that weren't specified in the requirements...

- [postcss](https://github.com/postcss/postcss) For style parsing

- [react-bootstrap](https://react-bootstrap.github.io/) For quickly mocking up UI and helpers for forms, popups, etc.

- [react-widgets](https://jquense.github.io/react-widgets/docs/#/?_k=a7aied) For the date picker field.

- [Immutable](https://facebook.github.io/immutable-js/) Can make applications more predictable because you know props/state couldn't have been accidentally changed somewhere in the flow. Also has a pretty handy API for modifying complex data.
 
- [Redux](https://github.com/reactjs/redux) I know, I know, the instructions said to use Flux for the data-layer, but Redux is very similar to Flux. There's a pretty good comparison breakdown [here](http://stackoverflow.com/a/32920459/1411364)
