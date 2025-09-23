function solution(number, k) {
  const stack = [];

  for (const num of number) {
    while (k > 0 && stack.length && stack[stack.length - 1] < num) {
      stack.pop();
      k--;
    }
    stack.push(num);
  }
    
  if (k > 0) stack.splice(stack.length - k, k);

  return stack.join('');
}
