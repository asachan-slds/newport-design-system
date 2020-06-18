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
  .add('Default', () => {
    return withExample(`<article class="nds-card">
      <div class="nds-card__header nds-grid">
        <header class="nds-media nds-media_center nds-has-flexi-truncate">
          <div class="nds-media__figure">
            <span class="nds-icon_container nds-icon-standard-contact" title="description of icon when needed">
              <svg class="nds-icon nds-icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#contact"></use>
              </svg>
            </span>
          </div>
          <div class="nds-media__body">
            <h2>
              <a href="javascript:void(0);" class="nds-card__header-link nds-truncate" title="[object Object]">
                <span class="nds-text-heading_small">Card Header</span>
              </a>
            </h2>
          </div>
        </header>
        <div class="nds-no-flex">
          <button class="nds-button nds-button_neutral">New</button>
        </div>
      </div>
      <div class="nds-card__body nds-card__body_inner">Card Body (custom goes in here)</div>
      <footer class="nds-card__footer">Card Footer</footer>
    </article>`);
  })
  .add('Empty ', () => {
    return withExample(`<article class="nds-card">
      <div class="nds-card__header nds-grid">
        <header class="nds-media nds-media_center nds-has-flexi-truncate">
          <div class="nds-media__figure">
            <span class="nds-icon_container nds-icon-standard-contact" title="description of icon when needed">
              <svg class="nds-icon nds-icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#contact"></use>
              </svg>
            </span>
          </div>
          <div class="nds-media__body">
            <h2>
              <a href="javascript:void(0);" class="nds-card__header-link nds-truncate" title="[object Object]">
                <span class="nds-text-heading_small">Card Header</span>
              </a>
            </h2>
          </div>
        </header>
        <div class="nds-no-flex">
          <button class="nds-button nds-button_neutral">New</button>
        </div>
      </div>
      <div class="nds-card__body"></div>
      <footer class="nds-card__footer"></footer>
    </article>`);
  })
  .add('Related List Table', () => {
    return withExample(`<article class="nds-card">
      <div class="nds-card__header nds-grid">
        <header class="nds-media nds-media_center nds-has-flexi-truncate">
          <div class="nds-media__figure">
            <span class="nds-icon_container nds-icon-standard-contact" title="description of icon when needed">
              <svg class="nds-icon nds-icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#contact"></use>
              </svg>
            </span>
          </div>
          <div class="nds-media__body">
            <h2>
              <a href="javascript:void(0);" class="nds-card__header-link nds-truncate" title="[object Object]">
                <span class="nds-text-heading_small">Contacts (1)</span>
              </a>
            </h2>
          </div>
        </header>
        <div class="nds-no-flex">
          <button class="nds-button nds-button_neutral">New</button>
        </div>
      </div>
      <div class="nds-card__body">
        <table class="nds-table nds-table_fixed-layout nds-table_bordered nds-no-row-hover nds-table_cell-buffer">
          <thead>
            <tr class="nds-text-title_caps">
              <th scope="col">
                <div class="nds-truncate" title="Name">Name</div>
              </th>
              <th scope="col">
                <div class="nds-truncate" title="Company">Company</div>
              </th>
              <th scope="col">
                <div class="nds-truncate" title="Title">Title</div>
              </th>
              <th scope="col">
                <div class="nds-truncate" title="Email">Email</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="nds-hint-parent">
              <th scope="row">
                <div class="nds-truncate" title="Adam Choi">
                  <a href="javascript:void(0);">Adam Choi</a>
                </div>
              </th>
              <td>
                <div class="nds-truncate" title="Company One">Company One</div>
              </td>
              <td>
                <div class="nds-truncate" title="Director of Operations">Director of Operations</div>
              </td>
              <td>
                <div class="nds-truncate" title="adam@company.com">adam@company.com</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer class="nds-card__footer">
        <a href="javascript:void(0);">
          View All
          <span class="nds-assistive-text">entity type</span>
        </a>
      </footer>
    </article>`);
  })
  .add('Newport Asset Detail', () => {
    return withExample(`<article class="nds-card nds-card_asset-detail">
      <div class="nds-card__header nds-grid">
        <header class="nds-media nds-media_center nds-has-flexi-truncate">
          <div class="nds-media__figure">
            <span class="nds-icon_container nds-icon-standard-contact" title="description of icon when needed">
              <svg class="nds-icon nds-icon_small" aria-hidden="true">
                <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#contact"></use>
              </svg>
            </span>
          </div>
          <div class="nds-media__body">
            <h2>
              <a href="javascript:void(0);" class="nds-card__header-link nds-truncate" title="[object Object]">
                <span class="nds-text-heading_small">Card Header</span>
              </a>
            </h2>
          </div>
        </header>
        <div class="nds-no-flex">
          <button class="nds-button nds-button_neutral">New</button>
        </div>
      </div>
      <div class="nds-card__body nds-card__body_inner">Card Body (custom goes in here)</div>
      <footer class="nds-card__footer">Card Footer</footer>
    </article>`);
  }).add('WSV - My Tasks', () => {
    return withExample(
      `<div c-wsvbasecard_wsvbasecard="" class="nds-medium-size_1-of-2 nds-m-top_medium nds-small-size_1-of-1">
    <div c-wsvbasecard_wsvbasecard="" class="nds-card via-nds-card--active wsv-main-card-style">
      <div c-wsvbasecard_wsvbasecard="" class="nds-card__header nds-grid wsv-header wsv-header-style">
        <header c-wsvbasecard_wsvbasecard="" class="nds-media nds-media_center nds-has-flexi-truncate">
          <div c-wsvbasecard_wsvbasecard="" class="nds-media__body">
            <h2 c-wsvbasecard_wsvbasecard="" tabindex="0"><span c-wsvbasecard_wsvbasecard="" class="wsv-messages">My
                tasks</span></h2>
          </div>
        </header>
      </div>
      <div c-wsvbasecard_wsvbasecard=""
        class="nds-card__body nds-p-around-small via-nds-card__body nds-grid nds-wrap nds-theme--default">
        <div c-wsvbasecard_wsvbasecard="" class="nds-size--1-of-1">
          <slot c-wsvbasecard_wsvbasecard="">
            <ul c-wsvcardactivestatetasks_wsvcardactivestatetasks="" class="nds-has-dividers_top">
              <li c-wsvcardactivestatetasks_wsvcardactivestatetasks="" class="nds-item">
                <c-wsv-card-task c-wsvcardactivestatetasks_wsvcardactivestatetasks="" c-wsvcardtask_wsvcardtask-host="">
                  <button c-wsvcardtask_wsvcardtask="" aria-label="task Apply for a Licence"
                    class="nds-text-link_reset wsv-button-no-border nds-size_1-of-1">
                    <article c-wsvcardtask_wsvcardtask="">
                      <div c-wsvcardtask_wsvcardtask="" class="nds-clearfix wsv-list-content-container">
                        <div c-wsvcardtask_wsvcardtask=""
                          class="via-nds-card__header nds-grid nds-grid--vertical-align-center nds-text-align_left wsv_hoverAllRow">
                          <div c-wsvcardtask_wsvcardtask="" class="nds-size--11-of-12"><span c-wsvcardtask_wsvcardtask=""
                              class="nds-list_vertical-space wsv_activeStateTaskLabel">Apply for a Licence</span></div>
                          <div c-wsvcardtask_wsvcardtask="" class="nds-size--1-of-12 nds-text-align_right">
                            <vlocity_ins-icon c-wsvcardtask_wsvcardtask=""><svg aria-hidden="true"
                                class="nds-icon nds-icon-standard-clock nds-icon-text-default nds-icon_x-small">
                                <use
                                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright">
                                </use>
                              </svg><span class="nds-assistive-text"></span></vlocity_ins-icon>
                          </div>
                        </div>
                      </div>
                    </article>
                  </button></c-wsv-card-task>
              </li>
              <li c-wsvcardactivestatetasks_wsvcardactivestatetasks="" class="nds-item">
                <c-wsv-card-task c-wsvcardactivestatetasks_wsvcardactivestatetasks="" c-wsvcardtask_wsvcardtask-host="">
                  <button c-wsvcardtask_wsvcardtask="" aria-label="task Notify WorkSafe Victoria"
                    class="nds-text-link_reset wsv-button-no-border nds-size_1-of-1">
                    <article c-wsvcardtask_wsvcardtask="">
                      <div c-wsvcardtask_wsvcardtask="" class="nds-clearfix wsv-list-content-container">
                        <div c-wsvcardtask_wsvcardtask=""
                          class="via-nds-card__header nds-grid nds-grid--vertical-align-center nds-text-align_left wsv_hoverAllRow">
                          <div c-wsvcardtask_wsvcardtask="" class="nds-size--11-of-12"><span c-wsvcardtask_wsvcardtask=""
                              class="nds-list_vertical-space wsv_activeStateTaskLabel">Notify WorkSafe Victoria</span>
                          </div>
                          <div c-wsvcardtask_wsvcardtask="" class="nds-size--1-of-12 nds-text-align_right">
                            <vlocity_ins-icon c-wsvcardtask_wsvcardtask=""><svg aria-hidden="true"
                                class="nds-icon nds-icon-standard-clock nds-icon-text-default nds-icon_x-small">
                                <use
                                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright">
                                </use>
                              </svg><span class="nds-assistive-text"></span></vlocity_ins-icon>
                          </div>
                        </div>
                      </div>
                    </article>
                  </button></c-wsv-card-task>
              </li>
              <li c-wsvcardactivestatetasks_wsvcardactivestatetasks="" class="nds-item">
                <c-wsv-card-task c-wsvcardactivestatetasks_wsvcardactivestatetasks="" c-wsvcardtask_wsvcardtask-host="">
                  <button c-wsvcardtask_wsvcardtask="" aria-label="task Report an incident"
                    class="nds-text-link_reset wsv-button-no-border nds-size_1-of-1">
                    <article c-wsvcardtask_wsvcardtask="">
                      <div c-wsvcardtask_wsvcardtask="" class="nds-clearfix wsv-list-content-container">
                        <div c-wsvcardtask_wsvcardtask=""
                          class="via-nds-card__header nds-grid nds-grid--vertical-align-center nds-text-align_left wsv_hoverAllRow">
                          <div c-wsvcardtask_wsvcardtask="" class="nds-size--11-of-12"><span c-wsvcardtask_wsvcardtask=""
                              class="nds-list_vertical-space wsv_activeStateTaskLabel">Report an incident</span></div>
                          <div c-wsvcardtask_wsvcardtask="" class="nds-size--1-of-12 nds-text-align_right">
                            <vlocity_ins-icon c-wsvcardtask_wsvcardtask=""><svg aria-hidden="true"
                                class="nds-icon nds-icon-standard-clock nds-icon-text-default nds-icon_x-small">
                                <use
                                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright">
                                </use>
                              </svg><span class="nds-assistive-text"></span></vlocity_ins-icon>
                          </div>
                        </div>
                      </div>
                    </article>
                  </button></c-wsv-card-task>
              </li>
              <li c-wsvcardactivestatetasks_wsvcardactivestatetasks="" class="nds-item">
                <c-wsv-card-task c-wsvcardactivestatetasks_wsvcardactivestatetasks="" c-wsvcardtask_wsvcardtask-host="">
                  <button c-wsvcardtask_wsvcardtask="" aria-label="task Add a business"
                    class="nds-text-link_reset wsv-button-no-border nds-size_1-of-1">
                    <article c-wsvcardtask_wsvcardtask="">
                      <div c-wsvcardtask_wsvcardtask="" class="nds-clearfix wsv-list-content-container">
                        <div c-wsvcardtask_wsvcardtask=""
                          class="via-nds-card__header nds-grid nds-grid--vertical-align-center nds-text-align_left wsv_hoverAllRow">
                          <div c-wsvcardtask_wsvcardtask="" class="nds-size--11-of-12"><span c-wsvcardtask_wsvcardtask=""
                              class="nds-list_vertical-space wsv_activeStateTaskLabel">Add a business</span></div>
                          <div c-wsvcardtask_wsvcardtask="" class="nds-size--1-of-12 nds-text-align_right">
                            <vlocity_ins-icon c-wsvcardtask_wsvcardtask=""><svg aria-hidden="true"
                                class="nds-icon nds-icon-standard-clock nds-icon-text-default nds-icon_x-small">
                                <use
                                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright">
                                </use>
                              </svg><span class="nds-assistive-text"></span></vlocity_ins-icon>
                          </div>
                        </div>
                      </div>
                    </article>
                  </button></c-wsv-card-task>
              </li>
              <li c-wsvcardactivestatetasks_wsvcardactivestatetasks="" class="nds-item">
                <c-wsv-card-task c-wsvcardactivestatetasks_wsvcardactivestatetasks="" c-wsvcardtask_wsvcardtask-host="">
                  <button c-wsvcardtask_wsvcardtask="" aria-label="task Learn about myWorkSafe and what you can do"
                    class="nds-text-link_reset wsv-button-no-border nds-size_1-of-1">
                    <article c-wsvcardtask_wsvcardtask="">
                      <div c-wsvcardtask_wsvcardtask="" class="nds-clearfix wsv-list-content-container">
                        <div c-wsvcardtask_wsvcardtask=""
                          class="via-nds-card__header nds-grid nds-grid--vertical-align-center nds-text-align_left wsv_hoverAllRow">
                          <div c-wsvcardtask_wsvcardtask="" class="nds-size--11-of-12"><span c-wsvcardtask_wsvcardtask=""
                              class="nds-list_vertical-space wsv_activeStateTaskLabel">Learn about myWorkSafe and what you
                              can do</span></div>
                          <div c-wsvcardtask_wsvcardtask="" class="nds-size--1-of-12 nds-text-align_right">
                            <vlocity_ins-icon c-wsvcardtask_wsvcardtask=""><svg aria-hidden="true"
                                class="nds-icon nds-icon-standard-clock nds-icon-text-default nds-icon_x-small">
                                <use
                                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#chevronright">
                                </use>
                              </svg><span class="nds-assistive-text"></span></vlocity_ins-icon>
                          </div>
                        </div>
                      </div>
                    </article>
                  </button></c-wsv-card-task>
              </li>
            </ul>
          </slot>
        </div>
      </div>
    </div>
  </div>`
    );
  }).add('WSV - Messages', () => {
    return withExample(
      `
      <div c-wsvbasecard_wsvbasecard="" class="nds-medium-size_1-of-2 nds-m-top_medium nds-small-size_1-of-1">
        <div c-wsvbasecard_wsvbasecard="" class="nds-card via-nds-card--active wsv-main-card-style">
          <div c-wsvbasecard_wsvbasecard="" class="nds-card__header nds-grid wsv-header wsv-header-style">
            <header c-wsvbasecard_wsvbasecard="" class="nds-media nds-media_center nds-has-flexi-truncate">
              <div c-wsvbasecard_wsvbasecard="" class="nds-media__body">
                <h2 c-wsvbasecard_wsvbasecard="" tabindex="0"><span c-wsvbasecard_wsvbasecard=""
                    class="wsv-messages">Messages</span></h2>
              </div>
              <div c-wsvbasecard_wsvbasecard="" class="nds-no-flex"><button c-wsvbasecard_wsvbasecard=""
                  class="nds-text-link_reset wsv-label wsv-button-no-border">View all</button></div>
            </header>
          </div>
          <div c-wsvbasecard_wsvbasecard=""
            class="nds-card__body nds-p-around-small via-nds-card__body nds-grid nds-wrap nds-theme--default">
            <div c-wsvbasecard_wsvbasecard="" class="nds-size--1-of-1">
              <slot c-wsvbasecard_wsvbasecard="">
                <ul c-wsvcardactivestatemessages_wsvcardactivestatemessages="">
                  <li c-wsvcardactivestatemessages_wsvcardactivestatemessages="" class="nds-item">
                    <c-wsv-card-message c-wsvcardactivestatemessages_wsvcardactivestatemessages=""
                      c-wsvcardmessage_wsvcardmessage-host=""><button c-wsvcardmessage_wsvcardmessage=""
                        aria-label="message from WorkSafe Victoria Mng. received on 12/05/2020 with subjectUI PoC Successful"
                        class="nds-text-link_reset wsv-button-no-border">
                        <div c-wsvcardmessage_wsvcardmessage="" class="wsv-message-container">
                          <article c-wsvcardmessage_wsvcardmessage="" class="nds-tile">
                            <div c-wsvcardmessage_wsvcardmessage="" class="nds-clearfix">
                              <h4 c-wsvcardmessage_wsvcardmessage="" title="WorkSafe Victoria Mng."
                                class="nds-tile__title nds-truncate nds-float_left wsv-message-sender">WorkSafe Victoria
                                Mng.</h4>
                              <div c-wsvcardmessage_wsvcardmessage="" class="nds-float_right wsv-message-attachment"><span
                                  c-wsvcardmessage_wsvcardmessage="" class="wsv-attachment-icon-rotate">
                                  <vlocity_ins-icon c-wsvcardmessage_wsvcardmessage=""><svg aria-hidden="true"
                                      class="nds-icon nds-icon-standard-clock wsv-attachment-icon-rotate nds-icon-text-default nds-icon_x-small">
                                      <use
                                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#attach">
                                      </use>
                                    </svg><span class="nds-assistive-text"></span></vlocity_ins-icon>
                                </span>12/05/2020</div>
                            </div>
                            <div c-wsvcardmessage_wsvcardmessage="" class="nds-tile__detail nds-clearfix">
                              <h4 c-wsvcardmessage_wsvcardmessage="" title="UI PoC Successful"
                                class="nds-tile__title nds-truncate wsv-message-subject">UI PoC Successful</h4>
                              <p c-wsvcardmessage_wsvcardmessage="" class="nds-truncate wsv-message-text"><span
                                  c-wsvcardmessage_wsvcardmessage="" class="wsv-show-in-mobile">-</span>Thank you for your
                                recent PoC of the Vlocity UI components working with WSV custom UI</p>
                            </div>
                          </article>
                        </div>
                      </button></c-wsv-card-message>
                  </li>
                  <li c-wsvcardactivestatemessages_wsvcardactivestatemessages="" class="nds-item">
                    <c-wsv-card-message c-wsvcardactivestatemessages_wsvcardactivestatemessages=""
                      c-wsvcardmessage_wsvcardmessage-host=""><button c-wsvcardmessage_wsvcardmessage=""
                        aria-label="message from Centrelink Department received on 10/05/2020 with subjectEnquiry about Vlocity UI PoC"
                        class="nds-text-link_reset wsv-button-no-border">
                        <div c-wsvcardmessage_wsvcardmessage="" class="wsv-message-container unread">
                          <article c-wsvcardmessage_wsvcardmessage="" class="nds-tile">
                            <div c-wsvcardmessage_wsvcardmessage="" class="nds-clearfix">
                              <h4 c-wsvcardmessage_wsvcardmessage="" title="Centrelink Department"
                                class="nds-tile__title nds-truncate nds-float_left wsv-message-sender">Centrelink Department
                              </h4>
                              <div c-wsvcardmessage_wsvcardmessage="" class="nds-float_right wsv-message-attachment"><span
                                  c-wsvcardmessage_wsvcardmessage="" class="wsv-attachment-icon-rotate">
                                  <vlocity_ins-icon c-wsvcardmessage_wsvcardmessage=""><svg aria-hidden="true"
                                      class="nds-icon nds-icon-standard-clock wsv-attachment-icon-rotate nds-icon-text-default nds-icon_x-small">
                                      <use
                                        xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#attach">
                                      </use>
                                    </svg><span class="nds-assistive-text"></span></vlocity_ins-icon>
                                </span>10/05/2020</div>
                            </div>
                            <div c-wsvcardmessage_wsvcardmessage="" class="nds-tile__detail nds-clearfix">
                              <h4 c-wsvcardmessage_wsvcardmessage="" title="Enquiry about Vlocity UI PoC"
                                class="nds-tile__title nds-truncate wsv-message-subject">Enquiry about Vlocity UI PoC</h4>
                              <p c-wsvcardmessage_wsvcardmessage="" class="nds-truncate wsv-message-text"><span
                                  c-wsvcardmessage_wsvcardmessage="" class="wsv-show-in-mobile">-</span>Hi WSV team, we
                                heard Vlocity is doing a UI PoC for your team...</p>
                            </div>
                          </article>
                        </div>
                      </button></c-wsv-card-message>
                  </li>
                  <li c-wsvcardactivestatemessages_wsvcardactivestatemessages="" class="nds-item">
                    <c-wsv-card-message c-wsvcardactivestatemessages_wsvcardactivestatemessages=""
                      c-wsvcardmessage_wsvcardmessage-host=""><button c-wsvcardmessage_wsvcardmessage=""
                        aria-label="message from WorkSafe Victoria received on 01/05/2020 with subjectAccount Update Confirmation Mail"
                        class="nds-text-link_reset wsv-button-no-border">
                        <div c-wsvcardmessage_wsvcardmessage="" class="wsv-message-container unread">
                          <article c-wsvcardmessage_wsvcardmessage="" class="nds-tile">
                            <div c-wsvcardmessage_wsvcardmessage="" class="nds-clearfix">
                              <h4 c-wsvcardmessage_wsvcardmessage="" title="WorkSafe Victoria"
                                class="nds-tile__title nds-truncate nds-float_left wsv-message-sender">WorkSafe Victoria
                              </h4>
                              <div c-wsvcardmessage_wsvcardmessage="" class="nds-float_right wsv-message-attachment"><span
                                  c-wsvcardmessage_wsvcardmessage="" class="wsv-attachment-icon-rotate">
                                  <vlocity_ins-icon c-wsvcardmessage_wsvcardmessage=""><svg aria-hidden="true"
                                      class="nds-icon nds-icon-standard-clock wsv-attachment-icon-rotate nds-icon-text-default nds-icon_x-small">
                                      <use
                                      xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#attach">
                                      </use>
                                    </svg><span class="nds-assistive-text"></span></vlocity_ins-icon>
                                </span>01/05/2020</div>
                            </div>
                            <div c-wsvcardmessage_wsvcardmessage="" class="nds-tile__detail nds-clearfix">
                              <h4 c-wsvcardmessage_wsvcardmessage="" title="Account Update Confirmation Mail"
                                class="nds-tile__title nds-truncate wsv-message-subject">Account Update Confirmation Mail
                              </h4>
                              <p c-wsvcardmessage_wsvcardmessage="" class="nds-truncate wsv-message-text"><span
                                  c-wsvcardmessage_wsvcardmessage="" class="wsv-show-in-mobile">-</span>Hi Paul, This is to
                                let you know your details have been updated in our systems.</p>
                            </div>
                          </article>
                        </div>
                      </button></c-wsv-card-message>
                  </li>
                </ul>
              </slot>
            </div>
          </div>
        </div>
      </div>
    `
    );
  }).add('WSV - In progress activity', () => {
    return withExample(
      `
      <div c-wsvbasecard_wsvbasecard="" class="nds-medium-size_1-of-2 nds-m-top_medium nds-small-size_1-of-1">
          <div c-wsvbasecard_wsvbasecard="" class="nds-card via-nds-card--active wsv-main-card-style">
              <div c-wsvbasecard_wsvbasecard="" class="nds-card__header nds-grid wsv-header wsv-header-style">
                  <header c-wsvbasecard_wsvbasecard="" class="nds-media nds-media_center nds-has-flexi-truncate">
                      <div c-wsvbasecard_wsvbasecard="" class="nds-media__body">
                          <h2 c-wsvbasecard_wsvbasecard="" tabindex="0"><span c-wsvbasecard_wsvbasecard=""
                                  class="wsv-messages">In progress activity</span></h2>
                      </div>
                      <div c-wsvbasecard_wsvbasecard="" class="nds-no-flex"><button c-wsvbasecard_wsvbasecard=""
                              class="nds-text-link_reset wsv-label wsv-button-no-border">View all</button></div>
                  </header>
              </div>
              <div c-wsvbasecard_wsvbasecard=""
                  class="nds-card__body nds-p-around-small via-nds-card__body nds-grid nds-wrap nds-theme--default">
                  <div c-wsvbasecard_wsvbasecard="" class="nds-size--1-of-1">
                      <slot c-wsvbasecard_wsvbasecard="">
                          <ul c-wsvcardactivestateactivity_wsvcardactivestateactivity="" class="nds-has-dividers_top">
                              <li c-wsvcardactivestateactivity_wsvcardactivestateactivity="" class="nds-item">
                                  <c-wsv-card-activity c-wsvcardactivestateactivity_wsvcardactivestateactivity=""
                                      c-wsvcardactivity_wsvcardactivity-host=""><button
                                          c-wsvcardactivity_wsvcardactivity="" aria-label="10 Active Claims"
                                          class="nds-text-link_reset wsv-button-no-border nds-size_1-of-1">
                                          <article c-wsvcardactivity_wsvcardactivity="" class="nds-media">
                                              <div c-wsvcardactivity_wsvcardactivity=""
                                                  class="nds-clearfix wsv-list-content-container">
                                                  <div c-wsvcardactivity_wsvcardactivity=""
                                                      class="nds-media__figure nds-float_left">
                                                      <vlocity_ins-icon c-wsvcardactivity_wsvcardactivity=""><svg
                                                              aria-hidden="true"
                                                              class="nds-icon nds-icon-standard-clock nds-icon-text-default nds-icon_x-small"
                                                              style="fill: rgb(71, 123, 76);">
                                                              <use
                                                                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#check">
                                                              </use>
                                                          </svg><span class="nds-assistive-text"></span>
                                                      </vlocity_ins-icon>
                                                  </div>
                                                  <div c-wsvcardactivity_wsvcardactivity=""
                                                      class="nds-float_left wsv-list-item-label"><strong
                                                          c-wsvcardactivity_wsvcardactivity="">Active Claims</strong>
                                                  </div>
                                                  <div c-wsvcardactivity_wsvcardactivity="" class="nds-float_right">
                                                      <div c-wsvcardactivity_wsvcardactivity=""
                                                          class="wsv-list-item-badge">10</div>
                                                  </div>
                                              </div>
                                          </article>
                                      </button></c-wsv-card-activity>
                              </li>
                              <li c-wsvcardactivestateactivity_wsvcardactivestateactivity="" class="nds-item">
                                  <c-wsv-card-activity c-wsvcardactivestateactivity_wsvcardactivestateactivity=""
                                      c-wsvcardactivity_wsvcardactivity-host=""><button
                                          c-wsvcardactivity_wsvcardactivity="" aria-label="3 Claims pending approval"
                                          class="nds-text-link_reset wsv-button-no-border nds-size_1-of-1">
                                          <article c-wsvcardactivity_wsvcardactivity="" class="nds-media">
                                              <div c-wsvcardactivity_wsvcardactivity=""
                                                  class="nds-clearfix wsv-list-content-container">
                                                  <div c-wsvcardactivity_wsvcardactivity=""
                                                      class="nds-media__figure nds-float_left">
                                                      <vlocity_ins-icon c-wsvcardactivity_wsvcardactivity=""><svg
                                                              aria-hidden="true"
                                                              class="nds-icon nds-icon-standard-clock nds-icon-text-default nds-icon_x-small"
                                                              style="fill: rgb(117, 117, 117);">
                                                              <use
                                                                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#clock">
                                                              </use>
                                                          </svg><span class="nds-assistive-text"></span>
                                                      </vlocity_ins-icon>
                                                  </div>
                                                  <div c-wsvcardactivity_wsvcardactivity=""
                                                      class="nds-float_left wsv-list-item-label"><strong
                                                          c-wsvcardactivity_wsvcardactivity="">Claims pending
                                                          approval</strong></div>
                                                  <div c-wsvcardactivity_wsvcardactivity="" class="nds-float_right">
                                                      <div c-wsvcardactivity_wsvcardactivity=""
                                                          class="wsv-list-item-badge">3</div>
                                                  </div>
                                              </div>
                                          </article>
                                      </button></c-wsv-card-activity>
                              </li>
                              <li c-wsvcardactivestateactivity_wsvcardactivestateactivity="" class="nds-item">
                                  <c-wsv-card-activity c-wsvcardactivestateactivity_wsvcardactivestateactivity=""
                                      c-wsvcardactivity_wsvcardactivity-host=""><button
                                          c-wsvcardactivity_wsvcardactivity="" aria-label="2 Draft Claims"
                                          class="nds-text-link_reset wsv-button-no-border nds-size_1-of-1">
                                          <article c-wsvcardactivity_wsvcardactivity="" class="nds-media">
                                              <div c-wsvcardactivity_wsvcardactivity=""
                                                  class="nds-clearfix wsv-list-content-container">
                                                  <div c-wsvcardactivity_wsvcardactivity=""
                                                      class="nds-media__figure nds-float_left">
                                                      <vlocity_ins-icon c-wsvcardactivity_wsvcardactivity=""><svg
                                                              aria-hidden="true"
                                                              class="nds-icon nds-icon-standard-clock nds-icon-text-default nds-icon_x-small"
                                                              style="fill: rgb(117, 117, 117);">
                                                              <use
                                                                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#edit">
                                                              </use>
                                                          </svg><span class="nds-assistive-text"></span>
                                                      </vlocity_ins-icon>
                                                  </div>
                                                  <div c-wsvcardactivity_wsvcardactivity=""
                                                      class="nds-float_left wsv-list-item-label"><strong
                                                          c-wsvcardactivity_wsvcardactivity="">Draft Claims</strong></div>
                                                  <div c-wsvcardactivity_wsvcardactivity="" class="nds-float_right">
                                                      <div c-wsvcardactivity_wsvcardactivity=""
                                                          class="wsv-list-item-badge">2</div>
                                                  </div>
                                              </div>
                                          </article>
                                      </button></c-wsv-card-activity>
                              </li>
                              <li c-wsvcardactivestateactivity_wsvcardactivestateactivity="" class="nds-item">
                                  <c-wsv-card-activity c-wsvcardactivestateactivity_wsvcardactivestateactivity=""
                                      c-wsvcardactivity_wsvcardactivity-host=""><button
                                          c-wsvcardactivity_wsvcardactivity="" aria-label="2 Claims requiring action"
                                          class="nds-text-link_reset wsv-button-no-border nds-size_1-of-1">
                                          <article c-wsvcardactivity_wsvcardactivity="" class="nds-media">
                                              <div c-wsvcardactivity_wsvcardactivity=""
                                                  class="nds-clearfix wsv-list-content-container">
                                                  <div c-wsvcardactivity_wsvcardactivity=""
                                                      class="nds-media__figure nds-float_left">
                                                      <vlocity_ins-icon c-wsvcardactivity_wsvcardactivity=""><svg
                                                              aria-hidden="true"
                                                              class="nds-icon nds-icon-standard-clock nds-icon-text-default nds-icon_x-small"
                                                              style="fill: rgb(197, 32, 7);">
                                                              <use
                                                                  xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#warning">
                                                              </use>
                                                          </svg><span class="nds-assistive-text"></span>
                                                      </vlocity_ins-icon>
                                                  </div>
                                                  <div c-wsvcardactivity_wsvcardactivity=""
                                                      class="nds-float_left wsv-list-item-label"><strong
                                                          c-wsvcardactivity_wsvcardactivity="">Claims requiring
                                                          action</strong></div>
                                                  <div c-wsvcardactivity_wsvcardactivity="" class="nds-float_right">
                                                      <div c-wsvcardactivity_wsvcardactivity=""
                                                          class="wsv-list-item-badge">2</div>
                                                  </div>
                                              </div>
                                          </article>
                                      </button></c-wsv-card-activity>
                              </li>
                          </ul>
                      </slot>
                  </div>
              </div>
          </div>
      </div>
  `
    );
  }).add('WSV - Profile Card', () => {
    return withExample(
      `
      <div c-wsvcardprofilebase_wsvcardprofilebase=""
          class="nds-medium-size_1-of-2 nds-m-top_medium nds-small-size_1-of-1">
          <div c-wsvcardprofilebase_wsvcardprofilebase="" class="nds-card via-nds-card--active wsv-main-card-style">
              <div c-wsvcardprofilebase_wsvcardprofilebase="" class="via-nds-card__header nds-container_center">
                  <div c-wsvcardprofilebase_wsvcardprofilebase=""
                      class="nds-size-1-of-1 nds-text-align_center nds-p-top_medium">
                      <div c-wsvcardprofilebase_wsvcardprofilebase="" class="nds-media__figure">
                          <div c-wsvcardprofilebase_wsvcardprofilebase="" class="outerCircle nds-align_absolute-center">
                              <img c-wsvcardprofilebase_wsvcardprofilebase="" alt="organization"
                                  src="/assets/icons/utility/photo_120.png" style="height: 50%; width: 50%;"></div>
                      </div>
                      <div c-wsvcardprofilebase_wsvcardprofilebase="" class="nds-media__body nds-truncate">
                          <h3 c-wsvcardprofilebase_wsvcardprofilebase=""></h3>
                          <p c-wsvcardprofilebase_wsvcardprofilebase="">
                              <vlocity_ins-output-field c-wsvcardprofilebase_wsvcardprofilebase=""><span></span>
                              </vlocity_ins-output-field>
                          </p>
                      </div>
                      <div c-wsvcardprofilebase_wsvcardprofilebase=""
                          class="nds-text-heading--medium nds-p-around_medium"><strong
                              c-wsvcardprofilebase_wsvcardprofilebase="">Tarun Taverna</strong></div>
                      <div c-wsvcardprofilebase_wsvcardprofilebase="" class="nds-p-around_medium nds-p-bottom_large"><a
                              c-wsvcardprofilebase_wsvcardprofilebase="" href="#"
                              target="_blank" class="nds-text-link nds-text-heading_small"><u
                                  c-wsvcardprofilebase_wsvcardprofilebase="">View business profile</u></a></div>
                  </div>
              </div>
              <div c-wsvcardprofilebase_wsvcardprofilebase="" class="nds-border_top nds-card__body">
                  <div c-wsvcardprofilebase_wsvcardprofilebase=""
                      class="nds-p-left_xx-large nds-p-right_xx-large nds-p-top_large nds-p-bottom_x-small">
                      <div c-wsvcardprofilebase_wsvcardprofilebase=""
                          class="nds-text-heading_medium wsv-text-align-mobile"><strong
                              c-wsvcardprofilebase_wsvcardprofilebase="">Manage team</strong></div>
                  </div>
                  <div c-wsvcardprofilebase_wsvcardprofilebase=""
                      class="nds-grid nds-p-left_x-large nds-p-right_x-large nds-wrap nds-text-align_center">
                      <div c-wsvcardprofilebase_wsvcardprofilebase=""
                          class="nds-p-horizontal_medium nds-p-vertical_medium nds-medium-size_1-of-1 nds-small-size_1-of-1 wsv-box-align-mobile nds-large-size_1-of-3">
                          <c-wsv-card-member-tile c-wsvcardprofilebase_wsvcardprofilebase=""
                              c-wsvcardmembertile_wsvcardmembertile-host="">
                              <vlocity_ins-action c-wsvcardmembertile_wsvcardmembertile="">
                                  <slot name="action"></slot>
                                  <div class="action-template">
                                      <slot><button c-wsvcardmembertile_wsvcardmembertile="" aria-label="Tarun Kumar"
                                              class="wsv-button-no-border">
                                              <div c-wsvcardmembertile_wsvcardmembertile=""
                                                  class="nds-box nds-text-align_center wsv-card-team-member-box">
                                                  <div c-wsvcardmembertile_wsvcardmembertile=""
                                                      class="nds-size_1-of-1 nds-text-heading--small nds-p-top_medium">
                                                      Tarun Kumar</div>
                                                  <div c-wsvcardmembertile_wsvcardmembertile=""
                                                      class="nds-size_1-of-1 nds-text-heading--small">(you)</div>
                                                  <div c-wsvcardmembertile_wsvcardmembertile=""
                                                      class="nds-size_1-of-1 nds-text-body_regular nds-p-top_medium">
                                                      <strong c-wsvcardmembertile_wsvcardmembertile="">Admin</strong>
                                                  </div>
                                                  <div c-wsvcardmembertile_wsvcardmembertile=""
                                                      class="nds-size_1-of-1 nds-p-top_medium">
                                                      <div c-wsvcardmembertile_wsvcardmembertile=""
                                                          class="nds-text-body_small nds-text-body_regular"
                                                          style="display: contents;"></div>
                                                  </div>
                                              </div>
                                          </button></slot>
                                  </div>
                                  <c-navigate-action data-name="Custom Action">
                                      <slot></slot>
                                  </c-navigate-action>
                              </vlocity_ins-action>
                          </c-wsv-card-member-tile>
                      </div>
                      <div c-wsvcardprofilebase_wsvcardprofilebase=""
                          class="nds-p-horizontal_medium nds-p-vertical_medium nds-medium-size_1-of-1 nds-small-size_1-of-1 wsv-box-align-mobile nds-large-size_1-of-3">
                          <c-wsv-card-member-tile c-wsvcardprofilebase_wsvcardprofilebase=""
                              c-wsvcardmembertile_wsvcardmembertile-host="">
                              <vlocity_ins-action c-wsvcardmembertile_wsvcardmembertile="">
                                  <slot name="action"></slot>
                                  <div class="action-template">
                                      <slot><button c-wsvcardmembertile_wsvcardmembertile="" aria-label="Archana"
                                              class="wsv-button-no-border">
                                              <div c-wsvcardmembertile_wsvcardmembertile=""
                                                  class="nds-box nds-text-align_center wsv-card-team-member-box">
                                                  <div c-wsvcardmembertile_wsvcardmembertile=""
                                                      class="nds-size_1-of-1 nds-text-heading--small nds-p-top_medium">
                                                      Archana</div>
                                                  <div c-wsvcardmembertile_wsvcardmembertile=""
                                                      class="nds-size_1-of-1 nds-text-body_regular nds-p-top_medium">
                                                      <strong c-wsvcardmembertile_wsvcardmembertile="">Admin</strong>
                                                  </div>
                                                  <div c-wsvcardmembertile_wsvcardmembertile=""
                                                      class="nds-size_1-of-1 nds-p-top_medium">
                                                      <div c-wsvcardmembertile_wsvcardmembertile=""
                                                          class="nds-text-body_small nds-text-body_regular"
                                                          style="display: contents;"></div>
                                                  </div>
                                              </div>
                                          </button></slot>
                                  </div>
                                  <c-navigate-action data-name="Custom Action">
                                      <slot></slot>
                                  </c-navigate-action>
                              </vlocity_ins-action>
                          </c-wsv-card-member-tile>
                      </div>
                      <div c-wsvcardprofilebase_wsvcardprofilebase=""
                          class="nds-p-horizontal_medium nds-p-vertical_medium nds-medium-size_1-of-1 nds-small-size_1-of-1 wsv-box-align-mobile nds-large-size_1-of-3">
                          <vlocity_ins-action c-wsvcardprofilebase_wsvcardprofilebase="">
                              <slot name="action"></slot>
                              <div class="action-template">
                                  <slot><button c-wsvcardprofilebase_wsvcardprofilebase="" aria-label="Add Team Member"
                                          class="wsv-button-no-border">
                                          <div c-wsvcardprofilebase_wsvcardprofilebase=""
                                              class="nds-box nds-text-align_center wsv-add-team-member-box">
                                              <div c-wsvcardprofilebase_wsvcardprofilebase="" class="nds-p-top_medium">
                                                  <vlocity_ins-icon c-wsvcardprofilebase_wsvcardprofilebase=""><svg
                                                          aria-hidden="true"
                                                          class="nds-icon nds-icon-text-default nds-icon_small"
                                                          style="fill: black;">
                                                          <use
                                                              xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#add">
                                                          </use>
                                                      </svg><span class="nds-assistive-text"></span></vlocity_ins-icon>
                                              </div>
                                              <div c-wsvcardprofilebase_wsvcardprofilebase=""
                                                  class="nds-text-heading--small nds-p-top_medium">Add team member</div>
                                          </div>
                                      </button></slot>
                              </div>
                              <c-navigate-action data-name="Custom Action">
                                  <slot></slot>
                              </c-navigate-action>
                          </vlocity_ins-action>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `
    );
  });
