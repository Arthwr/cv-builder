export default function PersonalForm() {
  return (
    <form>
      <label htmlFor="firstName">
        <span>First Name:</span>
        <input type="text" id="firstName" />
      </label>
      <label htmlFor="lastName">
        <span>Last Name:</span>
        <input type="text" id="lastName" />
      </label>
      <label htmlFor="location">
        <span>Location:</span>
        <input type="text" id="location" />
      </label>
      <label htmlFor="email">
        <span>Email:</span>
        <input type="email" id="email" />
      </label>
      <label htmlFor="phone">
        <span>Telephone number:</span>
        <input type="tel" id="phone" />
      </label>
      <label htmlFor="linkedin">
        <span>Linkedin:</span>
        <input type="text" id="linkedin" />
      </label>
    </form>
  );
}
