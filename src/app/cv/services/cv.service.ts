import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Cv } from '../model/cv';
import { APIS } from '../../generics/apis';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root',
})
export class CvService {
  private cvs: Cv[] = [];
  public selectItemSubject = new Subject<Cv>();
  constructor(
    private http: HttpClient
  ) {
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

  getFakeCvs(): Cv[] {
    return this.cvs;
  }
  getCvs(): Observable<Cv[]>{
    return this.http.get<Cv[]>(APIS.cv);
  }
  getFakeCvById(id: number): Cv {
    return this.cvs.find((cv) => cv.id === id);
  }
  getCvById(id: number): Observable<Cv> {
    return this.http.get<Cv>(APIS.cv + id);
  }
  deleteCv(id: number): Observable<any> {
/*     const params = new HttpParams().set('access_token', localStorage.getItem('token'));
 */    return this.http.delete<any>(APIS.cv + id);
  }
  deleteFakeCv(cv: Cv): Boolean {
    const index = this.cvs.indexOf(cv);
    if (index === -1 ) {
      return false;
    }
    this.cvs.splice(index, 1);
    return true;
  }
  addFakeCv(cv: Cv): void {
    cv.id = this.cvs[this.cvs.length - 1].id + 1;
    this.cvs.push(cv);
  }
  addCv(cv: Cv): Observable<Cv> {
    return this.http.post<Cv>(APIS.cv, cv);
  }
  selectItem(cv: Cv): void {
    this.selectItemSubject.next(cv);
  }
}



