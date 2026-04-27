import { CustomerAdminShell } from "@/components/customer-admin-shell";

export default function CustomerAdminLayout({ children }: { children: React.ReactNode }) {
  return <CustomerAdminShell>{children}</CustomerAdminShell>;
}
