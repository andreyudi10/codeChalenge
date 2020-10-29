function warnTheSheep(queue) {
    // your code here
    if(queue[queue.length-1]==='wolf'){
        return 'Pls go away and stop eating my sheep'
    }else{
        // console.log('jalan else')        
        const balik = queue.reverse()
        for (let i = 0 ; i < (balik.length) ; i++){
            // console.log('mycode',queue[i])
            // console.log(balik[i])
            if(balik[i+1]==='sheep' && balik[i]==='wolf'){
                // console.log(i)
                return 'Oi! Sheep number',i, 'You are about to be eaten by a wolf!'
            }
        }        
    }
 }    


// Test Function do not edit
function Test(fun, result) {
    console.log(fun === result)
}



// Test assertions
Test(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test(warnTheSheep(["sheep", "sheep", "wolf"]), "Pls go away and stop eating my sheep");
Test(warnTheSheep(["sheep", "wolf", "sheep"]), "Oi! Sheep number 1! You are about to be eaten by a wolf!");
Test(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]), "Oi! Sheep number 6! You are about to be eaten by a wolf!");