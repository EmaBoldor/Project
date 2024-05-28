document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('custom-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne trimiterea formularului

        // Obține valorile introduse de utilizator
        const formData = new FormData(form);

        // Construiește un obiect cu datele formularului
        const formValues = {};
        formData.forEach((value, key) => {
            formValues[key] = value;
        });

        // Trimiterea datelor către server (aici poți folosi AJAX sau Fetch API)
        console.log(formValues);
        
        // Simulează o confirmare a trimiterii
        alert('Formularul a fost trimis cu succes! Mulțumim pentru completare.');
    });
});