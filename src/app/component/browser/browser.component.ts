import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'
import { ImdbService } from 'src/app/shared/services/imdb.service';

@Component({
  selector: 'app-browser',
  templateUrl: './browser.component.html',
  styleUrls: ['./browser.component.scss'],
})
export class BrowserComponent implements OnInit {

  // @ViewChild('txtsearch') searchArtist!:ElementRef <HTMLInputElement>;

 Test: boolean

  private debounceTimer?: NodeJS.Timeout

  @Output() onEnter : EventEmitter <string> = new EventEmitter() 
    
  @Output() onDebounce : EventEmitter <string> = new EventEmitter()

  termino: string=''
  debouncer: Subject<string> = new Subject();


  constructor(private imdbSvc:ImdbService){}
  

  // componente cambie una propiedad con ng model
  // output e input llegue a la comparacion 
  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(250))
    .subscribe(valor => {
      console.log(valor)
      this.onDebounce.emit(valor)
    })
  }
  
      
    search(){
      this.onEnter.emit(this.termino)
      this.debouncer.subscribe
      console.log(this.termino)
    }
    
      
      tecleo(){
        this.debouncer.next(this.termino)
    }
}