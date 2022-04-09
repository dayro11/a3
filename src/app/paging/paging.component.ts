import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.css']
})
export class PagingComponent implements OnInit {
  @Input() page: number = 1;

  @Output() newPage = new EventEmitter<number>();

  previous(){
    if(this.page > 1){
      this.newPage.emit(this.page - 1);
    }
  }

  next(){
    this.newPage.emit(this.page + 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
