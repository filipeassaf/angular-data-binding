import { Component, OnInit } from '@angular/core';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'www.google.com.br';
  cursoAngular: boolean = true;
  urlImagem = 'https://i.insider.com/5b4e1386afb7751b008b45d1?width=750&format=jpeg&auto=webp';
  msgs2: Message[];

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  addMessages() {
    this.msgs2 = [
        {severity:'success', summary:'Success', detail:'Message Content'},
        {severity:'info', summary:'Info', detail:'Message Content'},
        {severity:'warn', summary:'Warning', detail:'Message Content'},
        {severity:'error', summary:'Error', detail:'Message Content'}
    ];

  }

  clearMessages() {
      this.msgs2 = [];
  }

  constructor() { }

  ngOnInit(): void {  }

}
