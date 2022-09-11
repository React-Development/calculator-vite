import { getGreeting } from "../../src/base-tests/template-string";

describe('Tests on 02-template-string', () => {
  test('getGreeting should return "Hello Brayan"', () => {
    const name = 'Brayan';
    const message = getGreeting(name);

    expect(message).toBe(`Hello ${name}!!!`);
  })
})