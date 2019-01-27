import { Component, ElementRef, Inject, Input, ViewEncapsulation } from '@angular/core';
import { AbstractFdNgxClass } from '../utils/abstract-fd-ngx-class';

@Component({
    selector: 'fd-label',
    templateUrl: './badge-label.component.html',
    styleUrls: ['./badge.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class LabelComponent extends AbstractFdNgxClass {
    @Input() status: string = '';
    @Input() isStatusLabel: boolean = false;
    @Input() statusIcon: string = '';
    @Input() indicator: string = '';
    @Input() icon: string = '';
    @Input() semantic: string = '';

    _setProperties() {
        if (this.isStatusLabel) {
            this._addClassToElement('fd-status-label');
            if (this.status) {
                this._addClassToElement('fd-status-label--' + this.status);
            }
            if (this.statusIcon) {
                this._addClassToElement('fd-status-label--' + this.statusIcon);
            }
            if (this.icon) {
                this._addClassToElement('sap-icon--' + this.icon);
            }
        } else {
            this._addClassToElement('fd-label');
            if (this.status) {
                this._addClassToElement('fd-label--' + this.status);
            }
        }
    }

    constructor(@Inject(ElementRef) elementRef: ElementRef) {
        super(elementRef);
    }

    getClassnames() {
        let _classes = '';
        if (this.isStatusLabel) {
            _classes = 'fd-status-label';
            if (this.status) {
                _classes += ' fd-status-label--' + this.status;
            }
            if (this.statusIcon) {
                _classes += ' fd-status-label--' + this.statusIcon;
            }
            if (this.icon) {
                _classes += ' sap-icon--' + this.icon;
            }
        } else {
            _classes = 'fd-label';
            if (this.status) {
                _classes += ' fd-label--' + this.status;
            }
        }

        return _classes;
    }
}
