import { Component } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { Ticket } from './../../interfaces/ticket';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  tickets: Ticket[] = [];
  searchWord: string = '';
  checked:boolean = false;
  constructor(private _ticket : TicketService) { }

  ngOnInit(): void {
    this.tickets = this._ticket.getTableData();
  }

  downloadFile(ticket: Ticket) {
    console.log(ticket);
    
  }

  searchBar(){
    this.tickets = this._ticket.SearchBarInTable(this.searchWord)
  }

}
