import { Component, Input, OnInit } from '@angular/core';
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() isLogueado: boolean = false;

  constructor(private accessService: AccessService) { }

  ngOnInit(): void {
    // this.isLogueado;
    // console.log(this.isLogueado)
  }


  onlogout() {
    this.accessService.logout();
  }


//  get isLogueado(){
//    return this.accessService.checkIsLogueado();
//  }





}
