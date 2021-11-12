import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AgTableComponent } from './ag-table-component/ag-table.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AgTableComponent],
  exports: [AgTableComponent],
})
export class AgTableModule {}
