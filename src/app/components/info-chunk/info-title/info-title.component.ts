import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info-title',
  templateUrl: './info-title.component.html',
  styleUrls: ['./info-title.component.css']
})
export class InfoTitleComponent implements OnInit {

  constructor() { }
  @Input() myTitle = '';
  ngOnInit(): void {
  }

}
