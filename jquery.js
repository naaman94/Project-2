var act = { "username": "naaman", "password": "Ab123456@" }
var arrColor = [0, "https://dummyimage.com/200x200/d62462/4196e5",
    "https://dummyimage.com/200x200/d62462/4196e5",
    "https://dummyimage.com/200x200/52cc10/4196e5",
    "https://dummyimage.com/200x200/52cc10/4196e5",
    "https://dummyimage.com/200x200/dbca14/4196e5",
    "https://dummyimage.com/200x200/dbca14/4196e5",
    "https://dummyimage.com/200x200/9e9b7e/4196e5",
    "https://dummyimage.com/200x200/9e9b7e/4196e5",
    "https://dummyimage.com/200x200/007aeb/4196e5",
    "https://dummyimage.com/200x200/007aeb/4196e5",
    "https://dummyimage.com/200x200/00c2f2/4196e5",
    "https://dummyimage.com/200x200/00c2f2/4196e5",
    "https://dummyimage.com/200x200/ff0000/4196e5",
    "https://dummyimage.com/200x200/ff0000/4196e5",
    "https://dummyimage.com/200x200/000000/4196e5",
    "https://dummyimage.com/200x200/000000/4196e5",
    "https://dummyimage.com/200x200/31bfb1/4196e5",
    "https://dummyimage.com/200x200/31bfb1/4196e5",
    "https://dummyimage.com/200x200/507cc0/4196e5",
    "https://dummyimage.com/200x200/507cc0/4196e5",
    "https://dummyimage.com/200x200/e4e4e4/4196e5",
    "https://dummyimage.com/200x200/e4e4e4/4196e5",
    "https://dummyimage.com/200x200/000000/4196e5",
    "https://dummyimage.com/200x200/000000/4196e5"

];
var color = {}
var checkColor = { "check1st": "", "check2nd": "" }
var count = 0 //var for counter
var col = 3, ele = 12;
var time=5000;


selectNumOfBlock(ele)
hiden(".allImg", time)

$("#edit").click(function () {
    if ($("input[name='options']:checked").attr("id") == "option1")  
    {time =10000}
    if ($("input[name='options']:checked").attr("id") == "option2")  
    {time =5000}
    if ($("input[name='options']:checked").attr("id") == "option3")  
    {time =0}
    
    if ($("input[name='numOfblocks1']:checked").val() == "12") {
        col = 4;
        ele = 12;
        selectNumOfBlock(ele);    
        show();
        hiden(".allImg", time)
    }
    if ($("input[name='numOfblocks1']:checked").val() == "16") {
        col = 3;
        ele = 16;
        selectNumOfBlock(ele);    
        show();
        hiden(".allImg", time)
    }
    if ($("input[name='numOfblocks1']:checked").val() == "20") {
        col = 2;
        ele = 20;
        selectNumOfBlock(ele);    
        show();
        hiden(".allImg", time)
    }
   });

$(document).ready(function () {
    show();

    $(document).ready(function () {
        for (let i = 1; i <= ele; i++) {
            $('#master').on('click', '.img' + i, function () {
                console.log(i)
                if (checkColor.check1st == "") {
                    checkColor.index1st = "#img" + i
                    checkColor.check1st = "img" + odd(i)
                    $("#img" + i).attr("srcset", color["img" + i])
                }
                else {
                    checkColor.index2nd = "#img" + i
                    checkColor.check2nd = "img" + odd(i)
                    $("#img" + i).attr("srcset", color["img" + i])
                    if (checkColor.check1st == checkColor.check2nd) {
                        checkColor.check1st = checkColor.check2nd = ""

                        count++
                        if (count == 8) { alert("yes you win") }
                    }
                    else {
                        hiden(checkColor.index1st + "," + checkColor.index2nd, 1000)

                        checkColor.check1st = checkColor.check2nd = ""
                    }
                }
            });
        }
    });

})
function hiden(address, time) {
    setTimeout(function () {
        $(address).attr("srcset", "https://dummyimage.com/200x200/ffffff/4196e5")
    }, time);
}


function odd(i) {
    if (i % 2 == 0)
        return i - 1
    else
        return i
}
function show() {
    for (let i = 1; i <= 20; i++) {

        $(document).ready(function () {
            $("#master div:nth-child(" + i + ") img ").attr("srcset", arrColor[i]);
            $("#master div:nth-child(" + i + ")").addClass("col-" + col + " img" + i + " order-" + rand())
            $("#master div:nth-child(" + i + ") img ").addClass("img-thumbnail allImg").attr("id", "img" + i);
            color["img" + i] = $("#master div:nth-child(" + i + ") img ").attr("srcset");

        })

    }
}


$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  function selectNumOfBlock(ele) {
    for (let i = 1; i <= 20; i++) {
        $("#master div:nth-child(" + i + ")").attr("hidden", false);
    }
    for (let i = ele + 1; i <= 20; i++) {
        $("#master div:nth-child(" + i + ")").attr("hidden", true);

    }
}

function rand() { return Math.round(Math.random() * 16); }
