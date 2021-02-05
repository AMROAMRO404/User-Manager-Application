import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[user-row]',
  templateUrl: './user-row.component.html',
  styleUrls: ['./user-row.component.css']
})
export class UserRowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() user: any;

}
