import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { List, Lista, ListAuth, ListFull } from '../models/list.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListService {


  private baseUrl = environment.URL_BD_LIST
  private plainUrl = environment.URL_BD_LIST_PLAIN

  constructor(private http: HttpClient) { }

  userId: string = 'a1';

  allLists: Lista[] = [
    {
      listName: 'Lista por ver',
      listContent: [
        'tt0441773',
        'tt10648342',
        'tt5251328',
        'tt9411972'
      ]
    },
    {
      listName: 'Lista de las buenas',
      listContent: [
        'tt10648342',
        'tt1649418'
      ]
    },
  ]

  getMyList() {
    console.log(this.allLists + 'askdjaslkdjaslk')
    return this.allLists;
  }


  newList(data: any, id: number) {
    this.http.put(this.baseUrl + id + '.json', data).subscribe({next: respuesta => {
    }})
  }
  
  newListDeep(data: any, id: number) {
    this.http.put(this.baseUrl + id + '/listContent.json', data).subscribe({next: respuesta => {
    }})
  }

  getAllLists() {
    return this.http.get<Lista[]>(this.plainUrl)
  }

  getList(ind, movieId) {
    const gotList: string[] = [];
    let exist: boolean = false;
    this.http.get(this.plainUrl)
    .pipe(map(res => {
      for (const key in res[ind].listContent){
        gotList.push(res[ind].listContent[key])
        console.log(gotList)
        if (res[ind].listContent[key] === movieId){
          exist = true;
        }
      } 
      console.log('El id es ' + movieId);
      if (exist === false) {
        console.log('Primero' + [{...gotList}])
        gotList.push(movieId);
        console.log('Segundo' + gotList)
      }
      console.log('esta peli ' + exist)
      let x = gotList.reduce(function(s,a){
        s.push(a);
        console.log('coso ' + s);
        return s;
      }, [])
      console.log(x)
      this.newListDeep(x, ind)
    })).subscribe()
  }

  MovieToList(movieId: string, whichList: number) {
    this.http.post(this.baseUrl + whichList, movieId ).subscribe({next: respuesta => {
    }})
  }
}
