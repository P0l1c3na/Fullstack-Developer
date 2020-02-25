import {Component, OnInit} from '@angular/core';
import {LoaderService} from '../../services/loader.service';
import {Subject} from "rxjs";

@Component({
  selector: 'app-progress-loader',
  templateUrl: './progress-loader.component.html',
  styleUrls: ['./progress-loader.component.css']
})
export class ProgressLoaderComponent implements OnInit {
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private loaderService: LoaderService) {
    console.log(this.isLoading);
  }

  ngOnInit() {
  }

}
