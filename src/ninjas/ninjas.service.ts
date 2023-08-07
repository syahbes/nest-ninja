import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'Red Ninja', weapon: 'stars' },
    { id: 1, name: 'Blue Ninja', weapon: 'swords' },
    { id: 2, name: 'Yellow Ninja', weapon: 'nunchucks' },
  ];
  getNinjas(weapon?: 'stars' | 'swords' | 'nunchucks') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }

  getNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if (!ninja) {
      throw new Error('Ninja not found');
    }
    return ninja;
  }
}
