import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-favorite-artist',
  templateUrl: './favorite-artist.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FavoriteArtistComponent implements OnInit {

  public visualization = true;

  constructor() { }

  ngOnInit() {
    jQuery('.materialboxed').materialbox();
  }

}
