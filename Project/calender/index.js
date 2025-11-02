var inst = mobiscroll.eventcalendar('#demo-desktop-month-view', {
    theme: 'ios',
    themeVariant: 'light',
    clickToCreate: false,
    dragToCreate: false,
    dragToMove: false,
    dragToResize: false,
    eventDelete: false,
    view: {
        calendar: { labels: true },
    },
    onEventClick: function (args) {
        mobiscroll.toast({
            message: args.event.title,
        });
    },
});

mobiscroll.getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    function (events) {
        inst.setEvents(events);
    },
    'jsonp',
);
