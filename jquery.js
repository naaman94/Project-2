var color = {}
var checkColor = { "check1st": "", "check2nd": "" }
var count = 0 //var for counter
function rand() { return Math.round(Math.random() * 16); }

$(document).ready(function () {
    for (let i = 1; i <= 16; i++) {
        $("#master div:nth-child(" + i + ")").addClass("col-3 img" + i + " order-" + rand())
        $("#master div:nth-child(" + i + ") img ").addClass("img-thumbnail allImg").attr("id", "img" + i);
        color["img" + i] = $("#master div:nth-child(" + i + ") img ").attr("srcset");
        // $("#master div:nth-child(" + (i + 1) + ")").addClass("col-3 img" + i + " order-" + rand())
        // $("#master div:nth-child(" + (i + 1) + ") img ").addClass("img-thumbnail allImg").attr("id", "img" + i);
        // color["img" + (i + 1)] = $("#master div:nth-child(" + (i + 1) + ") img ").attr("srcset");
    }
})
$(document).ready(function () {
    for (let i = 1; i <= 16; i++) {
        $('#master').on('click', '.img' + i, function () {

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

function hiden(address, time) {
    setTimeout(function () {
        $(address).attr("srcset", "https://dummyimage.com/200x200/ffffff/4196e5")
    }, time);
}
hiden(".allImg", 4000)

function odd(i) {
    if (i % 2 == 0)
        return i - 1
    else
        return i
}