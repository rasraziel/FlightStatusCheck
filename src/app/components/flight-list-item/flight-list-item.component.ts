import { StatusType } from './../../types/StatusType';
import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: '[row]',
  templateUrl: './flight-list-item.component.html',
  styleUrls: ['./flight-list-item.component.scss']
})
export class FlightListItemComponent implements OnInit {

  flightStatus: any[] = [];
  today: Date = new Date();
  isToday: boolean = false;
  classCSS: string = '';
  @Input() selectedDepartureAirport = ''
  @Input() selectedArrivalAirport = ''
  @Input() date: string = '';
  @Input() option: string = '';



  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  checkToday(dayToday: string, dateToday: string) {
    return +dayToday === +dateToday.slice(-2);
  }

  fetchData() {
    const day = this.today.getDate().toString().length > 1 ? this.today.getDate().toString() : '0' + this.today.getDate().toString();
    const month = (this.today.getMonth() + 1).toString().length > 1 ? (this.today.getMonth() + 1).toString() : '0' + (this.today.getMonth() + 1).toString();
    const year = this.today.getFullYear().toString();
    this.isToday = (year + '-' + month + '-' + day) === this.date;

    this.http.get<any>(`assets/flightMockData/${this.date.slice(-2)}.json`).subscribe(data => {
      this.flightStatus = data.flightStatuses.map((fs: any) => {
        return {
          publishedDepartureTime: new Date(fs.operationalTimes.publishedDeparture.dateLocal).toLocaleTimeString('en-GB').substring(0, 5),
          publishedArrivalTime: new Date(fs.operationalTimes.publishedArrival.dateLocal).toLocaleTimeString('en-GB').substring(0, 5),
          actualArrivalTime: fs.status === 'L' ? new Date(fs.operationalTimes.actualGateArrival.dateLocal).toLocaleTimeString('en-GB').substring(0, 5) : null,
          actualDepartureTime: fs.status === 'L' ? new Date(fs.operationalTimes.actualGateDeparture.dateLocal).toLocaleTimeString('en-GB').substring(0, 5) : null,
          // As mocked data is used the status has to be changed to departed if date < today
          status: +day > +this.date.slice(-2) && fs.status !== 'C' ? 'L' : this.checkToday(day, this.date) ? 'S' : fs.status,
          operatedBy: fs.operatedBy,
          statusInfo: +day > +this.date.slice(-2) && fs.status !== 'C' ? 'Arrived' : this.checkToday(day, this.date) ? 'SCHEDULED' : fs.statusInfo.status,
          delayedTime: fs.statusInfo.status === 'Delayed' ? new Date(fs.statusInfo.displayTime).toLocaleTimeString('en-GB').substring(0, 5) : null,
          flightId: fs.carrierFsCode + (fs.flightNumber.toString().length === 3 ? '0' + fs.flightNumber : fs.flightNumber)
        }
      });
    })
  }


}
