import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from '../confirmation-dialog/confirmation-dialog.service';
import { MiningService } from '../mining.service';

@Component({
  selector: 'app-mining',
  templateUrl: './mining.component.html',
  styleUrls: ['../../../src/app/shareCss/covid.component.css']
})
export class MiningComponent implements OnInit {

  constructor(    
    // Inject your HTTP Client Service here
    private httpClient: HttpClient,

    // Inject your Hello Service Here
    private miningService: MiningService,
    
    // Inject your confirmation dialog
    private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    // This is intentional
  }

mining: string = 'Covid Mining Service';
mining2: any;
  // related to mining component exercise 
  // Method with response data subscription and assign hello variable with response data
  // Get Method without Service
  public getBasicMiningSubscribe(): any {
    this.httpClient.get(` http://localhost:8091/covid/mining/my`, { responseType: 'text' })
      .subscribe((data: any) => 
                  {
                    // assign HTTP response with local variable
                    this.mining2 = data;
                  }
                );   
  }
}
