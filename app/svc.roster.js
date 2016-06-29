"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var RosterService = (function () {
    function RosterService() {
    }
    RosterService.prototype.getRoster = function () {
        return [
            {
                "firstName": "Buckley",
                "lastName": "Stone",
                "age": 5,
                "teacher": "Mcleod"
            },
            {
                "firstName": "Emma",
                "lastName": "Armstrong",
                "age": 7,
                "teacher": "Hobbs"
            },
            {
                "firstName": "Dawson",
                "lastName": "Nunez",
                "age": 9,
                "teacher": "French"
            },
            {
                "firstName": "Padilla",
                "lastName": "Knowles",
                "age": 7,
                "teacher": "Marquez"
            },
            {
                "firstName": "Lupe",
                "lastName": "Vasquez",
                "age": 9,
                "teacher": "Osborn"
            },
            {
                "firstName": "Sofia",
                "lastName": "Delaney",
                "age": 10,
                "teacher": "Simpson"
            },
            {
                "firstName": "Hopkins",
                "lastName": "Delacruz",
                "age": 9,
                "teacher": "Puckett"
            }
        ];
    };
    RosterService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RosterService);
    return RosterService;
}());
exports.RosterService = RosterService;
//# sourceMappingURL=svc.roster.js.map