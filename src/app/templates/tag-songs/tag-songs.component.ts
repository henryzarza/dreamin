import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-tag-songs',
  templateUrl: './tag-songs.component.html',
  styleUrls: ['./tag-songs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TagSongsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.tooltipped').tooltip({delay: 50});
  }

}
