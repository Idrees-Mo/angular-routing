import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
})
export class FormsComponent implements OnInit {
  forms = [
    { title: 'Reactive Forms', id: 'reactive' },
    { title: 'Template Driven Forms ', id: 'template' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
