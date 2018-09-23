function createAccordion(data) {
  var accordion = document.createElement("div");
  data.forEach(elem => {
    var container = document.createElement("div");
    var header = document.createElement("div");
    var body = document.createElement("section");
    var para = document.createElement("p");
    container.setAttribute("class", "accor-container");
    header.setAttribute("class", "accor-header");
    body.setAttribute("class", "accord-body");
    header.textContent = elem.title;
    para.textContent = elem.description;
    body.appendChild(para);
    container.appendChild(header);
    container.appendChild(body);
    accordion.appendChild(container);
  });
  accordion.setAttribute("class", "accordion");
  return accordion;
}

export default createAccordion;
