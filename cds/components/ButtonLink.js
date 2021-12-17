import Button from "@mui/material/Button";
import Link from "next/link";

export default function ButtonLink({ children, href, ...rest }) {
  return (
    <Link href={href}>
      <Button {...rest}>{children}</Button>
    </Link>
  );
}
