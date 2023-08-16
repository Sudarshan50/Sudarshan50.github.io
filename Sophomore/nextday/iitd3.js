setInterval(showTimeout,1000);
function showTimeout()
{
    const dateTime = new Date();
    const currentDay = dateTime.getDay();
    var hours = dateTime.getHours();
    var minutes = dateTime.getMinutes();
    var seconds = dateTime.getSeconds();
    var date = dateTime.getDate();
    var month = dateTime.getMonth();
    var year = dateTime.getFullYear();
    const array = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const currentTime = hours+":"+minutes;

    // Showing date and time at the bottom of nav bar
    document.getElementById("uio").innerHTML = 'Date:- '+ date+"/"+month+"/"+year + " , "+ array[currentDay];
    document.getElementById("oiu").innerHTML = 'Time:- '+hours+':'+minutes+":"+seconds+" seconds";
}
const dateTime = new Date();
const currentDay = dateTime.getDay();
var hours = dateTime.getHours();
var minutes = dateTime.getMinutes();
var seconds = dateTime.getSeconds();
var date = dateTime.getDate();
var month = dateTime.getMonth();
var year = dateTime.getFullYear();
const array = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const currentTime = hours+":"+minutes;

// Showing date and time at the bottom of nav bar
document.getElementById("uio").innerHTML = 'Date:- '+ date+"/"+month+"/"+year + " , "+ array[currentDay];
document.getElementById("oiu").innerHTML = 'Time:- '+hours+':'+minutes+":"+seconds+" seconds";

const shedule = 
[{
    day: "Monday",
    starTime: ["8:0", "9:31", "11:1", "13:0"],
    endTime: ["9:3",'11:0',"12:0","14:0"],
    name: ["HUL-258","CLL-110",'CML-103','CLL-111(Tut)'],
    room:['LH-318','LH-108','LH-316','LH-615'],
},
{
    day: "Tuesday",
    starTime: ["8:0", "10:1", "11:1","13:0"],
    endTime: ["9:1",'11:0',"12:0",'17:0'],
    name: ["CVL-100","CLL-113",'CLL-111','CLL-113(Prc)'],
    room:['LH-114','LH-308','LH-408','Chem-Lab'],
},
{
    day: "Wednesday",
    starTime: ["8:0", "10:1", "11:1"],
    endTime: ["9:1",'11:0',"12:0"],
    name: ["CVL-100","CLL-113",'CML-103'],
    room:['LH-114','LH-308','LH-316'],
},
{
    day: "Thursday",
    starTime: ["8:0", "9:31", "11:1",'12:1', "13:1"],
    endTime: ["9:3",'11:0',"12:0",'13:0',"14:0",],
    name: ["HUL-258","CLL-110",'CLL-111','CML-103','HUL-258(Tut)'],
    room:['LH-318','LH-108','LH-108','LH-316','LH-603'],
},
{
    day: "Friday",
    starTime: ["8:0", "10:1", "11:1","13:0"],
    endTime: ["9:1",'11:0',"12:0",'14:0'],
    name: ["CVL-100","CLL-113",'CLL-111','CLL-110(Tut)'],
    room:['LH-114','LH-308','LH-408','LH-517'],
},
]

// Showing cuurent day shedule at the bottom of nav bar..
if(shedule[0].day== array[currentDay+1] )
{
    const newShedule = document.createElement('div');
    newShedule.innerHTML =`<table id="bur">
    <tr>
     <th colspan="5">Monday</th>
     </tr>
    <tr>
        <th>Time- </th>
        <td>8:00 - 9:30</td>
        <td>9:30 - 11:00</td>
        <td>11:00 - 12:00</td>
        <td>13:00 - 14:00</td>
    </tr>
    <tr>
        <th>CourseName- </th>
        <td>HUL-258</td>
        <td>CLL-110</td>
        <td>CML-103</td>
        <td>CLL-111(Tut)</td>
    </tr>
    <tr>
        <td>Venue- </td>
        <td>LH-318</td>
        <td>LH-108</td>
        <td>LH-316</td>
        <td>LH-615</td>
    </tr> 
</table>`
    document.getElementById("cur").append(newShedule);
}
else if(shedule[1].day == array[currentDay+1])
{
    const newShedule = document.createElement('div');
    newShedule.innerHTML =`<table id="bur">
    <tr>
     <th colspan="5">Tuesday</th>
     </tr>
    <tr>
        <th>Time- </th>
        <td>8:00 - 9:00</td>
        <td>10:00 - 11:00</td>
        <td>11:00 - 12:00</td>
        <td>13:00 - 17:00</td>
    </tr>
    <tr>
        <th>CourseName- </th>
        <td>CVL-100</td>
        <td>CLL-113</td>
        <td>CLL-111</td>
        <td>CLL-113(Prc)</td>
    </tr>
    <tr>
         <th>Venue- </th>
        <td>LH-114</td>
        <td>LH-308'</td>
        <td>LH-408</td>
        <td>Chem-Lab</td>
    </tr>
</table>`
    document.getElementById("cur").append(newShedule);
}
else if(shedule[2].day == array[currentDay+1])
{
    const newShedule = document.createElement('div');
    newShedule.innerHTML =`<table id="bur">
    <tr>
     <th colspan="5">Wednesday</th>
     </tr>
    <tr>
        <th>Time- </th>
        <td>8:00 - 9:00</td>
        <td>10:00 - 11:00</td>
        <td>11:00 - 12:00</td>
    </tr>
    <tr>
        <th>CourseName- </th>
        <td>CVL-100</td>
        <td>CLL-113</td>
        <td>CML-103</td>
    </tr>
    <tr>
        <th>Venue- </th>
        <td>LH-114</td>
        <td>LH-308'</td>
        <td>LH-316</td>
    </tr>
</table>`
    document.getElementById("cur").append(newShedule);
}

else if(shedule[3].day ==array[currentDay+1])
{
    const newShedule = document.createElement('div');
    newShedule.innerHTML =`<table id="bur">
    <tr>
     <th colspan="6">Thursday</th>
     </tr>
    <tr>
        <th>Time- </th>
        <td>8:00 - 9:30</td>
        <td>9:30 - 11:00</td>
        <td>11:00 - 12:00</td>
        <td>12:00 - 13:00</td>
        <td>13:00 - 14:00</td>
    </tr>
    <tr>
        <th>CourseName- </th>
        <td>HUL-258</td>
        <td>CLL-110</td>
        <td>CLL-111</td>
        <td>CML-103</td>
        <td>HUL-258(Tut)</td>
    </tr>
    <tr>
        <th>Venue- </th>
        <td>LH-318</td>
        <td>LH-108'</td>
        <td>LH-108</td>
        <td>LH-316</td>
        <td>LH-603</td>
    </tr>
</table>`
    document.getElementById("cur").append(newShedule);
}
else if(shedule[4].day == array[currentDay+1])
{
    const newShedule = document.createElement('div');
    newShedule.innerHTML =`<table id="bur">
    <tr>
     <th colspan="5">Friday</th>
     </tr>
    <tr>
        <th>Time- </th>
        <td>8:00 - 9:00</td>
        <td>10:00 - 11:00</td>
        <td>11:00 - 12:00</td>
        <td>13:00 - 14:00</td>
    </tr>
    <tr>
        <th>CourseName- </th>
        <td>CVL-100</td>
        <td>CLL-113</td>
        <td>CLL-111</td>
        <td>CLL-110(Tut)</td>
    </tr>
    <tr>
        <th>Venue- </th>
        <td>LH-114</td>
        <td>LH-308'</td>
        <td>LH-408</td>
        <td>LH-517</td>
    </tr>
</table>`
    document.getElementById("cur").append(newShedule);
}
else
{
    document.getElementById("cur").innerHTML = `<p id="current">You get caught up!</p>`;

}











