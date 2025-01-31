import { getWidgets } from "./apiLayer/home";
import { widgetTypeMap } from "./home.types";

export const dynamic = "force-dynamic"
export default async function Home() {
  const { widgets } = await getWidgets();

  return (
    <main className="flex flex-col gap-y-4">
      {widgets.map((widget) => {
        const WidgetComponent = widgetTypeMap?.[widget.name];
        return WidgetComponent ? (
          <WidgetComponent key={widget.name} data={widget.data} />
        ) : null;
      })}
    </main>
  );
}
