import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { CovidApiService } from '../covidapi.service';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { BonusComponent } from '../bonus/bonus.component';


@Component({
  selector: 'app-covidbonus-delete',
  templateUrl: './covidbonus-delete.component.html',
  styleUrls: ['../../../src/app/shareCss/covid.component.css']
})
export class CovidbonusDeleteComponent implements OnInit {

  public newDesc: any;

  constructor(
    private httpClient: HttpClient,
    public bonusService: CovidApiService,
    public bonusComponent: BonusComponent,
    private confirmationDialogService: ConfirmationDialogService
  ) { }

  ngOnInit(): void {
    // This is intentional
  }


  deleteDescSoap() {
    console.log("covidTotalDesc length-->" + this.bonusComponent.covidTotalDesc.length);

    if (this.bonusComponent.covidTotalDesc.length == 0) {
      this.confirmationDialogService.confirm(GlobalConstants.errorMessageFE, "List is Empty");
    }
    else {
      this.bonusService.deleteDescSoap(this.newDesc,'covid/delete/soap/bonus?bonus=').then(
        resolve => {
          this.bonusComponent.getCovidDesc();
        });
    }
  }

  deleteDuplicate(){
    this.bonusService.deleteDuplicate('covid/delete/duplicate/bonus').then(
      resolve => {
    // if the method below being called using async way, then the table desc wont be updated accordingly after data added
    this.bonusComponent.getCovidDesc();   
  });
  }
}
