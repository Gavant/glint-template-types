import { WithBoundArgs } from '@glint/template';
import Component from '@ember/component';

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
