export default function SectionButton({ iconUrl, label, className, onClick }) {
  return (
    <button type="button" className={className} aria-label={label} onClick={onClick}>
      <img src={iconUrl} alt={label} className="svg-edit" width={24} height={24} />
    </button>
  );
}
