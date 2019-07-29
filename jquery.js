var arrColor = ["question-mark.png",
    "https://dummyimage.com/200x200/d62462/4196e5",
    "https://dummyimage.com/200x200/d62462/4196e5",
    "https://dummyimage.com/200x200/52cc10/4196e5",
    "https://dummyimage.com/200x200/52cc10/4196e5",
    "https://dummyimage.com/200x200/ff00ff/4196e5",
    "https://dummyimage.com/200x200/ff00ff/4196e5",
    "https://dummyimage.com/200x200/9e9b7e/4196e5",
    "https://dummyimage.com/200x200/9e9b7e/4196e5",
    "https://dummyimage.com/200x200/007aeb/4196e5",
    "https://dummyimage.com/200x200/007aeb/4196e5",
    "https://dummyimage.com/200x200/3D003D/4196e5",
    "https://dummyimage.com/200x200/3D003D/4196e5",
    "https://dummyimage.com/200x200/ff0000/4196e5",
    "https://dummyimage.com/200x200/ff0000/4196e5",
    "https://dummyimage.com/200x200/000000/4196e5",
    "https://dummyimage.com/200x200/000000/4196e5",
    "https://dummyimage.com/200x200/31bfb1/4196e5",
    "https://dummyimage.com/200x200/31bfb1/4196e5",
    "https://dummyimage.com/200x200/FFFF00/4196e5",
    "https://dummyimage.com/200x200/FFFF00/4196e5",
    "https://dummyimage.com/200x200/e4e4e4/4196e5",
    "https://dummyimage.com/200x200/e4e4e4/4196e5",
    "https://dummyimage.com/200x200/FF8C00/4196e5",
    "https://dummyimage.com/200x200/FF8C00/4196e5",
    "https://dummyimage.com/200x200/ff00ff/4196e5",
    "https://dummyimage.com/200x200/ff00ff/4196e5",
    "https://dummyimage.com/200x200/ff9100/4196e5",
    "https://dummyimage.com/200x200/ff9100/4196e5"

];
var avg = 0
var color = {}
var checkColor = { "check1st": "", "check2nd": "" }
var succeed = 0 //var for counter
var fails = 0
var hint = 0
var col = 2, ele = 12;
var time = 5000;
$(document).ready(function () {
    $('#gameset').modal('show');

})

// for (let i = 1; i <= 20; i++) {
//     $('#master').append("<div><img alt=\"Responsive image\">" + i + "</div>")
//     console.log(i)
// }
// here am trying to make it creat html code in for loop but its not work to not repate the image
$("#start").click(function () {

    var docElm = document.documentElement;
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    }
    else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    }
    else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
    }
    else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
    }

    if ($("input[name='options']:checked").attr("id") == "option1") { time = 10000 }
    if ($("input[name='options']:checked").attr("id") == "option2") { time = 5000 }
    if ($("input[name='options']:checked").attr("id") == "option3") { time = 0 }

    if ($("input[name='numOfblocks1']:checked").val() == "12") {
        col = 3;
        ele = 12;
        succeed = 0;
        fails = 0
        selectNumOfBlock(ele);
        show();
        hiden(".allImg", time)
        chk();
    }
    if ($("input[name='numOfblocks1']:checked").val() == "16") {
        col = 3;
        ele = 16;
        succeed = 0;
        fails = 0
        selectNumOfBlock(ele);
        show();
        hiden(".allImg", time)
        chk();
    }
    if ($("input[name='numOfblocks1']:checked").val() == "24") {
        col = 2;
        ele = 24;
        succeed = 0;
        fails = 0
        selectNumOfBlock(ele);
        show();
        hiden(".allImg", time)
        chk();
    }
});

show();
chk();

function chk() {
    $(document).ready(function () {
        for (let i = 1; i <= ele; i++) {
            $('#master').on('click', '.img' + i, function () {

                if (checkColor.check1st == "" && ($("#img" + i).attr("srcset") == arrColor[0])) {
                    checkColor.index1st = "#img" + i
                    checkColor.check1st = "img" + odd(i)
                    $("#img" + i).attr("srcset", color["img" + i])
                }
                else if ((checkColor.check2nd == "" && ($("#img" + i).attr("srcset") == arrColor[0]))) {
                    checkColor.index2nd = "#img" + i
                    checkColor.check2nd = "img" + odd(i)
                    $("#img" + i).attr("srcset", color["img" + i])
                    if (checkColor.check1st == checkColor.check2nd) {
                        checkColor.check1st = checkColor.check2nd = ""
                        hint = 0
                        succeed++
                        if (succeed == ele / 2) {
                            youWin();
                        }
                    }
                    else {
                        $('#master').off('click');
                        hiden(checkColor.index1st + "," + checkColor.index2nd, 1000)
                        checkColor.check1st = checkColor.check2nd = ""
                        fails++
                        hint++
                        if (hint === 3) {
                            $("#hints").attr("hidden", false);
                        }
                    }
                }
            });
        }
    });
}

function hiden(address, time) {
    setTimeout(function () {
        $(address).attr("srcset", arrColor[0])
        chk()
    }, time);
}


function odd(i) {
    if (i % 2 == 0)
        return i - 1
    else
        return i
}

function show() {
    for (let i = 1; i <= 24; i++) {

        $(document).ready(function () {
            $("#master div:nth-child(" + i + ")").removeClass()
            $("#master div:nth-child(" + i + ") img ").attr("srcset", arrColor[i]);
            $("#master div:nth-child(" + i + ")").addClass("col-" + col + " img" + i + " order-" + rand())
            $("#master div:nth-child(" + i + ") img ").addClass("img-thumbnail allImg").attr("id", "img" + i);
            color["img" + i] = $("#master div:nth-child(" + i + ") img ").attr("srcset");

        })

    }
}

function selectNumOfBlock(ele) {
    for (let i = 1; i <= 24; i++) {
        $("#master div:nth-child(" + i + ")").attr("hidden", false);
    }
    for (let i = ele + 1; i <= 24; i++) {
        $("#master div:nth-child(" + i + ")").attr("hidden", true);

    }
}

function rand() { return Math.round(Math.random() * 24); }

function youWin() {
    var failst = "";
    var avg = Math.round(succeed / (fails + succeed) * 100);
    if (fails == 0) {
        failst = "Excellent , You never fail."
    }
    else if (fails == 1) {
        failst = "Very Good , You fail just in 1 Time . "
    }

    else {
        failst = "You Fail in " + fails + " Times."
    }
    $('#congratulations').modal('show');

    $("#reslut").html(`
    <div style="width: 400px; margin: 20px auto">
    <div style="height: 25px; class="progress">
    
      <div class="progress-bar progress-bar-striped bg-danger" role="progressbar" aria-valuenow="${avg}" aria-valuemin="0" aria-valuemax="100" style="max-width: ${avg}%">
      <span class="title">Your success rate is ${avg}%</span>
      </div>
      <p class="d-flex justify-content-center"> ${failst} </p>
    </div>
  </div>
  `)
}

$('#playAgain').click(function () {
    location.reload();
});


$(document).ready(function () {
    $("#hints").click(function () {
        $("#hints").attr("disabled", true)
        $('#gameset').modal('hide');
        for (let i = 1; i <= ele; i++) {
            if ($("#img" + i).attr("srcset") == arrColor[0]) {
                if (i % 2 == 0) {
                    $("#img" + i).attr("srcset", color["img" + i])
                    $("#img" + (i - 1)).attr("srcset", color["img" + (i - 1)])
                }
                else {
                    $("#img" + i).attr("srcset", color["img" + i])
                    $("#img" + (i + 1)).attr("srcset", color["img" + (i + 1)])
                }
                succeed++
                if (succeed == ele / 2) {
                    youWin();
                }
                break;

            }
        }
    })
})


$("#srt").dblclick(function () {
    fails = 0;
    succeed = 1;
    show();
    youWin();
})


