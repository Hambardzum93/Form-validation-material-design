import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ToolbarComponent} from './toolbar/toolbar.component';
import {TableComponent} from './table/table.component';
import {FormComponent} from './form/form.component';

const routes: Routes = [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: TableComponent},
      {path: 'create', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
