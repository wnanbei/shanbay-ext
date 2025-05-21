var utils=function(){"use strict";const t={};function e(){}function n(r,...i){}const o={debug:(...r)=>n(console.debug,...r),log:(...r)=>n(console.log,...r),warn:(...r)=>n(console.warn,...r),error:(...r)=>n(console.error,...r)};return(async()=>{try{return await t.main()}catch(r){throw o.error('The unlisted script "utils" crashed on startup!',r),r}})()}();
utils;
