import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  constructor() { }

  //Declaro un array
  listaCurso: string[] = ['Java', 'Go', 'Python', 'C#'];

  ngOnInit(): void {
  }

}
