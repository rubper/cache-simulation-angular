import { AfterViewInit, Injectable } from '@angular/core';
import { ACSTheme, themes } from 'src/app/themes/themes';

@Injectable()
export class BaseComponent implements AfterViewInit {
    page_loading: boolean;
    theme: ACSTheme = themes.light;
    constructor() {
        this.page_loading = true;
    }

    ngAfterViewInit() {
        this.page_loading = false;
    }
}