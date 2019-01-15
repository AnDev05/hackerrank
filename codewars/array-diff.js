function array_diff(a, b) {
    return a.filter(item => !b.includes(item));
}