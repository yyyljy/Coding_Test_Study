function solution(targets) {
  let answer = 1;
  targets.sort((a, b) => a[1] - b[1]);
  console.log(targets);
  let [s, e] = targets.shift();
  for (const target of targets) {
    const [s_t, e_t] = target;
    if (s_t >= e) {
      answer += 1;
      e = e_t;
    }
  }
  return answer;
}

console.log(
  solution([
    [4, 5],
    [4, 8],
    [10, 14],
    [11, 13],
    [5, 12],
    [3, 7],
    [1, 4],
  ])
);
