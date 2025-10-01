function loadHeader(pageEmphasis) {
    const currentPath = window.location.pathname;
    const isInSubfolder = currentPath.includes('/component/');
    const headerPath = isInSubfolder ? '../header/header.html' : './component/header/header.html';
    
    console.log('Tentando carregar header para página:', pageEmphasis, 'Caminho:', headerPath);
    
    fetch(headerPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const params = { emphasis: pageEmphasis };
            
            let modifiedData = data.replace(/{{\s*([^}]+)\s*}}/g, (_, key) => params[key.trim()]);
            
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
    const currentPath = window.location.pathname;
    const isInSubfolder = currentPath.includes('/component/');
    const footerPath = isInSubfolder ? '../footer/footer.html' : './component/footer/footer.html';
    
    console.log('Tentando carregar footer...', 'Caminho:', footerPath);
    fetch(footerPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar footer:', error);
            document.getElementById('footer-container').innerHTML = '<footer><p>&copy; 2025 Aguiar</p></footer>';
        });
}

function toggleMenu() {
    const nav = document.getElementById('menu-h');
    if (nav) {
        nav.classList.toggle('active');
    }
}
