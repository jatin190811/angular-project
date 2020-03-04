import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class FilterInputService {
  //public inputs: BehaviorSubject<string> = new BehaviorSubject();
  public filter = new Subject<[]>();
  constructor() {}
}
