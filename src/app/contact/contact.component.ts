import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

ffirstname="";
flastname= "";
femail= "";
fmessage="";
fsmessage="";



  constructor() { }

  ngOnInit() {
  }

  onsubmit(form:any): void{
    console.log(form);
    this.ffirstname = form.ffirstname;
    this.flastname =  form.flastname;
    this.femail = form.femail;
    this.fmessage = form.fmessage;
    this.fsmessage = form.fsmessage

   
   
}
}
