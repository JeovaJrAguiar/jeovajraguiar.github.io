// Função para carregar e exibir o cabeçalho
function loadHeader(pageEmphasis) {
    // Detecta se estamos em uma subpasta
    const currentPath = window.location.pathname;
    const isInSubfolder = currentPath.includes('/component/');
    const headerPath = isInSubfolder ? '../header/header.html' : './component/header/header.html';
    
    console.log('Tentando carregar header para página:', pageEmphasis, 'Caminho:', headerPath, 'Base path:', getBasePath());
    
    fetch(headerPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const params = { emphasis: pageEmphasis };
            
            // Substitui os placeholders
            let modifiedData = data.replace(/{{\s*([^}]+)\s*}}/g, (_, key) => params[key.trim()]);
            
            // Determina o caminho base correto para os links
            const basePath = getBasePath();
            
            // Ajusta todos os links no header
            modifiedData = modifiedData.replace(/href="\.\//g, `href="${basePath}`);
            modifiedData = modifiedData.replace(/href="\.\/component\/blog\/blog\.html"/g, `href="${basePath}component/blog/blog.html"`);
            
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
            // Fallback: criar um footer simples
            document.getElementById('footer-container').innerHTML = '<footer><p>&copy; 2025 Aguiar</p></footer>';
        });
}

// Função para determinar o caminho base correto
function getBasePath() {
    const isLocal = window.location.protocol === 'file:' || 
                   window.location.hostname === '' || 
                   window.location.hostname === 'localhost' || 
                   window.location.hostname.startsWith('127.');
    
    if (isLocal) {
        // Para desenvolvimento local com file://, precisamos calcular o caminho relativo
        const currentPath = window.location.pathname;
        if (currentPath.includes('/component/')) {
            return '../../';
        } else {
            return './';
        }
    } else {
        // Para GitHub Pages, usa caminho absoluto do repositório
        return '/jeovajraguiar.github.io/';
    }
}

// Função para toggle do menu mobile
function toggleMenu() {
    const nav = document.getElementById('menu-h');
    if (nav) {
        nav.classList.toggle('active');
    }
}
