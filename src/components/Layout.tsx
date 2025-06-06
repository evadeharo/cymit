import Header from "./Header";

export function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="pt-32 p-12 flex flex-col gap-24 relative">
      <Header />
      {children}
    </div>
  );
}
