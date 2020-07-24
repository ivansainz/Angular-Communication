import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';

@Component({
    selector: 'pm-criteria',
    templateUrl: './criteria.component.html',
    styleUrls: ['./criteria.component.css']
})
export class CriteriaComponent implements OnInit, OnChanges, AfterViewInit {
    listFilter: string;
    @Input() displayDetail: boolean;
    @Input() hitCount: number;
    hitMessage: string;

    @ViewChild('filterElement') filterElementRef: ElementRef;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes);
        if(changes['hitCount'] && !changes['hitCount'].currentValue) {
            this.hitMessage = 'No matches found';
        }
        else {
            this.hitMessage = 'Hits:' + this.hitCount;
        }
    }

    ngAfterViewInit(): void {
        if (this.filterElementRef) {
            this.filterElementRef.nativeElement.focus();
        }
    }

}
