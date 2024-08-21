export default function homeButton() {
    const homeid = document.getElementById("content");
  
    const home = document.createElement('div');
  
    // Create and configure title
    const title = document.createElement('p');
    title.textContent = 'La Famiglia Pizzeria';
  
    // Create and configure bio
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
  
  
    // Create and configure image
    const img = document.createElement('img');
    img.src = require('../resources/1.jpg');
    
  
    // Append elements to home
    content.append(home, img);
    home.append(title, bio);
  
    // Append home to the main contenta
    homeid.appendChild(content);
  }