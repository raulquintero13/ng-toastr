import { Component, OnInit, inject } from '@angular/core';
import { ToastrCustomService } from './modules/toastr-custom/services/toastr-custom.service';
import { Toast } from './modules/toastr-custom/interfaces/Toast.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'toastr';
  messageList: Toast[] =[];

  private toastrCustomerService = inject(ToastrCustomService);

  ngOnInit(): void {
    this.toastrCustomerService.messageList.subscribe({
      next: resp=>{
        this.messageList = resp
        console.log('message', this.messageList)
      }
    });
  }


}
