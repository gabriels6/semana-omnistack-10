module.exports = function parseStringAsArray(ArrayAsString){

return ArrayAsString.split(', ').map(techs => techs.trim())
}