import { resolve } from '@glint/environment-ember-loose/-private/dsl';
import SvgJarHelper from 'ember-svg-jar/helpers/svg-jar';

import { SafeString } from '@gavant/glint-template-types/utils/types';

import { expectTypeOf } from 'expect-type';

let svgJar = resolve(SvgJarHelper);

// @ts-expect-error: requires at least a name
svgJar({});

expectTypeOf(svgJar({}, 'my-svg')).toEqualTypeOf<SafeString>();

// Standard attributes
svgJar({ class: 'my-svg', role: 'img', title: 'My SVG', description: "This isn't your SVG" }, 'my-svg');

svgJar(
    {
        // @ts-expect-error class must be a string
        class: 1
    },
    'my-svg'
);

svgJar(
    {
        // @ts-expect-error role must be a string
        role: 1
    },
    'my-svg'
);

svgJar(
    {
        // @ts-expect-error title must be a string
        title: 1
    },
    'my-svg'
);

svgJar(
    {
        // @ts-expect-error desc must be a string
        desc: 1
    },
    'my-svg'
);

// Allows unknown arguments
svgJar({ width: '10px' }, 'my-svg');
