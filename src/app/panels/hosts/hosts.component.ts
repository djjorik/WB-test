import { Component, OnInit } from '@angular/core';
import { HostsService } from './hosts.service';
import { JoinPipe } from './../../common/pipes/join.pipe';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {
  public hosts = [];

  public state = {
    0: 'Выкл',
    1: 'Вкл'
  };

  constructor(private hService: HostsService) { }

  ngOnInit() {
    this.getHosts();
  }

  getHosts() {
    this.hService.getHosts()
      .subscribe((data: any) => {
        this.hosts = data;
      });
  }

}
