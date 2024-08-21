export default function homeButton() {
    const homeid = document.getElementById("content");
  
    const home = document.createElement('div');
  
    const title = document.createElement('p');
    title.textContent = 'La Famiglia Pizzeria';
 
    const content = document.createElement('div');
    content.classList.add('homeContent');
  
    const bio = document.createElement('div');
  bio.innerHTML = `Welcome to La Famiglia Pizzeria, a family-owned gem in New York City, <br>
    We bring authentic Italian flavors from our Tuscan roots to your table.  <br><br>
    Our pizzas are crafted with hand-tossed dough, rich San Marzano tomatoes, and premium mozzarella, baked to perfection in a traditional wood-fired oven. 
    <br><br>
    Enjoy classic favorites like the Margherita or try our signature 
    Diavola. Join us for a taste of Italy and experience the warmth and hospitality that make <br><br>
    La Famiglia Pizzeria a cherished destination for food lovers.`;
  
    const img = document.createElement('img');
    img.src = require('../resources/1.jpg');
    
    content.append(home, img);
    home.append(title, bio);

    homeid.appendChild(content);
  }