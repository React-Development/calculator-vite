import { getImage } from "../../src/base-tests/async-await"

describe('tests on 11-async-await', () => {

  test('getImage must return image URL', async () => {
    const resp = await getImage();

    expect(typeof resp).toBe('string');

  })

  test('getImage must not return image URL if no Api Key', async () => {
    const resp = await getImage();

    expect(resp).toBe('Image not found');

  })
})
