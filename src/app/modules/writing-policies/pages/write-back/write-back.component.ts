import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acs-write-back',
  templateUrl: './write-back.component.html',
  styleUrls: ['./write-back.component.css']
})
export class WriteBackComponent implements OnInit {

  play = false;
  icon = 'play_arrow';
  celdasMP: string[] = [];
  celdasMC: string[] = [];
  logs: string[] = [];

  direccionesMP: string [] = [];
  dataMP: string[] = [];

  direccionesEnMC: string[] = [];
  dataMC: string[] = [];
  dirtyBit: number[] = [];

  celdaInput = true;
  bloqueSolicitado = 0;
  nuevoValorBloqueSolicitado = '';

  constructor() { }

  ngOnInit(): void {
    // this.getRandomItem();
    this.generarDireccionesMp();
  }

  generarDireccionesMp(): void {
    const salida: number[] = [];
    let contador = 0;
    for ( let i = 0; i <= 1; i ++ ) {
      salida[0] = i;
      for ( let j = 0; j <= 1; j ++ ) {
        salida[1] = j;
        for ( let k = 0; k <= 1; k ++ ) {
          salida[2] = k;
          for ( let l = 0; l <= 1; l ++ ) {
            salida[3] = l;
            for ( let m = 0; m <= 1; m ++ ) {
              salida[4] = m;
              for ( let n = 0; n <= 1; n ++ ) {
                salida[5] = n;
                for ( let p = 0; p <= 1; p ++ ) {
                  salida[6] = p;
                  for ( let q = 0; q <= 1; q ++ ) {
                    salida[7] = q;
                    this.celdasMP.push('Bloque ' + contador);
                    this.dataMP.push(this.generateData(5));
                    contador += 1;
                    this.addToDirectionsMp(salida);
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  generateData(length: number): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i ++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  addToDirectionsMp( array: number[] ): void {
    let numero = '';
    for ( const item of array ) {
      numero += item;
    }
    this.direccionesMP.push(numero);
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
    this.pushLog(this.celdasMP[this.bloqueSolicitado] + ' solicitado...');
    if (this.celdasMC.indexOf(this.celdasMP[this.bloqueSolicitado], 0) > -1) {
      this.pushLog('El ' + this.celdasMP[this.bloqueSolicitado] + ' ya está en caché...');
      this.getRandomItem();
    } else {
      this.addToCache(this.bloqueSolicitado);
      this.generateNewValue();
      setTimeout(() => {
        this.updateDataMainValue();
      }, 6000);
    }
  }

  addToCache(index: number): void {
    if (this.celdasMC.length <= 3) {
      this.celdasMC.push(this.celdasMP[index]);
      this.direccionesEnMC.push(this.direccionesMP[index]);
      this.dataMC.push(this.dataMP[index]);
      this.dirtyBit.push(0);
    } else {
      this.deleteFromCacheRandom();
      this.celdasMC.push(this.celdasMP[index]);
      this.direccionesEnMC.push(this.direccionesMP[index]);
      this.dataMC.push(this.dataMP[index]);
      this.dirtyBit.push(0);
    }
  }

  deleteFromCacheRandom(): void {
    const bloqueDelete = Math.floor(Math.random() * this.celdasMC.length);
    this.pushLog( this.celdasMC[bloqueDelete] + ' eliminado de caché...');
    this.celdasMC.splice(bloqueDelete, 1);
    this.direccionesEnMC.splice(bloqueDelete, 1);
    this.dataMC.splice(bloqueDelete, 1);
    this.dirtyBit.splice(bloqueDelete, 1);
  }

  pushLog(comentario: string): void {
    this.logs.push(comentario);
  }

  generateNewValue(): void {
    const probabilidad = Math.random();
    if ( probabilidad < 0.50 ) {
      // Generación de un nuevo valor de forma aleatoria
      this.nuevoValorBloqueSolicitado = this.generateData(5);
      this.pushLog( 'Nuevo valor del ' + this.celdasMP[this.bloqueSolicitado] + ': ' + this.nuevoValorBloqueSolicitado );
      // Actualización del valor luego de dos segundos
      setTimeout(() => {
        this.pushLog('Actualizando valor del ' + this.celdasMP[this.bloqueSolicitado] + ' en MC...');
        this.updateDataCacheValue( this.nuevoValorBloqueSolicitado, this.bloqueSolicitado );
      }, 5000);
    }
  }

  updateDataMainValue(): void {
    this.getRandomItem();
    const celdaMP = this.celdasMP[this.bloqueSolicitado];
    const indexMC = this.celdasMC.indexOf(celdaMP, 0);
    if ( this.dirtyBit[indexMC] === 1 ) {
      this.pushLog('El dato del ' + this.celdasMP[this.bloqueSolicitado] + ' ha sido modificado...');
      setTimeout(() => {
        this.pushLog('Actualizando valor del ' + this.celdasMP[this.bloqueSolicitado] + ' en MP...');
        this.dataMP[this.bloqueSolicitado] = this.nuevoValorBloqueSolicitado;
      }, 2000);
    } else {
      this.pushLog('El dato del ' + this.celdasMP[this.bloqueSolicitado] + ' no ha sido modificado...');
    }
  }

  updateDataCacheValue( value: string, index: number ): void {
    const indexMC = this.dataMC.indexOf(this.dataMP[index], 0);
    this.dataMC[indexMC] = value;
    this.dirtyBit[indexMC] = 1;
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
