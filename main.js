document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-atividade');
    const deltaCell = document.querySelector('td#valor-de-delta');
    const x1Cell = document.querySelector('td#valor-de-x1');
    const x2Cell = document.querySelector('td#valor-de-x2');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        
        const coeficienteA = parseFloat(document.getElementById('coeficiente-de-a').value);
        const coeficienteB = parseFloat(document.getElementById('coeficiente-de-b').value);
        const coeficienteC = parseFloat(document.getElementById('coeficiente-de-c').value);

        
        const delta = (coeficienteB ** 2) - (4 * coeficienteA * coeficienteC);

        
        deltaCell.textContent = delta.toFixed(2); 

        
        if (delta >= 0) {
            const x1 = (-coeficienteB + Math.sqrt(delta)) / (2 * coeficienteA);
            const x2 = (-coeficienteB - Math.sqrt(delta)) / (2 * coeficienteA);

           
            x1Cell.textContent = x1.toFixed(2); 
            x2Cell.textContent = x2.toFixed(2);
        } else {
            
            x1Cell.textContent = 'Nenhuma raiz real';
            x2Cell.textContent = 'Nenhuma raiz real';
        }
    });
});
