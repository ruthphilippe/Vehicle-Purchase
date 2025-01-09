// Task #1
export function needsLicense(kind) {
  return kind === 'car' || kind === 'truck';
}

//Task #2
export function chooseVehicle(option1, option2) {
  if (option1 < option2) {
    return option1 + " is clearly the better choice.";
  } else {
    return option2 + " is clearly the better choice.";
  }
}

//Task #3
export function calculateResellPrice(originalPrice, age) {
  if (originalPrice) {;
    if (age < 3) {
      return originalPrice * 0.8;
    } else if (age > 10) {
      return originalPrice * 0.5;
    }else {
      return originalPrice * 0.7;
    }
}
}
