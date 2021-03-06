import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CrudService } from '../../services/crud.service';

declare var jQuery: any;
declare var Dropzone: any;

@Component({
  selector: 'app-favorite-artist',
  templateUrl: './favorite-artist.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FavoriteArtistComponent implements OnInit {

  public visualization = true;
  public data = {};

  constructor(private crud: CrudService) {
    Dropzone.autoDiscover = false;
  }

  ngOnInit() {
    this.crud.get('artist.json').subscribe(
      response => this.data = response,
      error => console.log(error)
    );
    jQuery('.materialboxed').materialbox();
    this.inicializateDropzone();
  }

  private inicializateDropzone() {
    jQuery('#dropzone-img-pet').dropzone({
      url: '/assets/users',
      maxFiles: 1,
      acceptedFiles: 'image/*',
      addRemoveLinks: true
    });
  }

}
