import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent implements OnChanges{

  @Input() img !: string 
  @Input() nomeProjeto!:string
  @Input() descricaoDoProjeto !: string
  dialog !: boolean 
  @Input() linkGithubFilho !: string
  @Input() linkVercelFilho !: string
  @Input() tagsFilho !: Array<string>
  
  tagsPares:Array<string> = [];
  tagsImpares : Array <string> = [];

  tagsIntercaladas: Array<{ tag: string, par: boolean }> = [];


  constructor() {
    

  }
  ngOnChanges() {
    this.dividirTags()
    this.intercalarTags();
      
  }

  dividirTags(){
    if (this.tagsFilho) {
      this.tagsPares = this.tagsFilho.filter((_, index) => index % 2 === 0);
      this.tagsImpares = this.tagsFilho.filter((_, index) => index % 2 !== 0);
    }
  }

  openOrCloseDialog(){
    this.dialog = !this.dialog
    console.log("console ligou");
    
  }

  intercalarTags() {
    this.tagsIntercaladas = [];
    const maiorTamanho = Math.max(this.tagsPares.length, this.tagsImpares.length);

    for (let i = 0; i < maiorTamanho; i++) {
      if (i < this.tagsPares.length) {
        this.tagsIntercaladas.push({ tag: this.tagsPares[i], par: true });
      }
      if (i < this.tagsImpares.length) {
        this.tagsIntercaladas.push({ tag: this.tagsImpares[i], par: false });
      }
    }
  }
}

