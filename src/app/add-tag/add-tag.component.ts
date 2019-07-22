import { Component, OnInit } from '@angular/core';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-add-tag',
  templateUrl: './add-tag.component.html',
  styleUrls: ['./add-tag.component.css'],
  providers: [LocationService]
})
export class AddTagComponent implements OnInit {

  constructor(private locationService: LocationService) { }

  ngOnInit() {
  }

  postData(){
    var locationId = (<HTMLInputElement>document.getElementById("locationId")).value;
    var tag = (<HTMLInputElement>document.getElementById("tag")).value;

    this.locationService.addTag({locationId: locationId, tag: tag}).subscribe(
      res=>{
        console.log(res);
      },
      err=>{
        console.log(err);
      }
    );

  }

}
