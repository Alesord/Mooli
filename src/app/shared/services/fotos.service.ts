import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { environment } from 'src/environments/environment';
import { UsuarioFoto } from '../models/foto.model';
import { UsuarioPerfilData } from '../models/user.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }

  public photos: UsuarioFoto[] = [];
  private PHOTO_STORAGE: string = 'photos';
  url: string;
  urlnj: string;

  public fotoPerfil: UsuarioFoto = {
    filepath: 'soon...',
    webviewPath: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg'
  }

  setUrls(userKey: string) {
    console.log('Seteando urls')
    //Agregar Urls para uso futuro
    this.url = `${environment.URL_USERS}/${userKey}/datos.json`
    this.urlnj = `${environment.URL_USERS}/${userKey}/datos`
  }

  public async addNewToGallery(src) {
    const fotoCapturada = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource[src],
      quality: 100
    });
    this.fotoPerfil = {
      filepath: "soon...",
      webviewPath: fotoCapturada.webPath
    };
    //Guardar img y añadir en coleccion
    this.fotoPerfil = await this.savePicture(fotoCapturada)
    Preferences.set({
      key: this.PHOTO_STORAGE,
      value: JSON.stringify(this.fotoPerfil),
    });
    this.uploadPicture(this.fotoPerfil).subscribe()
  }

  private async savePicture(uFoto: Photo) {
    const base64Data = await this.readAsBase64(uFoto)

    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    })
    return {
      filepath: fileName,
      webviewPath: uFoto.webPath
    }
  }

  private async readAsBase64(photo: Photo) {
    // Fetch the photo, read as a blob, then convert to base64 format
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsDataURL(blob);
  });

  public async loadSaved() {
    let photoList = await Preferences.get({ key: this.PHOTO_STORAGE });
    let fotoPath = JSON.parse(photoList.value)

    const readFile = await Filesystem.readFile({
      path: fotoPath.filepath,
      directory: Directory.Data,
    });
    this.fotoPerfil.webviewPath = `data:image/jpeg;base64,${readFile.data}`
  }

  uploadPicture(data: UsuarioFoto) {
    return this.http.put(`${this.urlnj}/imagen.json`, data)
  }

  deletePicture() {
    this.fotoPerfil = {
      filepath: 'soon...',
      webviewPath: 'https://ionicframework.com/docs/demos/api/avatar/avatar.svg'
    }
  }

  async checkLoadExist() {
    console.log('Chequeando cositas')
    console.log(this.urlnj)
    let savedPhoto = await Preferences.get({ key: this.PHOTO_STORAGE })
    console.log(savedPhoto.value)
    if (savedPhoto.value === null) {
      console.log('Negativo')
      this.http.get<UsuarioFoto>(`${this.urlnj}/imagen.json`).subscribe(res => {
        console.log('cambiando123')
        console.log(res)
        Preferences.set({
          key: this.PHOTO_STORAGE,
          value: JSON.stringify(res)
        })
      })
      //Si no encuentra nada, lo busca en la base de datos
    }
  }

  loadProfileData() {
    console.log(this.urlnj)
    return this.http.get<UsuarioPerfilData>(`${this.urlnj}/perfil.json`)
  }

  saveInfo(nickname: string) {
    return this.http.put(`${this.urlnj}/perfil.json`, {nickname: nickname})
  }
  



}
