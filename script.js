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

const width = window.innerWidth * 0.9;
const height = window.innerHeight * 0.8;

const svg = d3.select("svg")
    .attr("width", width)
    .attr("height", height);

const simulation = d3.forceSimulation(data.nodes)
    .force("link", d3.forceLink(data.links).id(d => d.id).distance(200))
    .force("charge", d3.forceManyBody().strength(-500))
    .force("center", d3.forceCenter(width / 2, height / 2));

const link = svg.selectAll(".link")
    .data(data.links)
    .enter().append("line")
    .attr("class", "link");

const node = svg.selectAll(".node")
    .data(data.nodes)
    .enter().append("circle")
    .attr("class", "node")
    .attr("r", 30)
    .call(d3.drag()
        .on("start", dragStarted)
        .on("drag", dragged)
        .on("end", dragEnded))
    .on("mouseover", showTooltip)
    .on("mousemove", moveTooltip)
    .on("mouseout", hideTooltip)
    .on("click", openFile);

const text = svg.selectAll(".text")
    .data(data.nodes)
    .enter().append("text")
    .text(d => d.id)
    .attr("dx", 35)
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

const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("visibility", "hidden");

function showTooltip(event, d) {
    tooltip.style("visibility", "visible").text(`Ενότητα: ${d.id}`);
}

function moveTooltip(event) {
    tooltip.style("top", (event.pageY - 10) + "px")
        .style("left", (event.pageX + 10) + "px");
}

function hideTooltip() {
    tooltip.style("visibility", "hidden");
}

const fileMap = {
    "Python Basics": "python_basics.md",
    "Data Structures": "data_structures.md",
    "OOP": "oop.md",
    "Web Development": "web_dev.md",
    "Data Science": "data_science.md",
    "Machine Learning": "machine_learning.md"
};

function openFile(event, d) {
    const fileName = fileMap[d.id];
    if (fileName) {
        window.location.href = `index.html?file=${fileName}`;
    }
}

async function loadMarkdown() {
    const urlParams = new URLSearchParams(window.location.search);
    const file = urlParams.get('file');
    if (file) {
        const response = await fetch(file);
        const text = await response.text();
        document.getElementById("markdown-content").innerHTML = marked.parse(text);
    }
}

loadMarkdown();
