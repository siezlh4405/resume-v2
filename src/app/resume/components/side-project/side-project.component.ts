import { AfterViewInit, Component, OnInit } from '@angular/core';
// import Swiper core and required components
import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';

import Swiper from "swiper/types/swiper-class";

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);

@Component({
  selector: 'app-side-project',
  templateUrl: './side-project.component.html',
  styleUrls: ['./side-project.component.scss']
})
export class SideProjectComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

}
