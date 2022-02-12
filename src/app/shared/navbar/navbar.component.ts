import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  //isLogueado: boolean ;


  constructor(private accessService: AccessService) { }

  ngOnInit(): void {
    // this.isLogueado = this.accessService.getIsLogueado().subscribe(
    //   this.isLogueado = this.isLogueado
 //   )
  }


  onlogout() {
    this.accessService.logout();
  }

  

//  get isLogueado(){
//    return this.accessService.checkIsLogueado();
//  }





}
