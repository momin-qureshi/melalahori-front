import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { Location } from '../models/location';

const URL = 'http://localhost:3000/api/location';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  loc = new Location;
  public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });

  ngOnInit() {
    this.loc._id = "asd";
    this.loc.name = "asd";
    this.loc.address = "asd";
    this.loc.location = "asd";
    this.loc.timmings = "asd";
    this.loc.coverImage = "asd";
    this.loc.images = null;
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      //alert('File uploaded successfully');
    };
    this.uploader.onBuildItemForm = (item, form) => {
      form.append("locationId", (<HTMLInputElement>document.getElementById("locationId")).value);
      form.append("name", (<HTMLInputElement>document.getElementById("name")).value);
      form.append("location", (<HTMLInputElement>document.getElementById("location")).value);
      form.append("address", (<HTMLInputElement>document.getElementById("address")).value);
      form.append("timmings", (<HTMLInputElement>document.getElementById("timmings")).value);
      form.append("type", (<HTMLInputElement>document.getElementById("type")).value);
      console.log(this.loc.name);
    };
  }
}
