var jhonteam = 89;
var jhonteam2 = 99;
var jhonteam3= 89;

var Markteam = 109;
var MarkTeam2 = 28;
var MarkTeam3 = 98;

function CalculateAverage(p1,p2,p3)
{
    var avreage = (p1 + p2 + p3) /3;

    return avreage;
}


var MarryTeam = 97;
var MarrryTeam1 = 134;
var MaryTeam2 = 105;

var MaryTeam = CalculateAverage(MarryTeam,MarrryTeam1,MaryTeam2);

var JhonTeam = CalculateAverage(jhonteam,jhonteam2,jhonteam3);
var MarkTeam = CalculateAverage(Markteam,MarkTeam2,MarkTeam3);

console.log('Jhonteam', JhonTeam  , 'markTeam', MarkTeam , 'MaryTeam' ,MaryTeam) ;

if (jhonteam > MarkTeam && jhonteam > MaryTeam)
{
    console.log('jhon\'s team wins with ' + jhonteam + ' points');
}
else if (MarkTeam > jhonteam && MarkTeam > MaryTeam)
{
    console.log('Mark\'s team wins with ' + MarkTeam + ' points');
}
else if (MaryTeam > jhonteam &&  MaryTeam > MarkTeam)
{
    console.log('Mary\'s team wins with ' + MaryTeam + ' points');
}
else{
    console.log('The Match Ended in a Draw');
}


 function CalculateBirthYear(Birtyearh)
 {
    return 2023 - Birtyearh;
 }

 console.log (CalculateBirthYear(2011));

 var years = [1990,1969, 1948]
 var names = ['jhon' , 'Mark' , 'MAry ' , 'Ayo' , 'Sodiq']
 console.log(names.length);