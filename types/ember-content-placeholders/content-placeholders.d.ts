declare module 'ember-content-placeholders/components/content-placeholders' {
    import Component from '@ember/component';

    import ContentPlaceholdersHeading from 'ember-content-placeholders/components/content-placeholders-heading';
    import ContentPlaceholdersImg from 'ember-content-placeholders/components/content-placeholders-img';
    import ContentPlaceholdersNav from 'ember-content-placeholders/components/content-placeholders-nav';
    import ContentPlaceholdersText from 'ember-content-placeholders/components/content-placeholders-text';

    import { WithBoundArgs } from '@glint/template';

    interface ContentPlaceholdersSignature {
        Element?: HTMLElement | SVGElement;
        Args: {
            rounded?: boolean;
            centered?: boolean;
            animated?: boolean;
        };
        Blocks: {
            default: [
                {
                    heading: WithBoundArgs<typeof ContentPlaceholdersHeading, 'rounded' | 'animated' | 'centered'>;
                    text: WithBoundArgs<typeof ContentPlaceholdersText, 'rounded' | 'animated' | 'centered'>;
                    img: WithBoundArgs<typeof ContentPlaceholdersImg, 'rounded' | 'animated' | 'centered'>;
                    nav: WithBoundArgs<typeof ContentPlaceholdersNav, 'rounded' | 'animated' | 'centered'>;
                }
            ];
        };
    }

    export default class ContentPlaceholders extends Component<ContentPlaceholdersSignature> {}
}
