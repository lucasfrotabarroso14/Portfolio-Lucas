import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent {

  @Input() img !: string 
  @Input() nomeProjeto!:string
  @Input() descricaoDoProjeto !: string

  constructor(){

  }
  
  

}