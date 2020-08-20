export const requiredField = (value) =>
    value ? undefined : "Field is required";


export const maxLengthCreator = (maxLength) => (value) =>
    value.length > maxLength ? `Max length is ${maxLength} symbols` : undefined;
