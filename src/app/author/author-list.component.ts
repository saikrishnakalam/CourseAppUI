import { AuthorService } from './author.service';
import { Component, OnInit, Input } from '@angular/core';
import { Author} from './author'

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent implements OnInit {
  constructor(private AuthorService:AuthorService){}
  authorArray:Array<Author>=this.AuthorService.authors;

  toUpperCase(input:string){
    return input.toUpperCase();
  }

  ngOnInit() {
  }

}
