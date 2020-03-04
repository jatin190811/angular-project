import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { FilterInputService } from "../services/filter-input.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  nameSearch: string = "";
  sortOrder: string = "ascending";
  arrayFilter: any[];
  filtersList = [];
  @Output() filterKey: EventEmitter<string> = new EventEmitter();
  @Output() searchEvent: EventEmitter<string> = new EventEmitter();
  @Output() sort: EventEmitter<string> = new EventEmitter();
  constructor(private filterService: FilterInputService) {}

  ngOnInit() {
    this.filterService.filter.subscribe(data => {
      console.log(data);
      this.applyFilters(data);

      // this.arrayFilter.push(data);
      // console.log(this.arrayFilter);
    });
  }
  valueChanged() {
    this.sort.emit(this.sortOrder);
  }
  searchByName() {
    this.searchEvent.emit(this.nameSearch);
    this.nameSearch = "";
  }
  // removeFilter(data) {
  //   const index = this.filtersList.indexOf(data.value);
  //   this.filtersList.splice(index, 1);
  // }
  applyFilters(data) {
    const index = this.filtersList.indexOf(data.value);
    if (index === -1) {
      this.filtersList.push(data.value);
    } else {
      this.filtersList.splice(index, 1);
    }
    this.filterKey.emit(data);
    console.log("filter list", this.filtersList);
  }
}
