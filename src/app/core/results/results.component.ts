import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ActivatedRoute } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';
import * as ChartAnnotation from 'chartjs-plugin-annotation';
import { ElectionHelperService } from 'src/app/services/election-helper.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements AfterViewInit {

  public title : string = "Voir les resultats";
  public candidates: any[] = [];
  private electionId: number;
  public possibleNotes = [
    "À rejeter", 
    "Insuffisant", 
    "Passable", 
    "Assez bien", 
    "Bien", 
    "Très bien", 
    "Excellent"
  ];

  @ViewChild('resultsCanvas', {static: false}) myCanvas: ElementRef;
  public context: CanvasRenderingContext2D;

  public resultsChart: Chart;
  public labels: Label[]= [];
  public datasets: ChartDataSets[] = [
    {
      label: this.possibleNotes[6],
      data: [],
      backgroundColor: '#59FF00' // green
    },
    {
      label: this.possibleNotes[5],
      data: [],
      backgroundColor: '#D4FF00' 
    },
    {
      label: this.possibleNotes[4],
      data: [],
      backgroundColor: '#FFF600' 
    },
    {
      label: this.possibleNotes[3],
      data: [],
      backgroundColor: '#FFC300' 
    },
    {
      label: this.possibleNotes[2],
      data: [],
      backgroundColor: '#FF9400' 
    },
    {
      label: this.possibleNotes[1],
      data: [],
      backgroundColor: '#FF6100'
    },
    {
      label: this.possibleNotes[0],
      data: [],
      backgroundColor: '#FF1500'// red
    }
  ];
  public options = {
    scales: {
      yAxes: [{
        id:'y-axis-0',
        ticks: {
          beginAtZero: true,
          suggestedMax: 100
        },
        stacked: true,
        scaleLabel: {
          display: true,
          labelString: '% de chaque note'
        }
      }],
      xAxes: [{ stacked: true }]
    },
    annotation: {
      annotations: [{
        type: 'line',
        id: 'hline',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: 50,
        borderColor: 'black',
        borderWidth: 5,
        label: {
           enabled: true,
           position: "center",
           content: "Note majoritaire"
        }
     }]
    }
  };

  constructor(
    private activatedRoute: ActivatedRoute, 
    private candidateService: CandidateService,
    private electionHelperService: ElectionHelperService
  ) { }

  async ngAfterViewInit() {

    this.activatedRoute.queryParams.subscribe((params) => {
      this.electionId = params['electionId'];
    });

    let candidateCount = await this.candidateService.getCandidatesCount(this.electionId);
    let winnerId = await this.electionHelperService.getElectionWinner(this.electionId);

    for (let count = 0; count < candidateCount; count++) {
      this.candidates.push({
        ...await this.candidateService.getCandidate(this.electionId, count),
        isWinner: count === parseInt(winnerId, 10) ? true : false,
        id: count
      });
    }


    for (const candidate of this.candidates) {
      this.labels.push(candidate.name);

      for (const note in this.possibleNotes) {
        let noteNumber = parseInt(note, 10);

        this.datasets[Math.abs(noteNumber-6)].data.push(await this.candidateService.calculatePercentageOfNote(this.electionId, candidate.id, noteNumber));
      }
    }

    this.context = this.myCanvas.nativeElement.getContext('2d');

    this.resultsChart = new Chart(this.context, {
        type: 'bar',
        plugins: [ChartAnnotation],
        data: {
            labels: this.labels,
            datasets: this.datasets
        },
        options: this.options
    });
  }
}
