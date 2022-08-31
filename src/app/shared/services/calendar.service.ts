import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  private userId: string = this.authService.userKey;
  private baseUrl = `${environment.URL_USERS}/${this.userId}/reminderList`
  

  onAddReminder(movieId: string, date: Date) {
    return this.http.patch(this.baseUrl + `/${movieId}` + '.json', {date})
  }

  onCheckReminder() {
    return this.http.get(this.baseUrl + '.json')
  }
}
