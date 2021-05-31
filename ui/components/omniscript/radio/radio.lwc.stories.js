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
    .add('Radio', () => {
        return withExample(`
            <c-radio-group data-refresh="false" data-omni-input="">
                <div class="nds-form-element nds-form-container">
                    <fieldset>
                        <span class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip">
                            <span class="nds-m-right_x-small">Radio1</span>
                            <span class="nds-nowrap-whitespace">
                                <slot name="label"></slot>
                            </span>
                        </span>
                        <div class="nds-form-element__control nds-vertical_radio">
                            <span class="nds-radio">
                                <input type="radio" required="" id="vlocity-radio-1-0-19" data-index="0" name="vlocity-radio-1-0" value="1">
                                <label data-index="0" for="vlocity-radio-1-0-19" class="nds-radio__label">
                                    <span class="nds-radio_faux"></span>
                                    <span class="nds-form-element__label">Test 1</span>
                                </label>
                            </span>
                            <span class="nds-radio">
                                <input type="radio" required="" id="vlocity-radio-1-1-19" data-index="1" name="vlocity-radio-1-0" value="2">
                                <label data-index="1" for="vlocity-radio-1-1-19" class="nds-radio__label">
                                    <span class="nds-radio_faux"></span>
                                    <span class="nds-form-element__label">Test 2</span>
                                </label>
                            </span>
                            <span class="nds-radio">
                                <input type="radio" required="" id="vlocity-radio-1-2-19" data-index="2" name="vlocity-radio-1-0" value="3">
                                <label data-index="2" for="vlocity-radio-1-2-19" class="nds-radio__label">
                                    <span class="nds-radio_faux"></span>
                                    <span class="nds-form-element__label">Test 3</span>
                                </label>
                            </span>
                        </div>
                    </fieldset>
                </div>
            </c-radio-group>
        `);
    })
    .add('Radio (Required)', () => {
        return withExample(`
            <c-radio-group data-refresh="false" data-omni-input="">
                <div class="nds-form-element nds-form-container">
                    <fieldset>
                        <span class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip">
                            <abbr title="required" class="slds-required">*</abbr>
                            <span class="nds-m-right_x-small">Radio1</span>
                            <span class="nds-nowrap-whitespace">
                                <slot name="label"></slot>
                            </span>
                        </span>
                        <div class="nds-form-element__control nds-vertical_radio">
                            <span class="nds-radio">
                                <input type="radio" required="" id="vlocity-radio-1-0-19" data-index="0" name="vlocity-radio-1-0" value="1">
                                <label data-index="0" for="vlocity-radio-1-0-19" class="nds-radio__label">
                                    <span class="nds-radio_faux"></span>
                                    <span class="nds-form-element__label">Test 1</span>
                                </label>
                            </span>
                            <span class="nds-radio">
                                <input type="radio" required="" id="vlocity-radio-1-1-19" data-index="1" name="vlocity-radio-1-0" value="2">
                                <label data-index="1" for="vlocity-radio-1-1-19" class="nds-radio__label">
                                    <span class="nds-radio_faux"></span>
                                    <span class="nds-form-element__label">Test 2</span>
                                </label>
                            </span>
                            <span class="nds-radio">
                                <input type="radio" required="" id="vlocity-radio-1-2-19" data-index="2" name="vlocity-radio-1-0" value="3">
                                <label data-index="2" for="vlocity-radio-1-2-19" class="nds-radio__label">
                                    <span class="nds-radio_faux"></span>
                                    <span class="nds-form-element__label">Test 3</span>
                                </label>
                            </span>
                        </div>
                    </fieldset>
                </div>
            </c-radio-group>
        `);
    })
    .add('Radio (Error)', () => {
        return withExample(`
            <c-radio-group data-refresh="false" data-omni-input="">
                <div class="nds-form-element nds-form-container nds-has-error">
                    <fieldset>
                        <span class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip">
                            <abbr title="required" class="slds-required">*</abbr>
                            <span class="nds-m-right_x-small">Radio1</span>
                            <span class="nds-nowrap-whitespace">
                                <slot name="label"></slot>
                            </span>
                        </span>
                        <div class="nds-form-element__control nds-vertical_radio">
                            <span class="nds-radio">
                                <input type="radio" required="" id="vlocity-radio-1-0-20" data-index="0" name="vlocity-radio-1-0" value="1">
                                <label data-index="0" for="vlocity-radio-1-0-20" class="nds-radio__label">
                                    <span class="nds-radio_faux"></span>
                                    <span class="nds-form-element__label">Test 1</span>
                                </label>
                            </span>
                            <span class="nds-radio">
                                <input type="radio" required="" id="vlocity-radio-1-1-20" data-index="1" name="vlocity-radio-1-0" value="2">
                                <label data-index="1" for="vlocity-radio-1-1-20" class="nds-radio__label">
                                    <span class="nds-radio_faux"></span>
                                    <span class="nds-form-element__label">Test 2</span>
                                </label>
                            </span>
                            <span class="nds-radio">
                                <input type="radio" required="" id="vlocity-radio-1-2-20" data-index="2" name="vlocity-radio-1-0" value="3">
                                <label data-index="2" for="vlocity-radio-1-2-20" class="nds-radio__label">
                                    <span class="nds-radio_faux"></span>
                                    <span class="nds-form-element__label">Test 3</span>
                                </label>
                            </span>
                        </div>
                    </fieldset>
                    <div class="nds-form-element__help nds-form-element__help_text-transform__none">Required</div>
                </div>
            </c-radio-group>
        `);
    });
