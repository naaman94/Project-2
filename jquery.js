var color = {}
var checkColor = { "click1st": null, "click2nd": null }
$(document).ready(function () {
    for (let i = 0; i <= 16; i++) {
        var x = Math.round(Math.random() * 16);

        $("#master div:nth-child(" + i + ")").addClass("col-3 img" + i + " order-" + x)
        $("#master div:nth-child(" + i + ") img ").addClass("img-thumbnail allImg").attr("id", "img" + i);
        color["img" + i] = $("#master div:nth-child(" + i + ") img ").attr("srcset");
        $('#master').on('click', '.img' + i, function () {

            if (checkColor.click1st == null) {
                checkColor.click1st = "img" + i
                $("#img" + i).attr("srcset", color["img" + i])
            }
            else {
                checkColor.click2nd = "img" + i
                $("#img" + i).attr("srcset", color["img" + i])
            }
        })

    }
});


function hiden() {
    $(".allImg").attr("srcset", "https://dummyimage.com/200x200/ffffff/4196e5")

}
setTimeout(hiden, 4000);


