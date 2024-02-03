var count = 99;
var secondCount = 98;
function beer() {
   while (count >= 2 && secondCount >= 1)  {  
       console.log(count + " bottles of beer on the wall," + count + " bottles of beer.Take one down and pass it around, " + secondCount + " bottles of beer on the wall.");
       count --
        secondCount --
    }
    console.log("1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer on the wall.");
    console.log("No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer on the wall.")
}
    console.log(beer());
