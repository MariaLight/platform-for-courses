export const addModule = (moduleObject) =>
    fetch("http://localhost:3026/modules", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",

        },
        body: JSON.stringify({
            ...moduleObject
        })
    }).then((createdModule) => createdModule.json())
