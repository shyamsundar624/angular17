import { Component } from '@angular/core';
import { AccountcreateComponent } from '../accountcreate/accountcreate.component';
import { AccountupdateComponent } from '../accountupdate/accountupdate.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accountlist',
  standalone: true,
  imports: [AccountcreateComponent,AccountupdateComponent,CommonModule],
  templateUrl: './accountlist.component.html',
  styleUrl: './accountlist.component.css'
})
export class AccountlistComponent {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onAccountAdded(newAccount: {name: string, status: string}) {
    console.log('Emitted the Account Create Event to List Component');
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    console.log('Emitted the Status ChangeEvent to List Component');
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }

  ngOnInit(): void {
      
  }

}
