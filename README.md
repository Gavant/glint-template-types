# glint-template-types

This package contains types that are needed by glint (temporarily).

# Installation

`yarn add -D @gavant/glint-template-types`

# Use

In order to use this, you must import the types from this package, and manually add them to the glint registry

```
import FaIconComponent from '@gavant/glint-template-types/types/@fortawesome/ember-fontawesome/fa-icon';
import DidInsertModifier from '@gavant/glint-template-types/types/ember-render-modifiers/did-insert';
...
import DidUpdateModifier from '@gavant/glint-template-types/types/ember-render-modifiers/did-update';



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
