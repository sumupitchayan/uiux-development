## React Development: Guitar Center Website

Project Link: https://agile-ocean-30189.herokuapp.com/

### Background
We built an example search page for Guitar Center. Our website allows users to browse guitars for sale and filter the offerings based on type (acoustic/electric) and brand, sort them based on price, and mark items as favorited. The goal of the website is to make the online guitar search/buying process as simple and efficient as possible for customers.

### Design
Our website has a layout typical to many standard ecommerce sites. The jumbotron header at the top displays the website name. Underneath the header, the page is broken down into a 2-column grid. The right column takes up most of the screen and is itself a 3-column grid, displaying all of the guitars for sale in cells with a picture, name, and price, as well as a heart in the top right corner used to favorite an item. Once clicked, the heart outline becomes filled in, denoting that the user marked the item as favorited. The more-narrow left column contains all information and functions relevant to guitar sorting/filtering. The filtering, sorting and favoriting functions are broken down into drop down buttons and a toggle switch, all of which are clearly labeled. The mechanisms used for these actions are not only learnable for first-time users, but also memorable and efficient, as changing/resetting filters requires only another click of the drop down menu.

We used a predominantly white and gray color scheme with dark red accents. The neutral/white background of most of the site allows for the guitar images to really stand out of the page, pointing the user/customer’s attention to what they are looking for.


### React
We used React to create the live searching feature of the website. Our data (list of guitar information) is stored in the App.js file and is passed as a prop to the FilteredList component. This creates the dropdowns for sorting and filtering, and passes the filtered/sorted data as a prop to the List component. The FavoritesFilter is a separate component that controls the functionality and state for the favorites filtering feature. The List component in turn creates Guitar components for each item, rendering each item cell. The user can select categories (Brand and Acoustic/Electric) to filter for or ways to sort using the dropdown menus which in turn trigger methods that change the state. This change in state thus triggers filtering and sorting mechanisms on the data. Similarly, the Favorites toggle behaves like a filter and causes a change in state only showing items that are favorited. Each Guitar component contains a state for favorite that changes whenever the item is “hearted”. Clicking the “heart” also triggers a function in FilteredList - the function is passed down as a prop to List and then to each Guitar component  - essentially changing the data to indicate the item is favorited.
