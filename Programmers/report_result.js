function solution(id_list, report, k) {
  var answer = new Array(id_list.length).fill(0);
  if (report.length < k) return answer;
  let reported = [];

  for (const r of report) {
    const tmp = r.split(" ");
    if (tmp[0] == tmp[1]) continue;
    if (!reported[tmp[1]]) {
      reported[tmp[1]] = [];
    }
    try {
      if (!reported[tmp[1]].includes(tmp[0])) {
        reported[tmp[1]].push(tmp[0]);
      }
    } catch {}
  }
  for (const key of Object.keys(reported)) {
    if (reported[key].length >= k) {
      for (const user of reported[key]) {
        answer[id_list.indexOf(user)]++;
      }
    }
  }

  return answer;
}
console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);
