import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/services/Noteservice/noteservice.service';

@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.css']
})
export class GetallnotesComponent  implements OnInit {
  notearr:any;
  constructor(private noteservice:NoteserviceService){}
  ngOnInit() {
    this.getnote();
  }

  getnote(){
    this.noteservice.getallNote().subscribe((res:any) =>{
      this.notearr=res.data.data
      console.log(res.data.data);
      
    })
  }
  rfrshNote(event:any){
    console.log("msg-----");
    
    this.getnote()
  }
}


