const navbar = Vue.createApp(
    {
        data(){
            return{}
        }
    }
)


navbar.component("navbar",
{
    template:`
    <nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <a class="navbar-brand" href="index.html"><h2>James Tan</h2></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="timetable.html">My Schedule</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="travels.html">My Travels</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="food.html">Food I Like</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="horses.html">Horses</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `
})

const navbarMount = navbar.mount("#navbar")