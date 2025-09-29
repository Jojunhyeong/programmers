function solution(record) {
  const name = {};          
  const logs = [];           

  for (const line of record) {
    const [action, uid, nickname] = line.split(' ');
    if (action === 'Enter') {
      name[uid] = nickname;
      logs.push([uid, 'in']);
    } else if (action === 'Leave') {
      logs.push([uid, 'out']);
    } else {
      name[uid] = nickname;
    }
  }

  return logs.map(([uid, action]) =>
    action === 'in'
      ? `${name[uid]}님이 들어왔습니다.`
      
                  : `${name[uid]}님이 나갔습니다.`
  );
}
