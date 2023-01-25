import { useState, useEffect, ReactNode } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="layout">
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
      <div style={{ marginBottom: "1rem" }} />
      <Link href="/">Home</Link>
      <br />
      <Link href="/pokemon">Pokemon</Link>
      <div style={{ marginBottom: "1rem" }} />
      {children}
    </div>
  );
};

export default Layout;
