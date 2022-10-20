import { Component, OnInit } from '@angular/core';
import { faBars, faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faBars = faBars;
  faCaretLeft = faCaretLeft;
  faCaretRight = faCaretRight;

  constructor() { }

  ngOnInit(): void {
  }

}
