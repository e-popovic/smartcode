import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  constructor() { }

  public notes = ['Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, ' +
  'when an unknown printer.',
  'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took' +
  ' a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,' +
  ' but also the leap into electronic typesetting, remaining essentially unchanged.',
  'It has survived not only five centuries, but also the leap into electronic typesetting.']

  ngOnInit(): void {
  }

}
