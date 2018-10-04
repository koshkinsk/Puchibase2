export function DataPagination(data, page, rowPerPage) {
  return data.slice(page * rowPerPage - rowPerPage, page * rowPerPage);
}

/**
 * @return {number}
 */
export function TotalPages(data, rowPerPage) {
  return Math.ceil(data.length / rowPerPage);
}

export function arrayToMap(arr, key) {
  const map = {};
  for(const row of arr) map[row[key]] = row;
  return map;
}

const popCount = [
  0,
  1,
  1, 2,
  1, 2, 2, 3,
  1, 2, 2, 3, 2, 3, 3, 4,
];
export function popBinaryMap(binMap) {
  return binMap.split("").map(x => popCount[parseInt(x, 16)]).reduce((x, y) => x + y);
}

export function resolveObj(obj, path){
  let current = obj;
  while(path.length) {
    if(typeof current !== 'object') return undefined;
    current = current[path.shift()];
  }
  return current;
}

export function f(orig, args) { // format template strings
  let str = orig;
  for (const key in args) {
    str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
  }
  return str;
}
