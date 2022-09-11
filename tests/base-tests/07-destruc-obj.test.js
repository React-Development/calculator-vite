import { returnArr } from "../../src/base-tests/destruc-obj"

describe('tests on 07-destruc-obj', () => {
  test('must return a string and a number', () => {
    const [letters, numbers] = returnArr();

    expect(letters).toBe('ABC');
    expect(numbers).toBe(123);

    expect(typeof letters).toBe('string');
    expect(typeof numbers).toBe('number');

    expect(letters).toEqual(expect.any(String));

    // expect(typeof letters)

  })
})