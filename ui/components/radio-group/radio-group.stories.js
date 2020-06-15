import { storiesOf } from '@storybook/html';
import base from 'paths.macro';
import notes from './doc.md';
import scss from './base/_index.scss';
import {
  withExample,
  withDocs,
  commentToHTML
} from '../../../scripts/storybook';

storiesOf(`${base}`, module)
  .addDecorator(withDocs(notes))
  .addDecorator(commentToHTML(scss))
  .add('Default (default)', () => {
    return withExample(`<fieldset class="nds-form-element">
  <legend class="nds-form-element__legend nds-form-element__label">Radio Group Label</legend>
  <div class="nds-form-element__control">
    <span class="nds-radio">
      <input type="radio" id="radio-15" name="options" value="on">
      <label class="nds-radio__label" for="radio-15">
        <span class="nds-radio_faux"></span>
        <span class="nds-form-element__label">Radio Label One</span>
      </label>
    </span>
    <span class="nds-radio">
      <input type="radio" id="radio-16" name="options" value="on">
      <label class="nds-radio__label" for="radio-16">
        <span class="nds-radio_faux"></span>
        <span class="nds-form-element__label">Radio Label Two</span>
      </label>
    </span>
  </div>
</fieldset>`);
  })
  .add('Disabled (states)', () => {
    return withExample(`<fieldset class="nds-form-element">
  <legend class="nds-form-element__legend nds-form-element__label">Radio Group Label</legend>
  <div class="nds-form-element__control">
    <span class="nds-radio">
      <input type="radio" id="radio-9" name="options" disabled="" value="on">
      <label class="nds-radio__label" for="radio-9">
        <span class="nds-radio_faux"></span>
        <span class="nds-form-element__label">Radio Label One</span>
      </label>
    </span>
    <span class="nds-radio">
      <input type="radio" id="radio-10" name="options" value="on">
      <label class="nds-radio__label" for="radio-10">
        <span class="nds-radio_faux"></span>
        <span class="nds-form-element__label">Radio Label Two</span>
      </label>
    </span>
  </div>
</fieldset>`);
  })
  .add('Required (states)', () => {
    return withExample(`<fieldset class="nds-form-element">
  <legend class="nds-form-element__legend nds-form-element__label">
    <abbr class="nds-required" title="required">*</abbr>


    Radio Group Label

  </legend>
  <div class="nds-form-element__control">
    <span class="nds-radio">
      <input type="radio" id="radio-11" name="options" value="on">
      <label class="nds-radio__label" for="radio-11">
        <span class="nds-radio_faux"></span>
        <span class="nds-form-element__label">Radio Label One</span>
      </label>
    </span>
    <span class="nds-radio">
      <input type="radio" id="radio-12" name="options" value="on">
      <label class="nds-radio__label" for="radio-12">
        <span class="nds-radio_faux"></span>
        <span class="nds-form-element__label">Radio Label Two</span>
      </label>
    </span>
  </div>
</fieldset>`);
  })
  .add('Error (states)', () => {
    return withExample(`<fieldset class="nds-form-element nds-has-error">
  <legend class="nds-form-element__legend nds-form-element__label">
    <abbr class="nds-required" title="required">*</abbr>


    Radio Group Label

  </legend>
  <div class="nds-form-element__control">
    <span class="nds-radio">
      <input type="radio" id="radio-13" name="options" aria-describedby="error_01" value="on">
      <label class="nds-radio__label" for="radio-13">
        <span class="nds-radio_faux"></span>
        <span class="nds-form-element__label">Radio Label One</span>
      </label>
    </span>
    <span class="nds-radio">
      <input type="radio" id="radio-14" name="options" aria-describedby="error_01" value="on">
      <label class="nds-radio__label" for="radio-14">
        <span class="nds-radio_faux"></span>
        <span class="nds-form-element__label">Radio Label Two</span>
      </label>
    </span>
  </div>
  <div id="error_01" class="nds-form-element__help">This field is required</div>
</fieldset>`);
  })
  .add('With tooltip', () => {
    return withExample(`<fieldset class="nds-form-element">
  <legend class="nds-form-element__legend nds-form-element__label">
  <span>Radio Group Label</span>
  <div class="nds-tooltip_container">
    <div class="nds-nonfocused_control nds-inline-help-text">
      <svg aria-hidden="true" class="nds-icon nds-icon_small " xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" icon="'info'" viewBox="0 0 52 52" alt="info">
        <path fill="inherit" xmlns="http://www.w3.org/2000/svg" d="m26 2c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24z m0 12.1c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3z m5 21c0 0.5-0.4 0.9-1 0.9h-8c-0.5 0-1-0.3-1-0.9v-2c0-0.5 0.4-1.1 1-1.1 0.5 0 1-0.3 1-0.9v-4c0-0.5-0.4-1.1-1-1.1-0.5 0-1-0.3-1-0.9v-2c0-0.5 0.4-1.1 1-1.1h6c0.5 0 1 0.5 1 1.1v8c0 0.5 0.4 0.9 1 0.9 0.5 0 1 0.5 1 1.1v2z"></path>
      </svg>
      <div class="nds-is-absolute">
        <div class="nds-popover nds-popover_tooltip nds-nubbin_bottom-right" role="tooltip">
          <div class="nds-popover__body">This is a Radio picklist</div>
        </div>
      </div>
    </div>
  </div>
  </legend>
  <div class="nds-form-element__control">
    <span class="nds-radio">
      <input type="radio" id="radio-15" name="options" value="on">
      <label class="nds-radio__label" for="radio-15">
        <span class="nds-radio_faux"></span>
        <span class="nds-form-element__label">Radio Label One</span>
      </label>
    </span>
    <span class="nds-radio">
      <input type="radio" id="radio-16" name="options" value="on">
      <label class="nds-radio__label" for="radio-16">
        <span class="nds-radio_faux"></span>
        <span class="nds-form-element__label">Radio Label Two</span>
      </label>
    </span>
  </div>
</fieldset>`);
  }).add('Error OmniScript 1', () => {
    return withExample(`
      <div class="nds-form-element nds-form-container nds-has-error">
        <fieldset>
          <legend class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip nds-container_fluid">
            <div class="nds-clearfix nds-container_fluid">
              <div class="nds-float_left nds-size_10-of-12">
                <abbr aria-hidden="true" title="required" class="slds-required">*</abbr>
                <span>Confirm if you are:</span>
              </div>
            <div class="nds-float_right nds-size_1-of-12 nds-text-align_right"></div>
            </div>
          </legend>
          <div class="nds-form-element__control nds-vertical_radio">
            <span class="nds-radio">
              <input type="radio" id="vlocity-radio-4-0-88" data-index="0" name="LicenceHolderSelector" required="" value="value 1">
              <label data-index="0" for="vlocity-radio-4-0-88" class="nds-radio__label">
                <span class="nds-radio_faux"></span>
                <span class="nds-form-element__label">Licence holder</span>
              </label>
              </span>
            <span class="nds-radio">
              <input type="radio" id="vlocity-radio-4-1-88" data-index="1" name="LicenceHolderSelector" required="" value="value 2">
              <label data-index="1" for="vlocity-radio-4-1-88" class="nds-radio__label">
                <span class="nds-radio_faux"></span>
                <span class="nds-form-element__label">Applying on behalf of a licence holder</span>
              </label>
            </span>
          </div>
        </fieldset>
        <div class="nds-form-element__help">Required</div>
        </div>`);
  }).add('Required No Error OmniScript 1', () => {
    return withExample(`
    <div class="nds-form-element nds-form-container">
    <fieldset>
      <legend
        class="nds-form-element__legend nds-form-element__label nds-form-element__control-help nds-radio-relative-tooltip nds-container_fluid">
        <div class="nds-clearfix nds-container_fluid">
          <div class="nds-float_left nds-size_10-of-12"><abbr aria-hidden="true" title="required"
              class="slds-required">*</abbr><span>Confirm if you are:</span></div>
          <div class="nds-float_right nds-size_1-of-12 nds-text-align_right"></div>
        </div>
      </legend>
      <div class="nds-form-element__control nds-vertical_radio"><span class="nds-radio"><input type="radio"
            id="vlocity-radio-4-0-88" data-index="0" name="LicenceHolderSelector" required="" value="value 1"><label
            data-index="0" for="vlocity-radio-4-0-88" class="nds-radio__label"><span class="nds-radio_faux"></span><span
              class="nds-form-element__label">Licence holder</span></label></span><span class="nds-radio"><input
            type="radio" id="vlocity-radio-4-1-88" data-index="1" name="LicenceHolderSelector" required=""
            value="value 2"><label data-index="1" for="vlocity-radio-4-1-88" class="nds-radio__label"><span
              class="nds-radio_faux"></span><span class="nds-form-element__label">Applying on behalf of a licence
              holder</span></label></span></div>
    </fieldset>
  </div>`);
  });

  
