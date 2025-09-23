function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);

  let cameras = 0;

  let camPos = -Infinity;

  for (const [enter, exit] of routes) {
    if (enter > camPos) {
      camPos = exit;
      cameras += 1;
    }
  }

  return cameras;
}
