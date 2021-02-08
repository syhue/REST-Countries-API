import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  data: any;
  regions = [
    { value: 'africa', viewValue: 'Africa' },
    { value: 'americas', viewValue: 'Americas' },
    { value: 'asia', viewValue: 'Asia'},
    { value: 'europe', viewValue: 'Europe'},
    { value: 'oceania', viewValue: 'Oceania'},];

  constructor( private apiService: ApiService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.apiService.getData().subscribe(data => { this.data = data; });
  }

  getRegion(region: string) {
    this.apiService.getRegion(region).subscribe(data => this.data = data);
  }

  getName(event: any){
    this.apiService.getName(event.target.value).subscribe(data => this.data = data);

    if(!event.target.value) {
      this.getData();
    }
  }
}
