type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  }
  
  function createOrUpdateUser(initialValues: Partial<User>): User {
    // Оновлення користувача
    const defaultsUser: User = {
      name: "",
      surname: "",
      email: "",
      password: "",
    };
    return { ...defaultsUser, ...initialValues };
  }
  
  createOrUpdateUser({ 
    email: 'user@mail.com', 
    password: 'password123' 
  });