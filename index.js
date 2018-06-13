var recipes = {}

function updateObjectWithKeyAndValue (object, key, value) {
  return Object.assign({}, object, {[key]:value});
}

function destructivelyIpdateObjectWithKeyAndValue (object, key, value) {
  object[key] = value;
  return object;
}