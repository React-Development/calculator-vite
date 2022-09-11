import { getHeroById } from "./imp-exp";

export const getHeroByIdAsync = (id) => {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject('Hero couldn\'t be found ' + id)
      }
    }, 1000)
  });

}