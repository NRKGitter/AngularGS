import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth = 0;
    @Output() ratingClicked: EventEmitter<string> =
        new EventEmitter<string>();

    ngOnChanges() : void {
        this.starWidth = this.rating * 75 / 5 ;
    }

    onClick(): void {
        console.log(`the rating ${this.rating} was clicked`);
        this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
    }
};