Challenge:

// Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game.

// For each game, Emma will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided. For example, c=[0,1,0,0,0,1,0] indexed from 0...6. The number on each cloud is its index in the list so she must avoid the clouds at indexes 1 and 5. She could follow the following two paths: 0 -> 2 -> 4 -> 6 or 0 -> 2 -> 3 -> 4 -> 6. The first path takes 3 jumps while the second takes 4.

// Complete the jumpingOnClouds function in the editor below. It should return the minimum number of jumps required, as an integer.

// jumpingOnClouds has the following parameter(s):

// c: an array of binary integers


My Code:


function jumpingOnClouds(c) {
// 7
// 0 0 1 0 0 1 0
// output = 0

var count = 0;

if(c[0] == 1){
    return 0;
}

for(var i = 0; i < c.length; i++){
     if(c[i+1] == 0){
         if(c[i+2] == 0){
            count++;
            i+=1;
         } else {
             count++;
         }
    } else if(c[i+1] == 1){
        i+=1;
        count++;
    }
}
return count;

}


Challenge:

// Gary is an avid hiker. He tracks his hikes meticulously, paying close attention to small details like topography. During his last hike he took exactly n steps. For every step he took, he noted if it was an uphill, U, or a downhill, D step. Gary's hikes start and end at sea level and each step up or down represents a 1 unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.
// Given Gary's sequence of up and down steps during his last hike, find and print the number of valleys he walked through.

// For example, if Gary's path is s = [DDUUUUDD], he first enters a valley 2 units deep. Then he climbs out an up onto a mountain 2 units high. Finally, he returns to sea level and ends his hike.

// Complete the countingValleys functions in the editor below. It must return an integer that denotes the number of valleys Gary traversed.

// countingValleys has the following parameter:

// n: the number of steps Gary takes
// s: a string describing his path


My Code:

function countingValleys(n, s) {
    // 8
    // UDDDUDUU
    // output is 1
    
    var steps = 0;
    var num_valley = 0;
    
    for (var i = 0; i < s.length; i++){
        if (s[i] == "U"){
            steps++;
        } else if (s[i] == "D"){
            steps--;
        } if (steps == 0 && s[i] == "U"){
            num_valley++;
        }
    }
    return num_valley;
    
    }



Challenge:

// John works at a clothing store. He has a large pile of socks that he must pair by color for sale. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// For example, there are n = 7 socks with colors ar = [1,2,1,2,1,3,2]. There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.

// Complete the sockMerchant functions in the editor below. It must return an integer representing the number of matching pairs of socks that are available.

// sockMerchant has the following parameter:

// n: the number of socks in the pile
// ar: the colors of each sock


My Code:

function sockMerchant(n, ar) {
    var newArr = [];
    var pairs = 0;

    if(ar.length == 0){
        return ar.length;
    }

    for (var i = 0; i < ar.length; i++){
        if (!newArr.includes(ar[i])){
            newArr.push(ar[i]);
        } else {
            for (var j = 0; j < newArr.length; j++){
                if(newArr[j] == ar[i]){
                    pairs++;
                    newArr.splice(j,1);
                }
            }
        }
    }
    return pairs;

}