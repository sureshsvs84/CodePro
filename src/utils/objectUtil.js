import { cloneDeep,keys,get } from 'lodash';

class ObjectUtil {
    cloneDeep(obj) {
        return cloneDeep(obj);
    }
    fetchKey(obj, index) {
        return keys(obj)[index];
    }

    mapObject(object, callback) {
        return Object.keys(object).map(function (key, index) {
            return callback(index, key, object[key]);
        });
    }
    isEmpty(obj){
        for (const x in obj) { if (obj.hasOwnProperty(x))  return false; }
        return true;  
    }
    getValue(obj, path){
        return get(obj, path);
    }
    keys(objKeys){
        const result = Object.keys(objKeys);
        return result;
    }
}

const objectUtil = new ObjectUtil();
export default objectUtil;