import { getHeroById, getHeroesByOwner } from "../../src/base-tests/imp-exp";

import heroes from "../../src/data/heroes";


describe('tests on 08-imp-exp', () => {
  test('getHeroById must return a hero by ID', () => {
    const id = 1;
    const hero = getHeroById(id);

    expect(hero).toEqual({
      id: 1,
      name: 'Batman',
      owner: 'DC',
    })
  });

  test('getHeroById must return undefined if ID does not exists', () => {
    const id = 100;
    const hero = getHeroById(id);

    expect(hero).toBeFalsy();

  });

  // Task:

  // Must return an array with DC heroes
  // length === 3
  // toEqual to the filtered Array

  test('Must return an array with DC heroes', () => {

    const owner = 'DC';
    const filteredArr = getHeroesByOwner(owner);

    expect(filteredArr.length).toBe(3);

    expect(filteredArr).toEqual(heroes.filter(hero => hero.owner === owner));

  });

  // Must return an array with Marvel's heroes
  // length === 2

  test('Must return an array with Marvel heroes', () => {

    const owner = 'Marvel';
    const filteredArr = getHeroesByOwner(owner);

    expect(filteredArr.length).toBe(2);
    expect(filteredArr).toEqual(heroes.filter(hero => hero.owner === owner));

  });

});