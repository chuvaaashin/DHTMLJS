function transformText() {
    const inputStr = document.getElementById('inputString').value;
    const transformedStr = inputStr.split(' ').map(word =>
        word.slice(0, -1) + word.charAt(word.length - 1).toUpperCase()
    ).join(' ');
    document.getElementById('result').textContent = transformedStr;
}
