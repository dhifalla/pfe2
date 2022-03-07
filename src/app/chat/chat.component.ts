import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  userName = '';
  message = '';
  messageList: {message: string, userName: string, mine: boolean}[] = [];
  userList: string[] = [];
  socket: any;
  sender:any;
  reciver:any;

  constructor(private activatedRoute: ActivatedRoute) { 
   
  }


  async ngOnInit() {
   this.reciver= this.activatedRoute.snapshot.paramMap.get("param1")
   console.log("aaa",this.reciver)
   this.sender= this.activatedRoute.snapshot.paramMap.get("param2")
   console.log("sender",this.sender)
  
    this.socket = io(`http://localhost:3030/`, {
      withCredentials: true,
      extraHeaders: {
        "my-custom-header": "abcd"
      }});
  
    

    

    this.socket.on('user-list', (userList: string[]) => {
      this.userList = userList;
    });

    this.socket.on('message-broadcast', (data: {message: string, userName: string}) => {
      if (data) {
        this.messageList.push({message: data.message, userName: data.userName, mine: false});
      }
    });
  }

  sendMessage(): void {
    this.socket.emit('message', this.message);
    this.messageList.push({message: this.message, userName: this.sender, mine: true});
    this.message = '';
  }

}
