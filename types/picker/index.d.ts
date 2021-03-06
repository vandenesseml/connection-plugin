import { NodeEditor, Input, Output, Connection } from 'rete';
import { PickerView } from './view';
export declare class Picker {
    private editor;
    private _io;
    view: PickerView;
    constructor(editor: NodeEditor);
    io: Output | Input | null;
    reset(): void;
    pickOutput(output: Output): void;
    pickInput(input: Input): boolean;
    pickConnection(connection: Connection): void;
}
