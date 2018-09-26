import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { DISABLED } from '@angular/forms/src/model';
import { all } from 'q';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-src';
  rest: any;
  index: number;
  options: Array<string>;
  qLength: any;
  theCheckbox = false;
  checkBoxValue: any;
  option1: boolean;
  chk1: boolean;
  chk2: boolean;
  chk3: boolean;
  chk4: boolean;
  chk5: boolean;
  userans: string;

  submit: boolean;

  constructor(public apiService: ApiService) {
    this.getNotes();
    this.submit = true;
    // tslint:disable-next-line:no-unused-expression
    this.checkBoxValue = true;

      this.chk1 = true;
      this.chk2 = true;
      this.chk3 = true;
      this.chk4 = true;
      this.chk5 = true;

    this.options = ['1', '2', '3', 'h', ' k' ];
    console.log(this.checkBoxValue);
  }

  getNotes() {
    this.apiService.getData().then(m => {
      this.index = 0;
      this.rest = m;
      this.qLength = (this.rest).length;

      console.log(this.rest);

    });
  }
  getSingleQues(index: number) {
    return this.rest[index];
  }

  buttonClicked() {
    this.chk1 = true;
    this.chk2 = true;
    this.chk3 = true;
    this.chk4 = true;
    this.chk5 = true;


    if (this.index < (this.rest).length - 1) {
      this.index++;
     } else {
       this.submit = false;
     }

  }
  answercheck(event, value) {
    console.log(value);
    return event.checked;

  }
  getChange1(event) {
    console.log('before chk1 :' + this.chk1 );

    if (this.chk1 ) {
      this.chk1 = false;
      console.log('chexkbox value:' + event.source.value);
    }
    this.checkUserAns(event);

  }
  getChange2(event) {

    if (this.chk2) {
      this.chk2 = false;
      console.log('chexkbox value:' + event.source.value);
    }
    this.checkUserAns( event);
   }
  getChange3(event) {

    if (this.chk3) {
      this.chk3 = false;
      console.log('chexkbox value:' + event.source.value);
    }
    this.checkUserAns(event);

   }
  getChange4(event) {

    if (this.chk4) {
      this.chk4 = false;
      console.log('chexkbox value:' + event.source.value);
    }

    this.checkUserAns(event);
   }
  getChange5(event) {

    if (this.chk5) {
      this.chk5 = false;
    }
    console.log('chexkbox value:' + event.source.value);

    this.checkUserAns(event);
  }
  checkUserAns(event) {
    console.log('index value' + this.index);
    console.log('REST data :' + this.getSingleQues(this.index).Answers[0]);
    console.log('user answer in check:' + event.source.value);
    if ( event.source.value === this.getSingleQues(this.index).Answers[0]) {
      console.log('correct ans');
    } else {
      console.log('wrong answer');
    }


  }
}
