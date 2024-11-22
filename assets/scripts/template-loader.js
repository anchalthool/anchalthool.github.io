// Template HTML code

// Navbar
class tmpNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <header class="main-header">
      <nav class="navbar header-nav navbar-expand-lg">
        <div class="container">
          <!-- Brand -->
          <a href="./index.html#home" class="navbar-brand">
            <h4 class="mb-0">Anchal <span class="text-primary">Thool</span></h4>
          </a>
  
          <!-- Menu -->
          <div class="collapse navbar-collapse justify-content-end" id="navbar-collapse-toggle">
            <ul class="navbar-nav mx-auto">
              <li>
                <a href="./index.html#home" class="nav-link" data-scroll-nav="0">Home</a>
              </li>
              <li>
                <a href="./index.html#about" class="nav-link" data-scroll-nav="1">About</a>
              </li>
              <li>
                <a href="./index.html#skills" class="nav-link" data-scroll-nav="2">Skills</a>
              </li>
              <li>
                <a href="./index.html#services" class="nav-link" data-scroll-nav="3">Certifications</a>
              </li>
              <li>
                <a href="./index.html#projects" class="nav-link" data-scroll-nav="4">Projects</a>
              </li>
            </ul>
          </div>
  
          <!-- View Resume -->
          <div class="ms-auto d-none d-lg-block">
            <a class="colored-btn" href="#">Download Resume</a>
          </div>
  
          <!-- Menu Toggle -->
          <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbar-collapse-toggle">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>
    </header>
    `;
  }
}

// Contact form
class tmpContactForm extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <section id="contact" class="section">
        <div class="container">
          <div class="row gy-5">
            <div class="col-lg-8 mx-auto">
              <div class="contact-form">
                <h2 class="text-dark">Get in Touch</h2>
                <p class="lead"></p>
                <div class="col-lg-8 mx-auto">
              <ul class="contact-info d-flex flex-column flex-xl-row justify-content-between">
               
                <li>
                  <div class="icon ftb-bg-2">
                    <i class="bx bx-envelope"></i>
                  </div>
                  <div class="col ps-2">
                   <h5><a style="color: black;">E-Mail</a></h5>
                    <p><a href="mailto:(at6632@nyu.edu)" style="color: black;">at6632@nyu.edu</a></p>
                  </div>
                </li>
                <li>
                  <div class="icon ftb-bg-3">
                    <i class="bx bxl-linkedin"></i>
                  </div>
                  <div class="col ps-2">
                    <h5><a style="color: black;">Linkedin</a></h5>
                    <p><a href="https://www.linkedin.com/in/anchal-thool-b107b7209/" style="color: black;">/anchal-thool-b107b7209/</a></p>
                  </div>
                </li>
              </ul>
            </div>
  
              </div>
            </div>
            
          </div>
        </div>
      </section>
    `;
  }
}

// Footer
class tmpFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /*html*/ `
    <footer class="footer">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 py-2">
            <div class="nav justify-content-center justify-content-md-start">
              <a class="link-dark-bg" href="https://github.com/anchalthool"><i class="bx bxl-github"></i></a>
              <a class="link-dark-bg" href="https://www.linkedin.com/in/anchal-thool-b107b7209/"><i class="bx bxl-linkedin-square"></i></a>
            </div>
          </div>
          <div class="col-md-6 py-2 text-center text-md-end">
            <p class="m-0">© 2024 Anchal Thool. All rights reserved.</p>
          
        </div>        
        </div>
      </div>  
    </footer>
    `;
  }
}

customElements.define("tmp-navbar", tmpNavbar);
customElements.define("tmp-contact", tmpContactForm);
customElements.define("tmp-footer", tmpFooter);
