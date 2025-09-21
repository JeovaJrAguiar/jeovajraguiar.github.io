# GitHub Pages com Estilo LaTeX

Este repositório contém um site GitHub Pages com design inspirado em documentos LaTeX, proporcionando uma aparência acadêmica e formal.

## 🎨 Características do Design

- **Fundo branco** com tipografia acadêmica
- **Fontes serifadas** que imitam o estilo LaTeX
- **Suporte completo a fórmulas LaTeX** usando MathJax
- **Layout responsivo** otimizado para leitura
- **Espaçamento e margens** no estilo de artigos acadêmicos

## 📐 Como Usar LaTeX

### Fórmulas Inline
Use `$formula$` para inserir matemática no meio do texto:
```
A equação mais famosa é $E = mc^2$.
```

### Fórmulas em Bloco
Use `$$formula$$` para fórmulas destacadas:
```
$$\int_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi}$$
```

### Exemplos Avançados

#### Matrizes
```latex
$$\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}$$
```

#### Sistemas de Equações
```latex
$$\begin{cases}
x + y = 5 \\
2x - y = 1
\end{cases}$$
```

#### Símbolos de Criptografia
```latex
$$\text{Enc}_k(m) \rightarrow c$$
$$\Pr[\mathcal{A}(\text{Enc}_k(m_0)) = 1] \leq \text{negl}(\lambda)$$
```

## 🔧 Configuração Técnica

### MathJax
O site usa MathJax 3 para renderização de LaTeX. A configuração está no `<head>` de cada página:

```javascript
MathJax = {
    tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$'], ['\\[', '\\]']],
        processEscapes: true,
        processEnvironments: true
    }
};
```

### Fontes
- **Texto principal**: Crimson Text (serifada)
- **Navegação**: Source Sans Pro (sem serifa)
- **Código**: Source Code Pro (monoespaçada)

### CSS Customizado
O arquivo `index.css` contém:
- Variáveis CSS para cores e tipografia
- Estilos LaTeX-inspired
- Layout responsivo
- Suporte a elementos acadêmicos

## 📁 Estrutura de Arquivos

```
├── index.html              # Página principal
├── about.html              # Sobre o autor
├── latex-example.html      # Exemplos de LaTeX
├── index.css              # Estilos principais
├── component/
│   └── header/
│       └── header.html    # Navegação
└── blog/                  # Artigos e posts
```

## 🚀 Como Adicionar Conteúdo

### Nova Página
1. Copie o template de uma página existente
2. Inclua o MathJax no `<head>`
3. Use as classes CSS apropriadas:
   - `.content-blog` para conteúdo principal
   - `.main-subject` para artigos
   - `.abstract` para resumos

### Novo Artigo Acadêmico
```html
<article class="main-subject">
    <h1>Título do Artigo</h1>
    
    <div class="abstract">
        Resumo do trabalho...
    </div>
    
    <section>
        <h2>Introdução</h2>
        <p>Texto com fórmulas: $f(x) = x^2$</p>
        
        $$\sum_{i=1}^{n} x_i = \bar{x} \cdot n$$
    </section>
</article>
```

## 🎯 Exemplos de Uso

- **Trabalhos acadêmicos** com fórmulas matemáticas
- **Documentação técnica** com aparência profissional
- **Portfólio de pesquisa** em ciência da computação
- **Blog técnico** com suporte a notação matemática

## 📖 Recursos Adicionais

- [Documentação MathJax](https://docs.mathjax.org/)
- [Símbolos LaTeX](https://oeis.org/wiki/List_of_LaTeX_mathematical_symbols)
- [Guia LaTeX para Web](https://en.wikibooks.org/wiki/LaTeX/Mathematics)

---

**Autor**: Aguiar - Desenvolvedor de Software  
**Ano**: 2024