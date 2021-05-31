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
            <c-omniscript-multiselect vlocity_ins-omniscriptpreviewblock_omniscriptpreviewblock_nds="" data-omni-key="Multi-select1" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                <slot>
                    <c-checkbox-group data-refresh="false" data-omni-input="" vlocity_ins-checkboxgroup_checkboxgroup_nds-host="">
                        <div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element nds-form-container">
                            <fieldset vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element">
                                <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip">
                                    <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-m-right_x-small">Circumstances</span>
                                    <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-nowrap-whitespace">
                                        <slot vlocity_ins-checkboxgroup_checkboxgroup_nds="" name="label"></slot>
                                    </span>
                                </span>
                                <div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__control nds-vertical_checkbox">
                                    <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox">
                                        <input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-0-51" data-index="0" name="Multi-select1" value="Workplace">
                                        <label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="0" for="vlocity-checkbox-0-0-51" class="nds-checkbox__label">
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span>
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">While working at the usual workplace</span>
                                        </label>
                                    </span>
                                    <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox">
                                        <input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-1-51" data-index="1" name="Multi-select1" value="Workplace2">
                                        <label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="1" for="vlocity-checkbox-0-1-51" class="nds-checkbox__label">
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span>
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">While working away from your usual workplace</span>
                                        </label>
                                    </span>
                                    <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox">
                                        <input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-2-51" data-index="2" name="Multi-select1" value="AuthorisedrecessatworkCheck">
                                        <label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="2" for="vlocity-checkbox-0-2-51" class="nds-checkbox__label">
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span>
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">During a meal-break or authorised recess at work</span>
                                        </label>
                                    </span>
                                    <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox">
                                        <input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-3-51" data-index="3" name="Multi-select1" value="WorkduringrecessCheck">
                                        <label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="3" for="vlocity-checkbox-0-3-51" class="nds-checkbox__label">
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span>
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">While away from work during a recess</span>
                                        </label>
                                    </span>
                                    <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox">
                                        <input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-4-51" data-index="4" name="Multi-select1" value="TravellingCheck">
                                        <label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="4" for="vlocity-checkbox-0-4-51" class="nds-checkbox__label">
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span>
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Travelling to or from work</span>
                                        </label>
                                    </span>
                                    <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox">
                                        <input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-5-51" data-index="5" name="Multi-select1" value="MotorVehicleCheck">
                                        <label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="5" for="vlocity-checkbox-0-5-51" class="nds-checkbox__label">
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span>
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">A motor vehicle accident while you were working</span>
                                        </label>
                                    </span>
                                </div>
                            </fieldset>
                        </div>
                    </c-checkbox-group>
                </slot>
            </c-omniscript-multiselect>
        `);
    })
    .add('Radio (Required)', () => {
        return withExample(`
            <c-omniscript-multiselect vlocity_ins-omniscriptpreviewblock_omniscriptpreviewblock_nds="" data-omni-key="Multi-select1" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                <slot>
                    <c-checkbox-group data-refresh="false" data-omni-input="" vlocity_ins-checkboxgroup_checkboxgroup_nds-host="">
                        <div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element nds-form-container">
                            <fieldset vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element">
                                <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip">
                                    <abbr vlocity_ins-checkboxgroup_checkboxgroup_nds="" title="Required" class="nds-required">*</abbr>
                                    <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-m-right_x-small">Circumstances</span>
                                    <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-nowrap-whitespace">
                                        <slot vlocity_ins-checkboxgroup_checkboxgroup_nds="" name="label"></slot>
                                    </span>
                                </span>
                                <div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__control nds-vertical_checkbox">
                                    <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox">
                                        <input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-0-51" data-index="0" name="Multi-select1" value="Workplace">
                                        <label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="0" for="vlocity-checkbox-0-0-51" class="nds-checkbox__label">
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span>
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">While working at the usual workplace</span>
                                        </label>
                                    </span>
                                    <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox">
                                        <input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-1-51" data-index="1" name="Multi-select1" value="Workplace2">
                                        <label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="1" for="vlocity-checkbox-0-1-51" class="nds-checkbox__label">
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span>
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">While working away from your usual workplace</span>
                                        </label>
                                    </span>
                                    <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox">
                                        <input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-2-51" data-index="2" name="Multi-select1" value="AuthorisedrecessatworkCheck">
                                        <label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="2" for="vlocity-checkbox-0-2-51" class="nds-checkbox__label">
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span>
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">During a meal-break or authorised recess at work</span>
                                        </label>
                                    </span>
                                    <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox">
                                        <input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-3-51" data-index="3" name="Multi-select1" value="WorkduringrecessCheck">
                                        <label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="3" for="vlocity-checkbox-0-3-51" class="nds-checkbox__label">
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span>
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">While away from work during a recess</span>
                                        </label>
                                    </span>
                                    <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox">
                                        <input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-4-51" data-index="4" name="Multi-select1" value="TravellingCheck">
                                        <label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="4" for="vlocity-checkbox-0-4-51" class="nds-checkbox__label">
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span>
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Travelling to or from work</span>
                                        </label>
                                    </span>
                                    <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox">
                                        <input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-5-51" data-index="5" name="Multi-select1" value="MotorVehicleCheck">
                                        <label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="5" for="vlocity-checkbox-0-5-51" class="nds-checkbox__label">
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span>
                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">A motor vehicle accident while you were working</span>
                                        </label>
                                    </span>
                                </div>
                            </fieldset>
                        </div>
                    </c-checkbox-group>
                </slot>
            </c-omniscript-multiselect>
        `);
    })
    .add('Radio (Error)', () => {
        return withExample(`
            <c-omniscript-multiselect vlocity_ins-omniscriptpreviewblock_omniscriptpreviewblock_nds="" data-omni-key="Multi-select1" class="nds-size_12-of-12 nds-medium-size_12-of-12"><slot><c-checkbox-group data-refresh="false" data-omni-input="" vlocity_ins-checkboxgroup_checkboxgroup_nds-host=""><div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element nds-form-container nds-has-error"><fieldset vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip"><abbr vlocity_ins-checkboxgroup_checkboxgroup_nds="" title="Required" class="nds-required">*</abbr><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-m-right_x-small">Circumstances</span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-nowrap-whitespace"><slot vlocity_ins-checkboxgroup_checkboxgroup_nds="" name="label"></slot></span></span><div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__control nds-vertical_checkbox"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-0-51" data-index="0" name="Multi-select1" value="Workplace"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="0" for="vlocity-checkbox-0-0-51" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">While working at the usual workplace</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-1-51" data-index="1" name="Multi-select1" value="Workplace2"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="1" for="vlocity-checkbox-0-1-51" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">While working away from your usual workplace</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-2-51" data-index="2" name="Multi-select1" value="AuthorisedrecessatworkCheck"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="2" for="vlocity-checkbox-0-2-51" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">During a meal-break or authorised recess at work</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-3-51" data-index="3" name="Multi-select1" value="WorkduringrecessCheck"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="3" for="vlocity-checkbox-0-3-51" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">While away from work during a recess</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-4-51" data-index="4" name="Multi-select1" value="TravellingCheck"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="4" for="vlocity-checkbox-0-4-51" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Travelling to or from work</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-5-51" data-index="5" name="Multi-select1" value="MotorVehicleCheck"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="5" for="vlocity-checkbox-0-5-51" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">A motor vehicle accident while you were working</span></label></span></div></fieldset><div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__help nds-form-element__help_text-transform__none">Required</div></div></c-checkbox-group></slot></c-omniscript-multiselect>
        `);
    });
