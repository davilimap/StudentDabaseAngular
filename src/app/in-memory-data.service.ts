import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let students = [
      {id: 1, fullName: 'Davi P', course: 'COMP', year: 5},
      {id: 2, fullName: 'Adauto B', course: 'COMP', year: 4},
      {id: 3, fullName: 'Vinicius V', course: 'MEC', year: 5},
      {id: 4, fullName: 'Felipe S', course: 'AER', year: 4},
      {id: 5, fullName: 'Kayo F', course: 'MEC', year: 5},
      {id: 5, fullName: 'Anna V', course: 'CIV', year: 5}
    ];
    return {students};
  }
}
