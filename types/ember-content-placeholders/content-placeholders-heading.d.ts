declare module 'ember-content-placeholders/components/content-placeholders-heading' {
    import Component from '@ember/component';

    interface ContentPlaceholdersHeadingArgs {
        rounded?: boolean;
        centered?: boolean;
        animated?: boolean;
    }

    interface ContentPlaceholdersHeadingSignature {
        Args: ContentPlaceholdersHeadingArgs;
    }

    export default interface ContentPlaceholdersHeading extends ContentPlaceholdersHeadingArgs {}
    export default class ContentPlaceholdersHeading extends Component<ContentPlaceholdersHeadingSignature> {}
}
