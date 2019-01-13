// Add zero in front of numbers < 10
export function zeroPad(i : String) {
  if ((Number) i < 10) {
    i = "0" + i;
  }
  return i;
}
