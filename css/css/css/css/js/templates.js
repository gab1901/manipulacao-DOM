const templates = {
    home: `
        <h1>Bem-vindo</h1>
        <p>SPA em JavaScript.</p>
    `,
    projetos: `
        <h1>Projetos</h1>
        <div class="cards-area">
            <div class="card">Projeto 1</div>
            <div class="card">Projeto 2</div>
            <div class="card">Projeto 3</div>
        </div>
    `,
    contato: `
        <h1>Contato</h1>
        <form id="contactForm">
            <input type="text" id="nome" placeholder="Seu nome">
            <br><br>
            <input type="email" id="email" placeholder="Seu email">
            <br><br>
            <button class="btn" type="submit">Enviar</button>
        </form>
        <div id="alert"></div>
    `
}
