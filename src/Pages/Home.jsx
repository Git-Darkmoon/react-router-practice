import logo from "../assets/cinema_undraw.svg"

function Home() {
  return (
    <main className="container">
      <div className="text-content">
        <h2 className="title">This is the home page</h2>
        <p className="desc">
          Lights, Camera, Entertainment! Dive into a world of movie magic with
          our web app. Discover, rate, and discuss the latest blockbusters and
          timeless classics. Your cinematic journey starts here! 🍿🎬
          #MovieMania
        </p>
      </div>
      <picture className="img-content">
        <img src={logo} alt="" />
      </picture>
    </main>
  )
}
export default Home
