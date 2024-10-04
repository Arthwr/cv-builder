export default function PersonalFormInput({ formState, onChange }) {
  return (
    <div className="form-input">
      <label htmlFor="firstName">
        <span>First Name:</span>
        <input type="text" id="firstName" name="firstName" value={formState.firstName} onChange={onChange} required />
      </label>
      <label htmlFor="lastName">
        <span>Last Name:</span>
        <input type="text" id="lastName" name="lastName" value={formState.lastName} onChange={onChange} required />
      </label>
      <label htmlFor="location">
        <span>Location:</span>
        <input type="text" id="location" name="location" value={formState.location} onChange={onChange} required />
      </label>
      <label htmlFor="email">
        <span>Email:</span>
        <input type="email" id="email" name="email" value={formState.email} onChange={onChange} required />
      </label>
      <label htmlFor="phone">
        <span>Telephone number:</span>
        <input type="tel" id="phone" name="phone" value={formState.phone} onChange={onChange} required />
      </label>
      <label htmlFor="linkedin">
        <span>Linkedin:</span>
        <input type="text" id="linkedin" name="linkedin" value={formState.linkedin} onChange={onChange} required />
      </label>
    </div>
  );
}
