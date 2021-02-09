import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from '../model/details';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss']
})
export class CardDetailsComponent implements OnInit {

  name!: string;
  data!: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.name = params['name']);
    this.getData();
  }

  getData(){     
    this.apiService.getName(this.name).subscribe(data => {
      this.data = data;
      console.log(this.data);
    })
  }  

  
  
}
