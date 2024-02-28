"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReclamationService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var ReclamationService = /** @class */ (function () {
    function ReclamationService(_http) {
        this._http = _http;
        this.url = "http://localhost:3000/reclamation";
    }
    ReclamationService.prototype.getAllReclamation = function () {
        return this._http.get(this.url);
    };
    ReclamationService.prototype.getReclamationById = function (_id) {
        return this._http.get("" + this.url + _id);
    };
    ReclamationService.prototype.addReclamation = function (reclamation) {
        return this._http.post(this.url + "", reclamation);
    };
    ReclamationService.prototype.updateReclamation = function (id, reclamation) {
        return this._http.patch(this.url + "/" + id, reclamation);
    };
    ReclamationService.prototype.deleteReclamation = function (id) {
        return this._http["delete"](this.url + "/" + id).pipe(rxjs_1.catchError(function (error) {
            console.error('Error deleting reclamation:', error);
            return rxjs_1.throwError('Something went wrong while deleting reclamation.');
        }));
    };
    ReclamationService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], ReclamationService);
    return ReclamationService;
}());
exports.ReclamationService = ReclamationService;
