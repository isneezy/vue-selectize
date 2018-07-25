export function isPromise (funct) {
  if (typeof funct !== 'object') { return false }
  if ('then' in funct && 'catch' in funct) {
    return true
  }
  return false
}
