const links = [
  { name: "Home", url: "index.html" },
  { name: "Leg 1", url: "Leg1.html" },
  { name: "Leg 2", url: "Leg2.html" },
  { name: "Leg 3", url: "Leg3.html" },
  { name: "Leg 4", url: "Leg4.html" },
  { name: "Leg 5", url: "Leg5.html" },
  { name: "Leg 6", url: "Leg6.html" }
];

const navContainer = document.getElementById("nav");
navContainer.innerHTML = `
  <nav style="text-align: center; margin: 20px 0;">
    <ul style="list-style: none; padding: 0; margin: 0;">
      ${links.map(link => `
        <li style="display: inline-block; margin: 0 15px;">
          <a href="${link.url}">${link.name}</a>
        </li>`).join("")}
    </ul>
  </nav>
`;

