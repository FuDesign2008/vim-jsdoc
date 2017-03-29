/*eslint-env es6*/
// ES6 generator function

var anonymousGeneratorFunctionExpression = function* (arg1, arg2) {};

var namedGeneratorFunctionExpression = function* namedGenerator(arg1, arg2) {};

var anonymousFunctionExpression = function (arg1, arg2) {};

var namedFunctionExpression = function namedExpression(el, $jq) {}

var arrowFunction = (foo, bar) => { };

var arrowFunctionSingle = foo => {};

function namedFunctionDeclaration(_a2, err) { }

function* namedGeneratorFunc(data) { }

function defaultParams(arg, arg1 = 'foo', arg2 = 100) {}

const namespace = {};

namespace.x0 = function (e) { }; // anonymous method

namespace.x1 = (e) => { }; // anonymous method shorthand

namespace.x2 = function* (e) { }; // anonymous method generator

namespace.x3 = function testing(e) { }; // named method

namespace.x4 = function* testgen(description) { }; // named method generator

namespace.x5 = foo => { }; // anonymous method shorthand

class Foo {
  static foo(bar, baz) { } // static method

  bar(aaa, bb, ccc) { } // shorthand method
}

class Bar extends Foo {
}

function bar ({ arg1, arg2 }) {
  console.log(arg1, arg2);
}
bar({arg1: 'foo', arg2: 'bar'})

function baz ({arg1}) { }

function bazz ({ arg1, arg2 = { key: value }}) {
  console.log(arg2);
}
bazz({ arg1: 'foo', arg2: { key: 'value' }});

function bazzz ({ arg1, arg2 } = {}) {}

function bazzzz (arg1 = 'foo', { arg2, arg3 } = {}) {}

function bazzzzz (arg1, { arg2, arg3 }, arg4) {}

function bazzzzzz ({ arg1, arg2 }, { arg3, arg4 }) {}
