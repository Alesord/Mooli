import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './shared/services/auth.service';
import { Network } from '@capacitor/network';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  isAuth: boolean

  
  ngOnInit(): void {
    this.isAuth = !this.authService.estado
    console.log(this.isAuth)
    Network.addListener('networkStatusChange', status => {
      console.log('Network status changed', status);
      this.router.navigateByUrl('/peliculas/tabs/mis-listas')
      console.log('All is gutt')
      console.log(status.connected)
    });

  }
}
