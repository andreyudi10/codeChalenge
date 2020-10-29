// let arr = ["sheep", "sheep", "sheep", "wolf", "sheep"]
// let arr = ["sheep", "sheep", "wolf"]
// let arr = ["sheep", "wolf", "sheep"]
// let arr = ["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]

arrReverse = arr.reverse()
arrReverse.indexOf('wolf')===0 ?
console.log('get lost wolf') :
console.log('oi sheep number',arrReverse.indexOf('wolf'),"youre going to be eaten")