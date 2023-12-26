import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Output() closeDialog = new EventEmitter()


  openOrCloseDialog(){
    this.closeDialog.emit()
    console.log("evento");
    
  }

}
