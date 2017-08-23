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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var router_deprecated_1 = require('@angular/router-deprecated');
var core_1 = require('@angular/core');
var particle_service_1 = require('./particle.service');
var ParticleDetailComponent = (function () {
    function ParticleDetailComponent(_window, _particleService, _routeParams) {
        this._window = _window;
        this._particleService = _particleService;
        this._routeParams = _routeParams;
    }
    ParticleDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._routeParams.get('id');
        this._particleService.getParticle(id)
            .then(function (particle) { return _this.particle = particle; });
    };
    ParticleDetailComponent.prototype.goBack = function () {
        this._window.history.back();
    };
    ParticleDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-particle-detail',
            template: " <div *ngIf=\"particle\">\n  <h2>Detalles del {{particle.type}} {{particle.name}}.</h2>\n  <p>Masa: {{particle.mass}}</p>\n  <p>Carga: {{particle.charge}}</p>\n  <p>Spin: {{particle.spin}}</p>\n  <p>Type: {{particle.type}}</p>\n  <p>Fuerzas: {{particle.forces.join(', ')}}</p>\n  <div>\n    <label>Ajusta la masa: </label>\n    <input [(ngModel)]=\"particle.mass\" placeholder=\"masa\">\n  </div>\n  <p></p>\n  <button (click)=\"goBack()\">Atras</button>\n</div>\n\n"
        }),
        __param(0, core_1.Inject(window)), 
        __metadata('design:paramtypes', [Object, particle_service_1.ParticleService, router_deprecated_1.RouteParams])
    ], ParticleDetailComponent);
    return ParticleDetailComponent;
}());
exports.ParticleDetailComponent = ParticleDetailComponent;
//# sourceMappingURL=particle-detail.component.js.map