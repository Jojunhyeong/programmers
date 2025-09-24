function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);

  let cameras = 0;
  let camLast = -Infinity; 

  for (const [enter, exit] of routes) {
    if (enter > camLast) {
      camLast = exit;
      cameras += 1;   
    }
  }

  return cameras;
}
