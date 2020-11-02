var recipes= {sarma:"yaprak", dolma:"biber"}
function updateObjectWithKeyAndValue(object, key, value){
return= Object.assign({}, recipes, {[key]:value})

}
function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  recipes[kabak]= vardı
  return recipes
}
function deleteFromObjectByKey(object, key){
  var newObj= Object.assign({}, recipes)
  delete newObj[key]
  return newObj

}
function destructivelyDeleteFromObjectByKey(object, key){

}
