// Função para carregar e exibir o cabeçalho
function loadHeader() {
    fetch('./component/header.html')
        .then(response => response.text())
        .then(data => {
            console.log(data); 
            const params = { emphasis: 'home' };
            
            const modifiedData = data.replace(/{{\s*([^}]+)\s*}}/g, (_, key) => params[key.trim()]);
            document.getElementById('header-container').innerHTML = modifiedData;
        });
}

window.addEventListener('load', loadHeader);
