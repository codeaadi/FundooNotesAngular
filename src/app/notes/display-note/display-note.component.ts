import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.css']
})
export class DisplayNoteComponent {
@Input() childData: any
ngOnInit(): void {
console.log(this.childData);

}
}
