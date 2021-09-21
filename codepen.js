// this file used on codepen as utilities
// powered by Cardano

console.log('[codepen.js] - running...');

/**
 * typeOf - Return Actual/Exact Type Of `$value`
 * @param {any} value - which value to return type
 * @return {string} type - exact type of `value`
 */
function typeOf(value) {
  let regex = /\[object (.*?)\]/i;
  let exactPrototype = Object.prototype.toString.call(value);
  let exactType = regex.exec(exactPrototype)[1];
  return exactType.toLowerCase();
}

/**
 * isType - check `value` be in `type`
 * @param {any} value - which value to equal type
 * @param {string} type - what type of equal
 * @return {boolean} isType - Resualt of Equalition [true|false]
 */
function isType(value, type) {
  // `type` should be passed and be {string|array[string]}
  if (!type && typeOf(type) !== 'string' && typeOf(type) !== 'array')
    return new Error(
      '[isType] : please, `type` argumant should be string or Array of types'
    );
  // if `type` is array, check some of type be match with value
  // ALT : type.some((t) => typeOf(value) === t);
  if (typeOf(type) === 'array') return type.indexOf(typeOf(value)) != -1;
  // only string type available, check value with type
  return typeOf(value) === type;
}

/**
