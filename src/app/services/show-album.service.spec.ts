import { TestBed } from '@angular/core/testing';

import { ShowAlbumService } from './show-album.service';

describe('ShowAlbumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowAlbumService = TestBed.get(ShowAlbumService);
    expect(service).toBeTruthy();
  });
});
