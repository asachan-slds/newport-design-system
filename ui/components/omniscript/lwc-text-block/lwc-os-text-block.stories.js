
/* eslint-env browser */
import { storiesOf } from '@storybook/html';
import base from 'paths.macro';
import scss from '../base/_index.scss';
import {
    withExample,
    commentToHTML
} from '../../../../scripts/storybook';

storiesOf(`${base}`, module)
    .addDecorator(commentToHTML(scss))
    .add('Text Block', () => {
return withExample(`<c-omniscript-text-block vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="TextBlock8" class="nds-size_12-of-12 nds-medium-size_12-of-12"><slot><div class="nds-form-element nds-form-container nds-text-block"><c-omniscript-formatted-rich-text><lightning-formatted-rich-text class="slds-rich-text-editor__output"><span><div><div class="nds-border_top nds-border_right nds-border_bottom nds-border_left nds-p-around_small">
<h1>Your Details</h1>
<div>
<h3><strong>Given Name</strong></h3>
<p>Gandalf</p>
<p></p>
<h3><strong>Last Name</strong></h3>
<p>The Grey</p>
<p></p>
<h3><strong>Organization</strong></h3>
<p>Maiar</p>
<p></p>
<h3><strong>Phone Number</strong></h3>
<p>(02) 9690 0233</p>
<p></p>
<h3><strong>Email</strong></h3>
<p><a href="mailto:gandalf.the.mithrandir@wizard.com">gandalf.the.mithrandir@wizard.com</a></p>
</div>
</div></div></span></lightning-formatted-rich-text></c-omniscript-formatted-rich-text></div></slot></c-omniscript-text-block>`);
    });