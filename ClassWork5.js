
debugger
var joe = {
    fullName : 'joe David',
    bil : ['124', '45', '180', '42'],
    Calculatetips : function()
    {
        this.tipss = []
        this.finall = [];
   
        for (var i = 0; i<this.bil.length; i++)
        {

            var percent;
            var bil = this.bil[i];
            if (bil<50)
            {
                percent = .2;
            }
            else if (bil >= 50 && bil < 200 )
            {
                percent = .15;
            }
            else 
            {
                percent = .1;
            }

            this.tipss[i] = bil * percent;
            this.finall [i] = bil + bil + percent
        }
    }
}
joe.Calculatetips();
console.log(joe);


var a = 'Hello';
first();

function first()
{
    var b = 'Hi';
    second();
    function second()
    {
        var c = 'Hey';
        console.log(`${a}   ${    b }   ${   c}`);
        third();
    }
}
function  third()
{
    var d = 'Doctor'
    console.log(`${a}  ${d}`);
}

CalcAge(1979)
function CalcAge (year)
{
    console.log(2023 - year)
}



var RetirmentYear = function(year)
{
    return (65 -(2023-year))
  //  console.log(65 -(2023-year));
}
console.log(RetirmentYear(1979))


var score1,score2,score3,score4;

score1= [0,0];
score2 = 0;
score3 = 0;
score4 = Math.floor(Math.random() * 6) + 1;
console.log(score4);

var jh = {
    Name : 'Darwin',
    DOB : 1985,
    Job : 'footballer'
}

var person = function(Name ,Dob, Job)
{
   this.Name = Name ;
   this.Dob = Dob;
   this.Job = Job;
}

person.prototype.CalCAGE = 

    function()
    {
        console.log(2023-this.Dob)
    }

  person.prototype.ClubName = 'Liverpool';


var salah = new person('Salah', 1986, 'Right Winger' )

var Arnold = new person('Arnold', 2003, 'Right Back' )

var Tsmikas = new person('Tsmikas', 1948, 'left Winger' )

salah.CalCAGE();
Arnold.CalCAGE();
Tsmikas.CalCAGE();

console.log(salah.ClubName)
console.log(Arnold.ClubName)
console.log(Tsmikas.ClubName)

console.log(jh);
jh.hasOwnProperty('age');


function Interview(job)
{
        if (job === 'Designer')
        {
            return function(name)
            {
                console.log(name + ', Can you please explain what UI/UX design is');
            }
        }
        else if(job == 'Developer')
        {
            return function(name)
            {
                console.log('what is C#' + " " + name);
            }
        }
        else
        {
            return function(name)
            {
                console.log('Hello' + name + 'what  do you do');
            }
        }
}

var UI = Interview('Designer')
 var dev = Interview('Developer')

 UI('Albert');
 dev('Mosh');

 





