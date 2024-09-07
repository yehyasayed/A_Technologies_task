import { Component } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from './../../interfaces/ticket';
import { FileSaverService } from 'ngx-filesaver';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  tickets: Ticket[] = [];
  searchWord: string = '';
  checked: boolean = false;
  constructor(private _ticket: TicketService, private _http: HttpClient, private _FileSaverService: FileSaverService) { }

  ngOnInit(): void {
    this.tickets = this._ticket.getTableData();
  }

  downloadFile(ticket: Ticket) {
    console.log(ticket);

  }

  searchBar() {
    this.tickets = this._ticket.SearchBarInTable(this.searchWord)
  }

  // onSave(x: any) {
  //   this._http.get('demo.pdf', { responseType: 'blob' as 'json' }).subscribe((blob: any) => {
  //     const fileName = 'demo.pdf'; // Make sure to define your file name here
  //     this._FileSaverService.save(blob, fileName);
  //   });
  // }

  onSave() {
    this._http.get('path/to/your/file.pdf', { responseType: 'blob' }).subscribe(blob => {
      const fileName = 'downloaded-file.pdf'; // Define your file name here
      this._FileSaverService.save(blob, fileName);
    });
  }

}
