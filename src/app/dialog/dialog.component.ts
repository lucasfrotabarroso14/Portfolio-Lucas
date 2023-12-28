import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Output() closeDialog = new EventEmitter()

  @Input() linkGithub !: string
  @Input() linkVercel !: string


  openOrCloseDialog(){
    this.closeDialog.emit()
    console.log("evento");
    
  }
  acessarVercel(){
    window.open(this.linkVercel)
  }
  acessarGithub(){
    window.open(this.linkGithub)
    
    
  }


}
