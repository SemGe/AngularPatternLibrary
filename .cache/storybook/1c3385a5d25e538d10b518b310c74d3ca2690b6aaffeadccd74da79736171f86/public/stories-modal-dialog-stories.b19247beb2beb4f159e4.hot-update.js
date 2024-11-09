"use strict";
self["webpackHotUpdatemy_angular_project"]("stories-modal-dialog-stories",{

/***/ "./src/app/modal-dialog/modal-dialog.component.html?ngResource":
/*!*********************************************************************!*\
  !*** ./src/app/modal-dialog/modal-dialog.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<button class=\"open-modal-button\" (click)=\"openModal()\">Modal öffnen</button>\n\n<div class=\"modal-background\" *ngIf=\"isModalOpen\" (click)=\"closeModal()\">\n  <div #modal class=\"modal-dialog\" \n       (mousedown)=\"startDragging($event)\" \n       (mousemove)=\"moveDialog($event)\" \n       (mouseup)=\"stopDragging($event)\" \n       (click)=\"$event.stopPropagation()\">\n    <button class=\"close-button\" (click)=\"closeModal()\">✖</button>\n    <p>Hier ist der Inhalt des Modals</p>\n  </div>\n</div>\n";

/***/ })

});