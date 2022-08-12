import { Injectable } from '@angular/core';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

import {
  LocalNotifications,
  LocalNotificationsPlugin
} from '@capacitor/local-notifications'
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  movieTitle:string = 'They Gray Man'


  constructor(public platform: Platform) { }

  inicializar() {
    if (this.platform.is('capacitor')) {
      PushNotifications.requestPermissions().then(result => {
        console.log('PushNotifications.requestPermission()')
        if (result.receive === 'granted') {
          console.log('Permisos de notificacion Concedidos');
          PushNotifications.register();
          this.addListeners()
        } else {
          // Show some error
        }
      })

    } else {
      console.log('PushNotifications.requestPermission() -> No es movil')
    }
  }

  createNotification(title: string, body: string, movieTitle: string, id: string) {
    LocalNotifications.schedule({
      notifications: [
        {
          title: title + movieTitle,
          body: body,
          id: 1,
        }
      ]
    })
  }

  addListeners() {
    // On success, we should be able to receive notifications
    PushNotifications.addListener('registration',
      (token: Token) => {
        console.log('Push registration success, tokend: ' + token.value)
      }
    );

    // Some issue with our setup and push will not work
    PushNotifications.addListener('registrationError',
      (error: any) => {
        alert('Error on registration: ' + JSON.stringify(error));
      }
    );

    // PRIMER PLANO
    PushNotifications.addListener('pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        console.log('Notificacion recibida en 1er plano: ' , notification);
      }
    );

    // Method called when tapping on a notification
    PushNotifications.addListener('pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        alert('Push action performed: ' + JSON.stringify(notification));
      }
    );
  }


  
}
