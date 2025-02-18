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
    .force("link", d3.forceLink(data.links).id(d => d.id))
    .force("charge", d3.forceManyBody())
    .force("center", d3.forceCenter(width / 2, height / 2));

const link = svg.selectAll(".link")
    .data(data.links)
    .enter().append("line")
    .attr("class", "link")
    .style("stroke-dasharray", "5,5") // Εφέ γραμμής
    .style("opacity", 0)
    .transition()
    .duration(1000)
    .style("opacity", 1);

const node = svg.selectAll(".node")
    .data(data.nodes)
    .enter().append("circle")
    .attr("class", "node")
    .attr("r", 20)
    .call(d3.drag()
        .on("start", dragStarted)
        .on("drag", dragged)
        .on("end", dragEnded))
    .on("mouseover", showTooltip)
    .on("mousemove", moveTooltip)
    .on("mouseout", hideTooltip)
    .on("click", openFile);

// Προσθήκη κειμένου σε κάθε κόμβο
const text = svg.selectAll(".text")
    .data(data.nodes)
    .enter().append("text")
    .text(d => d.id)
    .attr("dx", 25)
    .attr("dy", 5);

// Ενημέρωση θέσης κατά την προσομοίωση
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

// Λειτουργίες drag & drop
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

// Προσθήκη tooltips
const tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background", "white")
    .style("border", "1px solid black")
    .style("padding", "5px")
    .style("border-radius", "5px");

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

// Αντιστοίχιση αρχείων σε κόμβους
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
        window.open(fileName, "_blank");
    }
}
