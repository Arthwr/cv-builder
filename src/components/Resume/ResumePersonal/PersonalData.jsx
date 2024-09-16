export default function PersonalData({ userData }) {
  const { name, location, email, phone, linkedin } = userData;

  return (
    <div className="personal">
      <h2 className="name">{name}</h2>
      <div className="line-br"></div>
      <ul>
        <li>
          <svg width={14} height={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
          </svg>
          <span className="city">{location}</span>
        </li>
        <li>
          <svg width={14} height={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
          </svg>
          <span>{email}</span>
        </li>
        <li>
          <svg width={14} height={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z" />
          </svg>
          <span>{phone}</span>
        </li>
        <li>
          <svg width={14} height={14} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
          </svg>
          <span>{linkedin}</span>
        </li>
      </ul>
    </div>
  );
}
