import { AcademyProvider } from './providers/academy-provider';
import { AcademyComponent } from './components/academy-component';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
var IonicAcademyModule = (function () {
    function IonicAcademyModule() {
    }
    IonicAcademyModule.forRoot = function () {
        return {
            ngModule: IonicAcademyModule,
            providers: [AcademyProvider]
        };
    };
    IonicAcademyModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        IonicModule
                    ],
                    declarations: [
                        AcademyComponent
                    ],
                    exports: [
                        AcademyComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    IonicAcademyModule.ctorParameters = function () { return []; };
    return IonicAcademyModule;
}());
export { IonicAcademyModule };
//# sourceMappingURL=ionic-academy-module.js.map