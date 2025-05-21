var types=function(){"use strict";const t={};function o(){}function n(r,...c){}const e={debug:(...r)=>n(console.debug,...r),log:(...r)=>n(console.log,...r),warn:(...r)=>n(console.warn,...r),error:(...r)=>n(console.error,...r)};return(async()=>{try{return await t.main()}catch(r){throw e.error('The unlisted script "types" crashed on startup!',r),r}})()}();
types;
