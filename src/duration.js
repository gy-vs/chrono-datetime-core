function normalizeValues(matrix, vals) {
  const present = orderedUnits
    .filter((u) => vals[u] !== undefined)
    .map((u) => orderedUnits.indexOf(u));
  // ...
}
