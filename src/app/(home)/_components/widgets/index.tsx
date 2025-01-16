
import { apiClient } from "@/lib/apiClient";
import { ApiResponse, widgetTypeMap } from "./types";

const Widgets = async() => {

    const { widgets } : ApiResponse = await apiClient.get("widgets/")

    return (
        <>
            {
                widgets.map(widget => {
                    const WidgetComponent = widgetTypeMap?.[widget.name];
                    return WidgetComponent ? <WidgetComponent key={widget.name} data={widget.data} /> : null
                })
            }
        </>
    )
}
export default Widgets;