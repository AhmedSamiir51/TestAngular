import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HallsService {

  constructor(public http:HttpClient) { }
  baseUrl="http://mohamedadel2020-001-site1.itempurl.com/api/Halls"


  GetHalls( ) {
    return this.http.get<any[]>( this.baseUrl+"/GetAll" );
  }


  GetHallsFromIdMovie(id:number ) {
    return this.http.get<any>("http://mohamedadel2020-001-site1.itempurl.com/api/Movies/GetHallIdFromMovies/" +id);
  }
  GetHallsForMovies( ) {
    return this.http.get<any[]>( this.baseUrl+"/GetAllWhereNotInMovie" );
  }

  GetHallsForMoviesbyid( id:number) {
    return this.http.get<any[]>( this.baseUrl+"/GetAllWhereNotInMovie/"+id );
  }

  getHallById(i:number){
    return this.http.get<any>(this.baseUrl+"/"+i)
  }

  addHalls(body:any){
    return this.http.post<any>(this.baseUrl+"/",body)
  }

  editHalls(edit:any){
    return this.http.put(this.baseUrl+"/"+edit.id,edit)
  }


  deleteHalls(id:number){
    return this.http.delete(this.baseUrl+"/"+id)
  }



}
