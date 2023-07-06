function solution(dots) {
  var answer = 0;
  let p1 = dots.splice(0, 1);
  let tmp = dots.slice();
  for (let i = 0; i < dots.length; i++) {
    let p2 = tmp.splice(i, 1);
    console.log(p1, p2);
    let a1 = (p1[0][0] - p2[0][0]) / (p1[0][1] - p2[0][1]);
    let a2 = (tmp[0][0] - tmp[1][0]) / (tmp[0][1] - tmp[1][1]);
    console.log(a1, a2);
    if (a1 == a2) return 1;
    tmp = dots.slice();
  }
  return answer;
}

solution([
  [1, 4],
  [9, 2],
  [3, 8],
  [11, 6],
]);
[4,12]
[20,8]