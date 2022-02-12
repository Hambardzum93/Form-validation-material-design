import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, DoCheck {

  currentRout: string;
  flag: boolean

  ngOnInit() {

  }

  ngDoCheck(): void {
    this.currentRout = window.location.href;
    if (this.currentRout === 'http://localhost:4200/create'){
      this.flag = false
    }else if(this.currentRout === 'http://localhost:4200/'){
      this.flag = true
    }
  }



}
