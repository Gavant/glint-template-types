import { FaIconComponent } from '@gavant/glint-template-types/types/@fortawesome/ember-fontawesome/fa-icon';
import {
    DropdownAction, DropdownLink
} from '@gavant/glint-template-types/types/@gavant/ember-bootstrap-dropdown/component';
import { ButtonComponent } from '@gavant/glint-template-types/types/@gavant/ember-button-basic/component';
import { ButtonSpinnerComponent } from '@gavant/glint-template-types/types/@gavant/ember-button-spinner/component';
import { Dropdown } from '@gavant/glint-template-types/types/ember-basic-dropdown/dropdown';
import { TranslationHelper } from '@gavant/glint-template-types/types/ember-intl/translation-helper';
import { DidInsertModifier } from '@gavant/glint-template-types/types/ember-render-modifiers/did-insert';
import { DidUpdateModifier } from '@gavant/glint-template-types/types/ember-render-modifiers/did-update';

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'did-insert': typeof DidInsertModifier;
        'did-update': typeof DidUpdateModifier;
        FaIcon: typeof FaIconComponent;
        'fa-icon': typeof FaIconComponent;
        Dropdown: typeof Dropdown;
        DropdownMenu: typeof Dropdown;
        DropdownAction: typeof DropdownAction;
        DropdownLink: typeof DropdownLink;
        ButtonSpinner: typeof ButtonSpinnerComponent;
        Button: typeof ButtonComponent;
        t: typeof TranslationHelper;
    }
}
