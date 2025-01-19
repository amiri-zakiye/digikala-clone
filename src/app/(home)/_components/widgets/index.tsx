
import { ApiResponse, widgetTypeMap } from "./types";
import {getWidgets} from "../../apiLayer/home"

const Widgets = async() => {

    const { widgets } : ApiResponse = await getWidgets()
    
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