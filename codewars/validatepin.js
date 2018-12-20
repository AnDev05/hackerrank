function validatePIN (pin) {
    const replacedPin = pin.replace(new RegExp('\\d','g'),'');
    return (pin.length==4||pin.length==6)&&replacedPin.length==0;
}


function validatePIN (pin) {
   return new RegExp('^([\d]{4}|[\d]{6})$').test(pin);
}

