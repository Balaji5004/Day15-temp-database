var form=document.createElement("form");
function labels(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele; 
}
function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2,attrname3,attrvalue3){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    ele1.setAttribute(attrname3,attrvalue3);
    return ele1;
}
function linebreak(tagname){
    var br=document.createElement(tagname);
    return br;
}

var button=document.createElement("button");
button.setAttribute("type","button");
button.innerHTML="submit";
button.addEventListener("click",foo);
button.style.margin="10px";







var fname=labels("label","for","firstname","First Name:");
var br=linebreak("br");
var input=inputs("input","type","firstname","name","firstname","id","firstname");
var br1=linebreak("br");
var lname=labels("lebel","for","lastname","Last Name:");
var br2=linebreak("br");
var input1=inputs("input","type","lastname","name","lastname","id","lastname");
var br3=linebreak("br");
var address=labels("label","for","address","Address:");
var br4=linebreak("br");
var input2=inputs("input","type","address","name","address","id","address");
var br5=linebreak("br");
var pincode=labels("label","for","pincode","Pincode:");
var br6=linebreak("br");
var input3=inputs("input","type","pincode","name","pincode","id","pincode");
var br7=linebreak("br");
var gender=labels("label","for","gender","Gender:");
var br8=linebreak("br");
var input4=inputs("input","type","radio","name","gender","id","gender","value","male");
var gender1=labels("label","for","gender","Male");
var br9=linebreak("br");
var input5=inputs("input","type","radio","name","gender","id","gender1","value","female");
var gender2=labels("label","for","gender","Female");
var br10=linebreak("br");
var input6=inputs("input","type","radio","name","gender","id","gender2","value","others");
var gender3=labels("label","for","gender","Others");
var br11=linebreak("br");
var food=labels("label","for","food","choice of food: <i><small>(must choose at least <br>2 out of 5 options)</small></i>");
var br12=linebreak("br");
var input7=inputs("input","type","checkbox","name","food","id","food","value","sounth indian");
var food1=labels("label","for","food","South Indian");
var br13=linebreak("br");
var input8=inputs("input","type","checkbox","name","food","id","food1","value","north indian");
var food2=labels("label","for","food","North Indian");
var br14=linebreak("br");
var input9=inputs("input","type","checkbox","name","food","id","food2","value","multi cuisine");
var food3=labels("label","for","food","Multi Cuisine");
var br15=linebreak("br");
var input10=inputs("input","type","checkbox","name","food","id","food3","value","chinese");
var food4=labels("label","for","food","Chinese");
var br16=linebreak("br");
var input11=inputs("input","type","checkbox","name","food","id","food4","value","japanese");
var food5=labels("label","for","food","Japanese");
var br17=linebreak("br");
var state=labels("label","for","state","State:");
var br18=linebreak("br");
var input12=inputs("input","type","text","name","state","id","state");
var br19=linebreak("br");
var country=labels("label","for","country","Country:");
var br20=linebreak("br");
var input13=inputs("input","type","text","name","country","id","counrty");
var br21=linebreak("br");






form.append(fname,br,input,br1,lname,br2,input1,br3,address,br4,input2,br5,pincode,br6,input3,br7,gender,br8,input4,gender1,
    br9,input5,gender2,br10,input6,gender3,br11,food,br12,input7,food1,br13,input8,food2,br14,input9,food3,br15,input10,food4,
    br16,input11,food5,br17,state,br18,input12,br19,country,br20,input13,br21,button);
document.body.append(form);







function foo(){

    var table = document.getElementById("table"),
        newRow = table.insertRow(table.length),
        cell1 = newRow.insertCell(0),
        cell2 = newRow.insertCell(1),
        cell3 = newRow.insertCell(2),
        cell4 = newRow.insertCell(3),
        cell5 = newRow.insertCell(4),
        cell6 = newRow.insertCell(5),
        cell7 = newRow.insertCell(6),
        cell8 = newRow.insertCell(7),
        FirstName = document.getElementById("firstname").value,
        LastName = document.getElementById("lastname").value,
        Address = document.getElementById("address").value,
        Pincode = document.getElementById("pincode").value,
       
        Gender = document.getElementById("gender").value,
        Gender1 = document.getElementById("gender1").value,
        Gender2 = document.getElementById("gender2").value,
        
        Food = document.getElementById("food").value,
        State = document.getElementById("state").value,
        Country = document.getElementById("counrty").value;

        cell1.innerHTML = FirstName;
        cell2.innerHTML = LastName;
        cell3.innerHTML = Address;
        cell4.innerHTML = Pincode;

        cell5.innerHTML = Gender;
        
        cell6.innerHTML = Food;
        cell7.innerHTML = State;
        cell8.innerHTML = Country;

     firstname.value = "";
     lastname.value = "";
     address.value = "";
     pincode.value = "";
     state.value = "";
     counrty.value = "";
     









    // let div = document.getElementById("div");

    //   let firstname = document.getElementById("firstname").value;
    //   let lastname = document.getElementById("lastname").value;
    //   let address = document.getElementById("address").value;
    //   let pincode = document.getElementById("pincode");
    //   let gender = document.getElementById("gender");
    //   let gender1 = document.getElementById("gender1");
    //   let food = document.getElementById("food");
    //   let food1 = document.getElementById("food1");
    //   let food2 = document.getElementById("food2");
    //   let food3 = document.getElementById("food3");
    //   let food4 = document.getElementById("food4");
    //   let state = document.getElementById("state");
    //   let counrty = document.getElementById("counrty");
      
        
      

      
    
    //  console.log(` firstname of ${firstname.value}`);
    //  console.log(` lastname of ${lastname.value}`);
    //  console.log(`address of ${address.value}`);
    //  console.log(` pincode of ${pincode.value}`);
     
    //  if(gender.checked==true){
    //     console.log(` gender of ${gender.value}`);
        
    // }
    // else if(gender1.checked==true){
    //     console.log(` gender of ${gender1.value}`);

    // }
    // else if(gender2.checked==true){
    //     console.log(` gender of ${gender2.value}`);
              
    // }
    // else{
    //     alert("please select gender");
    // }

    // if(food.checked==true){
    //     console.log(` food of ${food.value}`);
    // }
    
    // console.log(` state of ${state.value}`);
    // console.log(` country of ${counrty.value}`);

       
      
   

}