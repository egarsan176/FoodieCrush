import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSIZEComponent implements OnInit {

  fontsize = 16;

  constructor() { }

  ngOnInit(): void {
  }


  changeFONT(operator: any){

    operator === '+' ? this.fontsize++ : this.fontsize--;
    document.getElementsByTagName('body')[0].style.fontSize  = `${this.fontsize}px`;

  }

}
