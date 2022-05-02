import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers',
  //selector:'[app-servers]',
  selector:'.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName='TestServer';
  userName='TestName';
  serverCreated = false;
  showPassword = false;
  servers=['TestServer','TestServer2'];
  count=0;
  counterArray = [];
  blueBackground= false;
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus='Server was created!';
    this.servers.push(this.serverName);
  }

onUpdateServer(event:Event){
    //console.log(event);
    this.serverName= (<HTMLInputElement>event.target).value;
  }
  onResetName(){
    this.userName='';
  }

  onTogglePassword(){
    this.showPassword=!this.showPassword;
    
    this.counterArray.push(new Date());
    if(this.count>5){
      this.blueBackground=true;
    }
  }

}
