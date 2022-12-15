var readlineSync = require("readline-sync");

var totalQn = 6;
var Lv2Entr=5, Lv3Entr=10;
var score = 0, j=0, k=0;

console.log("Top Board : Rahul :- 16 \n \n")



if(score>=0 && score<5) console.log("-- Entered to Level-1 --");
function play(question, answer){
  var ans = readlineSync.question(question)
  
  
  if(answer.toUpperCase()==ans.toUpperCase()){
    score++
    console.log("you are right😉")
    console.log("you current score",score)
  if(score===Lv2Entr){
    console.clear();
    console.log("-- Entered to Level-2 --");
    console.log("you current score",score);
  }
  if(score===Lv3Entr){ 
    console.clear();
    console.log("-- Entered to Level-3 --");
    console.log("you current score",score);
  }
  }else{
    console.log("No!");
  }
}

QnLv1=[
{ question : "Who is the director of Baahubali?\n A.Shobu Yarlagadda \n B.Prasad Devineni \n C. S.S.Rajamouli. \n D.Kovelamudi \n",
answer : "C" },
{ question : "In how many languages Baahubali 2 was released?\n A.2 \n B. 4 \n C. 1 \n D. 3 \n",
answer : "D"  },
{ question : "Why did Katappa killed Baahubali? \n A. Because Bhallala Deva wanted Katappa kill to Baahubali \n B. Because Bijjaladeva told to kill Baahubali \n C. Because he himself wanted to kill Baahubali \n D. Because Sivagami told him \n",
 answer : "A" },
{ question : "What animal sigil is inscribed on Amarendra Baahubali's armor? \n A. Lion \n B. Elephant \n C. Tiger \n D. Horse \n",
answer : "A" },
{question : "Do you know the full name of Katappa? \n A. Royal slave Kattappa \n B. Karikala Katappa Nadar \n C. Sathyaraj Katappa \n D. Karikala Kattappa \n",
answer : "C" },
{question : "How many tattoos did Shiva draw on Avantika's hands and shoulder? \n A. Four \n B. Three \n C. Two \n D. One \n",
answer : "B" },]

QnLv2=[
{ question : "Who is the director of Baahubali?\n A.Shobu Yarlagadda \n B.Prasad Devineni \n C. S.S.Rajamouli. \n D.Kovelamudi \n",
answer : "B" },
{ question : "In how many languages Baahubali 2 was released?\n A.2 \n B. 4 \n C. 1 \n D. 3 \n",
answer : "C"  },
{ question : "Why did Katappa killed Baahubali? \n A. Because Bhallala Deva wanted Katappa kill to Baahubali \n B. Because Bijjaladeva told to kill Baahubali \n C. Because he himself wanted to kill Baahubali \n D. Because Sivagami told him \n",
 answer : "D" },
{ question : "What animal sigil is inscribed on Amarendra Baahubali's armor? \n A. Lion \n B. Elephant \n C. Tiger \n D. Horse \n",
answer : "A" },
{question : "Do you know the full name of Katappa? \n A. Royal slave Kattappa \n B. Karikala Katappa Nadar \n C. Sathyaraj Katappa \n D. Karikala Kattappa \n",
answer : "C" },
{question : "How many tattoos did Shiva draw on Avantika's hands and shoulder? \n A. Four \n B. Three \n C. Two \n D. One \n",
answer : "B" },]

QnLv3=[
{ question : "Who is the director of Baahubali?\n A.Shobu Yarlagadda \n B.Prasad Devineni \n C. S.S.Rajamouli. \n D.Kovelamudi \n",
answer : "A" },
{ question : "In how many languages Baahubali 2 was released?\n A.2 \n B. 4 \n C. 1 \n D. 3 \n",
answer : "D"  },
{ question : "Why did Katappa killed Baahubali? \n A. Because Bhallala Deva wanted Katappa kill to Baahubali \n B. Because Bijjaladeva told to kill Baahubali \n C. Because he himself wanted to kill Baahubali \n D. Because Sivagami told him \n",
 answer : "C" },
{ question : "What animal sigil is inscribed on Amarendra Baahubali's armor? \n A. Lion \n B. Elephant \n C. Tiger \n D. Horse \n",
answer : "B" },
{question : "Do you know the full name of Katappa? \n A. Royal slave Kattappa \n B. Karikala Katappa Nadar \n C. Sathyaraj Katappa \n D. Karikala Kattappa \n",
answer : "C" },
{question : "How many tattoos did Shiva draw on Avantika's hands and shoulder? \n A. Four \n B. Three \n C. Two \n D. One \n",
answer : "B" },]

for(var i=0; i<=totalQn; i++){
  if(i==totalQn) {
    console.log("you reached Max questions");
    break;
  }
  if(score>=0 && score<Lv2Entr){
    var currentQn = QnLv1[i];
    
  }else if(score>=Lv2Entr && score<Lv3Entr){
    i=j;
    currentQn = QnLv2[i];
    j++
    
  }else if(score>=Lv3Entr){
    i=k;
    currentQn = QnLv3[i];
    k++
    
  }

  play(currentQn.question,currentQn.answer)
  
}
console.log('your total score :',score)
console.log('send a SS if your score is equal to or more than Top score')
