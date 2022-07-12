import { Component, OnInit } from '@angular/core';
import { Name } from '../name';
import { NamerService } from '../namer.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.css'],
  providers: [NamerService]
})
export class NamesComponent implements OnInit {

  names : any;
  name: Name;
  first_name: String;
  last_name: String; 
  constructor(private namerService: NamerService) { }

  addName(){
    const newName = {
      first_name: this.first_name,
      last_name: this.last_name,
    }
    this.namerService.addName(newName).subscribe(name =>{
      this.names.push(name);
      this.namerService.getNames().subscribe(names =>{
      this.names = names;
      })
    })
  }

  deleteName(_id:any){
    var names = this.names;
    this.namerService.deleteName(_id).subscribe(data =>{
      for(var i=0;i<names.length; i++){
        if(names[i]._id == _id){
          names.splice(i,1);
        }
      }
    });
  }

  ngOnInit(): void {
    this.namerService.getNames().subscribe(names =>{
      this.names = names;
    })
  }

}
