const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const score3 = document.getElementById("score3");
const result = document.getElementById("result");
const calculateBtn = document.getElementById("calculate");

calculateBtn.addEventListener("click", function() {
    const s1 = parseFloat(score1.value) || 0;
    const s2 = parseFloat(score2.value) || 0;
    const s3 = parseFloat(score3.value) || 0;
    const average = (s1 + s2 + s3) / 3;
    result.textContent = "Average: " + average.toFixed(2);
    let grade
    if (average >= 90) {
        grade = "A";
    } else if (average >= 80) {
        grade = "B";
    } else if (average >= 70) {
        grade = "C";
    } else if (average >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }
    result.textContent += ", Grade: " + grade;
    if (grade === "F") {
        result.style.color = "red";
    } else {
        result.style.color = "green";
    }
});


for (let i = 0; i < 550; i++) {
    const star = document.createElement("div");
    star.style.position = "fixed";
    star.style.width = "2px";
    star.style.height = "2px";
    star.style.backgroundColor = "white";
    star.style.borderRadius = "50%";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";
    star.style.animation = "twinkle " + (Math.random() * 3 + 1) + "s infinite";
    document.body.appendChild(star);
}

const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", function() {
    score1.value = "";
    score2.value = "";
    score3.value = "";
    result.textContent = "";
});
