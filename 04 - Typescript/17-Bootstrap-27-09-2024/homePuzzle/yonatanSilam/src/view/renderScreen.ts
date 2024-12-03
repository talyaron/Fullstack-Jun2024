export function renderScreen(){
    document.querySelector<HTMLDivElement>("#app")!.innerHTML = `

<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Silam</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            yonatan work's
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">1 </a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<form id="submitBtn" class= "container">
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">imageURL</label>
  <input name="imageUrl" type="imageURl" class="form-control" id="exampleFormControlInput1" placeholder="data:image/jpeg;example">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label"> Share an experience</label>
  <textarea name="text" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button class="btn btn-primary" type="submit">submit</button>

</form>
`;

}