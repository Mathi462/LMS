import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { DISABLED } from '@angular/forms/src/model';
import { all } from 'q';
import { SELECT_PANEL_MAX_HEIGHT } from '@angular/material';
import { elementStyleProp } from '@angular/core/src/render3/instructions';
import { createElementCssSelector } from '@angular/compiler';


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
  left = 0;
  theCheckbox = false;
  checkBoxValue: any;
  option1: boolean;
  chk1: boolean;
  chk2: boolean;
  chk3: boolean;
  chk4: boolean;
  chk5: boolean;
  userans: string;
  wrong_ans = 0;
  correct_ans = 0;
  submit: boolean;
  numans: any;
  indexv: any;
  evesvalue: string[] = [];
  evi = 0;

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
      this.left = this.qLength;

      this.elmSel();
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
     this.checkUserAns();
     this.checkAnsCount();
    console.log('index : ' + this.index);
    if (this.index < (this.rest).length - 1) {
      this.index++;
      console.log('After increment index : ' + this.index);
     } else {
       this.submit = false;
     }
     this.elmSelinbutton(this.index);
     this.evi = 0;
     this.left-- ;
  }
  answercheck(event, value) {
    console.log(value);
    return event.checked;

  }
  getChange1(event) {
    console.log('before chk1 :' + this.chk1 );

    if (this.chk1 ) {
      this.chk1 = false;

      this.evesvalue[this.evi] = event.source.value;
      console.log('check box event fun ' + this.evesvalue[this.evi]);
      this.evi++;
    }


  }
  getChange2(event) {

    if (this.chk2) {
      this.chk2 = false;
      this.evesvalue[this.evi] = event.source.value;
      console.log('evesvalue evi: ' + this.evi);
      console.log('check box event fun ' + this.evesvalue[this.evi]);
      this.evi++;
    }

   }
  getChange3(event) {

    if (this.chk3) {
      this.chk3 = false;
      this.evesvalue[this.evi] = event.source.value;
      console.log('check box event fun ' + this.evesvalue[this.evi]);
      this.evi++;
    }


   }
  getChange4(event) {

    if (this.chk4) {
      this.chk4 = false;
      this.evesvalue[this.evi] = event.source.value;
      console.log('check box event fun ' + this.evesvalue[this.evi]);
      this.evi++;
    }


   }
  getChange5(event) {

    if (this.chk5) {
      this.chk5 = false;

    this.evesvalue[this.evi] = event.source.value;
    console.log('check box event fun ' + this.evesvalue[this.evi]);
      this.evi++;
    }

  }
  getRadChange1(event) {
    console.log('First radio button');
       if (this.chk1 ) {
      this.chk1 = false;
      this.evesvalue[this.evi] = event.source.value;
    }

  }
  getRadChange2(event) {

    if (this.chk2) {
      this.chk2 = false;
      this.evesvalue[this.evi] = event.source.value;
    }

   }
  getRadChange3(event) {

    if (this.chk3) {
      this.chk3 = false;
      this.evesvalue[this.evi] = event.source.value;
    }


   }
  getRadChange4(event) {

    if (this.chk4) {
      this.chk4 = false;
      this.evesvalue[this.evi] = event.source.value;
    }


   }
  getRadChange5(event) {

    if (this.chk5) {
      this.chk5 = false;
    }
    this.evesvalue[this.evi] = event.source.value;


  }

  checkUserAns() {

    console.log('index value' + this.index);
    console.log('number of answers:' + this.getSingleQues(this.index).Answers.length);
    console.log('REST data :' + this.getSingleQues(this.index).Answers[0] + this.getSingleQues(this.index).Answers[1]);
    console.log('evesvalue lenght:' + this.evesvalue.length);
    console.log('evsvalue content:' + this.evesvalue);
    if (this.getSingleQues(this.index).Answers.length === 2) {
      console.log('dual answers ' + this.evesvalue);
      // tslint:disable-next-line:max-line-length
         if ((this.evesvalue[0] === this.getSingleQues(this.index).Answers[0]) && (this.evesvalue[1] === this.getSingleQues(this.index).Answers[1])) {
        console.log('correct ans in dua ans');
        this.correct_ans++;
        console.log(this.correct_ans);
      } else {
        console.log('wrong answer in dual answer');
      this.wrong_ans++;

        }
    } else {
    if (this.evesvalue[this.evi] === this.getSingleQues(this.index).Answers[0]) {
      console.log('correct ans');
      this.correct_ans++;
      console.log(this.correct_ans);
    } else {
      console.log('wrong answer');
      this.wrong_ans++;
    }
  }
  }

    elmSel() {
      this.numans = this.getSingleQues(this.index).Answers.length;
      console.log('number of ans:' + this.numans);

    }
    elmSelinbutton(indexv: any) {
      this.numans = this.getSingleQues(indexv).Answers.length;
      console.log('number of ans:' + this.numans);

    }
    checkAnsCount() {
      console.log('number of ans in checkAnsCount:' + this.numans);
      if (this.numans === 2 ) {
            return true;
      } else if (this.numans === 1) {
        return false;
      }

      }

  }
