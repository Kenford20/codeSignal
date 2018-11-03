// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

function makeArrayConsecutive2(statues) {
    let min = Math.min.apply(null, statues);
    let max = Math.max.apply(null, statues);
    let index = 1;
    let numStatues = 0;
    statues.sort((a,b) => a-b);
    console.log(statues);
    
    for(let i = min + 1; i < max; i++){
        if(i !== statues[index]){ 
            console.log(i)
            numStatues++;
            
        }
        if(i === statues[index]){
            index++;
        }
    }
    return numStatues;
}
