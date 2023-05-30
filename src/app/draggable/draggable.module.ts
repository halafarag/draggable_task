import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ResizableDraggableComponent } from './components/resizable-draggable/resizable-draggable.component';

@NgModule({
  declarations: [HomeComponent, ResizableDraggableComponent],
  imports: [CommonModule],
  exports: [HomeComponent, ResizableDraggableComponent],
})
export class DraggableModule {}
