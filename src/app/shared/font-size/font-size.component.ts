import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.css']
})
export class FontSIZEComponent implements OnInit {

  fontsize = 16;
  @ViewChild('para', {static: true})
  para!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }


  //MÉTODO para cambiar el tamaño de la fuente en el documento
  changeFONT(operator: any){

    operator === '+' ? this.fontsize++ : this.fontsize--;
    document.getElementsByTagName('body')[0].style.fontSize  = `${this.fontsize}px`;
    console.log(document.getElementsByTagName('body')[0]);

  //   document.querySelectorAll('div.size').forEach(
  //     element => {
  //       element.style.fontSize = `${this.fontsize}px`;
  //     }
  //   )
    
   }

}
