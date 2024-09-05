import data from "@data/mockData";

export default function ResumePersonal() {
  const { name, location, email, phone, linkedin } = data.personal;

  return (
    <div className="personal">
      <h2 className="name">{name}</h2>
      <div className="line-br"></div>
      <ul>
        <li>
          <img className="svg" src="/icons/map-marker.svg" alt="Location icon" />
          <span className="city">{location}</span>
        </li>
        <li>
          <img className="svg" src="/icons/email.svg" alt="Email icon" />
          <span>{email}</span>
        </li>
        <li>
          <img className="svg" src="/icons/cellphone.svg" alt="Mobile phone icon" />
          <span>{phone}</span>
        </li>
        <li>
          <img className="svg" src="/icons/linkedin.svg" alt="LinkedIn icon" />
          <span>{linkedin}</span>
        </li>
      </ul>
    </div>
  );
}
