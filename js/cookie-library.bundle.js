/*! For license information please see cookie-library.bundle.js.LICENSE.txt */
!function(){var e={566:function(e,o,t){var n;!function(){var i={},r="https:"===document.location.protocol;i.IMPLICIT_FLAG="0",i.EXPLICIT_FLAG="1",i.EXPLICIT_FLAG_EU="2",i.POLICY_REFRESH_DATE_MILLIS=new Date(2015,4,21,0,0,0,0).getTime(),i.PRIVACY_COOKIE_NAME="ckns_privacy",i.EXPLICIT_COOKIE_NAME="ckns_explicit",i.POLICY_COOKIE_NAME="ckns_policy",i.CURRENT_PRIVACY_POLICY="july2019";var c,a=["AT","AX","BE","BG","BL","CY","CZ","DE","DK","EE","ES","EU","FI","FR","GB","GF","GG","GI","GP","GR","HR","HU","IE","IM","IS","IT","JE","LI","LT","LU","LV","MF","MT","MQ","NL","NO","PL","PM","PT","RE","RO","SE","SI","SK","YT"],s={ads:!1,personalisation:!1,performance:!1,necessary:!0},u={},d={personalisation:"ckps_.+|X-AB-iplayer-.+|ACTVTYMKR|BBC_EXAMPLE_COOKIE|BBCIplayer|BBCiPlayerM|BBCIplayerSession|BBCMediaselector|BBCPostcoder|bbctravel|CGISESSID|ed|food-view|forceDesktop|h4|IMRID|locserv|MyLang|myloc|NTABS|ttduserPrefs|V5|BBCScienceDiscoveryPlaylist_.+|bitratePref|correctAnswerCount|genreCookie|highestQuestionScore|incorrectAnswerCount|longestStreak|MSCSProfile|programmes-oap-expanded|quickestAnswer|score|servicePanel|slowestAnswer|totalTimeForAllFormatted|v|BBCwords|score|correctAnswerCount|highestQuestionScore|hploc|BGUID|BBCWEACITY|mstouch|myway|BBCNewsCustomisation|cbbc_anim|cbeebies_snd|bbcsr_usersx|cbeebies_rd|BBC-Latest_Blogs|zh-enc|pref_loc|m|bbcEmp.+|recs-.+|_lvd2|_lvs2|tick|_fcap_CAM1|_rcc2|xbc|__tbc|__adblocker",performance:"ckpf_.+|optimizely.*|BBCLiveStatsClick|id|_em_.+|cookies_enabled|mbox|mbox-admin|mc_.+|omniture_unique|s_.+|sc_.+|adpolicyAdDisplayFrequency|ns_session|ns_cookietest|ns_ux|NO-SA|tr_pr1|gvsurvey|bbcsurvey|si_v|obuid|mm_.+|mmid|mmcore.+|mmpa.+|dtCookie|dtPC|rxVisitor|rxvt|dtSa|dtLatC|__gads|__pc_.+",ads:"ckad_.+|rsi_segs|c",necessary:"optimizelyEndUserId|ckns_.+|blq\\.dPref|idrxvr|s1|atidvisitor|atuserid|sa_labels|_cb_ls|_cb_svref|_chartbeat2|_chartbeat5|_chartbeat4|_cb|_cb_cp|SSO2-UID|BBC-H2-User|rmRpDetectReal|bbcComSurvey|IDENTITY_ENV|IDENTITY|IDENTITY-HTTPS|IDENTITY_SESSION|BBCCOMMENTSMODULESESSID|bbcBump.+|IVOTE_VOTE_HISTORY|pulse|BBCPG|BBCPGstat|ecos\\.dt|_sm_au_[c|d]|AMAuthCookie|AM_REDIRECT_BACK_SERVER_URL|AWSELB|(devN|uatN|n)ightfall(Session|Refresh)Token|amlbcookie|i00|FCCDCF"};function l(e,o){o&&o(new Error(e))}function m(e,o){if(void 0===e)return null;var t={};t.expires=new Date(0),o&&(t.domain=o.domain,t.path=o.path),document.cookie=h(e,"removed",t)}function p(e){var o=window.location.hostname.split(".");for(o.length,m(e),_(e);o.length&&-1==="|co.uk|com|".indexOf("|"+o.join(".")+"|");){if(o.length){var t=o.join(".");m(e,{domain:t}),_(e,t)}o.shift()}}function _(e,o){var t=window.location.pathname.split("/");for(m(e,o);t.length;){var n=t.join("/");""===n&&(n="/"),m(e,{domain:o,path:n}),m(e,{domain:"."+o,path:n}),t.pop()}}function C(){var e=new RegExp("(?:^|; ?)"+i.POLICY_COOKIE_NAME+"=(\\d)(\\d)(\\d)($|;)"),o=document.cookie.match(e);return o?{ads:!!+o[1],personalisation:!!+o[2],performance:!!+o[3],necessary:!0}:s}function E(){var e=new Date;return e.setYear(e.getFullYear()+1),e}function f(e,o,t){var n=E(),c=""+(e.ads?1:0)+(e.personalisation?1:0)+(e.performance?1:0),a=i._getCurrentDomain();i.set(i.POLICY_COOKIE_NAME,c,{domain:a,path:"/",expires:n,crossDomainEnabled:o,sameSite:"None",secure:r},t);var s=new Date(n.getTime());return s.setMonth(s.getMonth()+1),i.set("ckns_policy_exp",n.getTime(),{domain:a,path:"/",expires:s,sameSite:"None",secure:r}),e}function I(e,o,t){var n=E(),c=""+e,a=i._getCurrentDomain();return i.set(i.EXPLICIT_COOKIE_NAME,c,{domain:a,path:"/",expires:n,crossDomainEnabled:o,sameSite:"None",secure:r},t),e}function v(e){return(e=e.replace(/[^#$&+\^`|]/g,encodeURIComponent)).replace(/\(/g,"%28").replace(/\)/g,"%29")}function h(e,o,t){t&&t.domain&&t.domain;var n=e+"="+(o=(o+"").replace(/[^!#$&-+\--:<-\[\]-~]/g,encodeURIComponent));return n+=(t=t||{}).path?";path="+t.path:"",n+=t.domain?";domain="+t.domain:"",n+=t.expires?";expires="+t.expires.toUTCString():"",(n+=";sameSite="+t.sameSite||0)+(t.secure||r?";secure":"")}i.isEU=function(e){return!!e&&-1!==a.indexOf(e.toUpperCase())},i.cookieOvenRequest=function(e,o,t){try{e.open("GET",o,!0),e.send()}catch(e){t&&t(e)}},i.cookieOvenClient=function(e,o,t,n){if("withCredentials"in new XMLHttpRequest){var r=[i.POLICY_COOKIE_NAME,i.EXPLICIT_COOKIE_NAME];try{if(!t)throw new Error("Cannot make request to cross domain cookie service when domain is not set.");if(r.indexOf(e)<=-1)throw new Error("Cookie name is not in the whitelist accepted by the cross domain cookie service.");var c={com:"co.uk","co.uk":"com"}[t.match(/(co.uk|com)/)[0]],a=function(e){var o=new XMLHttpRequest;return o.withCredentials=!0,o.onload=function(){e&&e(null,o.status)},o.onerror=function(t){l("Request to cross domain cookie service encountered an error with code"+o.status+". "+t,e)},o.onabort=function(){l("Request to cross domain cookie service was aborted.",e)},o.ontimeout=function(){l("Request to cross domain cookie service timed out.",e)},o}(n),s=function(e,o,t){return window.orbitData.partialCookieOvenUrl+"."+e+"/"+o+"/"+t}(c,e,o);i.cookieOvenRequest(a,s,n)}catch(e){n&&n(e)}}else n(new Error("Cannot make request to cross domain cookie service as this browser does not support XmlHttpRequest with credentials."))},i.set=function(e,o,t,n){var r,c;if(void 0!==o){c=h(r=v(e),o,t);var a=t&&t.crossDomainEnabled;i.isAllowed(r)&&a&&i.cookieOvenClient(e,o,t.domain,n)}else r=function(e){var o=(""+e).match(/^([^=]+)(?==)/);return o&&o.length?o[0]:""}(e),c=e;i.isAllowed(r)&&(document.cookie=c)},i.isAllowed=function(e){return!(e&&e.match&&e.match(/^ckns_cookietest[0-9]*/))&&function(e){var o=JSON.stringify(e);if(void 0!==u[o])return u[o];var t="";for(var n in e)e.hasOwnProperty(n)&&d[n]&&!0===e[n]&&(t+=(t?"|":"")+d[n]);return u[o]=new RegExp("^("+(t||".*")+")$","i"),u[o]}(i.readPolicy()).test(e)},i.readPolicy=function(e){var o=C();return e?o[e]:o},i.analyticsPolicyString=function(){var e=C();return"ad"+ +e.ads+"ps"+ +e.personalisation+"pf"+ +e.performance},i.get=function(e){return e?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:document.cookie},i.isCookiePolicySet=function(){return null!==i.get(i.POLICY_COOKIE_NAME)},i.setImplicitPolicy=function(e){"gb"===e||"eu"===e?f({ads:!1,personalisation:!1,performance:!1,necessary:!0},!1):"row"===e&&f({ads:!0,personalisation:!0,performance:!0,necessary:!0},!1)},i.setDefaultCookiesSingleDomain=function(){f(s,!1)},i.setDefaultCookiesCrossDomain=function(){f(s,!0)},i.copyPolicyCookiesCrossDomain=function(e){f(i.readPolicy(),!0,e)},i.setCookiePolicyCrossDomain=function(e){f(e,!0)},i._setPolicy=function(e,o,t,n){var r=i.readPolicy();r[e]=!!o,f(r,!t,(function(){var e=i.get(i.EXPLICIT_COOKIE_NAME);null===e||e===i.IMPLICIT_FLAG?Promise.all([window.bbcuser.isUKCombined(),window.bbcuser.getCountry()]).then((function(e){var o=e[0],t=e[1],r=i.isEU(t);o||!r?I(i.EXPLICIT_FLAG,!0,n):r&&I(i.EXPLICIT_FLAG_EU,!0,n)})):n&&n()}))},i.isCookieExplicitSet=function(){return null!==i.get(i.EXPLICIT_COOKIE_NAME)},i.copyExplicitCookiesCrossDomain=function(e){I(i.get(i.EXPLICIT_COOKIE_NAME),!0,e)},i.setCookieExplicitCrossDomain=function(e){I(e,!0)},i.cookiesEnabled=function(){try{document.cookie="cookietest=1";var e=-1!==document.cookie.indexOf("cookietest=");return document.cookie="cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT",e}catch(e){return!1}},i.delete=function(e,o){m(e=v(e),o)},i.del=i.delete,i._crunch=function(){p("");for(var e=document.cookie.split(";"),o=0;o<e.length;o++){var t=e[o].split("=")[0].trim();this.isAllowed(t)||p(t)}},i._getCurrentDomain=function(){try{return window.location.hostname.toLowerCase().match(/.*(bbc\.co\.uk|bbc\.com)\/*/)[1]}catch(e){return}},i._getPolicy=i.readPolicy,String.prototype.trim||(c=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,String.prototype.trim=function(){return this.replace(c,"")}),function(e,o){var t=!1,n=!0,i=e.document,r=i.documentElement,c=i.addEventListener,a=c?"addEventListener":"attachEvent",s=c?"removeEventListener":"detachEvent",u=c?"":"on",d=function(n){"readystatechange"===n.type&&"complete"!=i.readyState||(("load"===n.type?e:i)[s](u+n.type,d,!1),!t&&(t=!0)&&o.call(e,n.type||n))},l=function(){try{r.doScroll("left")}catch(e){return void setTimeout(l,50)}d("poll")};if("complete"===i.readyState)o.call(e,"lazy");else{if(!c&&r.doScroll){try{n=!e.frameElement}catch(e){}n&&l()}i[a](u+"DOMContentLoaded",d,!1),i[a](u+"readystatechange",d,!1),e[a](u+"load",d,!1)}}(window,(function(){i._crunch()})),window.addEventListener?window.addEventListener("beforeunload",(function(){i._crunch()}),!1):window.attachEvent?window.attachEvent("onbeforeunload",(function(){i._crunch()})):window.onbeforeunload=function(){i._crunch()},window.bbccookies=i,void 0===(n=function(){return i}.call(o,t,o,e))||(e.exports=n)}()}},o={};!function t(n){var i=o[n];if(void 0!==i)return i.exports;var r=o[n]={exports:{}};return e[n](r,r.exports,t),r.exports}(566)}();