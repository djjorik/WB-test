import { DatePipe } from '@angular/common/src/pipes/date_pipe';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { ProcessService } from './../process.service';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-process-preview',
  templateUrl: './process-preview.component.html',
  styleUrls: ['./process-preview.component.css']
})
export class ProcessPreviewComponent implements OnInit, OnDestroy {
  public choosenProcess: any;
  public isLoading = true;
  private stateButtonOptions: any;
  private sub$: any;

  states = {
    0: 'Выкл',
    1: 'Вкл'
  };
  errors = {
    0: 'Есть',
    1: 'Нет'
  };

  constructor(private router: Router, private route: ActivatedRoute, private pService: ProcessService) {
    this.stateButtonOptions = {
      text: 'Изменить состояние',
      type: 'normal',
      onClick: (e) => {
        let state = '';
        if (this.choosenProcess.state === 0) {
          this.choosenProcess.state = 1;
          this.changeTextButton();
          state = 'Включен';
        } else {
          this.choosenProcess.state = 0;
          this.changeTextButton();
          state = 'Выключен';
        }
        notify(`Процесс был успешно ${state}`);
      }
    };
  }

  ngOnInit() {
    this.sub$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.isLoading = true;
        return this.pService.getOneProcess(params.get('name'));
      }
      )
    ).subscribe((data: any) => {
      this.choosenProcess = data;
      this.changeTextButton();
      this.isLoading = false;
    });
  }
  changeTextButton() {
    this.stateButtonOptions.text = this.choosenProcess.state === 0 ? 'Включить' : 'Выключить';
  }



  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
