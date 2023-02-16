# glint-template-types

This package contains types that are needed by glint (temporarily).

# Installation

`yarn add -D @gavant/glint-template-types`

# Use

In order to use this, you must import the types from this package, and manually add them to the glint registry.
This addon now uses ambient declarations so you need to add the following to your `tsconfig` "include":

`"node_modules/@gavant/glint-template-types/types/{LOCATION_HERE}"`
i.e.`"node_modules/@gavant/glint-template-types/types/ember-truth-helpers/and.d.ts"` or to grab all ember-truth-helpers
`"node_modules/@gavant/glint-template-types/types/ember-truth-helpers/*"`

```
import FaIconComponent from '@fortawesome/ember-fontawesome/components/fa-icon';
import DidInsertModifier from 'ember-render-modifiers/modifiers/did-insert';
...
import DidUpdateModifier from 'ember-render-modifiers/modifiers/did-update';



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
