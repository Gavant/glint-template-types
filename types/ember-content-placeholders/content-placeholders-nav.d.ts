import Component from '@glint/environment-ember-loose/ember-component';

interface ContentPlaceholdersNavSignature {
    Args: {
        rounded?: boolean;
        centered?: boolean;
        animated?: boolean;
    };
}

export default class ContentPlaceholdersNav extends Component<ContentPlaceholdersNavSignature> {}
