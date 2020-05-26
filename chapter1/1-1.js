function isUnique(string) {
  const regex = /\W/gi;
  const strNoWhiteSpace = string.replace(regex, "");
  const set = new Set(strNoWhiteSpace.split(""));
  return set.size === strNoWhiteSpace.length;
}

module.exports = isUnique;
