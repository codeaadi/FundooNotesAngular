import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NoteserviceService } from 'src/app/services/Noteservice/noteservice.service';


@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.css']
})
export class CreatenoteComponent implements OnInit {
togle:any = true;
Title:any;
description:any;
@Output() RefreshNote=new EventEmitter();
constructor(private noteservice:NoteserviceService,) {
}
ngOnInit(): void {
    
}
ontoggle(){
  this.togle=!this.togle;
}
createNote(){
  let reqData={
    title:this.Title,
    description:this.description
  }
  console.log(reqData);
  this.noteservice.createnote(reqData).subscribe((result:any)=>{
    console.log(result);
    this.Title='';
    this.description='';
    this.RefreshNote.emit();
    
    
  })
}
}

