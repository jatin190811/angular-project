import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { observable, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FiltersService {
  constructor(private http: HttpClient) {}
  getProduct(): Observable<{}> {
    return this.http.get("https://rickandmortyapi.com/api/character/ ");
  }
}
