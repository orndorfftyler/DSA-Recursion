
// 1. counting sheep

function sheep(n) {
    if (n < 1) {
        console.log('All sheep jumped over the fence')
        return;
    }
    console.log(`${n}: Another sheep jumps over the fence`)
    sheep(n-1)
}

//sheep(3)


// 2. power calculator

function power(base, exp) {
    if (exp === 1) {
        return base;
    }

    if (exp < 0) {
        console.log('exponent should be >= 0')
        return;
    }

    return base*power(base, exp-1);

}

//console.log(power(2,4));

// 3. reverse string

function revS(str) {
    if (str.length === 1) {
        return str;
    }


    return str.slice(-1) + revS(str.slice(0,-1))

}

//console.log(revS('dictionary'));

// 4. nth triangular number

function tri(n) {
    if(n <= 1){
        return n
    } 
        return n + tri(n-1)
}

//console.log(tri(9));


// 5. string splitter

let out = [];
function spl(str,sep) {
    let sepVal = str.indexOf(sep);
    if(sepVal == -1){
        return out.push(str)
    } 
        out.push(str.slice(0, sepVal))
        spl(str.slice(sepVal+1), sep)
}

//spl('02/20/2020','/')
//console.log(out);


// 6. fibonacci

function fib(n) {
    if(n <= 2){
        return 1;
    } 
    return fib(n-1) + fib(n-2);
}

//console.log(fib(6));

// 7. factorial

function fac(n) {
    if(n == 1){
        return n;
    } 
    return n*fac(n-1);
}

//console.log(fac(5));

// 8. and 9. find a way out of the maze

function mazeNav(maze) {

    //let mazeTemp = maze;
    function walk(row, col, dir) {
        if (maze[row][col] === 'e') {
            console.log(dir)
            console.log(`exit found at inputMaze[${row}][${col}]`);
        }
        if (maze[row][col] === ' ') {
            
            if (dir) {console.log(dir)}
            maze[row][col] = 'b';

            if(row < maze.length - 1) {
                walk(row + 1, col, 'D');
            }
            if(col < maze[row].length - 1) {
                walk(row, col + 1, 'R');
            }
            if(row > 0) {
                walk(row - 1, col, 'U');
            }
            if(col > 0) {
                walk(row, col - 1, 'L');
            }
        }
    }
    walk(0,0)
}

let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];
//mazeNav(maze);

// 10. anagrams 

function perm(str) {
    if (str.length < 2) return str;
  
    let permOut = []; 
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      
      if (str.indexOf(char) != i) 
        continue;
  
        let remainingString = str.slice(0, i) + str.slice(i + 1, str.length);
      
      for (let subPermutation of perm(remainingString)) {
        permOut.push(char + subPermutation)
      }
      
    }
    return permOut;
  }

console.log(perm('east'))

// 11. organizational chart

function org(obj) {
}

let testObj = {
    Zuckerberg: {
        Schroepfer:{
            Bosworth: ['Steve', 'Kyle', 'Andra'],
            Zao: ['Richard', 'Sofia', 'Sven']
        },
        Schrage:{
            VanDick: ['sabrina', 'michelle', 'josh'],
            Swain: ['blanch', 'tom', 'joe']
        },
        Sandberg:{
            Goler: ['Eddie', 'Julie', 'Annie'],
            Hernandez: ['rowi', 'inga', 'morgan']
        }
    }
}

//console.log(org(testObj));
