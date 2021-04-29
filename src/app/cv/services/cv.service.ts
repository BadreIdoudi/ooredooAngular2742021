import { Injectable } from '@angular/core';
import { Cv } from '../model/cv';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  constructor() {
    this.cvs = [
      new Cv(
        1,
        'sellaouti',
        'aymen',
        'teacher',
        '                       ',
        38,
        1234
      ),
      new Cv(2, 'chaouachi', 'amira', 'Dev', '', 22, 1258),
      new Cv(
        3,
        'mejri',
        'marwen',
        'Dev',
        'rotating_card_profile3.png',
        24,
        5874
      ),
    ];
  }

  getCvs(): Cv[] {
    return this.cvs;
  }
  getCvById(id: number): Cv {
    return this.cvs.find((cv) => cv.id === id);
  }
  deleteCv(cv: Cv): Boolean {
    const index = this.cvs.indexOf(cv);
    if (index === -1 ) {
      return false;
    }
    this.cvs.splice(index, 1);
    return true;
  }
}
