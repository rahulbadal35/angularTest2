import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  data:any[]=[{head: "Building the Mention Sales Application on Unapp",p:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life" ,date:"May 12, 2018"},
              {head: "Building the Mention Sales Application on Unapp",p:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life" ,date:"May 12, 2018"},
              {head: "Building the Mention Sales Application on Unapp",p:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life" ,date:"May 12, 2018"},
              {head: "Building the Mention Sales Application on Unapp",p:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life" ,date:"May 12, 2018"},
              {head: "Building the Mention Sales Application on Unapp",p:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life" ,date:"May 12, 2018"},
              {head: "Building the Mention Sales Application on Unapp",p:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life" ,date:"May 12, 2018"},
              {head: "Building the Mention Sales Application on Unapp",p:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life" ,date:"May 12, 2018"},
              {head: "Building the Mention Sales Application on Unapp",p:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life" ,date:"May 12, 2018"},
              {head: "Building the Mention Sales Application on Unapp",p:"Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life" ,date:"May 12, 2018"}]

  constructor() { }

  ngOnInit() {
  }

}
