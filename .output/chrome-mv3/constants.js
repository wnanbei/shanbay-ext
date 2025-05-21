var constants=function(){"use strict";const t={};function e(){}function r(n,...c){}const o={debug:(...n)=>r(console.debug,...n),log:(...n)=>r(console.log,...n),warn:(...n)=>r(console.warn,...n),error:(...n)=>r(console.error,...n)};return(async()=>{try{return await t.main()}catch(n){throw o.error('The unlisted script "constants" crashed on startup!',n),n}})()}();
constants;
