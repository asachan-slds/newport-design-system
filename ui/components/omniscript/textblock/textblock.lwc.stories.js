/* eslint-env browser */
import { storiesOf } from '@storybook/html';
import { withKnobs, number } from '@storybook/addon-knobs';
import base from 'paths.macro';
import notes from './doc.md';
import scss from '../base/_index.scss';
import {
    withExample,
    withDocs,
    commentToHTML
} from '../../../../scripts/storybook';

storiesOf(`${base}`, module)
    .addDecorator(withKnobs)
    .addDecorator(withDocs(notes))
    .addDecorator(commentToHTML(scss))
    .add('Text Block', () => {
        return withExample(`
            <c-omniscript-text-block vlocity_ins-omniscriptpreviewblock_omniscriptpreviewblock_nds="" data-omni-key="TextBlock1" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                <slot>
                    <div class="nds-form-element nds-form-container nds-text-block">
                        <c-omniscript-formatted-rich-text>
                            <lightning-formatted-rich-text class="slds-rich-text-editor__output">
                                <span>
                                    <div>
                                        <h1>Header 1&nbsp;text goes here.</h1>
                                        <p>A paragraph lives here.</p>
                                        <ul>
                                            <li><span style="font-family: helvetica;">Your employer or the nominated Return to Work Coordinator at your workplace</span></li>
                                            <li><span style="font-family: helvetica;">Your employer’s WorkSafe Victoria (WorkSafe) Agent - to find out who the Agent is check the If you are injured poster or call the WorkSafe</span></li>
                                            <li><span style="font-family: helvetica;">Advisory Service: freecall 1800 136 089 or (03) 9641 1444</span></li>
                                            <li><span style="font-family: helvetica;">WorkSafe Advisory Service - the WorkSafe call centre: freecall 1800 136 089 or (03) 9641 1444</span></li>
                                            <li><span style="font-family: helvetica;">Your union</span></li>
                                            <li><span style="font-family: helvetica;">Union Assist - a free service set up and run by the Victorian Trades Hall Council: (03) 9639 6144</span></li>
                                            <li><span style="font-family: helvetica;">Additional Point</span></li>
                                        </ul>
                                        <p></p>
                                    </div>
                                </span>
                            </lightning-formatted-rich-text>
                        </c-omniscript-formatted-rich-text>
                    </div>
                </slot>
            </c-omniscript-text-block>
        `);
    });