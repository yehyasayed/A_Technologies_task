import { Component } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from './../../interfaces/ticket';
import { FileSaverService } from 'ngx-filesaver';
import { HttpClient } from '@angular/common/http';

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

  onSave() {
    this._http.get('path/to/your/file.pdf', { responseType: 'blob' }).subscribe(blob => {
      const fileName = 'downloaded-file.pdf'; // Define your file name here
      this._FileSaverService.save(blob, fileName);
    });
  }

}
