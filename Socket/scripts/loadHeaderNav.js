const header = document.createElement('div');
header.innerHTML = `<div class="fixed-top">
    <header class="bg-body py-3 border-bottom shadow-lg" data-bs-theme="dark">
        <div class="container d-flex p-2 justify-content-between align-items-center">
            <a href="/" class="link-body-emphasis d-flex text-decoration-none align-items-center">
                <i class="bi bi-ethernet mx-3 h2 my-0"></i>
                <p class="h4 my-0">Socket</p>
            </a>
            <div class="d-flex">
                <div class="dropdown bd-mode-toggle">
                    <button class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme"
                        type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)">
                        <i class="bi bi-circle-half"></i>
                        <span class="visually-hidden" id="bd-theme-text">Toggle theme</span>
                    </button>
                    <ul class="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
                        <li>
                            <button type="button" class="dropdown-item d-flex align-items-center active"
                                data-bs-theme-value="auto" aria-pressed="true">
                                <i class="bi bi-circle-half me-2"></i>
                                Auto
                                <i class="bi bi-check ms-auto d-none"></i>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="dropdown-item d-flex align-items-center"
                                data-bs-theme-value="light" aria-pressed="false">
                                <i class="bi bi-sun-fill me-2"></i>
                                Chiaro
                                <i class="bi bi-check ms-auto d-none"></i>
                            </button>
                        </li>
                        <li>
                            <button type="button" class="dropdown-item d-flex align-items-center"
                                data-bs-theme-value="dark" aria-pressed="false">
                                <i class="bi bi-moon-fill me-2"></i>
                                Scuro
                                <i class="bi bi-check ms-auto d-none"></i>
                            </button>
                        </li>
                    </ul>
                </div>
                <button class="navbar-toggler mx-3 d-lg-none link-body-emphasis" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <i class="bi bi-list h1"></i>
                </button>
            </div>
        </div>
    </header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary py-0 shadow-lg" data-bs-theme="dark">
        <div class="container-fluid">
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav my-3">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Le Socket</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Prima Pagina</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Seconda Pagina</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Glossario</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</div>`;

const header_nav_placeholder = document.getElementById('header_nav_placeholder');
const selected_id = header_nav_placeholder.getAttribute('data-selected-id');
const selected_nav_item = header.querySelectorAll(`nav a`)[selected_id];
selected_nav_item.classList.add('active');
selected_nav_item.setAttribute('aria-current', 'page');
header_nav_placeholder.replaceWith(header.firstChild);