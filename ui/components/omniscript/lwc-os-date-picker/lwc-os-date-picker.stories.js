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
  .add(`OS Date Field`, () => {
    requestAnimationFrame(() => {
        const bpView = document.getElementById(`a0g4x000000OJreAAG`);
        bpView.addEventListener('change', event => {
          if (event.target.value) {
            event.target.classList.add('nds-has-value');
          } else {
            event.target.classList.remove('nds-has-value');
          }
        });
        document.getElementById("time-input-19").value="12:30 am";
        document.getElementById("date-input-15").value="03-12-2021";
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
                                          <div data-index="0" class="nds-m-top_medium nds-is-relative nds-progress__step-label nds-p-top_xx-small">Date and Time</div>
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
               <c-omniscript-step vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="Step1" vlocity_ins-omniscriptstep_omniscriptstep_nds-host="">
                  <h1 vlocity_ins-omniscriptstep_omniscriptstep_nds="" class="nds-page-header__title nds-align_absolute-center nds-text-align_center nds-medium-size_8-of-12 nds-p-vertical_large nds-step_label">Date and Time</h1>
                  <div vlocity_ins-omniscriptstep_omniscriptstep_nds="" class="nds-medium-size_8-of-12 nds-align_absolute-center">
                     <div vlocity_ins-omniscriptstep_omniscriptstep_nds="" class="nds-grid nds-wrap nds-col_padded nds-size_1-of-1 omniscript-step__body-nds">
                        <slot vlocity_ins-omniscriptstep_omniscriptstep_nds="">
                           <c-omniscript-date-time vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="Date/Time" class="nds-size_12-of-12 nds-medium-size_12-of-12">
                              <slot>
                                 <c-input data-omni-input="" class="nds-container_fluid">
                                    <c-datetime-picker name="datetime-0">
                                       <div class="nds-grid nds-gutters nds-wrap">
                                          <div class="nds-col nds-size_1-of-1 nds-medium-size_7-of-12 nds-large-size_1-of-2">
                                             <c-date-picker>
                                                <div class="via-nds datePickerHt">
                                                   <div class="nds-form nds-form_compound">
                                                      <fieldset class="nds-form-element nds-form-container">
                                                         <div class="nds-grid nds-gutters nds-size_1-of-1 nds-m-around_none">
                                                            <div class="nds-col nds-p-around_none">
                                                               <div role="dialog" aria-hidden="false" aria-label="Date picker" tabindex="-1" class="nds-form-element nds-size_1-of-1 nds-dropdown-trigger nds-dropdown-trigger_click nds-has-error">
                                                                  <div class="nds-datepicker nds-form-element__control nds-input-has-icon nds-input-has-icon_right nds-form-element__control-animated-label">
                                                                     <input type="text" tabindex="0" required="" aria-label="Date/Time: Date" name="date" id="date-input-9" data-id="date-picker-nds-input" autocomplete="off" class="nds-input">
                                                                     <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out nds-date-label">
                                                                        <label aria-label="Date/Time" for="date-input-9">Date/Time<abbr title="Required" class="nds-required nds-p-left_xx-small">*</abbr></label>
                                                                        <slot name="label">
                                                                           <slot slot="label" name="label">
                                                                              <slot slot="label" name="label"></slot>
                                                                           </slot>
                                                                        </slot>
                                                                     </div>
                                                                     <button data-id="datePickerBtn" type="button" class="nds-button nds-button_icon nds-input__icon nds-input__icon_right Date">
                                                                        <c-icon class="Date">
                                                                           <svg aria-hidden="true" class="nds-icon nds-icon-text-default nds-icon_x-small">
                                                                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#event"></use>
                                                                           </svg>
                                                                           <span class="nds-assistive-text"></span>
                                                                        </c-icon>
                                                                        <span class="nds-assistive-text"></span>
                                                                     </button>
                                                                  </div>
                                                                  <div data-id="date-picker-div" class="calendar-div nds-datepicker nds-dropdown nds-dropdown_left posAbsolute">
                                                                     <div class="nds-datepicker__filter nds-grid">
                                                                        <div class="nds-datepicker__filter_month nds-grid nds-grid_align-spread nds-grow">
                                                                           <div class="nds-align-middle">
                                                                              <button data-id="prevMonthBtnId" tabindex="0" title="Previous Month" type="button" class="nds-button nds-button_icon nds-button_icon-container prevMonth">
                                                                                 <c-icon class="prevMonth">
                                                                                    <svg aria-hidden="true" class="nds-icon nds-icon-text-default nds-icon_x-small">
                                                                                       <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_left"></use>
                                                                                    </svg>
                                                                                    <span class="nds-assistive-text"></span>
                                                                                 </c-icon>
                                                                                 <span class="nds-assistive-text">Previous Month</span>
                                                                              </button>
                                                                           </div>
                                                                           <h2 aria-atomic="true" aria-live="assertive" data-id="selected_month" class="nds-align-middle">March</h2>
                                                                           <div class="nds-align-middle">
                                                                              <button data-id="nextMonthBtnId" tabindex="0" title="Next Month" type="button" class="nds-button nds-button_icon nds-button_icon-container nextMonth">
                                                                                 <c-icon class="nextMonth">
                                                                                    <svg aria-hidden="true" class="nds-icon nds-icon-text-default nds-icon_x-small">
                                                                                       <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_right"></use>
                                                                                    </svg>
                                                                                    <span class="nds-assistive-text"></span>
                                                                                 </c-icon>
                                                                                 <span class="nds-assistive-text">Next Month</span>
                                                                              </button>
                                                                           </div>
                                                                        </div>
                                                                        <div class="nds-shrink-none">
                                                                           <label for="select-01-9" class="nds-assistive-text">Pick a year</label>
                                                                           <div class="nds-select_container">
                                                                              <select tabindex="0" data-id="select-01" class="nds-select">
                                                                                 <option><span>2021</span></option>
                                                                                 <option><span>2022</span></option>
                                                                              </select>
                                                                           </div>
                                                                        </div>
                                                                     </div>
                                                                     <table aria-labelledby="month-9" aria-multiselectable="true" role="grid" class="nds-datepicker__month">
                                                                        <thead>
                                                                           <tr data-id="weekdays">
                                                                              <th data-id="Sun" tabindex="-1" scope="col" class="nds-disabled-text"><abbr title="Sun">Sun</abbr></th>
                                                                              <th data-id="Mon" tabindex="-1" scope="col" class="nds-disabled-text"><abbr title="Mon">Mon</abbr></th>
                                                                              <th data-id="Tue" tabindex="-1" scope="col" class="nds-disabled-text"><abbr title="Tue">Tue</abbr></th>
                                                                              <th data-id="Wed" tabindex="-1" scope="col" class="nds-disabled-text"><abbr title="Wed">Wed</abbr></th>
                                                                              <th data-id="Thu" tabindex="-1" scope="col" class="nds-disabled-text"><abbr title="Thu">Thu</abbr></th>
                                                                              <th data-id="Fri" tabindex="-1" scope="col" class="nds-disabled-text"><abbr title="Fri">Fri</abbr></th>
                                                                              <th data-id="Sat" tabindex="-1" scope="col" class="nds-disabled-text"><abbr title="Sat">Sat</abbr></th>
                                                                           </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                           <tr>
                                                                              <td aria-disabled="true" data-id="prev-month-dayId28" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month prev-month dayId-prev28"><span class="nds-day">28</span></td>
                                                                              <td aria-disabled="true" data-id="dayId1" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId1"><span class="nds-day">1</span></td>
                                                                              <td aria-disabled="true" data-id="dayId2" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId2"><span class="nds-day">2</span></td>
                                                                              <td aria-disabled="true" data-id="dayId3" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId3"><span class="nds-day">3</span></td>
                                                                              <td aria-disabled="true" data-id="dayId4" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId4"><span class="nds-day">4</span></td>
                                                                              <td aria-disabled="true" data-id="dayId5" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId5"><span class="nds-day">5</span></td>
                                                                              <td aria-disabled="true" data-id="dayId6" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId6"><span class="nds-day">6</span></td>
                                                                           </tr>
                                                                           <tr>
                                                                              <td aria-disabled="true" data-id="dayId7" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId7"><span class="nds-day">7</span></td>
                                                                              <td aria-disabled="true" data-id="dayId8" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId8 nds-is-today"><span class="nds-day">8</span></td>
                                                                              <td aria-disabled="true" data-id="dayId9" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId9"><span class="nds-day">9</span></td>
                                                                              <td aria-disabled="true" data-id="dayId10" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId10"><span class="nds-day">10</span></td>
                                                                              <td aria-disabled="true" data-id="dayId11" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId11"><span class="nds-day">11</span></td>
                                                                              <td aria-disabled="true" data-id="dayId12" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId12"><span class="nds-day">12</span></td>
                                                                              <td aria-disabled="true" data-id="dayId13" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId13"><span class="nds-day">13</span></td>
                                                                           </tr>
                                                                           <tr>
                                                                              <td aria-disabled="true" data-id="dayId14" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId14"><span class="nds-day">14</span></td>
                                                                              <td aria-disabled="true" data-id="dayId15" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId15"><span class="nds-day">15</span></td>
                                                                              <td aria-disabled="true" data-id="dayId16" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId16"><span class="nds-day">16</span></td>
                                                                              <td aria-disabled="true" data-id="dayId17" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId17"><span class="nds-day">17</span></td>
                                                                              <td aria-disabled="true" data-id="dayId18" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId18"><span class="nds-day">18</span></td>
                                                                              <td aria-disabled="true" data-id="dayId19" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId19"><span class="nds-day">19</span></td>
                                                                              <td aria-disabled="true" data-id="dayId20" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId20"><span class="nds-day">20</span></td>
                                                                           </tr>
                                                                           <tr>
                                                                              <td aria-disabled="true" data-id="dayId21" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId21"><span class="nds-day">21</span></td>
                                                                              <td aria-disabled="true" data-id="dayId22" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId22"><span class="nds-day">22</span></td>
                                                                              <td aria-disabled="true" data-id="dayId23" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId23"><span class="nds-day">23</span></td>
                                                                              <td aria-disabled="true" data-id="dayId24" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId24"><span class="nds-day">24</span></td>
                                                                              <td aria-disabled="true" data-id="dayId25" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId25"><span class="nds-day">25</span></td>
                                                                              <td aria-disabled="true" data-id="dayId26" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId26"><span class="nds-day">26</span></td>
                                                                              <td aria-disabled="true" data-id="dayId27" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId27"><span class="nds-day">27</span></td>
                                                                           </tr>
                                                                           <tr>
                                                                              <td aria-disabled="true" data-id="dayId28" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId28"><span class="nds-day">28</span></td>
                                                                              <td aria-disabled="true" data-id="dayId29" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId29"><span class="nds-day">29</span></td>
                                                                              <td aria-disabled="true" data-id="dayId30" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId30"><span class="nds-day">30</span></td>
                                                                              <td aria-disabled="true" data-id="dayId31" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId31"><span class="nds-day">31</span></td>
                                                                              <td aria-disabled="true" data-id="next-month-dayId1" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next1"><span class="nds-day">1</span></td>
                                                                              <td aria-disabled="true" data-id="next-month-dayId2" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next2"><span class="nds-day">2</span></td>
                                                                              <td aria-disabled="true" data-id="next-month-dayId3" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next3"><span class="nds-day">3</span></td>
                                                                           </tr>
                                                                           <tr>
                                                                              <td aria-disabled="true" data-id="next-month-dayId4" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next4"><span class="nds-day">4</span></td>
                                                                              <td aria-disabled="true" data-id="next-month-dayId5" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next5"><span class="nds-day">5</span></td>
                                                                              <td aria-disabled="true" data-id="next-month-dayId6" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next6"><span class="nds-day">6</span></td>
                                                                              <td aria-disabled="true" data-id="next-month-dayId7" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next7"><span class="nds-day">7</span></td>
                                                                              <td aria-disabled="true" data-id="next-month-dayId8" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next8"><span class="nds-day">8</span></td>
                                                                              <td aria-disabled="true" data-id="next-month-dayId9" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next9"><span class="nds-day">9</span></td>
                                                                              <td aria-disabled="true" data-id="next-month-dayId10" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next10"><span class="nds-day">10</span></td>
                                                                           </tr>
                                                                        </tbody>
                                                                     </table>
                                                                     <button data-id="current-date" tabindex="0" type="button" class="nds-button nds-align_absolute-center nds-text-link currentDate">Today</button>
                                                                  </div>
                                                               </div>
                                                               <div class="nds-has-error"><span class="nds-form-element__help nds-form-element__help_text-transform__none">Select a Date 10 days from today</span></div>
                                                            </div>
                                                         </div>
                                                      </fieldset>
                                                   </div>
                                                </div>
                                             </c-date-picker>
                                          </div>
                                          <div class="nds-col nds-size_1-of-1 nds-medium-size_5-of-12 nds-large-size_1-of-2">
                                             <c-time-picker>
                                                <div class="nds-form-element nds-form-container">
                                                   <div class="nds-form-element__control">
                                                      <div class="nds-combobox_container">
                                                         <div aria-expanded="false" aria-haspopup="listbox" role="combobox" class="nds-combobox nds-dropdown-trigger nds-dropdown-trigger_click nds-combobox-picklist nds-timepicker">
                                                            <div role="none" class="nds-combobox__form-element nds-input-has-icon nds-input-has-icon_right nds-form-element__control nds-form-element__control-animated-label">
                                                               <input autocomplete="off" id="time-input-11" aria-label="Date/Time: Time" role="textbox" type="text" name="time" required="" tabindex="0" aria-autocomplete="both" class="nds-input nds-combobox__input nds-combobox__input-value">
                                                               <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out">
                                                                  <slot name="label"></slot>
                                                               </div>
                                                               <span class="nds-icon_container nds-icon-utility-clock nds-input__icon nds-input__icon_right">
                                                                  <c-icon>
                                                                     <svg aria-hidden="true" class="nds-icon nds-icon-text-default nds-icon_x-small">
                                                                        <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#clock"></use>
                                                                     </svg>
                                                                     <span class="nds-assistive-text"></span>
                                                                  </c-icon>
                                                               </span>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </c-time-picker>
                                          </div>
                                       </div>
                                    </c-datetime-picker>
                                 </c-input>
                              </slot>
                           </c-omniscript-date-time>
                           <c-omniscript-date vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="Date" class="nds-size_12-of-12 nds-medium-size_7-of-12">
                              <slot>
                                 <c-input data-omni-input="" class="nds-container_fluid">
                                    <c-date-picker>
                                       <div class="via-nds datePickerHt">
                                          <div class="nds-form nds-form_compound">
                                             <fieldset class="nds-form-element nds-form-container">
                                                <div class="nds-grid nds-gutters nds-size_1-of-1 nds-m-around_none">
                                                   <div class="nds-col nds-p-around_none">
                                                      <div role="dialog" aria-hidden="false" aria-label="Date picker" tabindex="-1" class="nds-form-element nds-size_1-of-1 nds-dropdown-trigger nds-dropdown-trigger_click nds-is-open">
                                                         <div class="nds-datepicker nds-form-element__control nds-input-has-icon nds-input-has-icon_right nds-form-element__control-animated-label">
                                                            <input type="text" tabindex="0" id="date-input-15" data-id="date-picker-nds-input" autocomplete="off" class="nds-input nds-not-empty nds-is-dirty">
                                                            <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out nds-date-label">
                                                               <label aria-label="Date" for="date-input-15">Date</label>
                                                               <slot name="label">
                                                                  <slot slot="label" name="label"></slot>
                                                               </slot>
                                                            </div>
                                                            <button data-id="datePickerBtn" title="Select Date" type="button" class="nds-button nds-button_icon nds-input__icon nds-input__icon_right Date">
                                                               <c-icon class="Date">
                                                                  <svg aria-hidden="true" class="nds-icon nds-icon-text-default nds-icon_x-small">
                                                                     <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#event"></use>
                                                                  </svg>
                                                                  <span class="nds-assistive-text"></span>
                                                               </c-icon>
                                                               <span class="nds-assistive-text">Select Date</span>
                                                            </button>
                                                         </div>
                                                         <div data-id="date-picker-div" class="calendar-div nds-datepicker nds-dropdown nds-dropdown_left posAbsolute">
                                                            <div class="nds-datepicker__filter nds-grid">
                                                               <div class="nds-datepicker__filter_month nds-grid nds-grid_align-spread nds-grow">
                                                                  <div class="nds-align-middle">
                                                                     <button data-id="prevMonthBtnId" tabindex="0" title="Previous Month" type="button" class="nds-button nds-button_icon nds-button_icon-container prevMonth">
                                                                        <c-icon class="prevMonth">
                                                                           <svg aria-hidden="true" class="nds-icon nds-icon-text-default nds-icon_x-small">
                                                                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#left"></use>
                                                                           </svg>
                                                                           <span class="nds-assistive-text"></span>
                                                                        </c-icon>
                                                                        <span class="nds-assistive-text">Previous Month</span>
                                                                     </button>
                                                                  </div>
                                                                  <h2 aria-atomic="true" aria-live="assertive" data-id="selected_month" class="nds-align-middle">March</h2>
                                                                  <div class="nds-align-middle">
                                                                     <button data-id="nextMonthBtnId" tabindex="0" title="Next Month" type="button" class="nds-button nds-button_icon nds-button_icon-container nextMonth">
                                                                        <c-icon class="nextMonth">
                                                                           <svg aria-hidden="true" class="nds-icon nds-icon-text-default nds-icon_x-small">
                                                                              <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#right"></use>
                                                                           </svg>
                                                                           <span class="nds-assistive-text"></span>
                                                                        </c-icon>
                                                                        <span class="nds-assistive-text">Next Month</span>
                                                                     </button>
                                                                  </div>
                                                               </div>
                                                               <div class="nds-shrink-none">
                                                                  <label for="select-01-15" class="nds-assistive-text">Pick a year</label>
                                                                  <div class="nds-select_container">
                                                                     <select tabindex="0" data-id="select-01" class="nds-select">
                                                                        <option><span>2021</span></option>
                                                                        <option><span>2022</span></option>
                                                                     </select>
                                                                  </div>
                                                               </div>
                                                            </div>
                                                            <table aria-labelledby="month-15" aria-multiselectable="true" role="grid" class="nds-datepicker__month">
                                                               <thead>
                                                                  <tr data-id="weekdays">
                                                                     <th data-id="Sun" tabindex="-1" scope="col" class="nds-disabled-text"><abbr title="Sun">Sun</abbr></th>
                                                                     <th data-id="Mon" tabindex="-1" scope="col" class="nds-disabled-text"><abbr title="Mon">Mon</abbr></th>
                                                                     <th data-id="Tue" tabindex="-1" scope="col" class="nds-disabled-text"><abbr title="Tue">Tue</abbr></th>
                                                                     <th data-id="Wed" tabindex="-1" scope="col" class="nds-disabled-text"><abbr title="Wed">Wed</abbr></th>
                                                                     <th data-id="Thu" tabindex="-1" scope="col" class="nds-disabled-text"><abbr title="Thu">Thu</abbr></th>
                                                                     <th data-id="Fri" tabindex="-1" scope="col" class="nds-disabled-text"><abbr title="Fri">Fri</abbr></th>
                                                                     <th data-id="Sat" tabindex="-1" scope="col" class="nds-disabled-text"><abbr title="Sat">Sat</abbr></th>
                                                                  </tr>
                                                               </thead>
                                                               <tbody>
                                                                  <tr>
                                                                     <td aria-disabled="true" data-id="prev-month-dayId28" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month prev-month dayId-prev28"><span class="nds-day">28</span></td>
                                                                     <td aria-disabled="true" data-id="dayId1" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId1"><span class="nds-day">1</span></td>
                                                                     <td aria-disabled="true" data-id="dayId2" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId2"><span class="nds-day">2</span></td>
                                                                     <td aria-disabled="true" data-id="dayId3" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId3"><span class="nds-day">3</span></td>
                                                                     <td aria-disabled="true" data-id="dayId4" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId4"><span class="nds-day">4</span></td>
                                                                     <td aria-disabled="true" data-id="dayId5" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId5"><span class="nds-day">5</span></td>
                                                                     <td aria-disabled="true" data-id="dayId6" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId6"><span class="nds-day">6</span></td>
                                                                  </tr>
                                                                  <tr>
                                                                     <td aria-disabled="true" data-id="dayId7" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId7"><span class="nds-day">7</span></td>
                                                                     <td aria-disabled="true" data-id="dayId8" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId8 nds-is-today"><span class="nds-day">8</span></td>
                                                                     <td aria-disabled="true" data-id="dayId9" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId9"><span class="nds-day">9</span></td>
                                                                     <td aria-disabled="true" data-id="dayId10" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId10"><span class="nds-day">10</span></td>
                                                                     <td aria-disabled="true" data-id="dayId11" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId11"><span class="nds-day">11</span></td>
                                                                     <td aria-disabled="true" data-id="dayId12" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId12 nds-is-selected"><span class="nds-day">12</span></td>
                                                                     <td aria-disabled="true" data-id="dayId13" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId13"><span class="nds-day">13</span></td>
                                                                  </tr>
                                                                  <tr>
                                                                     <td aria-disabled="true" data-id="dayId14" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId14"><span class="nds-day">14</span></td>
                                                                     <td aria-disabled="true" data-id="dayId15" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId15"><span class="nds-day">15</span></td>
                                                                     <td aria-disabled="true" data-id="dayId16" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId16"><span class="nds-day">16</span></td>
                                                                     <td aria-disabled="true" data-id="dayId17" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId17"><span class="nds-day">17</span></td>
                                                                     <td aria-disabled="true" data-id="dayId18" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId18"><span class="nds-day">18</span></td>
                                                                     <td aria-disabled="true" data-id="dayId19" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId19"><span class="nds-day">19</span></td>
                                                                     <td aria-disabled="true" data-id="dayId20" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId20"><span class="nds-day">20</span></td>
                                                                  </tr>
                                                                  <tr>
                                                                     <td aria-disabled="true" data-id="dayId21" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId21"><span class="nds-day">21</span></td>
                                                                     <td aria-disabled="true" data-id="dayId22" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId22"><span class="nds-day">22</span></td>
                                                                     <td aria-disabled="true" data-id="dayId23" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId23"><span class="nds-day">23</span></td>
                                                                     <td aria-disabled="true" data-id="dayId24" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId24"><span class="nds-day">24</span></td>
                                                                     <td aria-disabled="true" data-id="dayId25" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId25"><span class="nds-day">25</span></td>
                                                                     <td aria-disabled="true" data-id="dayId26" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId26"><span class="nds-day">26</span></td>
                                                                     <td aria-disabled="true" data-id="dayId27" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId27"><span class="nds-day">27</span></td>
                                                                  </tr>
                                                                  <tr>
                                                                     <td aria-disabled="true" data-id="dayId28" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId28"><span class="nds-day">28</span></td>
                                                                     <td aria-disabled="true" data-id="dayId29" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId29"><span class="nds-day">29</span></td>
                                                                     <td aria-disabled="true" data-id="dayId30" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId30"><span class="nds-day">30</span></td>
                                                                     <td aria-disabled="true" data-id="dayId31" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day dayId31"><span class="nds-day">31</span></td>
                                                                     <td aria-disabled="true" data-id="next-month-dayId1" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next1"><span class="nds-day">1</span></td>
                                                                     <td aria-disabled="true" data-id="next-month-dayId2" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next2"><span class="nds-day">2</span></td>
                                                                     <td aria-disabled="true" data-id="next-month-dayId3" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next3"><span class="nds-day">3</span></td>
                                                                  </tr>
                                                                  <tr>
                                                                     <td aria-disabled="true" data-id="next-month-dayId4" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next4"><span class="nds-day">4</span></td>
                                                                     <td aria-disabled="true" data-id="next-month-dayId5" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next5"><span class="nds-day">5</span></td>
                                                                     <td aria-disabled="true" data-id="next-month-dayId6" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next6"><span class="nds-day">6</span></td>
                                                                     <td aria-disabled="true" data-id="next-month-dayId7" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next7"><span class="nds-day">7</span></td>
                                                                     <td aria-disabled="true" data-id="next-month-dayId8" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next8"><span class="nds-day">8</span></td>
                                                                     <td aria-disabled="true" data-id="next-month-dayId9" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next9"><span class="nds-day">9</span></td>
                                                                     <td aria-disabled="true" data-id="next-month-dayId10" aria-selected="false" tabindex="0" role="gridcell" class="day-val day nds-day nds-day_adjacent-month next-month dayId-next10"><span class="nds-day">10</span></td>
                                                                  </tr>
                                                               </tbody>
                                                            </table>
                                                            <button data-id="current-date" tabindex="0" type="button" class="nds-button nds-align_absolute-center nds-text-link currentDate">Today</button>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </fieldset>
                                          </div>
                                       </div>
                                    </c-date-picker>
                                 </c-input>
                              </slot>
                           </c-omniscript-date>
                           <c-omniscript-time vlocity_ins-omniscriptpreview_omniscriptpreview_nds="" data-omni-key="Time" class="nds-size_12-of-12 nds-medium-size_5-of-12">
                              <slot>
                                 <c-input data-omni-input="" class="nds-container_fluid">
                                    <c-time-picker>
                                       <div class="nds-form-element nds-form-container">
                                          <div class="nds-form-element__control">
                                             <div class="nds-combobox_container">
                                                <div aria-expanded="true" aria-haspopup="listbox" role="combobox" class="nds-combobox nds-dropdown-trigger nds-dropdown-trigger_click nds-combobox-picklist nds-timepicker nds-is-open">
                                                   <div role="none" class="nds-combobox__form-element nds-input-has-icon nds-input-has-icon_right nds-form-element__control nds-form-element__control-animated-label">
                                                      <input autocomplete="off" id="time-input-19" role="textbox" type="text" tabindex="0" aria-autocomplete="both" class="nds-input nds-combobox__input nds-combobox__input-value nds-not-empty nds-is-dirty" style="padding-right: 0px;">
                                                      <div class="nds-form-element__label nds-align-middle nds-animated-label__ease-out">
                                                         <label for="time-input-19">Time</label>
                                                         <slot name="label">
                                                            <slot slot="label" name="label"></slot>
                                                         </slot>
                                                      </div>
                                                   </div>
                                                   <ul role="listbox" class="nds-listbox nds-listbox_vertical nds-dropdown nds-dropdown_fluid nds-dropdown_length-5">
                                                      <li id="opt-576-19" data-index="0" data-selected="false" data-val="12:00 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="12:00 am" class="nds-truncate">12:00 am</span></span>
                                                      </li>
                                                      <li id="opt-577-19" data-index="1" data-selected="true" data-val="12:30 am" role="option" tabindex="-1" aria-selected="true" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center nds-is-selected nds-has-focus" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="12:30 am" class="nds-truncate">12:30 am</span></span>
                                                      </li>
                                                      <li id="opt-578-19" data-index="2" data-selected="false" data-val="01:00 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="01:00 am" class="nds-truncate">01:00 am</span></span>
                                                      </li>
                                                      <li id="opt-579-19" data-index="3" data-selected="false" data-val="01:30 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="01:30 am" class="nds-truncate">01:30 am</span></span>
                                                      </li>
                                                      <li id="opt-580-19" data-index="4" data-selected="false" data-val="02:00 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="02:00 am" class="nds-truncate">02:00 am</span></span>
                                                      </li>
                                                      <li id="opt-581-19" data-index="5" data-selected="false" data-val="02:30 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="02:30 am" class="nds-truncate">02:30 am</span></span>
                                                      </li>
                                                      <li id="opt-582-19" data-index="6" data-selected="false" data-val="03:00 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="03:00 am" class="nds-truncate">03:00 am</span></span>
                                                      </li>
                                                      <li id="opt-583-19" data-index="7" data-selected="false" data-val="03:30 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="03:30 am" class="nds-truncate">03:30 am</span></span>
                                                      </li>
                                                      <li id="opt-584-19" data-index="8" data-selected="false" data-val="04:00 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="04:00 am" class="nds-truncate">04:00 am</span></span>
                                                      </li>
                                                      <li id="opt-585-19" data-index="9" data-selected="false" data-val="04:30 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="04:30 am" class="nds-truncate">04:30 am</span></span>
                                                      </li>
                                                      <li id="opt-586-19" data-index="10" data-selected="false" data-val="05:00 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="05:00 am" class="nds-truncate">05:00 am</span></span>
                                                      </li>
                                                      <li id="opt-587-19" data-index="11" data-selected="false" data-val="05:30 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="05:30 am" class="nds-truncate">05:30 am</span></span>
                                                      </li>
                                                      <li id="opt-588-19" data-index="12" data-selected="false" data-val="06:00 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="06:00 am" class="nds-truncate">06:00 am</span></span>
                                                      </li>
                                                      <li id="opt-589-19" data-index="13" data-selected="false" data-val="06:30 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="06:30 am" class="nds-truncate">06:30 am</span></span>
                                                      </li>
                                                      <li id="opt-590-19" data-index="14" data-selected="false" data-val="07:00 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="07:00 am" class="nds-truncate">07:00 am</span></span>
                                                      </li>
                                                      <li id="opt-591-19" data-index="15" data-selected="false" data-val="07:30 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="07:30 am" class="nds-truncate">07:30 am</span></span>
                                                      </li>
                                                      <li id="opt-592-19" data-index="16" data-selected="false" data-val="08:00 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="08:00 am" class="nds-truncate">08:00 am</span></span>
                                                      </li>
                                                      <li id="opt-593-19" data-index="17" data-selected="false" data-val="08:30 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="08:30 am" class="nds-truncate">08:30 am</span></span>
                                                      </li>
                                                      <li id="opt-594-19" data-index="18" data-selected="false" data-val="09:00 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="09:00 am" class="nds-truncate">09:00 am</span></span>
                                                      </li>
                                                      <li id="opt-595-19" data-index="19" data-selected="false" data-val="09:30 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="09:30 am" class="nds-truncate">09:30 am</span></span>
                                                      </li>
                                                      <li id="opt-596-19" data-index="20" data-selected="false" data-val="10:00 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="10:00 am" class="nds-truncate">10:00 am</span></span>
                                                      </li>
                                                      <li id="opt-597-19" data-index="21" data-selected="false" data-val="10:30 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="10:30 am" class="nds-truncate">10:30 am</span></span>
                                                      </li>
                                                      <li id="opt-598-19" data-index="22" data-selected="false" data-val="11:00 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="11:00 am" class="nds-truncate">11:00 am</span></span>
                                                      </li>
                                                      <li id="opt-599-19" data-index="23" data-selected="false" data-val="11:30 am" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="11:30 am" class="nds-truncate">11:30 am</span></span>
                                                      </li>
                                                      <li id="opt-600-19" data-index="24" data-selected="false" data-val="12:00 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="12:00 pm" class="nds-truncate">12:00 pm</span></span>
                                                      </li>
                                                      <li id="opt-601-19" data-index="25" data-selected="false" data-val="12:30 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="12:30 pm" class="nds-truncate">12:30 pm</span></span>
                                                      </li>
                                                      <li id="opt-602-19" data-index="26" data-selected="false" data-val="01:00 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="01:00 pm" class="nds-truncate">01:00 pm</span></span>
                                                      </li>
                                                      <li id="opt-603-19" data-index="27" data-selected="false" data-val="01:30 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="01:30 pm" class="nds-truncate">01:30 pm</span></span>
                                                      </li>
                                                      <li id="opt-604-19" data-index="28" data-selected="false" data-val="02:00 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="02:00 pm" class="nds-truncate">02:00 pm</span></span>
                                                      </li>
                                                      <li id="opt-605-19" data-index="29" data-selected="false" data-val="02:30 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="02:30 pm" class="nds-truncate">02:30 pm</span></span>
                                                      </li>
                                                      <li id="opt-606-19" data-index="30" data-selected="false" data-val="03:00 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="03:00 pm" class="nds-truncate">03:00 pm</span></span>
                                                      </li>
                                                      <li id="opt-607-19" data-index="31" data-selected="false" data-val="03:30 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="03:30 pm" class="nds-truncate">03:30 pm</span></span>
                                                      </li>
                                                      <li id="opt-608-19" data-index="32" data-selected="false" data-val="04:00 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="04:00 pm" class="nds-truncate">04:00 pm</span></span>
                                                      </li>
                                                      <li id="opt-609-19" data-index="33" data-selected="false" data-val="04:30 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="04:30 pm" class="nds-truncate">04:30 pm</span></span>
                                                      </li>
                                                      <li id="opt-610-19" data-index="34" data-selected="false" data-val="05:00 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="05:00 pm" class="nds-truncate">05:00 pm</span></span>
                                                      </li>
                                                      <li id="opt-611-19" data-index="35" data-selected="false" data-val="05:30 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="05:30 pm" class="nds-truncate">05:30 pm</span></span>
                                                      </li>
                                                      <li id="opt-612-19" data-index="36" data-selected="false" data-val="06:00 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="06:00 pm" class="nds-truncate">06:00 pm</span></span>
                                                      </li>
                                                      <li id="opt-613-19" data-index="37" data-selected="false" data-val="06:30 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="06:30 pm" class="nds-truncate">06:30 pm</span></span>
                                                      </li>
                                                      <li id="opt-614-19" data-index="38" data-selected="false" data-val="07:00 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="07:00 pm" class="nds-truncate">07:00 pm</span></span>
                                                      </li>
                                                      <li id="opt-615-19" data-index="39" data-selected="false" data-val="07:30 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="07:30 pm" class="nds-truncate">07:30 pm</span></span>
                                                      </li>
                                                      <li id="opt-616-19" data-index="40" data-selected="false" data-val="08:00 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="08:00 pm" class="nds-truncate">08:00 pm</span></span>
                                                      </li>
                                                      <li id="opt-617-19" data-index="41" data-selected="false" data-val="08:30 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="08:30 pm" class="nds-truncate">08:30 pm</span></span>
                                                      </li>
                                                      <li id="opt-618-19" data-index="42" data-selected="false" data-val="09:00 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="09:00 pm" class="nds-truncate">09:00 pm</span></span>
                                                      </li>
                                                      <li id="opt-619-19" data-index="43" data-selected="false" data-val="09:30 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="09:30 pm" class="nds-truncate">09:30 pm</span></span>
                                                      </li>
                                                      <li id="opt-620-19" data-index="44" data-selected="false" data-val="10:00 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="10:00 pm" class="nds-truncate">10:00 pm</span></span>
                                                      </li>
                                                      <li id="opt-621-19" data-index="45" data-selected="false" data-val="10:30 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="10:30 pm" class="nds-truncate">10:30 pm</span></span>
                                                      </li>
                                                      <li id="opt-622-19" data-index="46" data-selected="false" data-val="11:00 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="11:00 pm" class="nds-truncate">11:00 pm</span></span>
                                                      </li>
                                                      <li id="opt-623-19" data-index="47" data-selected="false" data-val="11:30 pm" role="option" tabindex="-1" aria-selected="false" class="nds-media nds-listbox__option nds-listbox__option_plain nds-media_small nds-media_center" style="height: 37px;">
                                                         <span class="nds-media__figure">
                                                            <c-icon>
                                                               <svg aria-hidden="true" class="nds-icon nds-listbox__icon-selected nds-icon-text-default nds-icon_x-small">
                                                                  <use xlink:href="#httpscommercecustomer09431vlocityinsvisualforcecomresource1604640002000vlocityinsnewportassetsiconsutilityspritesvgsymbolssvg_check"></use>
                                                               </svg>
                                                               <span class="nds-assistive-text"></span>
                                                            </c-icon>
                                                         </span>
                                                         <span class="nds-media__body"><span title="11:30 pm" class="nds-truncate">11:30 pm</span></span>
                                                      </li>
                                                   </ul>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </c-time-picker>
                                 </c-input>
                              </slot>
                           </c-omniscript-time>
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
  });