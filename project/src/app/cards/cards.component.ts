import { Component, OnInit } from "@angular/core";
import { FiltersService } from "../services/filters.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styleUrls: ["./cards.component.scss"]
})
export class CardsComponent implements OnInit {
  products$: Observable<any>;
  products: any[];
  yearDiff: number;
  year = new Date();
  result: [];
  searchNameCard: string;
  productList: any[];
  // keyInput: string;
  // productsData = {};
  constructor(private filterService: FiltersService) {}

  ngOnInit() {
    this.products$ = this.filterService.getProduct();
    this.products$.subscribe(data => {
      this.products = data.results;
      this.products.sort((a, b) => a.name.localeCompare(b.id));
    });
  }

  sortOrderCheck(sortOrder: string, otherFilters = []) {
    if (sortOrder === "ascending") {
      this.products.sort((a, b) => a.name.localeCompare(b.id));
    } else if (sortOrder === "descending") {
      this.products = this.products.reverse();
    }
  }
  searching(name: string) {
    this.searchNameCard = name.trim().toLowerCase();
    if (this.searchNameCard != "") {
      this.productList = this.products.filter(item => {
        return item.name.toLowerCase().includes(this.searchNameCard);
      });
    } else {
      this.products$ = this.filterService.getProduct();
      this.products$.subscribe(data => {
        this.products = data.results;
        this.products.sort((a, b) => a.name.localeCompare(b.id));
      });
    }
    this.products = this.productList;
  }
  filterSearch(obj: any) {
    let keyInput = obj.key;
    this.productList = this.products.filter(item => {
      for (var property in item) {
        if (item.hasOwnProperty(property)) {
          if (item[property] == obj.value) {
            return true;
          }
        }
      }
    });
    this.products = this.productList;
  }
}
