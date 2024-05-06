import { Component, EventEmitter, Output } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accountcreate',
  standalone: true,
  imports: [],
  templateUrl: './accountcreate.component.html',
  styleUrl: './accountcreate.component.css'
})
export class AccountcreateComponent {

  
  constructor(private accService:AccountService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accService.onAccountAdded(accountName,accountStatus);
    console.log('New Account is Created , Account Name: ' + accountName);
  }

  ngOnInit(): void {
      
  }

}
