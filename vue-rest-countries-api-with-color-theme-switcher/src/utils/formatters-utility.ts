export function formatCapital(capitalArray: []) {
  if (!capitalArray || capitalArray.length === 0) {
    return '-';
  }
  return capitalArray.join(', ');
}
