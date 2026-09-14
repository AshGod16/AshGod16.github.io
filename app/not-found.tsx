import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return <main id="main"><header className="page-heading"><h1>Page not found</h1><p className="muted">This page may have moved, or hasn’t been published.</p></header><Link href="/">Back home <ArrowRight className="link-icon" aria-hidden="true" /></Link></main>;
}
