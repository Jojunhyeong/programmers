function solution(routes) {
  // 1. 진출 지점 기준으로 오름차순 정렬
  routes.sort((a, b) => a[1] - b[1]);

  let cameras = 0;     // 설치된 카메라 개수
  let camPos = -Infinity; // 마지막으로 설치한 카메라 위치

  // 2. 차량 하나씩 확인
  for (const [enter, exit] of routes) {
    // 2-1. 지금 차량의 진입 지점이
    //      마지막 카메라 위치보다 뒤라면(카메라 못 만남),
    //      새 카메라 설치
    if (enter > camPos) {
      camPos = exit;    // 현재 차량의 '진출 지점'에 설치
      cameras += 1;     // 카메라 개수 증가
    }
  }

  return cameras;
}
