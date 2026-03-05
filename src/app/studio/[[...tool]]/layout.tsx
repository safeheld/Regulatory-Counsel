export const metadata = {
  title: "Sanity Studio | Regulatory Counsel",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 50 }}>{children}</div>
  );
}
