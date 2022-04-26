import Component from '@glint/environment-ember-loose/ember-component';

interface CopyButtonSignature {
    Element: HTMLButtonElement;
    Args: {
        clipboardText: string;
        success: () => void;
    };
    Yields: {
        default: [];
    };
}

export default class CopyButton extends Component<CopyButtonSignature> {}
