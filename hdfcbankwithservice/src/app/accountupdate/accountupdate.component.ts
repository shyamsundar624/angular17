import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountService } from '../account.service';

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

constructor(private acctService:AccountService){}

onSetTo(status: string) {
  
  this.acctService.updateStatus(this.id,status);
  console.log('Account status changed, new status: ' + status);
}

}
