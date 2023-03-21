var jhonn = {
    FirstName : 'Mikel',
    LastName : 'Obi',
    // FulName : `${jhon.FirstName} ${jhon.LastName}`,
    FullName  : 'Obi Mikel',
    Mass : 92,
    Height : 1.95,
    CalculateBMI:  function  ()
    {
        this.BMIAnswer =  this.Mass /(this.Height*this.Height);
        return this.BMIAnswer;
    }
    

}

var Mark = {
    FirstName : 'Mark',
    LastName : 'Ade',
    // FulName : `${Mark.FirstName} ${Mark.LastName}`,
    FullName : 'AdeMArk',
    Mass : 78,
    Height : 1.69,
    CalculateBMI:  function  ()
    {
        this.BMIAnswer =  this.Mass /(this.Height*this.Height);
        return this.BMIAnswer;
    }

   
    

}
console.log(jhonn , jhonn.CalculateBMI());

console.log(Mark, Mark.CalculateBMI());

if (jhonn.CalculateBMI > Mark.CalculateBMI)
{
    console.log(Jhonn.FullName ,'has a Higher BMI of ' `${jhonn.CalculateBMI}`)
}
else if (Mark.CalculateBMI > jhonn.CalculateBMI)
    {
        console.log(Mark.FullName ,'has a Higher BMI of ' `${Mark.CalculateBMI}`)
    }
else
{
    console.log('they have the same BMI');
}

for(var  i = 0; i<10; i++)
{
    console.table(i);
}

var store = ['Jhon', 'Simmy' ,'!897', 'Desighner', false,'Red'];
for (var i = 0; i<=store.length-1; i++)
{
    if (typeof store[i] !== 'string')
    {
        continue;
    }
    console.log(store[i]);
}

var i = 0;
while(i <store.length)
{
    console.log(store[i])
   
    i++;
}

for (var i = store.length; i>=0; i--)
{
    console.log(store[i]);
}




