import { Component } from '@angular/core';
import listadePostres from 'src/assets/json/postres.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  title = 'Lectura de un archivo JSON en angular';

  Postres: any = listadePostres;

}


