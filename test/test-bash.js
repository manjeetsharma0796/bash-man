const {describe, it} = require('node:test');
const deepStrictEqual = require('assert');
const {pwd} = require('../bash-commands.js'); 

describe("Testing bash-commands.js", function() {
  it("Should give true, if function is called", function() {
    deepStrictEqual(pwd(), true);
  })
})
