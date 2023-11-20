import MobileBottomBar from "@/layouts/MobileBottomBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
      <MobileBottomBar />
    </main>
  );
}
