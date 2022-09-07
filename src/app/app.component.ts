import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(
    private authService: AuthService
  ) {}

  isAuth: boolean

  ngOnInit(): void {
    this.isAuth = !this.authService.estado
    console.log(this.isAuth)
  }
}
