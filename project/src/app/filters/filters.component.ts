import { Component, OnInit } from "@angular/core";
import { FilterInputService } from "../services/filter-input.service";

@Component({
  selector: "app-filters",
  templateUrl: "./filters.component.html",
  styleUrls: ["./filters.component.scss"]
})
export class FiltersComponent implements OnInit {
  filterArray: any[];
  allFilters: any[] = [];
  species: any[] = [
    { key: "species", value: "Human" },
    { key: "species", value: "Mytholog" },
    { key: "species", value: "Other" }
  ];
  genders: any[] = [
    { key: "gender", value: "Male" },
    { key: "gender", value: "Female" }
  ];
  origins: any[] = [
    { key: "Unknown", value: "unknown" },
    { key: "Post-Apocalyptic", value: "apocalyptic" },
    { key: "Nuptia 4", value: "nuptia" },
    { key: "Other Origins...", value: "other" }
  ];
  constructor(private filterInputService: FilterInputService) {}

  ngOnInit() {}
  specieSelect(value: string) {
    console.log(value);
    this.filterArray = this.applyAllFilters(this.species, value);
    this.allFilters.push(...this.filterArray);
    this.filterInputService.filter.next(...this.filterArray);
  }
  genderSelect(value: string) {
    console.log(value);
    this.filterArray = this.applyAllFilters(this.genders, value);
    this.allFilters.push(...this.filterArray);
    this.filterInputService.filter.next(...this.filterArray);
  }
  originSelect(value: string) {
    console.log(value);
    this.filterArray = this.applyAllFilters(this.origins, value);
    this.allFilters.push(...this.filterArray);
    this.filterInputService.filter.next(...this.filterArray);
  }

  applyAllFilters(array, value) {
    return array.filter(item => {
      return item.value === value;
    });
  }
}
