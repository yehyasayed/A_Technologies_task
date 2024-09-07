import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  inputValue: string = '';
  qrData: string = 'https://google.com';

  constructor(private clipboard: Clipboard) { }

  copyToClipboard(value: string) {
    if (value) {
      this.clipboard.copy(value);
      console.log('Copied to clipboard:', value);
    } else {
      console.log('Input field is empty.');
    }
  }

  delete(){
    console.log("delete");
  }

  share(){
    console.log("share");
  }

  

}
