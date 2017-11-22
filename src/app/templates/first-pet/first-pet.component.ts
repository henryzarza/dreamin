import { Component, OnInit, ViewEncapsulation } from '@angular/core';

declare var jQuery: any;

@Component({
  selector: 'app-first-pet',
  templateUrl: './first-pet.component.html',
  encapsulation: ViewEncapsulation.None
})
export class FirstPetComponent implements OnInit {

  public visualization = true;

  constructor() { }

  ngOnInit() {
    jQuery('.materialboxed').materialbox();
  }

}
