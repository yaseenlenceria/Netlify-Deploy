export function Footer() {
  return (
    <footer className="bg-background py-16 border-t border-border/40 text-center">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6">
        <h3 className="font-serif text-3xl text-primary mb-2">Weddings with Erica</h3>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm text-muted-foreground font-light uppercase tracking-widest">
          <a href="tel:0872186100" className="hover:text-primary transition-colors" data-testid="footer-phone">087 218 6100</a>
          <span className="hidden md:inline text-border">•</span>
          <a href="mailto:wedwitherica@gmail.com" className="hover:text-primary transition-colors" data-testid="footer-email">wedwitherica@gmail.com</a>
          <span className="hidden md:inline text-border">•</span>
          <a href="#" className="hover:text-primary transition-colors" data-testid="footer-instagram">Instagram</a>
        </div>
        <p className="text-xs text-muted-foreground/50 mt-8 tracking-wide">
          © {new Date().getFullYear()} Weddings with Erica. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
