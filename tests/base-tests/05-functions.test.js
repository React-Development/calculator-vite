import { getActiveUser, getUser } from "../../src/base-tests/functions";

describe('Tests on 05-functions', () => {
  test('getUser should return an object', () => {
    const testUser = {
      uid: 'ABC123',
      username: 'El_Papi1502',
    };

    const user = getUser();

    expect(testUser).toStrictEqual(user);

  });

  test('getActiveUser should return an object', () => {
    const name = 'Brayan';

    const user = getActiveUser(name);

    expect(user).toStrictEqual({
      uid: 'ABC567',
      username: name,
    })
  });
})