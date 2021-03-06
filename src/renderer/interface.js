// @flow

import type { IAdventure } from "../adventure/interface";
import type { IDebugger } from "../debugger/interface";
import type { IRenderable } from "../renderable/interface";
import type { IActor } from "../actor/interface";

export interface IRenderer {
  adventure: IAdventure;
  debugger: IDebugger;

  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  fps: number;
  mainLoopId: IntervalID;
  onKeyDownListener: (event: KeyboardEvent) => void;

  clear(): void;
  start(): IntervalID;
  render(renderable: IRenderable): void;
  renderActor(actor: IActor): void;
  onKeyDown(event: KeyboardEvent): void;
}
