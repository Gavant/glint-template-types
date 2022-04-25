import Component from '@ember/component';

interface CopyButtonSignature {
    Element: HTMLButtonElement;
    Args: {
        clipboardText: string;
        success: () => void;
    };
    Blocks: {
        default: [];
    };
}

export default class CopyButton extends Component<CopyButtonSignature> {}
