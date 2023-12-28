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
  linkGithubProjeto01 : string ="https://github.com/lucasfrotabarroso14/Task-Manager-RPG-Frontend"
  linkVercelProjeto01 : string="https://task-manager-rpg-frontend.vercel.app/"
  tagsProjeto01 : Array<string> = ["Back-end","Front-End","Python","JavaScript"]
  // tags : Array<string> = ["teste","teste","teste","teste"]

  //------------PROJETO 02 Finova------------------------------------------------------
  imgProjeto02 : string = "../assets/finova-branco-logo.png" 
  nomeProjeto02 ="Finova Back-End"
  descricaoDoProjeto02 = "<p>O <strong>Task Manager</strong> é uma aplicação full-stack desenvolvida de um gerenciador de tasks. No front-end, utilizei <strong>Angular</strong> para criar uma interface dinâmica, enquanto no back-end, implementei soluções robustas utilizando <strong>Django</strong> com <strong>Python</strong></p>"
  linkGithubProjeto02 : string ="https://github.com/lucasfrotabarroso14/Finova-Portal-Backend"

  tagsProjeto02 : Array<string> = ["Back-end","Python","Flask","API"]





  title(title: any) {
    throw new Error('Method not implemented.');
  }

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}

