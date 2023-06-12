// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-betainc@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";function i(t,r,i){return s(t)||s(r)||s(i)||r<=0||i<=0?NaN:t<=0?0:t===e?1:r*t>i?n(r*t/(i+r*t),r/2,i/2,!0,!1):n(i/(i+r*t),i/2,r/2,!0,!0)}function d(t,i){return s(t)||s(i)||t<=0||i<=0?r(NaN):function(r){if(s(r))return NaN;if(r<=0)return 0;if(r===e)return 1;if(t*r>i)return n(t*r/(i+t*r),t/2,i/2,!0,!1);return n(i/(i+t*r),i/2,t/2,!0,!0)}}t(i,"factory",d);export{i as default,d as factory};
//# sourceMappingURL=index.mjs.map
