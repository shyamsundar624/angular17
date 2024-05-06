import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AccountcreateComponent } from '../accountcreate/accountcreate.component';
import { AccountupdateComponent } from '../accountupdate/accountupdate.component';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accountlist',
  standalone: true,
  imports: [CommonModule,AccountcreateComponent,AccountupdateComponent],
  templateUrl: './accountlist.component.html',
  styleUrl: './accountlist.component.css'
})
export class AccountlistComponent implements OnInit{
 
constructor(private acctService:AccountService ){}

  accounts:any[]=[];

  ngOnInit(): void {
      this.accounts=this.acctService.accounts;
  }

}
