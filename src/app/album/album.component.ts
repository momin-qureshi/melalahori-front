import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '../models/location';
import { LocationService } from '../services/location.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css'],
  providers: [LocationService]
})
export class AlbumComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private locationService: LocationService) { }

  location: Location;
  albumId: string;
  ngOnInit() {

    this.route.params.subscribe(params => {
      this.albumId = params['id'];
    });
    console.log(this.albumId);
    this.locationService.getAlbum(this.albumId).subscribe(
      data => {
        this.location = data;
        console.log(data);
      },
      err => {
        if(err)
          console.log(err);
      }
    );
  }

}
