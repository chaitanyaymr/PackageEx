import { AcademyProvider } from './providers/academy-provider';
import { AcademyComponent } from './components/academy-component';
import {NgModule,ModuleWithProviders} from '@angular/core';
import {IonicModule} from 'ionic-angular';

@NgModule({
    imports:[
        IonicModule
    ],
    declarations:[
        AcademyComponent
    ],
    exports:[
        AcademyComponent
    ]
})

export class IonicAcademyModule{
    static forRoot():ModuleWithProviders{
        return{
            ngModule:IonicAcademyModule,
            providers:[AcademyProvider]
        }
    }
}