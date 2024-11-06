import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent {
  isModalOpen = false;
  isDragging = false;
  offsetX = 0;
  offsetY = 0;

  @ViewChild('modal', { static: false }) modal!: ElementRef;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  startDragging(event: MouseEvent) {
    this.isDragging = true;
    this.offsetX = event.clientX - this.modal.nativeElement.getBoundingClientRect().left;
    this.offsetY = event.clientY - this.modal.nativeElement.getBoundingClientRect().top;
  }

  moveDialog(event: MouseEvent) {
    if (this.isDragging) {
      this.modal.nativeElement.style.left = `${event.clientX - this.offsetX}px`;
      this.modal.nativeElement.style.top = `${event.clientY - this.offsetY}px`;
    }
  }

  stopDragging() {
    this.isDragging = false;
  }
}
