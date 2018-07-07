import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class QuestionService {

  constructor(private _http:Http) { }
  getQuestionFromJsonFile(){
    return this._http.get('./assets/question.json')
    .map(x=>x.json())
  }

}
