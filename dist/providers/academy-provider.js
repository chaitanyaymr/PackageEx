import { Injectable } from '@angular/core';
var AcademyProvider = (function () {
    function AcademyProvider() {
    }
    AcademyProvider.prototype.reasonToJoin = function () {
        return 'Ionic is a great platform to learn and build Hybrid Apps';
    };
    AcademyProvider.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    AcademyProvider.ctorParameters = function () { return []; };
    return AcademyProvider;
}());
export { AcademyProvider };
//# sourceMappingURL=academy-provider.js.map