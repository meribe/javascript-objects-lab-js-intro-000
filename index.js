var recipes = new Object();

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
 recipes[key] = value;
return recipes
}

function deleteFromObjectByKey(object, key){
  var newObj =  Object.assign({},recipes)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(object, key){
   recipes.pop[key]
  return recipes
}
