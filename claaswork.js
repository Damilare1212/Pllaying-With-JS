var Jheight,Jmass;
Jheight = 1.95;
Jmass = 45;


var Mheight, Mmass;
Mheight = 1.69;
Mmass = 10;


function  CalculateBMI(p1,p2)
{
    return p1 /(p2*p2);
}

var JhonBMI= CalculateBMI(Jmass,Jheight);
var MarkBMI = CalculateBMI(Mmass,Mheight);

var Bool = MarkBMI>JhonBMI;
// if (JhonBMI > MarkBMI)
// {
   
//     Bool = true;
// }


console.log(JhonBMI);
console.log(MarkBMI);

 
var answer =  `Is MArkBMI higher than Jhon s?   ${Bool} `;
console.log (answer);
                           


