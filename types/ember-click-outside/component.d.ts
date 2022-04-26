import Component from '@ember/component';

interface OnClickOutsideSignature<K extends keyof DocumentEventMap = 'click'> {
    Args: {
        onClickOutside: (event: DocumentEventMap[K]) => void;

        /** If you wish to exclude certain elements from counting as outside clicks, use the exceptSelector attribute */
        exceptSelector?: string;

        /** You can listen for events other than click by using the eventType attribute */
        eventType: K;
    };
}

export default class OnClickOutsideComponent extends Component<OnClickOutsideSignature> {}
