export function SiteFooter({ name }: { name: string }) {
  return (
    <footer className="site-footer">
      <div className="container">
        &copy; {new Date().getFullYear()} {name}. Frontend Developer.
      </div>
    </footer>
  );
}
