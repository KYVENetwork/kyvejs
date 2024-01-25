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