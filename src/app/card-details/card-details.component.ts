import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'app-card-details',
    templateUrl: './card-details.component.html',
    styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {
    name!: string;
    data!: any;
    languages: string | undefined;
    borders: string | undefined;
    code!: any;

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
    ) { }

    ngOnInit() { 
        this.route.params.subscribe(params => {
            this.code = params.code;
        });
        this.getData(this.code);
    }
    
    getData(code: string) {
        this.code = code || this.code; 
        this.apiService.getCode(this.code).subscribe(data => {
            this.data = data;
            let arr = [];

            for(let item of this.data.languages){
                arr.push(item.name);
            }
            this.languages = arr.join();
        })
    }
}