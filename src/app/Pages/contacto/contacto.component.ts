import { AgmCoreModule } from '@agm/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor() { }

  public map: any = { lat: 51.678418, lng: 7.809007 };

  ngOnInit(): void {
  }

}
