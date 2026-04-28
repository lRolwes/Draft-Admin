export default function CustomerAdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[100dvh] bg-brand-white text-brand-charcoal">
      {children}
    </div>
  );
}
