import { Input, NgModule, OnChanges } from "@angular/core";




@NgModule({
    declarations: [
        StarComponent
    ],
    exports: [
        StarComponent
    ]
})

export class StarComponent implements OnChanges {

    @Input()
    rating: number = 0;
    starWidth!: number;
 

    ngOnChanges(): void {
        this.starWidth = this.rating * 74 / 5;
    }

}