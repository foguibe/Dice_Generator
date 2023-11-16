document.addEventListener("DOMContentLoaded", function() {
    const rollBtn = document.getElementById("roll");
    rollBtn.addEventListener("click", function() {
        var img1 = Math.floor(Math.random() * 6) + 1;
        var img2 = Math.floor(Math.random() * 6) + 1;
        var img1Src = "images/dice" + img1.toString() + ".jpg";
        var img2Src = "images/dice" + img2.toString() + ".jpg";

        var img1Alt = "Six-sided die showing the number " + img1.toString() + " on the top face.";
        var img2Alt = "Six-sided die showing the number " + img2.toString() + " on the top face."

        var src1 = document.getElementById("src1");
        var src2 = document.getElementById("src2");

        src1.src = img1Src;
        src1.alt = img1Alt;

        src2.src = img2Src;
        src2.alt = img2Alt;
    })
})