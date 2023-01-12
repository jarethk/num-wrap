function wrap(val, min, max) {
    let dist = (max - min) + 1;
    if (val < min) {
        let m = Math.abs(min - val - 1) % (dist);
        dl(` ** ${val} , ${m} ${dist}`)
        return (max - m);
    } else if (val > max) {
        let m = Math.abs(val - max - 1) % (dist);
        return min + m;
    } else {
        return val;
    }
}
