import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-text',
  templateUrl: './info-text.component.html',
  styleUrls: ['./info-text.component.css']
})
export class InfoTextComponent implements OnInit {

  constructor() { }
  @Input() myText = '';
  ngOnInit(): void {
  }

}
