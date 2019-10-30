export default class NavBarSvc {
    public template() {
        if (process.env.SCOPE === 'admin') {
            return {
                title: "Chess Plus",
                components: [
                    {
                        type: "button",
                        title: "Notificaton"
                    },
                    {
                        type: "button",
                        title: "Search"
                    },
                ]
            };
        }

        return {
            title: "Chess Plus",
            components: [
                {
                    type: "button",
                    title: "Notificaton"
                },
            ]
        };
    }
}