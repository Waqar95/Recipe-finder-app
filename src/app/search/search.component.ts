import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() searchQuery = new EventEmitter<string>();
  query: string = '';

  onSearch() {
    if (this.query.trim()) {
      this.searchQuery.emit(this.query);
    }
  }
}
