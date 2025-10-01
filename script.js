function loadHeader(pageEmphasis) {
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
            
            // Para GitHub Pages, ajusta apenas o caminho base se necessário
            const basePath = getBasePath();
            if (basePath !== './') {
                // Substitui os links específicos apenas no GitHub Pages
                modifiedData = modifiedData.replace(/href="\.\/"/g, `href="${basePath}"`);
                modifiedData = modifiedData.replace(/href="\.\/projects\.html"/g, `href="${basePath}projects.html"`);
                modifiedData = modifiedData.replace(/href="\.\/blog\.html"/g, `href="${basePath}blog.html"`);
                modifiedData = modifiedData.replace(/href="\.\/volunteering\.html"/g, `href="${basePath}volunteering.html"`);
                modifiedData = modifiedData.replace(/href="\.\/about\.html"/g, `href="${basePath}about.html"`);
                modifiedData = modifiedData.replace(/href="\.\/latex-example\.html"/g, `href="${basePath}latex-example.html"`);
            }
            
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

// Função para determinar o caminho base correto
function getBasePath() {
    const isLocal = window.location.protocol === 'file:' || 
                   window.location.hostname === '' || 
                   window.location.hostname === 'localhost' || 
                   window.location.hostname.startsWith('127.');
    
    if (isLocal) {
        // Para desenvolvimento local, sempre usa caminhos relativos simples
        return './';
    } else {
        // Para GitHub Pages, usa caminho absoluto do repositório
        if (window.location.hostname.includes('github.io')) {
            return '/jeovajraguiar.github.io/';
        } else {
            // Fallback para outros servidores
            return './';
        }
    }
}

// Função para toggle do menu mobile
function toggleMenu() {
    const nav = document.getElementById('menu-h');
    if (nav) {
        nav.classList.toggle('active');
    }
}
