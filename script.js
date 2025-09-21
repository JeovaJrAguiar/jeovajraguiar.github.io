function loadHeader(pageEmphasis) {
    fetch('./component/header/header.html')
        .then(response => {
            return response.text();
        })
        .then(data => {
            const params = { emphasis: pageEmphasis };
            
            const modifiedData = data.replace(/{{\s*([^}]+)\s*}}/g, (_, key) => params[key.trim()]);
            
            document.getElementById('header-container').innerHTML = modifiedData;
            
            const elementId = pageEmphasis;
            
            if (elementId) {
                const element = document.getElementById(elementId);
                if (element) {
                    element.classList.add('icon-nav-current');
                } else {
                    console.log("Elemento não encontrado com ID:", elementId);
                }
            } else {
                console.log("Nenhum elementId válido");
            }
            
            console.log('Header carregado com sucesso!');
        })
        .catch(error => {
            console.error('Erro ao carregar header:', error);
        });
}

function loadFooter() {
    fetch('./component/footer/footer.html')
        .then(response => {
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar footer:', error);
        });
}
