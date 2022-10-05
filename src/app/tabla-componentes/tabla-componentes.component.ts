import { Component, OnInit } from '@angular/core';
import { ComponentePc } from './ComponentePc';

@Component({
  selector: 'app-tabla-componentes',
  templateUrl: './tabla-componentes.component.html',
  styleUrls: ['./tabla-componentes.component.scss']
})
export class TablaComponentesComponent implements OnInit {

  
  componentesPc:ComponentePc[]=[
    {
      nombre:"Rtx 3090",
      marca:"Gigabyte",
      precio:9999,
      stock:15,
      img:"/assets/img/Placa-De-Video-GeForce-RTX-3090-24Gb-Asus-Rog-Strix-Gaming-Oc-Blanco_43111_1.jpeg",
      cuotasSinInteres:false,
    },
    {
      nombre:"I9 12900k",
      marca:"Intel",
      precio:15000,
      stock:18,
      img:"/assets/img/intel-core-i9-12900k-52-ghz.jpg",
      cuotasSinInteres:true,
    },
    {
      nombre:"Vengance 16 gb",
      marca:"Corsair",
      precio:20000,
      stock:0,
      img:"/assets/img/memoria-rgb_40890_2.jpeg",
      cuotasSinInteres:false,
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
