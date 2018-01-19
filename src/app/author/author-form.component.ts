import { AuthorService } from './author.service';
import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { Author} from './author';
import{Gender} from '../employee/gender'

@Component({
  selector: 'app-author-form',
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css'],
})
export class AuthorFormComponent implements OnInit {

  constructor(private service : AuthorService) { }
  authors:Author=new Author(0,"","","",0,Gender.Male,true);
  // @Output()
  // newAuthorAdded:EventEmitter<Author> = new EventEmitter<Author>();

  ngOnInit() {
  }
  onSubmit(){
    this.service.save(this.authors);
    this.authors=new Author(0,"","","",0,Gender.Male,true);

  }
  getKeysforGender(){
    return Object.keys(Gender);
  }

}
