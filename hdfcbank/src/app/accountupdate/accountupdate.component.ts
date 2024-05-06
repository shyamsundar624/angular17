import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accountupdate',
  standalone: true,
  imports: [],
  templateUrl: './accountupdate.component.html',
  styleUrl: './accountupdate.component.css'
})
export class AccountupdateComponent {

    //@Input() account: {name: string, status: string};
    @Input() account: any="";
    @Input() id: number=0;
    @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();
  
  
    onSetTo(status: string) {
      this.statusChanged.emit({id: this.id, newStatus: status});
      console.log('Account status changed, new status: ' + status);
    }
}
