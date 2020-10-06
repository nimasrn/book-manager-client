import { animate, style, transition, trigger } from '@angular/animations';

export function fadeIn() {
    return trigger('fadeIn', [
        transition(':enter', [
            style({
                opacity: 0,
            }),
            animate('0.3s ease-out',
                style({
                    opacity: 1,
                })),
        ]),
        transition(':leave', [
            style({
                opacity: 1,
            }),
            animate('0.3s ease',
                style({
                    opacity: 0,
                })),
        ]),
    ]);
}


export function slideUp() {
    return trigger('slideUp', [
        transition(':enter', [
            style({
                opacity: 0,
            }),
            animate('0.3s ease-out',
                style({
                    opacity: 1,
                    transform: 'translateX(0px)'
                })),
        ]),
        transition(':leave', [
            style({
                opacity: 1,
            }),
            animate('0.3s ease',
                style({
                    opacity: 0,
                    transform: 'translateX(-180px)'
                })),
        ]),
    ]);
}
