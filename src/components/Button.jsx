export default function Button({ children, className, link, ...rest }) {
  return (
    <a className={`${className} button`} href={link} {...rest}>
      {children}
    </a>
  );
}
