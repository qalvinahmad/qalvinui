export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-screen-2xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
      {children}
    </div>
  );
}
