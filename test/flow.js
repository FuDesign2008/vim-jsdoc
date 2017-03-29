// @flow
function foo (arg1 :string, arg2: number): string {
  return ''
}

interface Foo {
  foo: string
}

type Bar = {
  bar: number
}

class FooBar {
  props: Bar

  foo (arg1: string, arg2: any): void {
  }

  bar (arg1: number, arg2: Foo): any {
    return
  }

  // This is a type, not object destructured Object.
  baz (arg1: { foo: number, bar: string }) {
    return
  }

  bazz (arg0: string, arg1: { foo: number, bar: string }, arg2: { foo: Foo, bar: Bar }) {}

  bazzz (arg0: string, arg1: { foo: number, bar: string }, arg2: { foo: Foo, bar: Bar }, arg3: number) {}
}
