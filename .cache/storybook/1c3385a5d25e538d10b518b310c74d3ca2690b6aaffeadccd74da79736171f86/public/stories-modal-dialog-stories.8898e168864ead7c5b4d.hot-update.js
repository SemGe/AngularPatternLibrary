"use strict";
self["webpackHotUpdatemy_angular_project"]("stories-modal-dialog-stories",{

/***/ "./src/app/modal-dialog/modal-dialog.component.html?ngResource":
/*!*********************************************************************!*\
  !*** ./src/app/modal-dialog/modal-dialog.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "<button (click)=\"openModal()\">Modal öffnen</button>\n\n<div class=\"modal-background\" *ngIf=\"isModalOpen\">\n  <div #modal class=\"modal-dialog\" (mousedown)=\"startDragging($event)\" (mousemove)=\"moveDialog($event)\" (mouseup)=\"stopDragging()\">\n    <button class=\"close-button\" (click)=\"closeModal()\">✖</button>\n    <p>Hier ist der Inhalt des Modals</p>\n  </div>\n</div>\n";

/***/ })

});