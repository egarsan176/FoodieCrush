import { Component, OnInit } from '@angular/core';
import { AuthResponse, Usuario} from 'src/app/interfaces/interface';
import { AccessService } from 'src/app/services/access.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user!: Usuario | null;

  constructor(private accessService: AccessService) {
    this.accessService.user.subscribe(x => this.user = x);
   }

  ngOnInit(): void {
  }


  onlogout() {
    this.accessService.logout();
  }






}
