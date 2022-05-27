import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealMfeComponent } from './real-mfe/real-mfe.component';
import { MFE_ROUTES } from './mfe-test.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RealMfeComponent],
  imports: [CommonModule, RouterModule.forChild(MFE_ROUTES)],
})
export class MfeTestModule {}
