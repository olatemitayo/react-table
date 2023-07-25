import GlobalFilter from "@/components/tables/global-filter-table";
import SimpleTable from "@/components/tables/simple-table";
import SortTable from "@/components/tables/sort-table";

export default function Home() {
  return (
    <main className="flex justify-center items-center ">
      {/* <SimpleTable /> */}
      {/* <SortTable /> */}
      <GlobalFilter />
    </main>
  );
}
