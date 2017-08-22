import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string 
  age:number;
  email:string;
  address:Address;
  hobbies:string []

  constructor(private dataService:DataService) { 
    console.log('construtora funciona')
  }
  
  ngOnInit() {
    console.log('NgOnInit funciona')
    this.name = 'Vinicius'
    this.age = 18
    this.email = 'vinnibandoch@gmail.com'
    this.address = {
      street:'Rua Bandeirantes Dias Cortes',
      city:'Curitiba',
      state:'Paraná',
      house: 148
    }
    this.hobbies = ['Guitarra','Ver serie','Ouvir musica']

    this.dataService.getPosts().subscribe((posts) =>
    {
      console.log(posts);

    });
    
  }
    onClick(){
      this.name = 'John Wayne';
      this.hobbies.push('New Hobby');
      
    }
   addHobby(hobby){
     console.log(hobby);
     this.hobbies.unshift(hobby);
     return false;
    }
    deleteHobby(hobby){
      for(let i = 0;i <this.hobbies.length;i++)
        if (this.hobbies[i] == hobby){
          this.hobbies.splice(i,1)
        }
    }
  }

interface Address
{
  street:string,
  city:string,
  state:string,
  house:number
}
