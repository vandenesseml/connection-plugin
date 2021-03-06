import { Emitter, Connection } from 'rete';
import { EventsTypes } from 'rete/types/events';
export declare function defaultPath(points: number[], _curvature: number): string;
export declare function renderPathData(emitter: Emitter<EventsTypes>, points: number[], connection?: Connection): string;
export declare function updateConnection({ el, d }: {
    el: HTMLElement;
    d: string;
}): void;
export declare function renderConnection({ el, d, connection }: {
    el: HTMLElement;
    d: string;
    connection?: Connection;
}): void;
