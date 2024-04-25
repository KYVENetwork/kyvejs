export function shuffle(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to chunk array into groups
export function chunkArray(arr: any, chunkSize: any) {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
}

export function removeLeadingZero(inputStr: string): string {
  if (inputStr[2] === "0") {
    return inputStr.slice(0, 2) + inputStr.slice(3);
  } else {
    return inputStr;
  }
}

export function removeOutputProperties(obj: any, removeKeys: string[]) {
  if (!obj || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      obj[i] = removeOutputProperties(obj[i], removeKeys);
    }
  } else {
    for (const key in obj) {
      if (removeKeys.some(removeKey => key.includes(removeKey))) {
        delete obj[key];
      } else if (typeof obj[key] === 'object' && obj[key] !== null) {
        obj[key] = removeOutputProperties(obj[key], removeKeys);
      }
    }
  }

  return obj;
}