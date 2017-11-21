import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-first-pet',
  templateUrl: './first-pet.component.html',
  styleUrls: ['./first-pet.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FirstPetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
