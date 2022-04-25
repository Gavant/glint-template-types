import Component from '@ember/component';

interface ContentPlaceholdersTextSignature {
    Args: {
        rounded?: boolean;
        centered?: boolean;
        animated?: boolean;
        lines?: number;
    };
}

export default class ContentPlaceholdersText extends Component<ContentPlaceholdersTextSignature> {}
