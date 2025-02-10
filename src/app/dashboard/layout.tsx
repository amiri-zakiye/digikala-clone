import DasboardNavigation from "./components/dashboardNavigation";

const DashboardLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="container pt-5">
      <div className="grid grid-cols-7 gap-3">
        <section className="col-span-2">
          <DasboardNavigation />
        </section>
        <section className="col-span-5">
          <div className="w-full border border-neutral-200 rounded-medium min-h-[300px]">
            {children}
          </div>
        </section>
      </div>
    </main>
  );
};
export default DashboardLayout;
