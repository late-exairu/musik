export default function Button({ children, className, link }) {
  return (
    <a className={`${className} button`} href={link}>
      {children}
    </a>
  );
}
