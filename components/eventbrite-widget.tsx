"use client"

import { useEffect } from "react"
import Script from "next/script"

interface EventbriteWidgetProps {
    eventId: string
    containerId: string
    height?: number
}

export function EventbriteWidget({ eventId, containerId, height = 425 }: EventbriteWidgetProps) {
    useEffect(() => {
        const initWidget = () => {
            if (window.EBWidgets) {
                window.EBWidgets.createWidget({
                    widgetType: 'checkout',
                    eventId: eventId,
                    iframeContainerId: containerId,
                    iframeContainerHeight: height,
                    onOrderComplete: () => {
                        console.log('Order complete!');
                    }
                });
            }
        };

        // If the script is already loaded, initialize immediately
        if (window.EBWidgets) {
            initWidget();
        }

        // We can also poll or use the script's onload if we were loading it here, 
        // but Script component handles loading better.
    }, [eventId, containerId, height]);

    return (
        <div className="w-full bg-white p-4 border border-border">
            <div id={containerId} style={{ minHeight: `${height}px` }} />
            <Script
                src="https://www.eventbrite.com/static/widgets/eb_widgets.js"
                strategy="afterInteractive"
                onLoad={() => {
                    if (window.EBWidgets) {
                        window.EBWidgets.createWidget({
                            widgetType: 'checkout',
                            eventId: eventId,
                            iframeContainerId: containerId,
                            iframeContainerHeight: height,
                            onOrderComplete: () => {
                                console.log('Order complete!');
                            }
                        });
                    }
                }}
            />
        </div>
    )
}

declare global {
    interface Window {
        EBWidgets: any
    }
}
