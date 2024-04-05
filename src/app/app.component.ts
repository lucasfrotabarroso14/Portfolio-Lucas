// app.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http : HttpClient) {}

  //------------PROJETO 01 Task Manager------------------------------------------------------
  imgProjeto01 : string = "../assets/task-manager.png" 
  nomeProjeto01 ="Task Hub"
  descricaoDoProjeto01 = "<p>O <strong>Task Hub</strong> é uma aplicação <strong>Full-Stack</strong> desenvolvida de um gerenciador de tasks. No Front-End, utilizei <strong>Angular</strong> para criar uma interface dinâmica, enquanto no Back-End, implementei soluções robustas utilizando <strong>Django</strong> com <strong>Python</strong></p>"
  linkGithubProjeto01 : string ="https://github.com/lucasfrotabarroso14/Task-Manager-Rpg-Back"
  linkVercelProjeto01 : string="https://task-manager-rpg-frontend.vercel.app/"
  
  tagsProjeto01 : Array<string> = ["Back-end","Front-End","Python","JavaScript"]
  // tags : Array<string> = ["teste","teste","teste","teste"]

  //------------PROJETO 02 Finova------------------------------------------------------
  imgProjeto02 : string = "../assets/finova-branco-logo.png" 
  nomeProjeto02 ="Finova Back-End"
 
  descricaoDoProjeto02 = "<p>O <strong>Finova</strong> é um sistema <strong>Back-End</strong> desenvolvido para gerenciamento de ativos e portfólios de investimentos. Construído com <strong>Python</strong> e o framework <strong>Flask</strong>, oferece uma <strong> API RESTful</strong> segura e eficiente. Inclui recursos como autenticação <strong>JWT</strong>, integração com <strong> MySQL</strong>, e serviços de email para confirmação de registro.</p>"
  linkGithubProjeto02 : string ="https://github.com/lucasfrotabarroso14/Finova-Portal-Backend"

  tagsProjeto02 : Array<string> = ["Back-end","Python","Flask","API"]

//------------PROJETO 03----------------------------------
imgProjeto03 : string = "../assets/go.png" 
nomeProjeto03 ="Virtual Bank"

descricaoDoProjeto03 = "<p>O <strong>VirtualBank</strong> é um sistema <strong>Back-End</strong> desenvolvido em <strong>Go</strong> para um banco virtual. Permitindo que os usuários realizem operações como cadastro, transações financeiras, estabelecimento de metas e acompanhamento do seu patrimônio. o app ainda está em desenvolvimento.</p>"
linkGithubProjeto03 : string ="https://github.com/lucasfrotabarroso14/VirtualBank-Backend.git"

tagsProjeto03 : Array<string> = ["Back-end","Go","API","Docker"]




  title(title: any) {
    throw new Error('Method not implemented.');
  }

  scrollToSection(sectionId: string): void {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }

  downloadCV() {
    const url = '../assets/Cv-Lucas-Barroso.pdf'; // Substitua pela URL do seu currículo
    this.http.get(url, { responseType: 'blob' }).subscribe(blob => {
      saveAs(blob, 'curriculo-lucas.pdf');
    });
  }
}

