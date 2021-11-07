import { Injectable } from '@angular/core';
import { AnimeTimelineInstance } from 'animejs'
declare var anime: any;

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  private _timeline: AnimeTimelineInstance;

  constructor() {
    this._timeline = anime.timeline();
  }
  /**
   * alters width of the target element
   * @param {string} target - HTML selector for the target element of the animation
   * @param {number} value - How much the width will change. Default units: px.
   * @returns {void}
   */
  stretchX(target: string, value: number) {
    this._timeline.add({
      targets: target,
      scaleX: value,
    } as anime.AnimeParams);
  }

  /**
   * alters heigth of the target element
   * @param {string} target - HTML selector for the target element of the animation
   * @param {number} value - How much the heigth will change. Default units: px.
   * @returns {void}
   */
  stretchY(target: string, value: number) {
    this._timeline.add({
      targets: target,
      scaleY: value,
    } as anime.AnimeParams);
  }
  /**
   * alters size of the target element
   * @param {string} target - HTML selector for the target element of the animation
   * @param {number} x - How much the width will change. Default units: px.
   * @param {number} y - How much the heigth will change. Default units: px.
   * @returns {void}
   */
  stretch(target: string, x: number, y: number) {
    this._timeline.add({
      targets: target,
      scaleX: x,
      scaleY: y,
    } as anime.AnimeParams);
  }

  /**
   * moves the target element to the specified x position
   * @remarks - The movement value can be specified in negative values
   * @param {string} target - HTML selector for the target element of the animation
   * @param {number} value - How much the element will move from it's initial position, in the x axis. Default units: px.
   * @returns {void}
   */
  moveX(target: string, value: number) {
    this._timeline.add({
      targets: target,
      translateX: value,
    } as anime.AnimeParams);
  }

  /**
   * moves the target element to the specified y position
   * @remarks - The movement value can be specified in negative values
   * @param {string} target - HTML selector for the target element of the animation
   * @param {number} value - How much the element will move from it's initial position, in the y axis. Default units: px.
   * @returns {void}
   */
  moveY(target: string, value: number) {
    this._timeline.add({
      targets: target,
      translateY: value,
    } as anime.AnimeParams);
  }

  /**
   * moves the target element to the specified *x,y) coordenates
   * @remarks - The movement value can be specified in negative values
   * @param {string} target - HTML selector for the target element of the animation
   * @param {number} x - How much the element will move from it's initial position, in the x axis. Default units: px.
   * @param {number} y - How much the element will move from it's initial position, in the y axis. Default units: px.
   * @returns {void}
   */
  move(target: string, x: number, y: number) {
    this._timeline.add({
      targets: target,
      translateX: x,
      translateY: y,
    } as anime.AnimeParams);
  }

  
  /**
   * moves the target element to its original position
   * @param {string} target - HTML selector for the target element of the animation
   * @returns {void}
   */
   return(target: string) {
    this._timeline.add({
      targets: target,
      translateX: 0,
      translateY: 0,
    } as anime.AnimeParams);
  }

  
  /**
   * moves the target element to its original position
   * @param {string} target - HTML selector for the target element of the animation
   * @returns {void}
   */
   wait(target: string) {
    this._timeline;
  }
}
