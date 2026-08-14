type SiteFooterProps = {
  name: string;
  role: string;
};

export function SiteFooter({ name, role }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="container">
        &copy; {new Date().getFullYear()} {role} {name}
      </div>
    </footer>
  );
}
