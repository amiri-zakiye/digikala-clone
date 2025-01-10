import {apiClient} from '@/lib/apiClient';
import { ApiResponse,widgetTypeMap } from './widget.const';

export default async function Home() {
  
  const { widgets } : ApiResponse = await apiClient.get("api/widgets/")
  console.log(widgets)

  return (
    <main className="flex flex-col gap-y-4">
        {
            widgets?.map(widget => {
                const WidgetComponent = widgetTypeMap?.[widget.name];
                return WidgetComponent ? <WidgetComponent key={widget.name} data={widget.data} /> : null
            })
        }
    </main>
)
}