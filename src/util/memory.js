//Helper class for storing memory on devices
//Useful for devices which require bouncing messages
//Memory here will not be stored between service restarts
const state = {};

export default () => {
    return state;
}

//Attempt to set the current state; if value would be unchanged then return false
//Otherwise return true and set new value
export const setStateKeyAndNotifyIfChanged = (key, value) => {
    if(state[key] == value){
        console.log(`Assuming key of ${key} is unchanged with value: ${value}`);
        return false;
    } else {
        state[key] = value;
        console.log(`Assuming key of ${key} is changed with value: ${value}`);
        return true;
    }
}