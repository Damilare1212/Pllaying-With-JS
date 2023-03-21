 var jhon = {
    firstNAme: 'Sodiq',
    LastName: 'Ogbon',
    Birthyear: '2003',
    family: ['ayo', 'Wasiu', 'Alex', 'tunde', 'Abel', 'Carmen'],
     Job: 'Programmer',
     IsMaried: false,
     IsCoding: true,
     CalculateAge : function(BirthYear)
     {
        return 2023 - BirthYear;
     },
     CalAge : function()
     {
        this.age = 2023 - this.Birthyear
     }


 }

 console.log(jhon.LastName , jhon.firstNAme)
 console.log(jhon['IsMaried']);
 var x = 'IsCoding';
 console.log(jhon[x]);

 jhon.job = 'Mechanic';
 jhon['IsMaried'] = true;
 console.log(jhon);

 var Orio = new Object();
 Orio.firstNAme = 'Ambaaq';
 Orio.Birthyear = '2009';
 Orio['LastName'] = 'smith';
 console.log(Orio);

 console.log(jhon.CalculateAge(jhon.Birthyear));

 jhon.CalAge();
 console.log(jhon);



