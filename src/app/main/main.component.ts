import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit{
    isDark: Boolean = false;
    data: any;
    panelColor = new FormControl('red');
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
        this.apiService.getData().subscribe(data => this.data = data);
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

    toggleTheme(){
        if (!this.isDark){
            this.isDark = true;
        } else {
            this.isDark = false;
        }
        console.log(this.isDark);
    }
}