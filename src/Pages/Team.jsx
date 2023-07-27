import logo from "../assets/people_undraw.svg"
import { Link } from "react-router-dom"
import { useGlobalContext } from "../context"

function Team() {
  const { allUsers, isLoading, isError } = useGlobalContext()

  if (isError) {
    return (
      <section className="queryStatus">
        <h2 className="testText">Something went wrong...</h2>
      </section>
    )
  }

  if (isLoading) {
    return (
      <section className="queryStatus">
        <h2 className="testText">Loading...</h2>
      </section>
    )
  }

  return (
    <main className="container">
      <section className="usersContainer">
        {allUsers.map((user) => {
          const { id, name } = user
          return (
            <Link to={`/team/${id}`} key={id}>
              <article className="userCard">
                <h2 className="userName">{name}</h2>
              </article>
            </Link>
          )
        })}
      </section>

      <picture className="img-content">
        <img src={logo} alt="people gathered" id="usersImg" />
      </picture>
    </main>
  )
}
export default Team
