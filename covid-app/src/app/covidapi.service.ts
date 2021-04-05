import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { GlobalMethods } from 'src/environments/GlobalMethods';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {

  constructor(private httpClient: HttpClient, private confirmationDialogService: ConfirmationDialogService) { }

  private bonusUrl = 'http://localhost:8081/';

  public getCovid(getCovidUrl: string): any {
    return this.httpClient.get(this.bonusUrl+getCovidUrl, { responseType: 'text' });
  }

  public getCovidDesc(getDescUrl: string): any {
    return this.httpClient.get(this.bonusUrl+getDescUrl);
  }

  public deleteDesc(id: number, delUrl: string): Promise<any> {
    return new Promise((resolve) => {
      return this.httpClient.delete(this.bonusUrl+delUrl+id).subscribe((data: any) => {
        console.log(data);
        resolve(data);

      }
        ,
        (error) => {
          console.log(error);
          this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
        }
      )
    });
  }

  public addDesc(desc: string, addDescUrl: string): Promise<any> {
    return new Promise((resolve) => {
      return this.httpClient.get(this.bonusUrl+addDescUrl+ desc).subscribe((data: any) => {

        console.log(data);
        resolve(data);

      }
        ,
        (error) => {
          console.log(error);
          this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
        })

    });
  }


  public putDesc(body : any, putUrl: string): Promise<any> {
    return new Promise((resolve) => {
      return this.httpClient.put(this.bonusUrl+putUrl, body).subscribe((data: any) => {

        console.log(data);
        resolve(data);

      }
        ,
        (error) => {
          console.log(error);
          this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
        })

    });
  }

    //Practical 7 - complete the implementation below
  // It should have a promise sync function 

  public addPost(body: any, addPostUrl: string): Promise<any>  {
    return new Promise((resolve) => {
    return this.httpClient.post(this.bonusUrl+addPostUrl, body).subscribe((data: any) => {
      console.log(data);
      resolve(data);
    }
      ,
      (error) => {
        console.log(error);
        this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
      })
    });
  }

  public deleteDescSoap(desc: string, delSoapUrl: string): Promise<any>  {
    return new Promise((resolve) => {
    return this.httpClient.delete(this.bonusUrl+delSoapUrl+ desc).subscribe((data: any) => {
      console.log(data);
      resolve(data);
    }
      ,
      (error) => {
        console.log(error);
        this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
      })
    });
  }

  public deleteDuplicate(delSoapUrl: string): Promise<any>  {
    return new Promise((resolve) => {
      return this.httpClient.delete(this.bonusUrl+delSoapUrl).subscribe((data: any) => {
        console.log(data);
        resolve(data);
      }
        ,
        (error) => {
          console.log(error);
          this.confirmationDialogService.confirm(GlobalConstants.errorMessage, GlobalMethods.getError(error));
        })
      });
  }

}
