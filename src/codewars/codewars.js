

const countSheeps = (arrOfSheep) => {
    return arrOfSheep.filter(el=>el===true).length
}
console.log(countSheeps([true,true,false]))