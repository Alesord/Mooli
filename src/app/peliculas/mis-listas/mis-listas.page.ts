import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lista } from 'src/app/shared/models/list.model';
import { ImdbService } from 'src/app/shared/services/imdb.service';
import { ListService } from 'src/app/shared/services/list.service';
import { SeenService } from 'src/app/shared/services/seen.service';

@Component({
  selector: 'app-mis-listas',
  templateUrl: './mis-listas.page.html',
  styleUrls: ['./mis-listas.page.scss'],
})
export class MisListasPage implements OnInit {

  loadedMovies: any;
  loadedLists: any;

  constructor(
    private router: ActivatedRoute,
    private imdbService: ImdbService,
    private seenService: SeenService,
    private listService: ListService
  ) { }

  ngOnInit() {
    this.listService.getAllLists().subscribe({next: resp => {
      console.log(resp)
      this.loadedLists = resp;
      console.log(this.loadedLists.listContent)
    }})
    console.log(this.loadedMovies)
  }


}
