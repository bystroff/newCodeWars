function barTriang([p1, p2], [p3,p4],[p5,p6]){
    return [+((p1 + p5 + p3) / 3).toFixed(4), +((p2 + p4 + p6) / 3).toFixed(4)];
}