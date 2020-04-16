import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'Exam Problem-3';
  image1: string;
  alt: string;
  label: string;
  count: number;


  constructor() {

  }

  red() {
    this.image1 = 'assets/images/red_light.jpg';
    this.alt = 'red_img';
    this.label = 'Red';
    this.count = 0;

  }

  yellow() {
    this.image1 = 'assets/images/yellow_light.jpg';
    this.alt = 'yellow_img';
    this.label = 'Yellow';


  }

  green() {
    this.image1 = 'assets/images/green_light.jpg';
    this.alt = 'green_img';
    this.label = 'Green';

  }

  next() {
    switch (this.count) {
      case 0: this.red();
              this.count++;
              break;
      case 1: this.yellow();
              this.count++;
              break;
      case 2: this.green();
              this.count = 0;
              break;
      default : break;
    }
  }
}
