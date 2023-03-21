function Question (question , answers, correct)
{
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayquestion = 
function()  {
    console.log(this.question);
    for (var i = 0; i<this.answers.length; i++)
    {
        console.log(i + ':' + this.answers[i])
    }
}

var Q1 = new Question('is C# and Object oriented programming language ', ['yes', 'no', 'Am not Sure '],0);

var Q2 = new Question('what is the name of C# Compiler', ['JIt', 'Node', 'Roselyn'],2);

var questions = [Q1,Q2];


var n  = Math.floor(Math.random() * questions.length);

questions[n].displayquestion;

