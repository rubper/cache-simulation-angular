import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acs-lru',
  templateUrl: './lru.component.html',
  styleUrls: ['./lru.component.css']
})
export class LruComponent implements OnInit {

  play = false;
  icon = 'play_arrow';
  celdasMP = [
    'Bloque 1',
    'Bloque 2',
    'Bloque 3',
    'Bloque 4',
    'Bloque 5',
    'Bloque 6',
    'Bloque 7',
    'Bloque 8',
  ];
  celdasMC: string[] = [];
  leastRecentlyUsed: string[] = [];
  logs: string[] = [];

  celdaInput = true;
  bloqueSolicitado = 0;

  constructor() { }

  ngOnInit(): void {
    // this.getRandomItem();
  }

  getRandomItem(): void {
    if ( this.play ) {
      setTimeout(() => {
        this.randomItem();
      }, 5000);
    }
  }

  randomItem(): void {
    this.bloqueSolicitado = Math.floor(Math.random() * this.celdasMP.length);
    const bloque = this.celdasMP[this.bloqueSolicitado];
    this.pushLog(bloque + ' solicitado...');
    if (this.celdasMC.indexOf(bloque, 0) > -1) {
      this.pushLog('El ' + bloque + ' ya está en caché...');
      const indexUsed = this.leastRecentlyUsed.indexOf(bloque, 0);
      this.leastRecentlyUsed.splice(indexUsed, 1);
      this.leastRecentlyUsed.push(bloque);
      this.getRandomItem();
    } else {
      this.addToCache(this.bloqueSolicitado);
      this.leastRecentlyUsed.push(bloque);
      this.getRandomItem();
    }
  }

  addToCache(index: number): void {
    if (this.celdasMC.length <= 3) {
      this.celdasMC.push(this.celdasMP[index]);
    } else {
      this.deleteFromCacheRandom();
      this.celdasMC.push(this.celdasMP[index]);
    }
  }

  deleteFromCacheRandom(): void {
    const bloqueMenosUsado = this.leastRecentlyUsed[0];
    const bloqueDelete = this.celdasMC.indexOf(bloqueMenosUsado, 0);
    this.pushLog( this.celdasMC[bloqueDelete] + ' eliminado de caché...');
    this.celdasMC.splice(bloqueDelete, 1);
    this.leastRecentlyUsed.splice(0, 1);
  }

  pushLog(comentario: string): void {
    if ( this.logs.length <= 7 ) {
      this.logs.push(comentario);
    } else {
      this.logs.splice(1, 1);
      this.logs.push(comentario);
    }
  }

  playProcess(): void {
    if ( this.play ) {
      this.icon = 'play_arrow';
      this.play = !this.play;
    } else {
      this.icon = 'pause';
      this.play = !this.play;
      this.getRandomItem();
    }
  }

  skipNext(): void {
    this.play = true;
    this.getRandomItem();
    this.play = false;
  }

}
