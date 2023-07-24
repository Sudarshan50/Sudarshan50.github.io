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
    starTime: ["5:0", "9:31", "11:1", "13:0"],
    endTime: ["9:3",'11:0',"12:0","14:0"],
    name: ["HUL-258","CLL-110",'CML-103','CLL-111(Tut)'],
    room:['LH-318','LH-108','LH-316','LH-615'],
},
{
    day: "Tuesday",
    starTime: ["5:0", "10:1", "11:1","13:0"],
    endTime: ["9:1",'11:0',"12:0",'17:0'],
    name: ["CVL-100","CLL-113",'CLL-111','CLL-113(Prc)'],
    room:['LH-114','LH-308','LH-408','Chem-Lab'],
},
{
    day: "Wednesday",
    starTime: ["5:0", "10:1", "11:1"],
    endTime: ["9:1",'11:0',"12:0"],
    name: ["CVL-100","CLL-113",'CML-103'],
    room:['LH-114','LH-308','LH-316'],
},
{
    day: "Thursday",
    starTime: ["5:0", "9:31", "11:1",'12:1', "13:1"],
    endTime: ["9:3",'11:0',"12:0",'13:0',"14:0",],
    name: ["HUL-258","CLL-110",'CLL-111','CML-103','HUL-258(Tut)'],
    room:['LH-318','LH-108','LH-108','LH-316','LH-603'],
},
{
    day: "Friday",
    starTime: ["5:0", "10:1", "11:1","13:0"],
    endTime: ["9:1",'11:0',"12:0",'14:0'],
    name: ["CVL-100","CLL-113",'CLL-111','CLL-110(Tut)'],
    room:['LH-114','LH-308','LH-408','LH-517'],
},
]



if(shedule[0].day == array[currentDay])
{
    for(let i = 0;i<4;i++)
    {
        if(currentTime>= shedule[0].starTime[i] && currentTime<=shedule[0].endTime[i])
        {
            document.getElementById("current").innerHTML = shedule[0].name[i]+" At- "+shedule[0].room[i]+ "\n" + " At- "+shedule[0].starTime[i];
            if(i<3 && currentTime <= shedule[0].starTime[i+1])
            {
                document.getElementById("upcoming").innerHTML = shedule[0].name[i+1]+" At- "+shedule[0].room[i+1] +"\n" + " At- "+shedule[0].starTime[i+1];
            }
            else
            {
                document.getElementById("upcoming").innerHTML = "Nothing to do..";

            }
        }
    }
}
else if(shedule[1].day == array[currentDay])
{
    for(let i = 0;i<4;i++)
    {
        if(currentTime>= shedule[1].starTime[i] && currentTime<=shedule[1].endTime[i])
        {
            document.getElementById("current").innerHTML = shedule[1].name[i]+" At- "+shedule[1].room[i]+"\n" + " At- "+shedule[0].starTime[i];
            if(i<3)
            {
                document.getElementById("upcoming").innerHTML = shedule[1].name[i+1]+" At- "+shedule[1].room[i+1]+"\n" + " At- "+shedule[0].starTime[i+1];;
            }
            else
            {
                document.getElementById("upcoming").innerHTML = "Nothing to do..";

            }
        }
    }
}
else if(shedule[2].day == array[currentDay])
{
    for(let i = 0;i<3;i++)
    {
        if(currentTime>= shedule[2].starTime[i] && currentTime<=shedule[2].endTime[i])
        {
            document.getElementById("current").innerHTML = shedule[2].name[i]+" At- "+shedule[2].room[i]+"\n" + " At- "+shedule[0].starTime[i];
            if(i<2)
            {
                document.getElementById("upcoming").innerHTML = shedule[2].name[i+1]+" At- "+shedule[2].room[i+1]+"\n" + " At- "+shedule[0].starTime[i+1];;
            }
            else
            {
                document.getElementById("upcoming").innerHTML = "Nothing to do..";

            }
        }
    }
}
else if(shedule[3].day == array[currentDay])
{
    for(let i = 0;i<5;i++)
    {
        if(currentTime>= shedule[3].starTime[i] && currentTime<=shedule[3].endTime[i])
        {
            document.getElementById("current").innerHTML = shedule[3].name[i]+" At- "+shedule[3].room[i]+"\n" + " At- "+shedule[0].starTime[i];
            if(i<4)
            {
                document.getElementById("upcoming").innerHTML = shedule[3].name[i+1]+" At- "+shedule[3].room[i+1]+"\n" + " At- "+shedule[0].starTime[i+1];;
            }
            else
            {
                document.getElementById("upcoming").innerHTML = "Nothing to do..";

            }
        }
    }
}
else if(shedule[4].day == array[currentDay])
{
    for(let i = 0;i<4;i++)
    {
        if(currentTime>= shedule[4].starTime[i] && currentTime<=shedule[4].endTime[i])
        {
            document.getElementById("current").innerHTML = shedule[4].name[i]+" At- "+shedule[4].room[i]+"\n" + " At- "+shedule[0].starTime[i];
            if(i<3)
            {
                document.getElementById("upcoming").innerHTML = shedule[4].name[i+1]+" At- "+shedule[4].room[i+1]+"\n" + " At- "+shedule[0].starTime[i+1];;
            }
            else
            {
                document.getElementById("upcoming").innerHTML = "Nothing to do..";

            }
        }
    }
}
else
{
    document.getElementById("current").innerHTML = "Nothing to do...";
    document.getElementById("upcoming").innerHTML = " --RELAX--";
}