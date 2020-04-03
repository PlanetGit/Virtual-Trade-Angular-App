import { Component, OnInit } from '@angular/core';
import { NgwWowService } from "ngx-wow";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  learnMore: string = "Virtual Trade Exhibitions offer a new business working platform for exhibitions and conferences industry to connect and work together in a manner that Prahalad described in several of his books such as ‘The new age of innovation’ and ‘The Fortune at the Bottom of the Pyramid’, where social networks are put to productive use for businesses. The platform functions as an online infrastructure system where producers can interact and develop new innovations, projects and products. Users have the option to post news, upload projects both private and public, create private projects, launch initiatives, raise know-how questions and answer know how questions. They can provide their contact details or only be contacted through the platform. The platform can also be used as a closed network for businesses and conferences, to better connect to those present at events before the event.";

  // Slider Creating Object
  cards = [
    {
      title: 'ALLOW USERS TO COMMUNICATE',
      description: '',
      img: 'assets/images/slides/1.jpg'
    },
    {
      title: 'ALLOW USERS TO FIND EACH OTHERS PROJECTS',
      description: '',
      img: 'assets/images/slides/2.jpg'
    },
    {
      title: 'ALLOW USERS TO SET UP CONSORTIUMS',
      description: '',
      img: 'assets/images/slides/3.jpg'
    },
    {
      title: 'ALLOW USERS TO SEARCH FOR FIRMS OR SERVICES',
      description: '',
      img: 'assets/images/slides/4.jpg'
    },
    {
      title: 'ALLOW USERS TO FIND EACH THROUGH NEWS POSTS',
      description: '',
      img: 'assets/images/slides/5.jpg'
    },
    {
      title: 'ALLOW USERS TO POST KNOW HOW QUESTIONS',
      description: '',
      img: 'assets/images/slides/6.jpg'
    },
    {
      title: 'ALLOW USERS TO REQUETS AND SET UP MEETINGS WITH EACH OTHER',
      description: '',
      img: 'assets/images/slides/7.jpg'
    },
    {
      title: 'PROTECTED SIGN UP WITH SIGN UP CODE',
      description: '',
      img: 'assets/images/slides/8.jpg'
    },
  ];

  slides: any = [[]];

  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit(): void {
    this.slides = this.chunk(this.cards, 4);
  }

  purchaseNow(): void {
    window.open("mailto:info@virtualtradeexhibitions.com", '_self');
  }

}
