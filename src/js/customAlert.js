import { error } from '@pnotify/core';
import { defaults } from '@pnotify/core';
import { defaultModules } from './../../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from './../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
defaultModules.set(PNotifyMobile, {});
defaults.addClass = 'animate__animated animate__pulse pnotify__position';
defaults.mode = 'dark';
defaults.sticker = false;

export default function (errorMessage) {
    const myError = error({
    delay: 2500,
    text: errorMessage,
  });
  return myError;
}
