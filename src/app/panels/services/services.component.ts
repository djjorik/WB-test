import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { JoinPipe } from './../../common/pipes/join.pipe';
import { SortingService } from './../../common/services/sorting.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  public services = [];
  public selectedOption = -1;
  public sortedServices = [];
  states = {
    0: 'Выкл',
    1: 'Вкл'
  };

  constructor(private sService: ServicesService, private sortService: SortingService) { }

  ngOnInit() {
    this.getServices();
  }

  getServices() {
    this.sService.getServices()
      .subscribe((data: any) => {
        this.services = data;
        this.sortedServices = data;
      });
  }

  sort(prop) {
    this.sortedServices = this.sortService.sortBy(this.services, prop);
  }


  optionSelected(ev) {
    this.sort(ev);
  }

}
