import axios from "axios";




async function fetchUsers() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    
    // Log the response data
    console.log('User List:');
    response.data.forEach(user => {
      console.log(`- ${user.name} (${user.username})`);
    });
  } catch (error) {
    console.error('Error fetching users:', error.message);
  }
}

// Call the function to fetch users
fetchUsers();