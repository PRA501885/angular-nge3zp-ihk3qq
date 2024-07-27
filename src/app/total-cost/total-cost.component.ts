import { Component } from '@angular/core';
import { Destination } from '../destination';
import { Accommodation } from '../accommodation';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
})
export class TotalCostComponent {
  selectedDestination: Destination | undefined;
  selectedAccommodation: Accommodation | undefined;
  totalCost: number | undefined;

  onDestinationSelected(destination: Destination): void {
    this.selectedDestination = destination;
    this.calculateTotal();
  }

  onAccommodationSelected(accommodation: Accommodation): void {
    this.selectedAccommodation = accommodation;
    this.calculateTotal();
  }

  calculateTotal(): void {
    if (this.selectedDestination && this.selectedAccommodation) {
      this.totalCost =
        this.selectedDestination.basePrice + this.selectedAccommodation.price;
    }
  }
}
