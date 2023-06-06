function quadrant(x, y) {
    const data = [
        [2,1],
        [3,4]
    ]

    const xa = x > 0 ? 1 : 0;
    const ya = y > 0 ? 0 : 1;

    return data [ya][xa];
}