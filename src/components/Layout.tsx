import Header from "./Header";

export function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="pt-32 p-6 lg:p-12 flex flex-col gap-12 lg:gap-24 relative">
      <Header />
      {children}
    </div>
  );
}
