import {Component} from '@angular/core';

@Component({
    selector:'app-warning',
    template: `
    <p>Inline warning component template nested inside success component</p>
    `,
    // templateUrl:'./warning.component.html',
    styles:[`
    p {
        padding : 20px;
        background-color: mistyrose;
        border: 1 px solid red;
    }
    `]
})
export class WarningComponent{

}