const heading=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
    [
        React.createElement("h1",{},"this is h1"),
        React.createElement("h2",{},"this is h2")
    ]
),
React.createElement("div",{id:"child2"},
    [
        React.createElement("h1",{},"this is h1"),
        React.createElement("h2",{},"this is a h2")
    ]
)]);
const bitch=ReactDOM.createRoot(document.getElementById("root"));
bitch.render(heading);
