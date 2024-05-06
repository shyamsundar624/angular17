import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

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
    },
    {
      name: 'Join Account',
      status: 'unknown'
    }
  ];

  //Add account
  onAccountAdded(accName: string, status: string) {
    console.log('Account Created');
    this.accounts.push({name:accName,status:status});
  }

  //update Account

  updateStatus(id:number,status:string){
    console.log("Account Service => Update Functionality");
    this.accounts[id].status=status;
  }


}
