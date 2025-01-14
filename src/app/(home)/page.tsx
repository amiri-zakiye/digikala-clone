import {apiClient} from '@/lib/apiClient';
import { ApiResponse,widgetTypeMap } from './types';

export default async function Home() {
  
  const { widgets } : ApiResponse = await apiClient.get("widgets/")

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