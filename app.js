const heading=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
    [
        React.createElement("h1",{},"this is shitty h1"),
        React.createElement("h2",{},"this is a shitty h2")
    ]
),
React.createElement("div",{id:"child2"},
    [
        React.createElement("h1",{},"this is shitty h1"),
        React.createElement("h2",{},"this is a shitty h2")
    ]
)]);
const bitch=ReactDOM.createRoot(document.getElementById("root"));
bitch.render(heading);