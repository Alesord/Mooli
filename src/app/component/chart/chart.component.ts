import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  
  @ViewChild(IonModal) modal: IonModal;

  @Input() generos : string[];
  @Input() directores : string[];
  


  constructor(private modalCtrl: ModalController) { }
  
  filtro: string[]=[]
  // d: string
  ngOnInit() {    
  }
  async close(){
    await this.modalCtrl.dismiss()
  }
  async saveTest(){
   //is the problem
        return this.modalCtrl.dismiss(this.filters, 'confirm')
        // this.d
      }
      
  filters = {
    generoUsuario: [],
    directorUsuario: [],
  };


  TestG(ev){

    if(event['detail']['checked']){
      this.filters.generoUsuario.push(ev)
      console.log(this.filters)
    }
    else{
      for(let i of this.filtro){
        if(i === ev){
          this.filtro.splice(ev , 1)
        }
      }
      console.log(this.filtro)
      this.filters.generoUsuario = [...new Set(this.filtro)]
    }

  }
  TestD(ev){
    if(event['detail']['checked']){
      this.filters.directorUsuario.push(ev)
      console.log(this.filtro)
    }
      else{
        for(let i of this.filtro){
          if(i === ev){
            this.filtro.splice(ev , 1)
          }
        }
        console.log(this.filtro)
      this.filters.directorUsuario = [...new Set(this.filtro)]
  }
}
// TestD(event){
//   console.log(event)
//   this.d = event
// }


// test}}
}