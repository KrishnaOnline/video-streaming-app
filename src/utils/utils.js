var nameList = [];
for(let i =0; i<=100; i++) {
    nameList.push(`User${i}`);
}

export function generateUsers() {
    var finalName = nameList[Math.floor(Math.random() * nameList.length)];
    return finalName;
};

export function generateMessages(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789⭐⭐⭐⭐⭐⭐';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}