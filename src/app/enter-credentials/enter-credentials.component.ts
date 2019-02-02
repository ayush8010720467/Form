import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-enter-credentials',
  templateUrl: './enter-credentials.component.html',
  styleUrls: ['./enter-credentials.component.css']
})

export class EnterCredentialsComponent implements OnInit {

  personalDetails: FormGroup;
  constructor() { }
 
  ngOnInit() {
    this.personalDetails=new FormGroup({
      name:new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.email]),
      location: new FormControl("",[Validators.required]),
      image : new FormControl("",Validators.required)
    })
  }

}
var imagePath ="./assets/Capture.PNG"
