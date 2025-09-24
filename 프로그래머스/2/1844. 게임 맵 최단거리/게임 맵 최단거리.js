function solution(maps) {
  const n = maps.length, m = maps[0].length;
  const q = [[0, 0]]; // 시작
  const dr = [1, -1, 0, 0], dc = [0, 0, 1, -1];

  while (q.length) {
    const [r, c] = q.shift();
    for (let k = 0; k < 4; k++) {
      const nr = r + dr[k], nc = c + dc[k];
      if (nr >= 0 && nr < n && nc >= 0 && nc < m && maps[nr][nc] === 1) {
        maps[nr][nc] = maps[r][c] + 1; // 거리 갱신
        q.push([nr, nc]);
      }
    }
  }

  const ans = maps[n - 1][m - 1];
  return ans > 1 ? ans : -1;
}
