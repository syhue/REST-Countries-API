import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';


@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
    data: any[] = [];

    @Input() photo: string | undefined;
    @Input() name: string | undefined;
    @Input() population: number | undefined;
    @Input() region: string | undefined;
    @Input() capital: string | undefined;
    @Input() code: string | undefined;

    constructor(
       private apiService: ApiService,
    ) { }

    ngOnInit(): void {
    }

    getData(){
       this.apiService.getData().subscribe(data => this.data = data);
    }

}

