import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.css']
})
export class ModalDialogComponent {
  isModalOpen = false;

  // Fügen Sie diese Eigenschaften hinzu
  @ViewChild('modal', { static: false }) modal!: ElementRef;
  offsetX: number = 0;
  offsetY: number = 0;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  startDragging(event: MouseEvent) {
    this.offsetX = event.clientX - this.modal.nativeElement.getBoundingClientRect().left;
    this.offsetY = event.clientY - this.modal.nativeElement.getBoundingClientRect().top;
  }

  moveDialog(event: MouseEvent) {
    this.modal.nativeElement.style.left = `${event.clientX - this.offsetX}px`;
    this.modal.nativeElement.style.top = `${event.clientY - this.offsetY}px`;
  }
}

