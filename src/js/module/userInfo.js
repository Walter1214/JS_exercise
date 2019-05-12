const name = 'David'
const email = 'xxx@xxxx.com'
const phone = '0911111111'

export {
  name,
  email,
  phone
}

export const user1 = {
  name,
  email,
  phone
}

const user2 = {
  name,
  email,
  phone
}

export {
  user2 as user3
}