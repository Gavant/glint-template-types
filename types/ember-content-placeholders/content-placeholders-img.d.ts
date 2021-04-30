import Component from '@glint/environment-ember-loose/ember-component';

interface ContentPlaceholdersImgSignature {
    Args: {
        rounded?: boolean;
        centered?: boolean;
        animated?: boolean;
    };
    Yields: {
        default: [];
    };
}

export default class ContentPlaceholdersImg extends Component<ContentPlaceholdersImgSignature> {}
