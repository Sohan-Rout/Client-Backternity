import { redirect } from "next/navigation";
import ComponentRegistry from "@/lib/registry";

export default function BrowseIndexPage() {
  const firstComponent = Object.keys(ComponentRegistry)[0];
  redirect(`/browse/${firstComponent}`);
}
