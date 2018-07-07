import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _router:Router){ }
  uname:string;
  password:string;
  msg:string;
  nextwindow(){
    if (this.uname=="shivi" && this.password=="qwerty") {
      this._router.navigate(['./quiz']);            
    }else{
      this.msg="Either passwor or user name or both is wrong"
    }
  }

  ngOnInit() {
  }

}
