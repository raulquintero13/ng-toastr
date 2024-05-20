import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { ToastrCustomService } from 'src/app/modules/toastr-custom/services/toastr-custom.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {
  characterId: number = 3;
  character: any;

  private http = inject(HttpClient)
  private toastrCustomService = inject(ToastrCustomService);

  showToast(){

    this.http.get('https://swapi.dev/api/people/'+ this.characterId).subscribe({
      next: resp=>{
        this.character=resp;
        this.toastrCustomService.success({titulo:'Descarga', mensaje: 'personaje: ' + this.character.name})
      },
      error: error=>{
        this.character = ''
        this.toastrCustomService.danger({titulo:'Descarga', mensaje: 'No se pudo obtener la informacion'})

      }
    });


  }

}
