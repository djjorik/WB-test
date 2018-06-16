import { Component, OnInit, HostListener } from '@angular/core';
import { ProcessService } from './process.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.css']
})
export class ProcessComponent implements OnInit {

  public processes = [];
  public currentItem = [];
  public scrollListHeight;
  public scrollListWidth;
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
   if (window.innerWidth < 621) {
     this.scrollListHeight = 180;
     this.scrollListWidth = '100%';
   } else {
    this.scrollListHeight = '100%';
    this.scrollListWidth = 300;
   }
  }

  constructor(
    private router: Router,
    private pService: ProcessService) { }

  ngOnInit() {
    this.onResize();
    this.getProcess();
  }

  getProcess() {
    this.pService.getProcess()
      .subscribe((data: any) => {
        this.processes = data;
        this.currentItem.push(data[0]);
        this.onSelectionChanged();
      });
  }

  onSelectionChanged() {
    this.router.navigate(['/process/' + this.currentItem[0].name]);
  }

}
