import { getHeroByIdAsync } from "../../src/base-tests/promises";

describe('tests on 09-promises', () => {
  test('getHeroByIdSync must return a hero', (done) => {
    const id = 1;
    getHeroByIdAsync(id).then(hero => {
      expect(hero).toEqual({
        id: 1,
        name: 'Batman',
        owner: 'DC'
      });

      done();
    });
  })

  test('getHeroByIdSync must return an error if hero doesn\'t exists', (done) => {
    const id = 1;
    getHeroByIdAsync(id)
      // .then((hero) => {
      //   expect(hero).toBeFalsy();
      //   done();
      // })
      .catch(error => {

        expect(error).toBe('Hero couldn\'t be found ' + id)

        done();

      })
  })
})