import { NgModule } from '@angular/core';
import { FiltroPipe } from './filtro.pipe';
import { GeneroPipe } from './genre.pipe';


@NgModule({
  declarations: [
    FiltroPipe,
    GeneroPipe],
  exports: [
    FiltroPipe,
    GeneroPipe]
  
})
export class PipesModule { }
