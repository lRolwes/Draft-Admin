import { notFound } from "next/navigation";

import { AdminSubpage } from "@/components/admin-subpage";
import { ADMIN_SECTIONS, adminSectionBasePath, getSublink, type AdminSectionKey } from "@/lib/admin-sections";

export function AdminSublinkPage({ sectionKey, slug }: { sectionKey: AdminSectionKey; slug: string }) {
  const link = getSublink(sectionKey, slug);
  if (!link) notFound();

  const parent = adminSectionBasePath(sectionKey);

  return (
    <AdminSubpage
      title={link.label}
      description={`Part of ${ADMIN_SECTIONS[sectionKey].title}. Path: ${parent}/${link.slug}. Connect your handler or legacy route when ready.`}
    />
  );
}
