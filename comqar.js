let a = "qaqaqaqa";
let b = "qaqaqaqaqa";

function compare (a,b) {
    if (a == b) {
        console.log("These are exactly the same!");

    } else {
        let i = 0;
        let j = 0;
        let result = "";
    
        while (j < b.length)
        {
         if (a[i] != b[j])
             result += b[j];
         else
             i++;
         j++;
        }
        console.log(`No, the diff is "${result}"`);
        return result;
    }
}

compare(a,b);


