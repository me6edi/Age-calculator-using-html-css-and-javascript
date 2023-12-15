function calculateAge() {
    var dobInput = document.getElementById("dob").value;

    if (dobInput === "") {
        alert("Please enter your date of birth");
        return;
    }

    var dob = new Date(dobInput);
    var today = new Date();

    var age = today.getFullYear() - dob.getFullYear();

    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById("result").innerHTML = "Your age is: " + age + " years";
}