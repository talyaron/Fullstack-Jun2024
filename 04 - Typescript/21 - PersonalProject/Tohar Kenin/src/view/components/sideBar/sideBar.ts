import './sideBar.scss'
import '../../../assets/logo.png'
'../pages/register/registerPage.ts'

export function renderSideBar(): string {

    return `
    <aside>
        <div id="logo" class="logo">
            <img src="../../../assets/logo.png" class="logo__img" alt="logo-image">
            <h1 class="logo__name">Academy.</h1>
        </div>
            <div class="menu">
                <div href="../pages/mainPage/dist/mainPage.js" class="menu-item" data-target="dashboard">
                    <img src="../../../assets/logo.png">
                    <h3 class="menu-item__text dashboard">Dashboard</h3>
                </div>
                <a href="?param1=login" class="menu-item" data-target="courses">
                    <img src="../images/Glyph.svg" alt="Home-icon" class="menu-item__icon">
                    <h3 class="menu-item__text courses">Courses</h3>
                </a>
                <div href="#" class="menu-item" data-target="log">
                    <img src="../images/User-Vector.svg" alt="Home-icon" class="menu-item__icon">
                    <h3 class="menu-item__text" log>Zoom</h1>
                </div>
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