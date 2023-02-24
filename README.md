This is a [Next.js](https://nextjs.org/) project bootstrapped with

Card Component
This is a React component that displays a user's name and avatar image, and allows the user to view more details about the user when a button is clicked. The component retrieves user data from an API using the Axios library and displays the data in a styled card.

Installation
To use this component in your own React project, follow these steps:

Clone the repository or download the code as a ZIP file.
Copy the UserCard.js file from the src directory into your own project's src directory.
Install the axios and styled-components packages in your project by running npm install axios styled-components in the terminal.
Import the UserCard component into your project by adding import UserCard from './UserCard'; at the top of the file where you want to use the component.
Use the UserCard component in your JSX code by calling <UserCard /> and passing in the required props.
Props
The UserCard component takes two props:

user (required): An object representing the user to display. The object should have id, email, first_name, last_name, and avatar properties.
onSelect (required): A function that is called when the "View Details" button is clicked. The function should take the user object as its argument.
Styling
The component is styled using the styled-components library. You can customize the styles by modifying the CSS code inside the component.

Responsive design
The component is designed to be responsive using a mobile-first approach. The styles are written with media queries to adjust the layout and font sizes for different screen sizes.

Sidebar
The component includes a sidebar that is shown when the "View Details" button is clicked. The sidebar displays additional information about the user, including their email address and a list of their friends. The sidebar is included in all instances of the UserCard component.
