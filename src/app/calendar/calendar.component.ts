// src/app/calendar/calendar.component.ts
import { Component } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  selectedDate: Date | null = new Date();

  // Cette fonction peut être utilisée pour ajouter des classes CSS aux dates spécifiques, comme les dates ayant des événements
  dateClass = (date: Date): MatCalendarCellCssClasses => {
    const highlightDate = new Date(2024, 1, 28); // Exemple pour illustrer comment marquer une date spécifique
    return date.getTime() === highlightDate.getTime() ? 'special-date' : '';
  }

  onDateChange(newDate: Date | null): void {
    this.selectedDate = newDate || new Date(); // Assignez une nouvelle date par défaut si newDate est null
  }


}
