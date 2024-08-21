import pizza1 from '../resources/pizza1.jpg';
import pizza2 from '../resources/pizza2.jpg';
import pizza3 from '../resources/pizza3.jpg';
import pizza4 from '../resources/pizza4.jpg';
export default function menuButton() {
    const menuPage = document.getElementById("content");

    function createMenuItem(imageSrc, titleText, recipeText, priceText) {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item'; 

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

        return menuItem; 
    }

    const menu = document.createElement('div');
    menu.className = 'menu'; 
    menu.append(
        createMenuItem(pizza1, 'The Margherita', 'BBQ sauce, shredded mozzarella & cheddar cheeses; topped with chicken, red onions, and green peppers.', '$11.99'),
        createMenuItem(pizza2, 'Sweet Chili Diavola', 'Sweet Chili sauce, shredded mozzarella & cheddar cheeses; topped with ham, pineapple, and jalapeños.', '$15.99'),
        createMenuItem(pizza3, 'Marinana', 'Marinara, shredded mozzarella cheese; topped with all-beef meatballs and fresh spinach.', '$19.99'),
        createMenuItem(pizza4, 'Spicy Mozzarella', 'shredded mozzarella & cheddar cheeses; topped with ham, bacon, sausage, and red onions.', '$9.99')
    );

    menuPage.append(menu);
