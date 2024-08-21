import pizza1 from '../resources/pizza1.jpg';
import pizza2 from '../resources/pizza2.jpg';
import pizza3 from '../resources/pizza3.jpg';
import pizza4 from '../resources/pizza4.jpg';
export default function menuButton() {
    const menuPage = document.getElementById("content");

    function createMenuItem(imageSrc, titleText, recipeText, priceText) {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item'; // Optional: Add a class for styling

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = titleText; 

        const title = document.createElement('p');
        title.textContent = titleText;

        const recipe = document.createElement('div');
        recipe.textContent = recipeText;

        const price = document.createElement('div');
        price.textContent = priceText;

        const menuDetail =document.createElement('div');
        menuDetail.className = 'menu-detail'

        menuItem.append(img, menuDetail);
        //menuContent.append();
        menuDetail.append(title, recipe, price);

        return menuItem; // Return the created menu item
    }

    // Create the main menu container
    const menu = document.createElement('div');
    menu.className = 'menu'; // Optional: Add a class for styling

    // Create and append menu items
    menu.append(
        createMenuItem('../resources/pizza1.jpg', 'The Margherita', 'BBQ sauce, shredded mozzarella & cheddar cheeses; topped with chicken, red onions, and green peppers.', '$11.99'),
        createMenuItem('../resources/pizza2.jpg', 'Sweet Chili Diavola', 'Sweet Chili sauce, shredded mozzarella & cheddar cheeses; topped with ham, pineapple, and jalapeños.', '$15.99'),
        createMenuItem('../resources/pizza3.jpg', 'Marinana', 'Marinara, shredded mozzarella cheese; topped with all-beef meatballs and fresh spinach.', '$19.99'),
        createMenuItem('../resources/pizza4.jpg', 'Spicy Mozzarella', 'shredded mozzarella & cheddar cheeses; topped with ham, bacon, sausage, and red onions.', '$9.99')
    );

    menuPage.append(menu); // Append the menu container to the content
}
