import { Output, Input, Emitter } from 'rete';
import { EditorView } from 'rete/types/view/index';
import { EventsTypes } from 'rete/types/events';
export declare class PickerView {
    private emitter;
    private editorView;
    private el;
    constructor(emitter: Emitter<EventsTypes>, editorView: EditorView);
    updatePseudoConnection(io: Output | Input | null): void;
    private getPoints;
    updateConnection(io: Output | Input): void;
    renderConnection(io: Output | Input): void;
}
