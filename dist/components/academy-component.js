import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
var HTML_TEMPLATE = "\n <ion-header>\n   <ion-navbar color=\"primary\">\n     <ion-title>\n      Ionic Academy\n     </ion-title>\n   </ion-navbar>\n </ion-header>\n  <ion-content padding>\n   <div class=\"special-text\">\n      Welcome to the special Ionic Academy Module!\n     </div>\n     <button ion-button full icon-left (click)=\"leavePage()\">\n       <ion-icon name=\"close\"></ion-icon>\n       Close the Page\n     </button>\n  </ion-content>";
var CSS_STYLE = "\n    .special-text{\n        font-weight:800px;\n        font-size:15pt;\n        text-align:center;\n        color:#0000FF;\n    }\n  ";
var AcademyComponent = (function () {
    function AcademyComponent(navctrl) {
        this.navctrl = navctrl;
    }
    AcademyComponent.prototype.leavePage = function () {
        this.navctrl.pop();
    };
    AcademyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'academy-component',
                    template: HTML_TEMPLATE,
                    styles: [CSS_STYLE]
                },] },
    ];
    /** @nocollapse */
    AcademyComponent.ctorParameters = function () { return [
        { type: NavController, },
    ]; };
    return AcademyComponent;
}());
export { AcademyComponent };
//# sourceMappingURL=academy-component.js.map