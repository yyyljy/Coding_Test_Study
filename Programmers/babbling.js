// https://school.programmers.co.kr/learn/courses/30/lessons/120956?language=javascript

function solution(babbling) {
  // 문제 조건에서 babbling은 한 단어에 대해 한 번만 등장하므로 특정문자로 대체하여 제거
  // 빈 문자열로 제거하는 경우 제거되고 남은 문자열이 babbling으로 되는 문제가 발생하므로
  // .으로 대체한 후에 마지막에 .을 제거함
  // 예시 ) wyeoo
  // ye를 지우고 woo가 남아 woo도 지우게 되면 wyeoo를 발음할 수 있는것으로 판단하여 오류발생.
  var answer = 0;
  const words = ["aya", "ye", "woo", "ma"];

  for (const bab of babbling) {
    let keyword = bab;
    if (keyword.length == 0) continue;
    for (const word of words) {
      keyword = keyword.replace(word, ".");
      if (keyword.replaceAll(".", "").length == 0) {
        answer++;
        break;
      }
    }
  }
  return answer;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]));
// console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"]));
