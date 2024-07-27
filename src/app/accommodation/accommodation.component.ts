import { Component, EventEmitter, Output } from '@angular/core';
import { TravelService } from '../travel.service';
import { Accommodation } from '../accommodation';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
})
export class AccommodationComponent {
  accommodations: Accommodation[];
  selectedAccommodation: Accommodation | undefined;

  @Output() accommodationSelected = new EventEmitter<Accommodation>();

  constructor(private travelService: TravelService) {
    this.accommodations = this.travelService.getAccommodations();
  }

  onSelect(accommodation: Accommodation): void {
    this.selectedAccommodation = accommodation;
    this.accommodationSelected.emit(accommodation);
  }
}
