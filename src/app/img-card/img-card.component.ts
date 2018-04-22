import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {
  count = 0;
  public src: string;
  ngOnInit() {
    this.generateSrc();
  }

  public generateSrc(): void {
  this.count ++;
  this.src = 'https://picsum.photos/200/300' + '&ts=' + this.count;
  }
  constructor() {}
}
