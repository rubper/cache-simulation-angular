import { Component, EventEmitter, Input, Output, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { PolicyGroup } from '@shared/models/policy-group.model';
import { HeaderService } from './../header/header.service';
import { BehaviorSubject } from 'rxjs';

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
    private readonly cdr: ChangeDetectorRef
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
}
