const links = [
   {
      label: "Week 1 (PDF)",
      url: "/WDD330/pdf/week1notes.pdf",
   },
   {
      label: "Week 2 (PDF)",
      url: "/WDD330/pdf/week2notes.pdf",
   },
   {
      label: "Week 10 (PDF)",
      url: "/WDD330/pdf/week10notes.pdf"
   }
];

function displayLinks (links) {
let ol = document.getElementById("indexOL");

   for (const link of links) {
      
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.innerHTML = link.label;
      a.setAttribute('href',link.url);
      a.setAttribute('target', '_blank');
      li.appendChild(a);
      ol.appendChild(li);

};
};

displayLinks(links);