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
    <section className="infoCard__container">
      <article className="infoCard">
        <header className="infoCard__header">
          <picture className="profilePic__container">
            <img
              src={profilePic}
              alt={"undraw svg showing an astronaut"}
              className="profilePic"
            />
          </picture>
          <div className="basicInfo">
            <h2 className="basicInfo__name">{name}</h2>
            <h4 className="basicInfo__city">USA, {address.city}</h4>
          </div>
        </header>
        <div className="lineContainer">
          <div className="lineDivision"></div>
        </div>
        <section>
          <div className="row">
            <h3 className="label">Username:</h3>
            <h3 className="row__value">{username}</h3>
          </div>
          <div className="row">
            <h3 className="label">Email:</h3>
            <h3 className="row__value">{email}</h3>
          </div>
          <div className="row">
            <h3 className="label">Phone:</h3>
            <h3 className="row__value">{phone}</h3>
          </div>
          <div className="row">
            <h3 className="label">Company:</h3>
            <h3 className="row__value">{company.name}</h3>
          </div>
        </section>
      </article>
    </section>
  )
}
export default User
