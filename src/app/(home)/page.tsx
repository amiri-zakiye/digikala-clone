import { getWidgets } from "./apiLayer";
import { widgetTypeMap } from "./types";

export default async function Home() {
  const { data } = await getWidgets();
  const { widgets } = data;

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
