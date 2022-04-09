interface Admin {
  id: string
  role: string
}

interface User {
  email: string
}

function redirect (user: Admin | User) {
  if ('role' in user) {
    // redirectToAdmin()
    console.log(user);
  } else {
    // redirectToUser()
    console.log(user);
  }
}