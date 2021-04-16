This package contains types that are needed by glint (temporarily).

In order to use this, you must add

```
import '@glint/environment-ember-loose/registry';

import { FaIconComponent } from '@gavant/glint-template-types/types/@fortawesome/ember-fontawesome/fa-icon';
import { DidInsertModifier } from '@gavant/glint-template-types/types/ember-render-modifiers/did-insert';
...
import { DidUpdateModifier } from '@gavant/glint-template-types/types/ember-render-modifiers/did-update';



declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        FaIcon: typeof FaIconComponent;
        'fa-icon': typeof FaIconComponent;
        'did-insert': typeof DidInsertModifier;
        ...
        'did-update': typeof DidUpdateModifier;
    }
}

```

to your project. Just import any types you need and add them to the registry
