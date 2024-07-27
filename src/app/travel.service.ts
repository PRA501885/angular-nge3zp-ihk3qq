import { Injectable } from '@angular/core';
import { Destination } from './destination';
import { Accommodation } from './accommodation';

@Injectable({
  providedIn: 'root',
})
export class TravelService {
  private destinations: Destination[] = [
    { id: 1, name: 'Paris', basePrice: 1000 },
    { id: 2, name: 'New York', basePrice: 1200 },
    { id: 3, name: 'Tokyo', basePrice: 1500 },
  ];

  private accommodations: Accommodation[] = [
    { id: 1, name: 'Hotel', price: 300 },
    { id: 2, name: 'Hostel', price: 100 },
    { id: 3, name: 'Apartment', price: 500 },
  ];

  getDestinations(): Destination[] {
    return this.destinations;
  }

  getAccommodations(): Accommodation[] {
    return this.accommodations;
  }
}
