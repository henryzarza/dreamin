import { CrudService } from './../../services/crud.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var jQuery: any;
declare var Dropzone: any;

@Component({
  selector: 'app-tag-songs',
  templateUrl: './tag-songs.component.html',
  encapsulation: ViewEncapsulation.None
})
export class TagSongsComponent implements OnInit {

  public data: any;
  public registerEdit: any;

  constructor(private crud: CrudService) {
    Dropzone.autoDiscover = false;
  }

  ngOnInit() {
    this.crud.get('tag-songs.json').subscribe(
      response => this.data = response,
      error => console.log(error)
    );
    jQuery('#modalEdit').modal();
  }

  private openModal(tag) {
    this.registerEdit = tag;
    jQuery('#modalEdit').modal('open');
    setTimeout(() => this.inicializateDropzone(), 200);
  }

  private inicializateDropzone() {
    jQuery('#dropzone-img-tag').dropzone({
      url: '/assets/users',
      maxFiles: 1,
      acceptedFiles: 'image/*',
      addRemoveLinks: true
    });
  }

}
