import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year = new Date().getFullYear();
  author = {
    name: 'Md Asif Ali',
    url: 'http://mdasifli.pythonanywhere.com/Login/Login/Login/Login/home-U/'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
