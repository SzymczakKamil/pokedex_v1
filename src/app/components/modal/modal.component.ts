import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input()
  key = ''

  @Output()
  login = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  changeApiKey(target: any) {
    this.key = target.value;
  }

  onClickLogin() {
    this.login.emit(this.key)

  }

}
