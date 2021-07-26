const KEYS = {
  orders:'orders',
  orderId:'orderId'
}

export const getDepartmentCollection = ()=>([
  {id:'1',title:'Mobiles'},
  {id:'2',title:'Gadgets'},
  {id:'4',title:'Computers'},
  {id:'5',title:'Electronics'},
])


export function insertOrder(data){
  let orders = getAllOrders();
  data['id'] = generateOrderId();
  orders.push(data)
  localStorage.setItem(KEYS.orders,JSON.stringify(orders))
}

export function generateOrderId(){
  if(localStorage.getItem(KEYS.orderId) == null)
    localStorage.setItem(KEYS.orderId,'0')
  var id = parseInt(localStorage.getItem(KEYS.orderId))
  localStorage.setItem(KEYS.orderId, (++id).toString());
  return id;  
}

export function getAllOrders(){
  if(localStorage.getItem(KEYS.orders) == null)
    localStorage.setItem(KEYS.orders,JSON.stringify([]))
  let orders=  JSON.parse(localStorage.getItem(KEYS.orders));
  let departments = getDepartmentCollection();
  return orders.map(x => ({
    ...x,
    department: departments[x.departmentId-1].title
  }))
}