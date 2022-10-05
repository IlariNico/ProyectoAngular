import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-componentes',
  templateUrl: './tabla-componentes.component.html',
  styleUrls: ['./tabla-componentes.component.scss']
})
export class TablaComponentesComponent implements OnInit {

  componentePc={
    "nombre":"Rtx 3090",
    "marca":"Gigabyte",
    "precio":9999,
    "stock":15,
    "img":"/assets/img/Placa-De-Video-GeForce-RTX-3090-24Gb-Asus-Rog-Strix-Gaming-Oc-Blanco_43111_1.jpeg"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
