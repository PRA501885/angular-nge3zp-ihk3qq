import { Component, EventEmitter, Output } from '@angular/core';
import { TravelService } from '../travel.service';
import { Destination } from '../destination';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
})
export class DestinationComponent {
  destinations: Destination[];
  selectedDestination: Destination | undefined;

  @Output() destinationSelected = new EventEmitter<Destination>();

  constructor(private travelService: TravelService) {
    this.destinations = this.travelService.getDestinations();
  }

  onSelect(destination: Destination): void {
    this.selectedDestination = destination;
    this.destinationSelected.emit(destination);
  }
}
