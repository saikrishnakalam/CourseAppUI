import { Author } from "./author";
import { Gender } from "../employee/gender";

export class AuthorService {

  authors:Array<Author>=[
    new Author(1,"Sandeep","Kumar","Bachala",27,Gender.Male,false),
    new Author(2,"priya","varma","vemula",25,Gender.Female,false)
  ]

  getAuthors(){
    return this.authors;
  }

  save(author:Author){
   author.Id=this.getMaxID(); 
  this.authors.push(author);
  }

  getMaxID(){
    let maxId=0;
    for(let author of this.authors){
      if(author.Id>maxId){
        maxId=author.Id;
      }
    }
    return maxId+1;
  }

  constructor() { }

}
