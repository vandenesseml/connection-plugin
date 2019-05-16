import { IO, Input, Output } from 'rete';
import { Picker } from './picker';
export declare type FlowParams = {
    input?: Input;
    output?: Output;
};
export declare class Flow {
    picker: Picker;
    target?: IO | null;
    constructor(picker: Picker);
    act({ input, output }?: FlowParams): void;
    once(params: FlowParams, io?: IO): void;
    unlock(io?: IO): boolean;
}
