window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle');
window.bootstrap = require('jquery/dist/jquery.min.js');
import('./assets/sass/style.scss');
import '@fortawesome/fontawesome-free/js/all.min.js';

// Start copyright date;
document.querySelector('.thisYear').textContent = `${new Date().getFullYear()}`;
// End copyright date;

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()



document.querySelectorAll('.add-to-card-btn').forEach(item => {
    item.addEventListener('click', () => {
        alert('أضيف المنتج إلى عربة الشراء');
    })
})
