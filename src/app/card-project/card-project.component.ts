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
  dialog !: boolean 
  @Input() linkGithubFilho !: string
  @Input() linkVercelFilho !: string

  constructor(){

  }

  openOrCloseDialog(){
    this.dialog = !this.dialog
    console.log("console ligou");
    
  }


  
  

}
