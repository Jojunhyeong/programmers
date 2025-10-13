function solution(k, dungeons) {
  let answer = 0;

  const visited = Array(dungeons.length).fill(false);

  function dfs(fatigue, count) {
    answer = Math.max(answer, count);

    for (let i = 0; i < dungeons.length; i++) {
      const [need, cost] = dungeons[i];
      if (!visited[i] && fatigue >= need) {
        visited[i] = true;
        dfs(fatigue - cost, count + 1);
        visited[i] = false;
      }
    }
  }

  dfs(k, 0);
  return answer;
}
