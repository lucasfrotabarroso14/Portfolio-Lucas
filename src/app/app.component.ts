// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  //------------PROJETO 01 Task Manager------------------------------------------------------
  imgProjeto01 : string = "../assets/task-manager.png" 
  nomeProjeto01 ="Task Manager"
  descricaoDoProjeto01 = "<p>O <strong>Task Manager</strong> é uma aplicação <strong>Full-Stack</strong> desenvolvida de um gerenciador de tasks. No front-end, utilizei <strong>Angular</strong> para criar uma interface dinâmica, enquanto no back-end, implementei soluções robustas utilizando <strong>Django</strong> com <strong>Python</strong></p>"

  //------------PROJETO 02 Finova------------------------------------------------------
  imgProjeto02 : string = "../assets/finova-branco-logo.png" 
  nomeProjeto02 ="Finova Back-End"
  descricaoDoProjeto02 = "<p>O <strong>Task Manager</strong> é uma aplicação full-stack desenvolvida de um gerenciador de tasks. No front-end, utilizei <strong>Angular</strong> para criar uma interface dinâmica, enquanto no back-end, implementei soluções robustas utilizando <strong>Django</strong> com <strong>Python</strong></p>"




  title(title: any) {
    throw new Error('Method not implemented.');
  }

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}

