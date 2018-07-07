import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  result: any[];
  t:any[];
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params:any) =>{
      this.result = params['r'];
      console.log(this.result);
    });
  }
  
  
  

  

  ngOnInit() {
  }

}
