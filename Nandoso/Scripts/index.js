$(document).ready(function () {
    getSpecials();
});

function getSpecials() {
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "specials.txt",
        success: function (data) {
            var rand = randomNum(12);
            if (rand == 0) {
                rand = 1;
            }
            $('#specialsHead1').html(data[rand].name);
            $('#specialsImg1').attr("src", "img/specials" + rand + ".jpg");
            var rand2 = rand + 1;
            if (rand2 > 12) {
                rand2 = 1;
            }
            $('#specialsHead2').html(data[rand2].name);
            $('#specialsImg2').attr("src", "img/specials" + rand2 + ".jpg");
        }
    });
}
function randomNum(minNum) {
    return Math.floor(Math.random() * minNum);
}
function sendEmail() {
    $.ajax({
        type: 'POST',
        url: 'http://www.huanggaoxin.com/sendemail/mailer_tool.php',
        data: 'name=' + $("#us").val() + '&email=' + $('#email').val() + '&feedback='+$('#feedback').val(),
        success: function (data) {
            alert('Send email Successfully');
        },
        error: function () {
            alert("Email has sent");
        }
    });
}
