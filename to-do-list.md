## TO-DO'S!

# Client
[ ] select a pizza and order on the home screen - get route ('/api/pizza')
  [ ] display list of available pizzas to order
  [ ] for base mode, only one of each pizza able to be put in cart
  [ ] show total cost of items in top right of page
  [ ] add or remove pizzas from cart
  [ ] button that brings use to order details page

[x] order details page - enter customer information ('/api/order')
  [x] collecting customer information:
    [x] name, address, city, zip
    [x] order type (pickup/delivery)
    [x] button to bring us to checkout page

[ ] checkout page
  [ ] take all order information, display on dom read only
  [ ] button to complete order
  [ ] upon complete order, send user back to home screen listing all pizzas
  [ ] clear the order reducer

[ ] admin orders
  [ ] not appear in the nav bar ('/admin')
  [ ] display name, time, and completed orders

[ ] need two reducers
  [ ] one for pizza items ordered 'pizzaReducer'
  [ ] one for customer info
  'infoReducer'

# Server
[ ] three tables
  [ ] list of pizzas - pizza menu
  [ ] orders - customer information
  [ ] line item - should give us values that we need for admin page

[ ] GET request to obtain list of pizzas available to order
[ ] POST from order details to add customer information to the database
[ ] GET route for admin page to display customer information and order information



