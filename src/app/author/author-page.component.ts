import { Component, OnInit, Input } from '@angular/core';
import { Author} from './author';
import{Gender} from '../employee/gender'

@Component({
  selector: 'app-author-page',
  templateUrl: './author-page.component.html',
  styleUrls: ['./author-page.component.css'],
  
})
export class AuthorPageComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
  }
 
}
