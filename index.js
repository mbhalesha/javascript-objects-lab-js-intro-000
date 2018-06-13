var recipes = new Object

var obj = { prop: 1 }
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}object,{[key]:value});
}