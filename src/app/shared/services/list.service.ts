import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Lista, } from '../models/list.model';
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

  nuevaLista(data, folderName) {
    this.http.put(this.baseUrl + folderName + '.json', data).subscribe({next: respuesta => {
      console.log(respuesta);
    }})
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
    let array: any[] = []
    this.http.get(this.plainUrl).pipe(map(response => {
      for (let k in response) {
        array.push(response[k])
      }
    })).subscribe()
    return array;
  }


  getAllLists2() {
    let array: any[] = []
    let arrayX: any[] = []
    this.http.get(this.plainUrl).pipe(map(response => {
      for (let k in response) {
        array.push(response[k])
      }
      for (let x in array) {
        arrayX.push({
          nombre: array[x].nombre,
          contenido: []
        })
        for (let cont in array[x].contenido) {
          if (cont !== '0') { //Filtro para que no tire el 0 que se genera al crear una lista nueva siempre
            arrayX[x].contenido.push({
              id: cont,
              imagen: array[x].contenido[cont].imagen,
              titulo: array[x].contenido[cont].titulo
            })
          }
        }
      }
    })).subscribe()
    console.log(arrayX)
    return arrayX;
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

  MovieToList(chosenOpt: string, loadedId: string, data) {
    this.http.put(this.baseUrl + '/' + chosenOpt +'/contenido/' + loadedId + '.json', data).subscribe({next: respuesta => {
      console.log(respuesta)
    }})
  }
}
