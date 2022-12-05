function validatename() {
    document.querySelector("#validationmessage-name").innerText = "enter the name"
}
function ValidateEmail(input) {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // document.querySelector("#validationmessage-email").innerText = "enter the email"
    if (!validRegex.test(input)) {
        document.querySelector("#validationmessage-email").innerText = "enter the correct email"
    }

}
function validateSubject() {
    document.querySelector("#validationmessage-subject").innerText = "enter the subject"
}
function validatemessage() {
    document.querySelector("#validationmessage-message").innerText = "enter the message"
}
window.addEventListener("load", function () {
    validatename();
    ValidateEmail();
    validateSubject();
    validatemessage();
})
document.querySelector("#name").addEventListener("change", function (e) {
    e.preventDefault();
    if (e.target.name == "name" && e.target.value == "") {
        validatename();
    }

})
document.querySelector("#email").addEventListener("change", function (e) {
    e.preventDefault();
    if (e.target.name == "email") {
        ValidateEmail();
    }
})
document.querySelector("#subject").addEventListener("change", function (e) {
    e.preventDefault();
    if (e.target.name == "subject" && e.target.value == "") {
        validateSubject();
    }
})
document.querySelector("#message").addEventListener("change", function (e) {
    e.preventDefault();
    if (e.target.name == "message" && e.target.value == "") {
        validatemessage();
    }
})

$("#submit-form").submit((e) => {
    e.preventDefault()
    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbzzmdr5stVr5hBrIMkxqFBdmekOi1eEc3BvivVz-s_7NIHQiYFmkePWj7RF8aGbtLHQHg/exec",
        data: $("#submit-form").serialize(),
        method: "post",
        success: function (response) {
            alert("Form submitted successfully")
            window.location.reload()
            //window.location.href="https://google.com"
        },
        error: function (err) {
            alert("Something Error")

        }
    })
})