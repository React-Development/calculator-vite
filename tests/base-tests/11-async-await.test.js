import { getImage } from "../../src/base-tests/async-await"

describe('tests on 11-async-await', () => {

  test('getImage must return image URL', async () => {
    const url = await getImage();
    // console.log(url);

    expect(typeof url).toBe('string');
  })
})