"use strict";
/*eslint-disable */
let value;
// instanceof
if (value instanceof Date) {
    value; // value is Date
}
// typeof
else if (typeof value === 'string') {
    value; // value is 'pineapple'
}
// Specific value check
else if (value === null) {
    value; // value is null
}
// Truthy/falsy check
else if (!value) {
    value; // value is undefined
}
// Some built-in functions
else if (Array.isArray(value)) {
    value; // value is [number]
}
// Property presence check
else if ('dateRange' in value) {
    value; // value is { dateRange: [Date, Date] }
}
else {
    value; // value is never
}
{
    const isSuccess = (response) => {
        return typeof response === 'object';
    };
    let response = {};
    if (isSuccess(response)) {
        console.log('response type is Success');
        console.log(response.data.length);
    }
    else {
        console.log('response type is any');
    }
}
