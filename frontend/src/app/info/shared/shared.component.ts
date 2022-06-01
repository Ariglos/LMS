import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {

  showSpinner = false;

  constructor() { }

  ngOnInit(): void {
  }

  onToggleSpinner() {
    this.showSpinner = !this.showSpinner;
  }
}
