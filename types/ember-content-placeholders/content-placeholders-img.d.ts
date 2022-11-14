declare module 'ember-content-placeholders/components/content-placeholders-img' {
    import Component from '@ember/component';

    interface ContentPlaceholdersImgSignature {
        Args: {
            rounded?: boolean;
            centered?: boolean;
            animated?: boolean;
        };
        Blocks: {
            default: [];
        };
    }

    export default class ContentPlaceholdersImg extends Component<ContentPlaceholdersImgSignature> {}
}
