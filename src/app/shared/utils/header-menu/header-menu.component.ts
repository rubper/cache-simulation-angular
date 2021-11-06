import { Component, EventEmitter, Input, Output, AfterViewInit, ChangeDetectorRef, ɵ_sanitizeHtml, SecurityContext } from '@angular/core';
import { PolicyGroup } from '@shared/models/policy-group.model';
import { HeaderService } from '@shared/utils/header/header.service';
import { BehaviorSubject } from 'rxjs';
import { IconType } from '@shared/types/icon.type';
import { DomSanitizer } from '@angular/platform-browser';
import { StringFn } from './../../lib/string.functions';

@Component({
  selector: 'acs-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css'],
})
export class HeaderMenuComponent implements AfterViewInit {
  visible: boolean = false;
  subject?: BehaviorSubject<boolean>;
  @Input()
  policyGroup?: PolicyGroup;
  @Output()
  hasBeenClicked: EventEmitter<boolean> = new EventEmitter<boolean>();
  outterClickObserver = {
    next: (value: boolean) => {
      if(this.policyGroup) {
        this.subject = this.headerService.getHandler(this.policyGroup.name)
      }
      if (value) {
        this.visible = false;
      }
    }
  }

  constructor(
    private readonly headerService: HeaderService,
    private readonly cdr: ChangeDetectorRef,
    private readonly domSanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.cdr.detectChanges();
  }

  ngAfterViewInit(): void {
    this.headerService.OutterStateSubject.subscribe(this.outterClickObserver);
  }

  toggleMenu($event: MouseEvent) {
    $event.preventDefault(); $event.stopPropagation();
    this.headerService.outterItemHasBeenClicked();
    this.visible = true;
    this.hasBeenClicked.emit(this.visible);
  }
  
  isString(object: any) {
    return StringFn.isString(object);
  }

  getIcon(object: string | IconType): string {
    if (typeof object === 'string') {
      return object; //returns google icon
    } else {
      if (object.type === 'image') {
        return `<img href="${object.uri}">`;
      } else {
        return this.domSanitizer.sanitize(SecurityContext.HTML, object.uri) || '';
      }
    }
  }
}
