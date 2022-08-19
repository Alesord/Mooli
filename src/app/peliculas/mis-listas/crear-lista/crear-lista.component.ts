import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { movieList } from 'src/app/shared/models/list.model';
import { ListService } from 'src/app/shared/services/list.service';

@Component({
  selector: 'app-crear-lista',
  templateUrl: './crear-lista.component.html',
  styleUrls: ['./crear-lista.component.scss'],
})
export class CrearListaComponent implements OnInit {

  @Input() idUser: string;
  createDetector: boolean = false;
  nameId: string;
  listaNueva: movieList;

  listaForm = new FormGroup ({
    nombreLista: new FormControl('', Validators.required),
    contenidoLista: new FormControl()
  })

  constructor(
    private modalCtrl: ModalController,
    private listService: ListService
  ) { }

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss([this.createDetector,  this.listaNueva.nombre]);
    this.createDetector = false;
  }

  onSubmit() {
    this.nameId = this.listaForm.get('nombreLista').value.toLowerCase().replace(/\s/g, '-')
    console.log(this.nameId)
    this.listaNueva = {
      nombre: this.listaForm.value.nombreLista,
      contenido: ['']
    }
    this.listService.OnCreateNewList(this.listaNueva, this.nameId).subscribe()
    this.nameId = '';
    this.listaForm.reset
    this.createDetector = true;
    this.onCancel();
  }
}
