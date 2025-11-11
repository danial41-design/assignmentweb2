document.addEventListener('DOMContentLoaded', function () {
                const bodyf = document.getElementById('formo')
                const form = document.getElementById('orderForm');
                const errorMessages = document.getElementById('errorMessages');

                form.addEventListener('submit', function (event) {
                    event.preventDefault();
                    errorMessages.innerHTML = '';

                    let valid = true;
                    let errors = [];

                    const address = document.getElementById('Address').value.trim();
                    if (!address) {
                        valid = false;
                        bodyf.style.backgroundColor = 'red'
                        errors.push('Адрес не может быть пустым.');
                    }

                    const amount = document.getElementById('Amount').value.trim();
                    if (!amount || amount <= 0) {
                        valid = false;
                        errors.push('Введите количество больше 0.');
                    }

                    if (!valid) {
                        errorMessages.innerHTML = `<ul><li>${errors.join('</li><li>')}</li></ul>`;
                    } else {
                        form.submit(); 
                    }
                });
            });