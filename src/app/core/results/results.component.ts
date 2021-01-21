import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  public title : string = "Voir les resultats";
  public candidates: string[] = [];
  private electionId: number;

  
  
  
  
  
  public type: ChartType = 'bar';

  public labels: Label[] = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

  public datasets: ChartDataSets[] = [
    {
      label: '# of Votes',
      data: [12, 52, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }];

  public options: ChartOptions = {
    scales: {
      yAxes: [{
        id:'y-axis-0',
        ticks: {
          beginAtZero: true,
          suggestedMax: 100
        }
      }]
    },
  };

  public annotation = {
    drawTime: 'afterDatasetsDraw',
    annotations: [{
      type: 'line',
      id: 'hline',
      mode: 'horizontal',
      scaleID: 'y-axis-0',
      value: 50,
      borderColor: 'green',
      borderWidth: 12,
      label: {
         enabled: true,
         position: "center",
         content: 50
      }
   }]
  }

  constructor(
    private activatedRoute: ActivatedRoute, 
    private candidateService: CandidateService
  ) { }

  async ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.electionId = params['electionId'];
    });

    let candidateCount = await this.candidateService.getCandidatesCount(this.electionId);

    for (let count = 0; count < candidateCount; count++) {
      this.candidates.push(
        await this.candidateService.getCandidateName(this.electionId, count)
      );
      //getAvgNote
      //getPercent
      //getWinnerOfElection
    }
  }

}
