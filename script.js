let data = [
    { room:"" , name: "", age: "", gender: "", mobile: "", email: "", indate:"", outdate:"" }
];

let gd = [];

function sel(j) {
    //console.log("element is ", j)
    localStorage.setItem("n1", j);
    localStorage.setItem("n2", j);
}

function storedata() {
    let i = localStorage.getItem("n1");
    var f=0;
    //console.log("i is ", i)
    if (i !== null) {
        data.name = document.getElementById("d1").value;
        //console.log("name is ",data.name)
        data.age = document.getElementById("d2").value;
        //console.log("age is ",data.age)
        data.gender = document.querySelector('input[name="gender"]:checked').value;
        //console.log("gender is ",data.gender)
        data.mobile = document.getElementById("d3").value;
        //console.log("mobile is ",data.mobile)
        data.email = document.getElementById("d4").value;
        //console.log("email is ",data.email)
        data.indate = document.getElementById("d5.1").value;
        //console.log("indate is ",data.indate)
        data.outdate = document.getElementById("d5.2").value;
        //console.log("outdate is ",data.outdate)
 
        let existingData = JSON.parse(localStorage.getItem("co")) || {};

for (let k = 0; k < gd.length; k++) {
    if (gd[k].room === "10" + i) {
        if (data.indate < gd[k].outdate && data.outdate > gd[k].indate) {
            f = 1;
            break;
        }
    }
}

        if(f!=1) {
            existingData[gd.length+1] = {
            room: 10 + i,
            name: data.name,
            age: data.age,
            gender: data.gender,
            mobile: data.mobile,
            email: data.email,
            indate: data.indate,
            outdate: data.outdate
        };

        let sdata = JSON.stringify(existingData);
        localStorage.setItem("co", sdata);

        gd = Object.values(existingData);
        
        prompts("your room is sucessfully booked")

        showdata();
        }else {
              //console.log("f is",f)
              alert("the date you enter is orady reserve for someone else please try a different date or registr for another room");
        }
    }
}

function showdata() {
    let show = "";

    for (let i = 0; i < gd.length; i++) {
        if (gd[i].name !== "") {
             show += `<div class='row container-fluid center'>
                        <div class='col-lg-4 data container'>
                           <p>room: ${gd[i].room}</p>
                           <p>name: ${gd[i].name}</p>
                           <p>age: ${gd[i].age}</p>
                           <p>gender: ${gd[i].gender}</p>
                           <p>mobile number: ${gd[i].mobile}</p>
                           <p>email: ${gd[i].email}</p>
                           <p>${gd[i].indate} to ${gd[i].outdate}</p>
                        </div>
                    </div>`;
        }
    }
    document.getElementById("showdata").innerHTML = show;
}

gd = Object.values(JSON.parse(localStorage.getItem("co")) || {});
showdata();

function removedata() {
    let room = document.getElementById("r1").value;
    let name = document.getElementById("r2").value;
    //console.log("name is ", name);    
    let email = document.getElementById("r4").value;
    //console.log("email is ", email);

    let updated = [];

    for (let i = 0; i < gd.length; i++) {
        if (room !== gd[i].room || name !== gd[i].name || email !== gd[i].email) {
            updated.push(gd[i]);
        }
    }

    //updated.pop();
    gd = updated;

    let existingData = {};
    for (let i = 0; i < gd.length; i++) {
        existingData[i] = gd[i];
    }

    //console.log(JSON.stringify(existingData))
    let sdata = JSON.stringify(existingData);
    localStorage.setItem("co", sdata);

    alert("Your data has been deleted");
    showdata();
}
