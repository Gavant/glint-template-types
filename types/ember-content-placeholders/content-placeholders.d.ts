import { ComponentWithBoundArgs } from '@glint/environment-ember-loose';
import Component from '@glint/environment-ember-loose/ember-component';

import ContentPlaceholdersHeading from '@gavant/glint-template-types/types/ember-content-placeholders/content-placeholders-heading';
import ContentPlaceholdersImg from '@gavant/glint-template-types/types/ember-content-placeholders/content-placeholders-img';
import ContentPlaceholdersNav from '@gavant/glint-template-types/types/ember-content-placeholders/content-placeholders-nav';
import ContentPlaceholdersText from '@gavant/glint-template-types/types/ember-content-placeholders/content-placeholders-text';

interface ContentPlaceholdersSignature {
    Element?: HTMLElement | SVGElement;
    Args: {
        rounded?: boolean;
        centered?: boolean;
        animated?: boolean;
    };
    Yields: {
        default: [
            {
                heading: ComponentWithBoundArgs<typeof ContentPlaceholdersHeading, 'rounded' | 'animated' | 'centered'>;
                text: ComponentWithBoundArgs<typeof ContentPlaceholdersText, 'rounded' | 'animated' | 'centered'>;
                img: ComponentWithBoundArgs<typeof ContentPlaceholdersImg, 'rounded' | 'animated' | 'centered'>;
                nav: ComponentWithBoundArgs<typeof ContentPlaceholdersNav, 'rounded' | 'animated' | 'centered'>;
            }
        ];
    };
}

export default class ContentPlaceholders extends Component<ContentPlaceholdersSignature> {}
