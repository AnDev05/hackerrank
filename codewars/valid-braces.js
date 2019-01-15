function validBraces(braces) {

    if (braces.length < 2)
        return false;

    let openBracket, ch;
    let stack = [];
    let openBraces = ['[', '{', '('];
    let closeBraces = [']', '}', ')'];
    for (let i = 0; i < braces.length; i++) {
        ch = braces[i];

        if (closeBraces.indexOf(ch) != -1) {
            openBracket = openBraces[closeBraces.indexOf(ch)];
            if (stack.length == 0 || (stack.pop() != openBracket)) {
                return false;
            }
        } else {
            stack.push(ch);
        }
    }

    return (stack.length == 0);
}