import { NodeEditor } from 'rete';
import './events';
import './index.sass';
declare function install(editor: NodeEditor): void;
declare const _default: {
    name: string;
    install: typeof install;
};
export default _default;
export { defaultPath } from './utils';
