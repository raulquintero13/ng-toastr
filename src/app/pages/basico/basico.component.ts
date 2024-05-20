import { Component } from '@angular/core';

@Component({
  selector: 'app-basico',
  templateUrl: './basico.component.html',
  styleUrls: ['./basico.component.css']
})
export class BasicoComponent {
  messageList: any[]=[];

  showToast(){
    console.log('message');
    this.messageList.push({titulo:'titulo', mensaje: 'mostrar mensaje'});
  }

}
