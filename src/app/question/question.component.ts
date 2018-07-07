import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  providers: [QuestionService]
  
})
export class QuestionComponent implements OnInit {
   i=0;
   result=0;
   r:any={}
    option:string;
  
  rincrease(i) {
    this.r = this.question[i];
    if (this.i<9) 
    {  
      //this.r=this.question[i-1];
      if(this.option==this.r.co){
   //   this.r = this.question[i-1];
      this.result++;
       this.i++;
        this.option = '';
         
      }else{
        this.r = this.question[i - 1];
        this.option = '';
        this.i++; 
      }
    }
    else if(this.i=9){
      if (this.option == this.r.co) { 
        this.option = '';
        this.result++;    
        }

      this._router.navigate(['./result/' + this.result]);
        
      

    }
    
  }
  question: any[];
  constructor(private _qs: QuestionService, private _router: Router) {
    this._qs.getQuestionFromJsonFile()
    .subscribe(x => this.question = x); 
  }
  
  ngOnInit() {
  }

}
