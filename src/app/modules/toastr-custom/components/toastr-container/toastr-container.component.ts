import { Component, Input, inject } from '@angular/core';
import { Toast } from '../../interfaces/Toast.interface';

@Component({
  selector: 'app-toastr-container',
  templateUrl: './toastr-container.component.html',
  styleUrls: ['./toastr-container.component.css']
})
export class ToastrContainerComponent {
@Input() messageList: Toast[] = [];





}
