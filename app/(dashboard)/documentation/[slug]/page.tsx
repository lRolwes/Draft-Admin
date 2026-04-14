import { AdminSublinkPage } from "@/components/admin-sublink-page";
import { listSublinkSlugs, type AdminSectionKey } from "@/lib/admin-sections";

const SECTION_KEY = "documentation" satisfies AdminSectionKey;

export function generateStaticParams() {
  return listSublinkSlugs(SECTION_KEY);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <AdminSublinkPage sectionKey={SECTION_KEY} slug={slug} />;
}
