import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { ImdbService } from 'src/app/shared/services/imdb.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  
  @ViewChild(IonModal) modal: IonModal;

  @Input() genero: string[]=[];
  @Input() director: string[]=[];

  constructor(private modalCtrl: ModalController,
    private imdbService: ImdbService) { }
  
  ngOnInit() {
  }
  async close(){
    await this.modalCtrl.dismiss()
  }
  async saveTest(){
   
        return this.modalCtrl.dismiss(this.genero, 'confirm')
      }
    
   

}
