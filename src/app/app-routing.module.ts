import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HostsComponent } from './panels/hosts/hosts.component';
import { ProcessComponent } from './panels/process/process.component';
import { ServicesComponent } from './panels/services/services.component';

import { ProcessPreviewComponent } from './panels/process/process-preview/process-preview.component';

const routes: Routes = [
    { path: 'hosts', component: HostsComponent },
    {
        path: 'process', component: ProcessComponent,
        children: [
            { path: ':name', component: ProcessPreviewComponent  },

        ]
    },
    { path: 'services', component: ServicesComponent },
    { path: '', pathMatch: 'full', redirectTo: '/hosts' },
    { path: '**', redirectTo: '/hosts' }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
