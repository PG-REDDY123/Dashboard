import {  Component, model } from '@angular/core';


@Component({
  selector: 'app-widgetfive',
  templateUrl: './widgetfive.component.html',
  styleUrl: './widgetfive.component.css',

})
export class WidgetfiveComponent {

  cards = [
    { img: 'assets/images/cards/cardImg1.png', title: 'Colorful Heaven', artist: 'By Mark Benjamin', bid: '1.30', time: '30s ago' },
    { img: 'assets/images/cards/cardImg2.png', title: 'Abstract Colors', artist: 'By Esthera Jackson', bid: '0.91', time: '58s ago' },
    { img: 'assets/images/cards/cardImg3.png', title: 'ETH AI Brain', artist: 'By Nick Wilson', bid: '2.80', time: '12s ago' }

  ];

 
}
