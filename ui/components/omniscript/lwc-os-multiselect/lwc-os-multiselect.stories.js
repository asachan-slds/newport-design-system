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

const label = 'Element Widths';
const defaultValue = 12;
const options = {
  range: true,
  min: 0,
  max: 12,
  step: 1
};
const groupId = 'GROUP-ID1';

storiesOf(`${base}`, module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(notes))
  .addDecorator(commentToHTML(scss))
  .add(`OS Multi Select`, () => {
    requestAnimationFrame(() => {
        const bpView = document.getElementById(`a0g4x000000OJreAAG`);
        bpView.addEventListener('change', event => {
          if (event.target.value) {
            event.target.classList.add('nds-has-value');
          } else {
            event.target.classList.remove('nds-has-value');
          }
        });
      });
      const width = number(label, defaultValue, options, groupId);
      return withExample(
          `
            <vlocity_ins-omniscript-preview id="a0g4x000000OJreAAG" data-aura-rendered-by="6:0" vlocity_ins-omniscriptpreview_omniscriptpreview_nds-host="">
                <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" dir="ltr">
                    <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="via-nds">
                        <article vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" tabindex="-1" class="omniscript-article nds-card nds-grid nds-theme_default nds-grid_vertical">
                            <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-card__body nds-card__body_inner nds-m-top_medium">
                            <c-omniscript-step-chart vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="omniscriptStepChart">
                                <slot>
                                    <div class="nds-omniscript_stepform nds-size_1-of-1 nds-small-size_1-of-1 nds-medium-size_8-of-12 nds-large-size_6-of-12 nds-align_absolute-center nds-grid nds-m-top_x-large nds-m-bottom_x-large">
                                        <div class="nds-size_1-of-1">
                                        <div class="nds-progress">
                                            <ol class="nds-progress__list">
                                                <c-omniscript-step-chart-items>
                                                    <li data-index="0" class="nds-progress__item nds-is-active" style="cursor: default; padding-bottom: 4px;">
                                                    <button data-index="0" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">In Progress</span></button>
                                                    <div class="nds-is-absolute">
                                                        <div data-index="0" class="nds-m-top_medium nds-is-relative nds-progress__step-label nds-p-top_xx-small">Multi Select</div>
                                                    </div>
                                                    </li>
                                                </c-omniscript-step-chart-items>
                                            </ol>
                                            <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" role="progressbar" class="nds-progress-bar nds-progress-bar_x-small" style="width: 0%;"><span class="nds-progress-bar__value" style="width: 0%;"><span class="nds-assistive-text">Progress: 0%</span></span></div>
                                        </div>
                                        </div>
                                    </div>
                                </slot>
                            </c-omniscript-step-chart>
                            <c-omniscript-step vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="Step2" vlocity_ins-omniscriptstep_omniscriptstep_nds-host="">
                                <h1 vlocity_ins-omniscriptstep_omniscriptstep_nds="" class="nds-page-header__title nds-align_absolute-center nds-text-align_center nds-medium-size_8-of-12 nds-p-vertical_large nds-step_label">Multi Select</h1>
                                <div vlocity_ins-omniscriptstep_omniscriptstep_nds="" class="nds-medium-size_8-of-12 nds-align_absolute-center">
                                    <div vlocity_ins-omniscriptstep_omniscriptstep_nds="" class="nds-grid nds-wrap nds-col_padded nds-size_1-of-1 omniscript-step__body-nds">
                                        <slot vlocity_ins-omniscriptstep_omniscriptstep_nds="">
                                        <c-omniscript-multiselect vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="Multi-select" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                                            <slot>
                                                <c-checkbox-group data-refresh="false" data-omni-input="" vlocity_ins-checkboxgroup_checkboxgroup_nds-host="">
                                                    <div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element nds-form-container">
                                                    <fieldset vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element">
                                                        <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip">
                                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-m-right_x-small">Multi-select1</span>
                                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-nowrap-whitespace">
                                                                <slot vlocity_ins-checkboxgroup_checkboxgroup_nds="" name="label"></slot>
                                                            </span>
                                                        </span>
                                                        <div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__control nds-horizontal_checkbox"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" id="vlocity-checkbox-0-0-7" data-index="0" name="Multi-select" value="1"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="0" for="vlocity-checkbox-0-0-7" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">One</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" id="vlocity-checkbox-0-1-7" data-index="1" name="Multi-select" value="2"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="1" for="vlocity-checkbox-0-1-7" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Two</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" id="vlocity-checkbox-0-2-7" data-index="2" name="Multi-select" value="3"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="2" for="vlocity-checkbox-0-2-7" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Three</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" id="vlocity-checkbox-0-3-7" data-index="3" name="Multi-select" value="4"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="3" for="vlocity-checkbox-0-3-7" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Four</span></label></span></div>
                                                    </fieldset>
                                                    </div>
                                                </c-checkbox-group>
                                            </slot>
                                        </c-omniscript-multiselect>
                                        <c-omniscript-multiselect vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="Multi-select2" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                                            <slot>
                                                <c-checkbox-group data-refresh="false" data-omni-input="" vlocity_ins-checkboxgroup_checkboxgroup_nds-host="">
                                                    <div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element nds-form-container">
                                                    <fieldset vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element">
                                                        <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip">
                                                            <abbr vlocity_ins-checkboxgroup_checkboxgroup_nds="" title="Required" class="nds-required">*</abbr><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-m-right_x-small">Multi-select1</span>
                                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-nowrap-whitespace">
                                                                <slot vlocity_ins-checkboxgroup_checkboxgroup_nds="" name="label"></slot>
                                                            </span>
                                                        </span>
                                                        <div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__control nds-vertical_checkbox"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-1-0-9" data-index="0" name="Multi-select2" value="1"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="0" for="vlocity-checkbox-1-0-9" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">One</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-1-1-9" data-index="1" name="Multi-select2" value="2"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="1" for="vlocity-checkbox-1-1-9" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Two</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-1-2-9" data-index="2" name="Multi-select2" value="3"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="2" for="vlocity-checkbox-1-2-9" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Three</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-1-3-9" data-index="3" name="Multi-select2" value="4"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="3" for="vlocity-checkbox-1-3-9" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Four</span></label></span></div>
                                                    </fieldset>
                                                    </div>
                                                </c-checkbox-group>
                                            </slot>
                                        </c-omniscript-multiselect>
                                        <c-omniscript-multiselect vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="Multi-select3" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                                            <slot>
                                                <c-checkbox-image-group data-refresh="false" data-omni-input="" class="nds-size_1-of-1">
                                                    <div class="nds-form-element nds-form-container">
                                                    <fieldset>
                                                        <div class="nds-form-element__control">
                                                            <span class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip">
                                                                <span class="nds-m-right_x-small">Multi-select1</span>
                                                                <span class="nds-nowrap-whitespace">
                                                                <slot name="label"></slot>
                                                                </span>
                                                            </span>
                                                            <div>
                                                                <div class="nds-checkbox nds-checkbox_custom-group nds-float_left vlc-img-wrapper nds-img-wrapper_cont nds-size_1-of-3" style="padding-top: 100px;">
                                                                <input type="checkbox" name="Multi-select3" id="vlocity-checkbox-2-0-11" value="1">
                                                                <label for="vlocity-checkbox-2-0-11" class="nds-checkbox__label vlc-img_select-container nds-img_select-cont nds-img_no-width-height nds-m-bottom_none">
                                                                    <div class="nds-img-item_select-container"><span class="nds-img-item-caption">One</span></div>
                                                                </label>
                                                                </div>
                                                                <div class="nds-checkbox nds-checkbox_custom-group nds-float_left vlc-img-wrapper nds-img-wrapper_cont nds-size_1-of-3" style="padding-top: 100px;">
                                                                <input type="checkbox" name="Multi-select3" id="vlocity-checkbox-2-1-11" value="2">
                                                                <label for="vlocity-checkbox-2-1-11" class="nds-checkbox__label vlc-img_select-container nds-img_select-cont nds-img_no-width-height nds-m-bottom_none">
                                                                    <div class="nds-img-item_select-container"><span class="nds-img-item-caption">Two</span></div>
                                                                </label>
                                                                </div>
                                                                <div class="nds-checkbox nds-checkbox_custom-group nds-float_left vlc-img-wrapper nds-img-wrapper_cont nds-size_1-of-3" style="padding-top: 100px;">
                                                                <input type="checkbox" name="Multi-select3" id="vlocity-checkbox-2-2-11" value="3">
                                                                <label for="vlocity-checkbox-2-2-11" class="nds-checkbox__label vlc-img_select-container nds-img_select-cont nds-img_no-width-height nds-m-bottom_none">
                                                                    <div class="nds-img-item_select-container"><span class="nds-img-item-caption">Three</span></div>
                                                                </label>
                                                                </div>
                                                                <div class="nds-checkbox nds-checkbox_custom-group nds-float_left vlc-img-wrapper nds-img-wrapper_cont nds-size_1-of-3" style="padding-top: 100px;">
                                                                <input type="checkbox" name="Multi-select3" id="vlocity-checkbox-2-3-11" value="4">
                                                                <label for="vlocity-checkbox-2-3-11" class="nds-checkbox__label vlc-img_select-container nds-img_select-cont nds-img_no-width-height nds-m-bottom_none">
                                                                    <div class="nds-img-item_select-container"><span class="nds-img-item-caption">Four</span></div>
                                                                </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                    </div>
                                                </c-checkbox-image-group>
                                            </slot>
                                        </c-omniscript-multiselect>
                                        </slot>
                                    </div>
                                </div>
                            </c-omniscript-step>
                            </div>
                            <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-m-around_small">
                            <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center">
                                <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div>
                            </div>
                            <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center">
                                <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div>
                            </div>
                            <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center">
                                <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium">
                                    <c-button vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="omniscript-btn-save-for-later"><button type="button" label="undefined" class="vlocity-btn nds-button nds-button_base nds-button_stretch nds-p-around_xx-small nds-size_1-of-1"><span class="btnLabel">Save for later</span></button></c-button>
                                </div>
                            </div>
                            </div>
                        </article>
                    </div>
                </div>
            </vlocity_ins-omniscript-preview>
          `
      );
  }).add(`OS Multi Select With Error`, () => {
    requestAnimationFrame(() => {
        const bpView = document.getElementById(`a0g4x000000OJreAAG`);
        bpView.addEventListener('change', event => {
          if (event.target.value) {
            event.target.classList.add('nds-has-value');
          } else {
            event.target.classList.remove('nds-has-value');
          }
        });
      });
      const width = number(label, defaultValue, options, groupId);
      return withExample(
          `
            <vlocity_ins-omniscript-preview id="a0g4x000000OJreAAG" data-aura-rendered-by="6:0" vlocity_ins-omniscriptpreview_omniscriptpreview_nds-host="">
                <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" dir="ltr">
                    <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="via-nds">
                        <article vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" tabindex="-1" class="omniscript-article nds-card nds-grid nds-theme_default nds-grid_vertical">
                            <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-card__body nds-card__body_inner nds-m-top_medium">
                            <c-omniscript-step-chart vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="omniscriptStepChart">
                                <slot>
                                    <div class="nds-omniscript_stepform nds-size_1-of-1 nds-small-size_1-of-1 nds-medium-size_8-of-12 nds-large-size_6-of-12 nds-align_absolute-center nds-grid nds-m-top_x-large nds-m-bottom_x-large">
                                        <div class="nds-size_1-of-1">
                                        <div class="nds-progress">
                                            <ol class="nds-progress__list">
                                                <c-omniscript-step-chart-items>
                                                    <li data-index="0" class="nds-progress__item nds-is-active" style="cursor: default; padding-bottom: 4px;">
                                                    <button data-index="0" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">In Progress</span></button>
                                                    <div class="nds-is-absolute">
                                                        <div data-index="0" class="nds-m-top_medium nds-is-relative nds-progress__step-label nds-p-top_xx-small">Multi Select</div>
                                                    </div>
                                                    </li>
                                                </c-omniscript-step-chart-items>
                                            </ol>
                                            <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" role="progressbar" class="nds-progress-bar nds-progress-bar_x-small" style="width: 0%;"><span class="nds-progress-bar__value" style="width: 0%;"><span class="nds-assistive-text">Progress: 0%</span></span></div>
                                        </div>
                                        </div>
                                    </div>
                                </slot>
                            </c-omniscript-step-chart>
                            <c-omniscript-step vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="Step2" vlocity_ins-omniscriptstep_omniscriptstep_nds-host="">
                                <h1 vlocity_ins-omniscriptstep_omniscriptstep_nds="" class="nds-page-header__title nds-align_absolute-center nds-text-align_center nds-medium-size_8-of-12 nds-p-vertical_large nds-step_label">Multi Select</h1>
                                <div vlocity_ins-omniscriptstep_omniscriptstep_nds="" class="nds-medium-size_8-of-12 nds-align_absolute-center">
                                    <div vlocity_ins-omniscriptstep_omniscriptstep_nds="" class="nds-grid nds-wrap nds-col_padded nds-size_1-of-1 omniscript-step__body-nds">
                                        <slot vlocity_ins-omniscriptstep_omniscriptstep_nds="">
                                        <c-omniscript-multiselect vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="Multi-select" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                                            <slot>
                                                <c-checkbox-group data-refresh="false" data-omni-input="" vlocity_ins-checkboxgroup_checkboxgroup_nds-host="">
                                                    <div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element nds-form-container nds-has-error">
                                                    <fieldset vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element">
                                                        <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip">
                                                            <abbr vlocity_ins-checkboxgroup_checkboxgroup_nds="" title="Required" class="nds-required">*</abbr><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-m-right_x-small">Multi-select</span>
                                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-nowrap-whitespace">
                                                                <slot vlocity_ins-checkboxgroup_checkboxgroup_nds="" name="label"></slot>
                                                            </span>
                                                        </span>
                                                        <div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__control nds-horizontal_checkbox"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-0-7" data-index="0" name="Multi-select" value="1"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="0" for="vlocity-checkbox-0-0-7" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">One</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-1-7" data-index="1" name="Multi-select" value="2"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="1" for="vlocity-checkbox-0-1-7" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Two</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-2-7" data-index="2" name="Multi-select" value="3"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="2" for="vlocity-checkbox-0-2-7" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Three</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-0-3-7" data-index="3" name="Multi-select" value="4"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="3" for="vlocity-checkbox-0-3-7" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Four</span></label></span></div>
                                                    </fieldset>
                                                    <div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__help nds-form-element__help_text-transform__none">Required</div>
                                                    </div>
                                                </c-checkbox-group>
                                            </slot>
                                        </c-omniscript-multiselect>
                                        <c-omniscript-multiselect vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="Multi-select2" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                                            <slot>
                                                <c-checkbox-group data-refresh="false" data-omni-input="" vlocity_ins-checkboxgroup_checkboxgroup_nds-host="">
                                                    <div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element nds-form-container nds-has-error">
                                                    <fieldset vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element">
                                                        <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip">
                                                            <abbr vlocity_ins-checkboxgroup_checkboxgroup_nds="" title="Required" class="nds-required">*</abbr><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-m-right_x-small">Multi-select Vertical List</span>
                                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-nowrap-whitespace">
                                                                <slot vlocity_ins-checkboxgroup_checkboxgroup_nds="" name="label"></slot>
                                                            </span>
                                                        </span>
                                                        <div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__control nds-vertical_checkbox"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-1-0-9" data-index="0" name="Multi-select2" value="1"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="0" for="vlocity-checkbox-1-0-9" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">One</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-1-1-9" data-index="1" name="Multi-select2" value="2"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="1" for="vlocity-checkbox-1-1-9" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Two</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-1-2-9" data-index="2" name="Multi-select2" value="3"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="2" for="vlocity-checkbox-1-2-9" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Three</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" required="" id="vlocity-checkbox-1-3-9" data-index="3" name="Multi-select2" value="4"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="3" for="vlocity-checkbox-1-3-9" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Four</span></label></span></div>
                                                    </fieldset>
                                                    <div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__help nds-form-element__help_text-transform__none">Required</div>
                                                    </div>
                                                </c-checkbox-group>
                                            </slot>
                                        </c-omniscript-multiselect>
                                        <c-omniscript-multiselect vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="Multi-select3" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                                            <slot>
                                                <c-checkbox-image-group data-refresh="false" data-omni-input="" class="nds-size_1-of-1">
                                                    <div class="nds-form-element nds-form-container nds-has-error">
                                                    <fieldset>
                                                        <div class="nds-form-element__control">
                                                            <span class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip">
                                                                <abbr title="required" class="nds-required">*</abbr><span class="nds-m-right_x-small">Multi-select as Tiles</span>
                                                                <span class="nds-nowrap-whitespace">
                                                                <slot name="label"></slot>
                                                                </span>
                                                            </span>
                                                            <div>
                                                                <div class="nds-checkbox nds-checkbox_custom-group nds-float_left vlc-img-wrapper nds-img-wrapper_cont nds-size_1-of-3" style="padding-top: 100px;">
                                                                <input type="checkbox" required="" name="Multi-select3" id="vlocity-checkbox-2-0-11" value="1">
                                                                <label for="vlocity-checkbox-2-0-11" class="nds-checkbox__label vlc-img_select-container nds-img_select-cont nds-img_no-width-height nds-m-bottom_none">
                                                                    <div class="nds-img-item_select-container"><span class="nds-img-item-caption">One</span></div>
                                                                </label>
                                                                </div>
                                                                <div class="nds-checkbox nds-checkbox_custom-group nds-float_left vlc-img-wrapper nds-img-wrapper_cont nds-size_1-of-3" style="padding-top: 100px;">
                                                                <input type="checkbox" required="" name="Multi-select3" id="vlocity-checkbox-2-1-11" value="2">
                                                                <label for="vlocity-checkbox-2-1-11" class="nds-checkbox__label vlc-img_select-container nds-img_select-cont nds-img_no-width-height nds-m-bottom_none">
                                                                    <div class="nds-img-item_select-container"><span class="nds-img-item-caption">Two</span></div>
                                                                </label>
                                                                </div>
                                                                <div class="nds-checkbox nds-checkbox_custom-group nds-float_left vlc-img-wrapper nds-img-wrapper_cont nds-size_1-of-3" style="padding-top: 100px;">
                                                                <input type="checkbox" required="" name="Multi-select3" id="vlocity-checkbox-2-2-11" value="3">
                                                                <label for="vlocity-checkbox-2-2-11" class="nds-checkbox__label vlc-img_select-container nds-img_select-cont nds-img_no-width-height nds-m-bottom_none">
                                                                    <div class="nds-img-item_select-container"><span class="nds-img-item-caption">Three</span></div>
                                                                </label>
                                                                </div>
                                                                <div class="nds-checkbox nds-checkbox_custom-group nds-float_left vlc-img-wrapper nds-img-wrapper_cont nds-size_1-of-3" style="padding-top: 100px;">
                                                                <input type="checkbox" required="" name="Multi-select3" id="vlocity-checkbox-2-3-11" value="4">
                                                                <label for="vlocity-checkbox-2-3-11" class="nds-checkbox__label vlc-img_select-container nds-img_select-cont nds-img_no-width-height nds-m-bottom_none">
                                                                    <div class="nds-img-item_select-container"><span class="nds-img-item-caption">Four</span></div>
                                                                </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </fieldset>
                                                    <div class="nds-form-element__help nds-form-element__help_text-transform__none">Required</div>
                                                    </div>
                                                </c-checkbox-image-group>
                                            </slot>
                                        </c-omniscript-multiselect>
                                        </slot>
                                    </div>
                                </div>
                            </c-omniscript-step>
                            </div>
                            <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-m-around_small">
                            <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center">
                                <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div>
                            </div>
                            <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center">
                                <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div>
                            </div>
                            <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center">
                                <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium">
                                    <c-button vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="omniscript-btn-save-for-later"><button type="button" label="undefined" class="vlocity-btn nds-button nds-button_base nds-button_stretch nds-p-around_xx-small nds-size_1-of-1"><span class="btnLabel">Save for later</span></button></c-button>
                                </div>
                            </div>
                            </div>
                        </article>
                    </div>
                </div>
            </vlocity_ins-omniscript-preview>
          `
      );
  }).add(`OS Multi Select Read-only`, () =>{
    requestAnimationFrame(() => {
        const bpView = document.getElementById(`a0g4x000000OJreAAG`);
        bpView.addEventListener('change', event => {
          if (event.target.value) {
            event.target.classList.add('nds-has-value');
          } else {
            event.target.classList.remove('nds-has-value');
          }
        });
        document.getElementById("vlocity-checkbox-0-0-7").checked=true;
        document.getElementById("vlocity-checkbox-0-2-7").checked=true;
        
      });
      const width = number(label, defaultValue, options, groupId);
      return withExample(
          `
            <vlocity_ins-omniscript-preview id="a0g4x000000OJreAAG" data-aura-rendered-by="6:0" vlocity_ins-omniscriptpreview_omniscriptpreview_nds-host="">
                <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" dir="ltr">
                    <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="via-nds">
                        <article vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" tabindex="-1" class="omniscript-article nds-card nds-grid nds-theme_default nds-grid_vertical">
                        <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-card__body nds-card__body_inner nds-m-top_medium">
                            <c-omniscript-step-chart vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="omniscriptStepChart">
                                <slot>
                                    <div class="nds-omniscript_stepform nds-size_1-of-1 nds-small-size_1-of-1 nds-medium-size_8-of-12 nds-large-size_6-of-12 nds-align_absolute-center nds-grid nds-m-top_x-large nds-m-bottom_x-large">
                                    <div class="nds-size_1-of-1">
                                        <div class="nds-progress">
                                            <ol class="nds-progress__list">
                                                <c-omniscript-step-chart-items>
                                                <li data-index="0" class="nds-progress__item nds-is-active" style="cursor: default; padding-bottom: 4px;">
                                                    <button data-index="0" disabled="" class="nds-button nds-progress__marker"><span class="nds-assistive-text">In Progress</span></button>
                                                    <div class="nds-is-absolute">
                                                        <div data-index="0" class="nds-m-top_medium nds-is-relative nds-progress__step-label nds-p-top_xx-small">Multi Select</div>
                                                    </div>
                                                </li>
                                                </c-omniscript-step-chart-items>
                                            </ol>
                                            <div aria-valuemin="0" aria-valuemax="100" aria-valuenow="0" role="progressbar" class="nds-progress-bar nds-progress-bar_x-small" style="width: 0%;"><span class="nds-progress-bar__value" style="width: 0%;"><span class="nds-assistive-text">Progress: 0%</span></span></div>
                                        </div>
                                    </div>
                                    </div>
                                </slot>
                            </c-omniscript-step-chart>
                            <c-omniscript-step vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="Step2" vlocity_ins-omniscriptstep_omniscriptstep_nds-host="">
                                <h1 vlocity_ins-omniscriptstep_omniscriptstep_nds="" class="nds-page-header__title nds-align_absolute-center nds-text-align_center nds-medium-size_8-of-12 nds-p-vertical_large nds-step_label">Multi Select</h1>
                                <div vlocity_ins-omniscriptstep_omniscriptstep_nds="" class="nds-medium-size_8-of-12 nds-align_absolute-center">
                                    <div vlocity_ins-omniscriptstep_omniscriptstep_nds="" class="nds-grid nds-wrap nds-col_padded nds-size_1-of-1 omniscript-step__body-nds">
                                    <slot vlocity_ins-omniscriptstep_omniscriptstep_nds="">
                                        <c-omniscript-multiselect vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="Multi-select" class="nds-size_12-of-12 nds-medium-size_12-of-12 nds-read-only" aria-readonly="true">
                                            <slot>
                                                <c-checkbox-group data-refresh="false" data-omni-input="" vlocity_ins-checkboxgroup_checkboxgroup_nds-host="">
                                                <div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element nds-form-container">
                                                    <fieldset vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element">
                                                        <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip">
                                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-m-right_x-small">Multi-select</span>
                                                            <span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-nowrap-whitespace">
                                                            <slot vlocity_ins-checkboxgroup_checkboxgroup_nds="" name="label"></slot>
                                                            </span>
                                                        </span>
                                                        <div vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__control nds-horizontal_checkbox"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" id="vlocity-checkbox-0-0-7" data-index="0" name="Multi-select" value="1" tabindex="-1"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="0" for="vlocity-checkbox-0-0-7" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">One</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" id="vlocity-checkbox-0-1-7" data-index="1" name="Multi-select" value="2" tabindex="-1"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="1" for="vlocity-checkbox-0-1-7" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Two</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" id="vlocity-checkbox-0-2-7" data-index="2" name="Multi-select" value="3" tabindex="-1"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="2" for="vlocity-checkbox-0-2-7" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Three</span></label></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox"><input vlocity_ins-checkboxgroup_checkboxgroup_nds="" type="checkbox" id="vlocity-checkbox-0-3-7" data-index="3" name="Multi-select" value="4" tabindex="-1"><label vlocity_ins-checkboxgroup_checkboxgroup_nds="" data-index="3" for="vlocity-checkbox-0-3-7" class="nds-checkbox__label"><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-checkbox_faux"></span><span vlocity_ins-checkboxgroup_checkboxgroup_nds="" class="nds-form-element__label">Four</span></label></span></div>
                                                    </fieldset>
                                                </div>
                                                </c-checkbox-group>
                                            </slot>
                                        </c-omniscript-multiselect>
                                    </slot>
                                    </div>
                                </div>
                            </c-omniscript-step>
                        </div>
                        <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-m-around_small">
                            <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center">
                                <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div>
                            </div>
                            <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center">
                                <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium"></div>
                            </div>
                            <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center">
                                <div vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="nds-grid nds-grid_align-center nds-wrap nds-button-group-row nds-size_1-of-1 nds-medium-size_8-of-12 nds-p-horizontal_medium">
                                    <c-button vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" class="omniscript-btn-save-for-later"><button type="button" label="undefined" class="vlocity-btn nds-button nds-button_base nds-button_stretch nds-p-around_xx-small nds-size_1-of-1"><span class="btnLabel">Save for later</span></button></c-button>
                                </div>
                            </div>
                        </div>
                        </article>
                    </div>
                </div>
            </vlocity_ins-omniscript-preview>
          `
      )
  });