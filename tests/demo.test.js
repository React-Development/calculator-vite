
describe('Tests on <DemoComponent />', () => {

  test('This test must not fail', () => {
    // 1. start it
    const message1 = 'Hello World';

    // 2. stimulate
    const message2 = message1.trim();


    // 3. watch expected behavior
    expect(message1).toBe(message2);
  });

})
