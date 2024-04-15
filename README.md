# Product collection page

This technical assessment project is a responsive product collection page template that pulls in data from an API endpoint. It utilizes Vanilla JavaScript, HTML, CSS, and Tailwind CSS to create a dynamic and visually appealing user interface. The project also includes sidebar sort/filter functionality and pagination for an improved user experience.

## Features
* **Responsive Design:** The product collection page is designed to adapt to various screen sizes, ensuring a seamless experience across devices.
* **API Integration:** Data is fetched from the specified API endpoint to populate the product collection page with real-time information.
* **Sidebar Sort/Filter Functionality:** Users can sort or filter products based on different criteria using the sidebar options.
* **Pagination:** To enhance usability, pagination is implemented to manage large datasets efficiently.

## How to Run
1. Clone the repository:
```
git clone https://github.com/webbdev/product-collection-page.git
```
2. Navigate to the project directory:
```
cd product-collection-page
```
3. Open index.html in your web browser to view the product collection page.

## Usage
- Upon opening the page, products are fetched from the API and displayed on the collection page.
- Use the sidebar options to sort or filter products based on your preferences.
- Navigate through the pages using the pagination controls to explore all available products.

If you want to make changes in the project, you need to install dependencies (Tailwind) first:
```
npm install
```
To compile the Tailwind CSS during development, run:
```
npm run watch
```
The output file is css/main.css.

To build once, run:
```
npm run build
```
You can edit the scripts in package.json and the tailwind.config.js file to change input/output locations.
