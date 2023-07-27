import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context"
import profilePic from "../assets/moon_undraw.svg"

function User() {
  const { allUsers } = useGlobalContext()
  const { userId } = useParams()

  let actualUser = allUsers.find((user) => {
    return user.id === parseInt(userId)
  })

  const { name, username, email, address, phone, company } = actualUser

  return (
    <article className="infoCard">
      <header className="infoCard__header">
        <img src={profilePic} alt={"undraw svg showing an astronaut"} />
        <div className="basicInfo">
          {name}
          <h2>{name}</h2>
          <h4>USA, {address.city}</h4>
        </div>
      </header>
      <section>
        <div className="row">
          <h3 className="label">Username:</h3>
          <h3>{username}</h3>
        </div>
        <div className="row">
          <h3 className="label">Email:</h3>
          <h3>{email}</h3>
        </div>
        <div className="row">
          <h3 className="label">Phone:</h3>
          <h3>{phone}</h3>
        </div>
        <div className="row">
          <h3 className="label">Company:</h3>
          <h3>{company.name}</h3>
        </div>
      </section>
    </article>
  )
}
export default User
