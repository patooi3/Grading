function calculateResult() {

    let studentName =
        document.getElementById("studentName").value;

    let math =
        Number(document.getElementById("math").value);

    let english =
        Number(document.getElementById("english").value);

    let database =
        Number(document.getElementById("database").value);

    let programming =
        Number(document.getElementById("programming").value);


    if (studentName === "") {
        alert("Please enter student name.");
        return;
    }


    let total =
        math +
        english +
        database +
        programming;


    let average =
        total / 4;


    let grade;

    if (average >= 80) {
        grade = "A";
    }
    else if (average >= 70) {
        grade = "B";
    }
    else if (average >= 60) {
        grade = "C";
    }
    else if (average >= 50) {
        grade = "D";
    }
    else {
        grade = "F";
    }

    let status;

if (average >= 50) {
    status = "PASS";
}
else {
    status = "FAIL";
}


    document.getElementById("resultName").textContent =
        studentName;

    document.getElementById("resultMath").textContent =
        math;

    document.getElementById("resultEnglish").textContent =
        english;

    document.getElementById("resultDatabase").textContent =
        database;

    document.getElementById("resultProgramming").textContent =
        programming;

    document.getElementById("total").textContent =
        total;

    document.getElementById("average").textContent =
        average.toFixed(2);

    document.getElementById("grade").textContent =
        grade;
    document.getElementById("status").textContent =
    status;
}
function resetForm() {

    document.getElementById("studentName").value = "";

    document.getElementById("math").value = "";

    document.getElementById("english").value = "";

    document.getElementById("database").value = "";

    document.getElementById("programming").value = "";


    document.getElementById("resultName").textContent = "-";

    document.getElementById("resultMath").textContent = "-";

    document.getElementById("resultEnglish").textContent = "-";

    document.getElementById("resultDatabase").textContent = "-";

    document.getElementById("resultProgramming").textContent = "-";

    document.getElementById("total").textContent = "-";

    document.getElementById("average").textContent = "-";

    document.getElementById("grade").textContent = "-";

    document.getElementById("status").textContent = "-";
}