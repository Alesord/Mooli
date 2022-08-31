import { Component } from '@angular/core';
import { LevelUpService } from './shared/services/level-up.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private levelUpService: LevelUpService
  ) {}

  color: string = 'primary';
  
  onLevelChange() {
    this.levelUpService.whenLevelChange().then(res => {
    let isLeveled = this.levelUpService.getLevelUp()
    if (isLeveled) {
      console.log(isLeveled + 'Danger')
      this.color = 'danger';
    } else {
      console.log(isLeveled + 'Primary')
      this.color = 'primary';
    }
    })
  }
}
