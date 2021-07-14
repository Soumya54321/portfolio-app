import "./style.css";

const Header = () => {
  return (
    <header id="header">
        <div class="d-flex flex-column">

            <div class="profile">
                <img src={`${process.env.PUBLIC_URL}/img/myImg1.jpeg`} alt="" class="img-fluid rounded-circle"/>
                <h1 class="text-light"><a href="/">Soumyadeep Paul</a></h1>
                <div class="social-links mt-3 text-center">
                    <a href="https://www.facebook.com/soumyadeep.paul.35" target="_blank"  rel="noreferrer" class="facebook facebook-background"><i class="fa fa-facebook"></i></a>
                    <a href="https://www.instagram.com/__soumyadeeppaul__/" target="_blank"  rel="noreferrer" class="instagram insta-background"><i class="fa fa-instagram"></i></a>
                    <a href="https://github.com/Soumya54321" class="github github-background"  rel="noreferrer" target="_blank"><i class="fa fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/soumyadeep-paul-b8516b191/"  rel="noreferrer" class="linkedin linkedin-background" target="_blank"><i class="fa fa-linkedin"></i></a>
                </div>
            </div>

            <nav id="navbar" class="nav-menu navbar">
                <ul>
                    <li><a href="#hero" class="nav-link scrollto active"><i class="bx bx-home"></i> <span>Home</span></a></li>
                    <li><a href="#about" class="nav-link scrollto"><i class="bx bx-user"></i> <span>About</span></a></li>
                    <li><a href="#skills" class="nav-link scrollto"><i class="bx bx-user"></i> <span>Skills</span></a></li>
                    <li><a href="#resume" class="nav-link scrollto"><i class="bx bx-file-blank"></i> <span>Resume</span></a></li>
                    <li><a href="#portfolio" class="nav-link scrollto"><i class="bx bx-book-content"></i> <span>Portfolio</span></a></li>
                    <li><a href="#services" class="nav-link scrollto"><i class="bx bx-server"></i> <span>Services</span></a></li>
                    <li><a href="#contact" class="nav-link scrollto"><i class="bx bx-envelope"></i> <span>Contact</span></a></li>
                </ul>
            </nav>
        </div>
  </header>
  );
};

export default Header;