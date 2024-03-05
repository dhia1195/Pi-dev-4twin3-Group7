"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.OffreService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var OffreService = /** @class */ (function () {
    function OffreService(_http) {
        this._http = _http;
        this.url = "http://localhost:3000/offre";
    }
    OffreService.prototype.getAllOffre = function () {
        return this._http.get(this.url);
    };
    OffreService.prototype.getOffreById = function (_id) {
        return this._http.get("" + this.url + _id);
    };
    OffreService.prototype.addOffre = function (offre) {
        return this._http.post(this.url + "", offre);
    };
    OffreService.prototype.updateOffre = function (id, offre) {
        return this._http.patch(this.url + "/" + id, offre);
    };
    OffreService.prototype.deleteOffre = function (id) {
        return this._http["delete"](this.url + "/" + id).pipe(operators_1.catchError(function (error) {
            console.error('Error deleting offre:', error);
            return rxjs_1.throwError('Something went wrong while deleting offre.');
        }));
    };
    OffreService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], OffreService);
    return OffreService;
}());
exports.OffreService = OffreService;
