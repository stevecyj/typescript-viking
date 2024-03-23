var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
myLib.version;
export function isString(value) {
    return typeof value === "string" || value instanceof String;
}
export function isNumber(value) {
    return typeof value === "number" && isFinite(value);
}
export function isArray(value) {
    return value && typeof value === "object" && value.constructor === Array;
}
export function copyArray(value) {
    return __spreadArray([], value, true);
}
