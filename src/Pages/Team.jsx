import { useQuery } from "@tanstack/react-query"
import logo from "../assets/people_undraw.svg"

function Team() {
  const API_URL = "https://jsonplaceholder.typicode.com/users"

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(API_URL)
      const info = await response.json()
      return info
    },
  })

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

  const allUsers = data

  return (
    <main className="container">
      <section className="usersContainer">
        {allUsers.map((user) => {
          const { id, name, username, email } = user
          return (
            <article className="userCard" key={id}>
              <h2 className="userName">{name}</h2>
            </article>
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
