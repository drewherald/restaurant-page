import logoImg from "/images/38e12330c902978976cccdc1f9a87cb9.webp";
import storeImg from "/images/r275-Pasta-Garage-Italian-Cafe-design.jpeg";

const buildHome = function(){

    const content = document.querySelector('#content');

    //header
    const flex = document.createElement("div");
    flex.classList.add("flex");
    const logo = document.createElement("img");
    logo.src = logoImg;
    logo.classList.add("pasta");
    const links = document.createElement("ul");
    links.innerHTML = " <li>Menu</li> <li>Gift Cards</li> <li>Pasta Club</li>";
    flex.appendChild(logo);
    flex.appendChild(links);
    content.appendChild(flex);

    //body
    const store = document.createElement("img");
    store.classList.add("big");
    store.src = storeImg;
    content.appendChild(store);

    const button = document.createElement("div");
    button.classList.add("button");
    button.innerHTML = `<button onclick="window.location.href='https://order.online/store/pasta-garage-italian-cafe-lexington-233344/?delivery=true&hideModal=true?utm_source=partner-link&utm_medium=website&utm_campaign=124206&utm_content=red-l%22';">Doordash Now</button>`;
    content.appendChild(button);


};

export default buildHome;