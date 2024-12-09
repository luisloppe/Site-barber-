        // Referência ao botão
        const agendarBtn = document.getElementById('finaliza');
        const dataInput = document.getElementById('data');

        // Adiciona o evento de clique
        agendarBtn.addEventListener('click', () => {
            const dataSelecionada = dataInput.value;

            if (dataSelecionada) {
                // Exibe o alerta com a data escolhida
                alert(`Seu agendamento foi confirmado para: ${dataSelecionada}`);
            } else {
                // Exibe o alerta se nenhuma data foi selecionada
                alert('Por favor, escolha uma data antes de agendar.');
            }
        });
 