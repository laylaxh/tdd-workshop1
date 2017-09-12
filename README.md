# TDD exercise

Repo for a basic TDD exercise in JavaScript.  `master` branch contains the
starting point and instructions.  Completed exercise is built in the 
`exercise` branch.

## Prerequisites

You'll need a recent version of npm installed, and a web browser.  On a mac, `brew install npm` should do it. 

## Setup

To be set up for the workshop / exercise, you'll need to install npm modules with:

```bash
npm install
```

### Confirming correct setup

If your setup is correct, you should be able to do these four things:

* Run the tests once. Run `npm test` on the command line and you should see a single test pass successfully.
* Run the test suite repeatedly. Run `npm run watch`: you should see the tests run once, then pause.  They will re-run when you edit the files.  (Try it with `test/basic_test.js`!)  Quit with CTRL-c
* Build the app!  Execute `webpack` at the command line, which should create `build/app.js`.  The output should look something like this:
```bash
[20:16:35 tdd_demo_javascripr]$ webpack
Hash: 77a4dc5ca299c310ab91
Version: webpack 3.5.6
Time: 340ms
     Asset     Size  Chunks             Chunk Names
    app.js  2.64 kB       0  [emitted]  main
app.js.map   2.8 kB       0  [emitted]  main
   [0] ./src/index.js 114 bytes {0} [built]
[20:16:43 tdd_demo_javascript]$
```

* Open the app! If you open `build/index.html` in a web browser and see the text "It Works!", everything is working fine.  On a mac, you should be able to just execute `open build/index.html` in the terminal.
