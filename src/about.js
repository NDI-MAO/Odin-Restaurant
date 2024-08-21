export default function aboutButton() {
    const about = document.getElementById("content");
  
    const aboutContent = document.createElement('div');
    aboutContent.className = 'about';
  
    const aboutTitle = document.createElement('p');
    aboutTitle.innerHTML = 'About La Famiglia Pizzeria'
  
    const aboutBio = document.createElement('p');
    aboutBio.innerHTML = `La Famiglia Pizzeria is a family-owned restaurant in the heart of New York City, rooted in Tuscan tradition. Authentic Italian flavors come alive with hand-tossed dough, rich San Marzano tomatoes, and premium mozzarella, all baked to perfection in a traditional wood-fired oven.
  
    Classic pizzas like the Margherita share the menu with the signature Diavola, each offering a true taste of Italy. Beyond the food, the warm and inviting atmosphere makes La Famiglia Pizzeria a cherished destination for food lovers across the city.`;
  
    const aboutContact = document.createElement('p')
    aboutContact.innerHTML = 
    `Address: 1234 Pizza Lane, New York, NY 10001<br><br>
    Phone: (555) 123-4567<br><br>
    Email: info@lafamiglia.com<br><br>
    Hours: Monday - Sunday: 11:00 AM - 10:00 PM
    `
    aboutContent.append(aboutTitle, aboutBio, aboutContact)
  about.appendChild(aboutContent);
    }
    