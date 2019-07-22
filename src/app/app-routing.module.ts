import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ExploreComponent } from './explore/explore.component';
import { UploadComponent } from './upload/upload.component';
import { AddLocationComponent } from './add-location/add-location.component';
import { AlbumComponent } from './album/album.component';
import { AddTagComponent } from './add-tag/add-tag.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainpageComponent
  },
  {
    path: 'explore',
    component: ExploreComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'tag',
    component: AddTagComponent
  },
  {
    path: 'addLocation',
    component: AddLocationComponent
  },
  {
    path: 'album/:id',
    component: AlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
