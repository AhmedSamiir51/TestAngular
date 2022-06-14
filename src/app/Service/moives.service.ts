import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieModel } from '../model/Movie';

@Injectable({
  providedIn: 'root',
})
export class MoivesService {
  constructor(public http: HttpClient) {}
  baseUrl = 'http://mohamedadel2020-001-site1.itempurl.com/api/Movies';

  GetAllMovies() {
    return this.http.get<MovieModel[]>(this.baseUrl);
  }

  GetAllMoviesVs() {
    return this.http.get<MovieModel[]>(this.baseUrl+'/AllGetListOfMovies');
  }

  InsertMoive(formModel: any) {
    return this.http.post(this.baseUrl + "/SaveMovies" ,formModel,{withCredentials:true});
   }

  GetMoiveById(id: any) {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }

  EditMovie(edit: any) {
    return this.http.put(this.baseUrl + '/' + edit.id, edit);
  }

  DeleteMovie(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }

  GetTop3Moive() {
    return this.http.get(this.baseUrl);
  }
}
