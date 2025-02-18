const data = {
    "nodes": [
        { "id": "Python Basics" },
        { "id": "Data Structures" },
        { "id": "OOP" },
        { "id": "Web Development" },
        { "id": "Data Science" },
        { "id": "Machine Learning" }
    ],
    "links": [
        { "source": "Python Basics", "target": "Data Structures" },
        { "source": "Python Basics", "target": "OOP" },
        { "source": "OOP", "target": "Web Development" },
        { "source": "Data Structures", "target": "Data Science" },
        { "source": "Data Science", "target": "Machine Learning" }
    ]
};

const width = 1000, height = 600;

const svg = d3.select("svg");

const simulation = d3.forceSimulation(data.nodes)
    .force("link", d3.forceLink(data.links).id(d => d.id))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

const link = svg.selectAll(".link")
    .data(data.links)
    .enter().append("line")
    .attr("class", "link");

const node = svg.selectAll(".node")
    .data(data.nodes)
    .enter().append("circle")
    .attr("class", "node")
    .attr("r", 20)
    .call(d3.drag()
        .on("start", dragStarted)
        .on("drag", dragged)
        .on("end", dragEnded));

const text = svg.selectAll(".text")
    .data(data.nodes)
    .enter().append("text")
    .text(d => d.id)
    .attr("dx", 25)
    .attr("dy", 5);

simulation.on("tick", () => {
    link.attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node.attr("cx", d => d.x)
        .attr("cy", d => d.y);

    text.attr("x", d => d.x)
        .attr("y", d => d.y);
});

function dragStarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragEnded(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}