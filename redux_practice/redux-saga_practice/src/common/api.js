export function callApiLike() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
  });
}
