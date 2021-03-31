import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConfirmationDialogService } from './confirmation-dialog/confirmation-dialog.service';
import { GlobalConstants } from 'src/environments/GlobalConstants';
import { GlobalMethods } from 'src/environments/GlobalMethods';

@Injectable({
  providedIn: 'root'
})
export class BonusService {

  constructor(private httpClient: HttpClient, private confirmationDialogService: ConfirmationDialogService) { }

  public getCovidDesc(): any {
    return this.httpClient.get(`http://localhost:8081/covid/get/bonus`);
  }

  public deleteDesc(id: number): Promise<any> {

    return new Promise((resolve) => {
      return this.httpClient.delete(`http://localhost:8081/covid/delete/bonus?id=` + id).subscribe((data: any) => {
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

  public addDesc(bonus: string): Promise<any> {

    return new Promise((resolve) => {
      return this.httpClient.get(`http://localhost:8081/covid/add/bonus?bonus=` + bonus).subscribe((data: any) => {

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


  public putDesc(body : any): Promise<any> {

    return new Promise((resolve) => {
      return this.httpClient.put(`http://localhost:8081/covid/put/bonus`, body).subscribe((data: any) => {

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

  public addPost(body: any): Promise<any>  {
    // body.description = body.desc;
    return new Promise((resolve) => {
    return this.httpClient.post(`http://localhost:8081/covid/post/bonus`, body).subscribe((data: any) => {
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

  public deleteDescSoap(bonus: string): Promise<any>  {
    // body.description = body.desc;
    return new Promise((resolve) => {
    return this.httpClient.delete(`http://localhost:8081/covid/delete/soap/bonus?bonus=`+ bonus).subscribe((data: any) => {
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
