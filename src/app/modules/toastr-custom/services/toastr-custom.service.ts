import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Toast } from '../interfaces/Toast.interface';

@Injectable({
  providedIn: 'root'
})
export class ToastrCustomService {

  messageList: BehaviorSubject<Array<Toast>> = new BehaviorSubject<Toast[]>([]);

  constructor() { }

  success(message: Toast){message.type = 'bg-success text-light'; this.addMessage(message)}
  danger(message: Toast){message.type =  'bg-danger text-light'; this.addMessage(message)}
  warning(message: Toast){message.type =  'bg-warning text-light'; this.addMessage(message)}

  addMessage(message: Toast){
    console.log(message)
    let tempList = this.messageList.value;
    tempList.push(message);
    this.messageList.next(tempList);

    setInterval(()=>{
      tempList.shift();
      this.messageList.next(tempList)
    }, 15000)

  }


}
