import Component from '@ember/component';

interface ContentPlaceholdersNavArgs {
    rounded?: boolean;
    centered?: boolean;
    animated?: boolean;
}

interface ContentPlaceholdersNavSignature {
    Args: ContentPlaceholdersNavArgs;
}

export default interface ContentPlaceholdersNav extends ContentPlaceholdersNavArgs {}
export default class ContentPlaceholdersNav extends Component<ContentPlaceholdersNavSignature> {}
