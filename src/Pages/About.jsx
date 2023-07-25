import logo from "../assets/moonlight_undraw.svg"

function About() {
  return (
    <main className="container">
      <picture className="img-content">
        <img src={logo} alt="" />
      </picture>
      <div className="text-content">
        <h2 className="title">About Us</h2>
        <p className="desc">
          Welcome to our movie haven! Passionate about films, we&apos;re a team
          of avid movie buffs dedicated to curating the ultimate cinematic
          experience. Our mission is to bring you the best of cinema, foster
          discussions, and celebrate the magic of storytelling. Join us on this
          reel adventure! 🎥✨ #AboutMovies
        </p>
      </div>
    </main>
  )
}
export default About
