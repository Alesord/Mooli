import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }

  private userId: string = this.authService.userKey;
  private baseUrl = `${environment.URL_USERS}/${this.userId}/listas/`
  private plainUrl = `${environment.URL_USERS}/${this.userId}/listas.json`

  OnCreateNewList(data, folderName) {
    console.log('poniendo lista en ' + this.baseUrl + folderName + '.json', data)
    return this.http.put(this.baseUrl + folderName + '.json', data)
  }
  
  deleteList(id: string){
    return this.http.delete(this.baseUrl + id + '.json')
  }

  displayExistingLists() {
    return this.http.get(this.plainUrl)
  }

  getAllLists() {
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
      this.http.put(this.baseUrl + ind + '/listContent.json', x).subscribe({next: respuesta => {
      }})
    })).subscribe()
  }

  MovieToList(chosenOpt: string, loadedId: string, data) {
    return this.http.put(this.baseUrl + '/' + chosenOpt +'/contenido/' + loadedId + '.json', data)
  }

}
