(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

function populate(s1, s2, s3, s4) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);
    var s3 = document.getElementById(s3);
    var s4 = document.getElementById(s4);

    s2.innnerHTML = "";
    if (s1.value == "Jawabarat") {
        var optionArray = ['karawang|Karawang', 'majalengka|Majalengka', 'bogor|Bogor'];
    } else if (s1.value == "Jawatimur") {
        var optionArray = ['gresik|Gresik', 'blitar|Blitar', 'jember|Jember'];
    }
    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option")
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
}