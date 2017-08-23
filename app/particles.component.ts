
import { Component, OnInit } from '@angular/core';
import { Particle } from './particle';
import { ParticleService } from './particle.service';
import { Router } from '@angular/router-deprecated';

@Component({
  selector:'my-particles',
  templateUrl: 'app/particles.component.html',
  styleUrls: ['app/particles.component.css'],

})
export class ParticlesComponent implements OnInit {
  constructor(
    private _router: Router,
    private _particleService: ParticleService
  ) { }

  titulo = 'Modelo Estandar';
  particles;
  selectedParticle: Particle;

  onSelect(particle: Particle) {
    this.selectedParticle = particle;
  }

  ngOnInit() {
    this.getParticles();
  }
  getParticles() {
    this._particleService.getParticles().then(
      particles => this.particles = particles
    )
  }

  gotoDetail() {
    this._router.navigate(['ParticleDetail', { id: this.selectedParticle.id }]);
  }



}



