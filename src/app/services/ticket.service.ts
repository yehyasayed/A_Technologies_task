import { Injectable } from '@angular/core';
import { Ticket } from './../interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  xAxisData = ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];
  yAxisData = [100, 150, 80, 120, 140, 110, 180, 250, 200, 160, 130, 190];
  tickets = [
    { id: 1, ticketNumber: 'C-101', user: 'أحمد محمود', ticketPrice: 40, cinema: 'سينما مصر، مول العرب، برج الاطنان', purchaseCount: 'مرة واحدة', peopleCount: 1, ticketFile: { name: 'تذكرة رقم 45', size: 9, format: 'PDF', url: '/assets/tickets/ticket-1.pdf' } },
    { id: 2, ticketNumber: 'C-102', user: 'محمد الشريف', ticketPrice: 30, cinema: 'سينما مصر، مول العرب، برج الاطنان', purchaseCount: 'مرة واحدة', peopleCount: 1, ticketFile: { name: 'تذكرة رقم 45', size: 9, format: 'PDF', url: '/assets/tickets/ticket-2.pdf' } },
    { id: 3, ticketNumber: 'C-103', user: 'محمد الشريف', ticketPrice: 45, cinema: 'سينما مصر، مول العرب، برج الاطنان', purchaseCount: 'مرة واحدة', peopleCount: 1, ticketFile: { name: 'تذكرة رقم 45', size: 9, format: 'PDF', url: '/assets/tickets/ticket-3.pdf' } },
    { id: 4, ticketNumber: 'C-104', user: 'محمد الشريف', ticketPrice: 54, cinema: 'سينما مصر، مول العرب، برج الاطنان', purchaseCount: 'مرة واحدة', peopleCount: 1, ticketFile: { name: 'تذكرة رقم 45', size: 9, format: 'PDF', url: '/assets/tickets/ticket-4.pdf' } },
    { id: 5, ticketNumber: 'C-105', user: 'أحمد محمود', ticketPrice: 70, cinema: 'سينما مصر، مول العرب، برج الاطنان', purchaseCount: 'مرة واحدة', peopleCount: 1, ticketFile: { name: 'تذكرة رقم 45', size: 9, format: 'PDF', url: '/assets/tickets/ticket-5.pdf' } },
    { id: 6, ticketNumber: 'C-106', user: 'محمد الشريف', ticketPrice: 35, cinema: 'سينما مصر، مول العرب، برج الاطنان', purchaseCount: 'مرة واحدة', peopleCount: 1, ticketFile: { name: 'تذكرة رقم 45', size: 9, format: 'PDF', url: '/assets/tickets/ticket-6.pdf' } },
    { id: 7, ticketNumber: 'C-107', user: 'محمد الشريف', ticketPrice: 90, cinema: 'سينما مصر، مول العرب، برج الاطنان', purchaseCount: 'مرة واحدة', peopleCount: 1, ticketFile: { name: 'تذكرة رقم 45', size: 9, format: 'PDF', url: '/assets/tickets/ticket-7.pdf' } },
    { id: 8, ticketNumber: 'C-108', user: 'محمد الشريف', ticketPrice: 85, cinema: 'سينما مصر، مول العرب، برج الاطنان', purchaseCount: 'مرة واحدة', peopleCount: 1, ticketFile: { name: 'تذكرة رقم 45', size: 9, format: 'PDF', url: '/assets/tickets/ticket-8.pdf' } },
  ];

  constructor() { }

  getTableData(){
    return this.tickets;
  }

  SearchBarInTable(word: string): Array<Ticket> {
    return this.tickets.filter((elment:Ticket)=>{
      return  elment.ticketNumber.includes(word) ||
              elment.user.includes(word) ||
              elment.id.toString().includes(word) ||
              elment.ticketPrice.toString().includes(word) ||
              elment.peopleCount.toString().includes(word) ||
              elment.cinema.includes(word) ||
              elment.purchaseCount.includes(word) ||
              elment.ticketFile.name.includes(word) ||
              elment.ticketFile.size.toString().includes(word) ||
              elment.ticketFile.url.includes(word)
    });
  }
  getGraphData(){
    return {xAxisData: this.xAxisData, yAxisData: this.yAxisData}
  }
}
