import { Component, OnInit } from '@angular/core';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
  providers:[]
})
export class CompanyComponent implements OnInit {
  public listOfCompanies:string[]
  public companyName: string

  constructor(public companyService:CompanyService  ) {
    
    this.listOfCompanies = companyService.getAllCompanies();
    
   }

   public addCompany(){
     this.companyService.addNewCompany(this.companyName)
   }

  ngOnInit() {
  }

}
