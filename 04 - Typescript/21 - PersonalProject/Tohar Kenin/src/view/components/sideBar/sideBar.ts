import './sideBar.scss'
import '../../../assets/logo.png'

export function renderSideBar(): string {

    return `
    <aside>
        <div id="logo" class="logo">
            <img src="../../../assets/logo.png" class="logo__img" alt="logo-image">
            <h1 class="logo__name">Academy.</h1>
        </div>
            <div class="menu">
                <a href="./index.html" class="menu-item">
                    
                    <img src="./logo.png">
                    <h3 class="menu-item__text current">Dashboard</h1>
                        <div class="current-page-sign"></div>
                </a>
                <a href="../transactions/index.html" class="menu-item">
                    <img src="../images/Glyph.svg" alt="Home-icon" class="menu-item__icon">
                    <h3 class="menu-item__text">Courses</h1>
                </a>
                <a href="#" class="menu-item">
                    <img src="../images/User-Vector.svg" alt="Home-icon" class="menu-item__icon">
                    <h3 class="menu-item__text">Zoom</h1>
                </a>
                <a href="#" class="menu-item">
                    <img src="../images/Layer 1 1.svg" alt="Home-icon" class="menu-item__icon">
                    <h3 class="menu-item__text">Forum</h1>
                </a>
                <a href="#" class="menu-item">
                    <img src="../images/credit-cerd-vector.svg" alt="Home-icon" class="menu-item__icon">
                    <h3 class="menu-item__text">My Progress</h1>
                </a>
        
            </div>
    </aside>
    `
}