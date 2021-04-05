import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { CovidApiService } from '../covidapi.service';

@Component({
  selector: 'app-bonus',
  styleUrls: ['../../../src/app/shareCss/covid.component.css'],
  templateUrl: './bonus.component.html',

})
export class BonusComponent implements OnInit {

  public covidTotalDesc: any[] = [];

  public desc: any;

  public descObject: any;

  public newDesc: any;

  public updateDesc: any;

  public postDesc: any;

  public temp: any;

  constructor(
    private httpClient: HttpClient,
    public bonusService: CovidApiService,
    private confirmationDialogService: ConfirmationDialogService

  ) { }

  async ngOnInit(): Promise<void> {
    this.descObject = {};
    this.updateDesc = {};
    this.postDesc = {};
    await this.getCovidInit();
    this.descObject = this.temp;
    this.getCovidDesc();
    console.log("Covid Component Inited");
    console.log("Total of Description Column Row --->" + this.descObject.length);
  }

  async getCovidInit(): Promise<any> {
    return this.descObject = await this.bonusService.getCovidDesc('covid/get/bonus').toPromise().then((data: any) => {
      this.temp = data;
      });
  }


  getCovidDesc(): any {
    this.bonusService.getCovidDesc('covid/get/bonus').subscribe((data: any) => {
      console.log(data);
      this.covidTotalDesc = data;
    });

    return this.covidTotalDesc;
  }

  onSelectDesc(desc: any) {

    console.log("desc-->" + this.desc);
    if (this.desc[0]) {
      this.descObject = this.desc[0];
      console.log("desc id-->" + this.descObject.id);
      console.log("desc description-->" + this.descObject.description);
    }
  }

  deleteDesc() {
    console.log("covidTotalDesc length-->" + this.covidTotalDesc.length);

    if (this.covidTotalDesc.length == 0) {
      this.confirmationDialogService.confirm(GlobalConstants.errorMessageFE, "List is Empty");
    }
    else {
      this.bonusService.deleteDesc(this.descObject.id,'covid/delete/bonus?id=').then(
        resolve => {
          this.getCovidDesc();
        });
    }


  }

  addDesc() {
    this.bonusService.addDesc(this.newDesc,'covid/add/bonus?bonus=').then(
      resolve => {
        this.getCovidDesc();
      });
  }

  onSelectUpdateDesc(desc: any) {

    console.log("updateDesc-->" + this.updateDesc);
    if (this.desc[0]) {
    
      let clonedDesc = Object.assign({}, this.desc[0]);
      // use a new cloned Object to prevent pass by reference value in the class
      this.updateDesc = clonedDesc;
      console.log("updateDesc id-->" + this.updateDesc.id);
      console.log("updateDesc description-->" + this.updateDesc.description);
    }
  }

  //Practical 7 - complete the backend implementation only below
  putDesc() {

    this.bonusService.putDesc(this.updateDesc,'covid/put/bonus').then(
      resolve => {
        this.getCovidDesc();
      });
  }

  addPost() {
    this.bonusService.addPost(this.postDesc,'covid/post/bonus').then(
      resolve => {
    // if the method below being called using async way, then the table desc wont be updated accordingly after data added
    this.getCovidDesc();   
  });
  }


}
