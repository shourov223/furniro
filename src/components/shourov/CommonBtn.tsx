import Link from "next/link";

type btnProps = {
  children: string;
  TagName: "button" | typeof Link;
  className: string;
  href: string;
};

const CommonBtn = ({ children, TagName, className, href }: btnProps) => {
  return (
    <TagName
      href={href}
      className={className}
      {...(TagName !== "button" ? { href } : null)}
    >
      {children}
    </TagName>
  );
};

export default CommonBtn;
