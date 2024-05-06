import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-accountcreate',
  standalone: true,
  imports: [],
  templateUrl: './accountcreate.component.html',
  styleUrl: './accountcreate.component.css'
})
export class AccountcreateComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    console.log('New Account is Created , Account Name: ' + accountName);
  }

  ngOnInit(): void {
      
  }
}
