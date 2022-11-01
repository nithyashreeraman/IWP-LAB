const calculate = () => {
  
    // Getting input from user into height variable.
    let s1 = document.querySelector("#s1").value;
    let s2 = document.querySelector("#s2").value;
    let s3 = document.querySelector("#s3").value;
    let s4 = document.querySelector("#s4").value;
    let s5 = document.querySelector("#s5").value;
    let s6 = document.querySelector("#s6").value;
    let s7 = document.querySelector("#s7").value;

    let c1 = document.querySelector("#c1").value;
    let c2 = document.querySelector("#c2").value;
    let c3 = document.querySelector("#c3").value;
    let c4 = document.querySelector("#c4").value;
    let c5 = document.querySelector("#c5").value;
    let c6 = document.querySelector("#c6").value;
    let c7 = document.querySelector("#c7").value;

    let old_credit = document.querySelector("#old_credit").value;
    
    const grade = [s1,s2,s3,s4,s5,s6,s7];
    const credit=[c1,c2,c3,c4,c5,c6,c7]
    point=[]
    let s= parseInt(10);
    let a= parseInt(9);
    let b= parseInt(8);
    let c= parseInt(7);
    let d= parseInt(6);
    let e= parseInt(5);
    let f= parseInt(0);

    let Cgpa= document.querySelector("#cgpa").value;

    for (let i = 0; i < grade.length; i++) {
        if (grade[i]== 'S') {
            point.push(s);
          } else if (grade[i] == 'A') {
            point.push(a);
          } else if (grade[i]== 'B') {
            point.push(b);
          }  else if (grade[i]== 'C') {
            point.push(c);
          } 
          else if (grade[i]== 'D') {
            point.push(d);
          } 
          else if (grade[i]== 'E') {
            point.push(f);
          } 
          else{
              point.push(0);
          }
    }
    
    let gp=0;
    for (let i = 0; i < point.length; i++) {
        gp =gp+ ( parseInt(point[i]) *  parseInt(credit[i]));

    }
let cr=0
    for (let i = 0; i < (credit.length); i++) {
        cr += parseInt(credit[i])  ;

    }
    let gpa= gp/cr;
    
  
  let cgpa=((parseFloat(Cgpa) * parseFloat(old_credit)) + parseFloat(gpa * cr) ) / (parseFloat(old_credit) + cr)
  
      
 document.querySelector( "#showdata" ).innerHTML = 'GPA is  '+ gpa + "<br>"+ 'CGPA is ' + cgpa ;
      
    
  };