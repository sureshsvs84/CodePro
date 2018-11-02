import { countryCode } from '../constants/appConstants';
import { localeConstants_en } from '../constants/locale_en';
import _ from 'lodash';

export const getlocalizeData = () => {
    const selectedLanguage = 'EN';
    if (selectedLanguage === countryCode.ENGLISH) {
        return localeConstants_en;
    }
    return localeConstants_en;
};
export const fromPairs = function(obj){
    return _.fromPairs(obj);
};
export const toPairs = function(obj){
    return _.toPairs(obj);
};
export const arrayMap = function(arrayName, element){
    return _.map(arrayName,element);
};
const getClass = function (val) {
    return Object.prototype.toString.call(val)
        .match(/^\[object\s(.*)\]$/)[1];
};

//Defines the type of the value, extended typeof
const whatis = function (val) {

    if (val === undefined) {
        return 'undefined';
    }
    if (val === null) {
        return 'null';
    }

    let type = typeof val;

    if (type === 'object') {
        type = getClass(val)
            .toLowerCase();
    }

    if (type === 'number') {
        if (val.toString()
            .indexOf('.') > 0) {
            return 'float';
        } else {
            return 'integer';
        }
    }

    return type;
};

export const isKey = function(obj,key){
    return _.has(obj,key);
};

export const isEmpty = function (obj) {
    if (obj === null) return true;
    if (_.isArray(obj) || _.isString(obj)) return obj.length === 0;
    for (const key in obj) if (_.has(obj, key)) return false;
    return true;
};

//method returns default value of type specified
//in case type is not specified, array is considered as default
export const isEmptyReturnDefault = function (data, type) {
    type = type ? type : 'array';
    const result = isEmpty(data);
    if (result && type === 'number') {
        return 0;
    }
    if (result && type === 'boolean') {
        return false;
    }
    if (result && type === 'array') {
        return [];
    }
    if (result && type === 'object') {
        return {};
    }

    return data;
};

// Returns if a value is a function
export const isFunction = function (value) {
    return typeof value === 'function';
};

export const mergeobjects = (dest, src) => {
    return _.merge({},dest, src);
};

export const truncate = (text, length) => {
    return _.truncate(text, {
        length: length ? length : 50,
        separator: ' '
    });
};
const compareObjects = function (a, b) {
    if (a === b) {
        return true;
    }
    for (const i in a) {
        if (b.hasOwnProperty(i)) {
            if (!equal(a[i], b[i])) return false;
        } else {
            return false;
        }
    }

    for (const i in b) {
        if (!a.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
};

const compareArrays = function (a, b) {
    if (a === b) {
        return true;
    }
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (!equal(a[i], b[i])) return false;
    }

    return true;
};

const _equal = {};
_equal.array = compareArrays;
_equal.object = compareObjects;
_equal.date = function (a, b) {
    return a.getTime() === b.getTime();
};
_equal.regexp = function (a, b) {
    return a.toString() === b.toString();
};

export const equal = function (a, b) {
    if (a !== b) {
        const atype = whatis(a),
            btype = whatis(b);

        if (atype === btype) {
            return _equal.hasOwnProperty(atype) ? _equal[atype](a, b) : a === b;
        }

        return false;
    }

    return true;
};