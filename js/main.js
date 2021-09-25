const links = [
   {
      label: "Week 1 Notes",
      url: "/WDD330/pdf/week1notes.pdf",
      pdf: "/WDD330/pdf/week1notes.pdf"
   },
   {
      label: "Week 1 Notes",
      url: "/WDD330/index.html",
      pdf: "/WDD330/pdf/week1notes.pdf"
   }
];

function displayLinks (links) {
let ol = document.getElementById("indexOL");

   for (const link of links) {
      
      let li = document.createElement('li');
      let a = document.createElement('a');
      a.innerHTML = link.label;
      a.setAttribute('href',link.url);
      li.appendChild(a);
      ol.appendChild(li);

};
};

displayLinks(links);