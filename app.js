document.addEventListener('DOMContentLoaded', function () {
    const opinionButton = document.getElementById('opinionButton');
    const opinionForm = document.getElementById('opinionForm');
    const submitOpinion = document.getElementById('submitOpinion');

    opinionButton.addEventListener('click', function () {
        opinionForm.style.display = 'flex';
    });

    submitOpinion.addEventListener('click', function () {
        const opinionText = document.getElementById('opinionText').value;
        if (opinionText) {
            alert('Opinião enviada: ' + opinionText);
            opinionForm.style.display = 'none';
            document.getElementById('opinionText').value = '';
        } else {
            alert('Por favor, insira sua opinião.');
        }
    });
});
