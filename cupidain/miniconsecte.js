let objectWithScale = {
    scale: 1,
    otherScaleProps: {
        x: 1,
        y: 1,
        z: 1
    }
};

// Accessing otherScaleProps through objectWithScale
console.log(objectWithScale.otherScaleProps.x); // Output: 1
console.log(objectWithScale.otherScaleProps.y); // Output: 1
console.log(objectWithScale.otherScaleProps.z); // Output: 1

// Modifying otherScaleProps through objectWithScale
objectWithScale.otherScaleProps.x = 2;
console.log(objectWithScale.otherScaleProps.x); // Output: 2
