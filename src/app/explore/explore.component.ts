import { Component, OnInit } from "@angular/core";
import { LocationService } from "../services/location.service";
import { Location } from "../models/location";
import { Router } from "@angular/router";

@Component({
  selector: "app-explore",
  templateUrl: "./explore.component.html",
  styleUrls: ["./explore.component.css"]
})
export class ExploreComponent implements OnInit {
  constructor(
    private locationService: LocationService,
    private router: Router
  ) {}

  url = "http://localhost:3000/uploads/";
  catalogue: Location[];
  loading: boolean = true;

  ngOnInit() {
    this.locationService.getCatalogue().subscribe(
      data => {
        this.catalogue = data;
        this.loading = false;
      },
      err => {
        if (err) console.log(err);
      }
    );
  }

  onClick(id: string) {
    this.router.navigate(["/album", id]);
  }

  search() {
    this.loading = true;
    var typeElement = <HTMLSelectElement>document.getElementById("type");
    var locationElement = <HTMLSelectElement>(
      document.getElementById("location")
    );

    var location = locationElement.options[locationElement.selectedIndex].value;
    var type = typeElement.options[typeElement.selectedIndex].value;

    var type_tag = type.split("|");

    this.locationService
      .searchByFilter(type_tag[0], type_tag[1], location)
      .subscribe(
        data => {
          this.catalogue = data;
          this.loading = false;
        },
        err => {
          if (err) console.log(err);
        }
      );
    const element = document.getElementById("search");
    const offset = 84;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}
