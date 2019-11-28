export class CompanyService{
    allCompanies: string[] = ["IBM", "Accenture","JCI","TCS"];

    getAllCompanies(): string[]{
        return this.allCompanies;
    }

    addNewCompany( newCompany: string){
        this.allCompanies.push(newCompany);
    }
}