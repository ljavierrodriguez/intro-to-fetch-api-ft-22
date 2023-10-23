import React, { useEffect, useState } from 'react'

const App = () => {

  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {

    getUsers();
    getPosts();
    getMessages();

  }, [])


  /* const getUsers = () => {
    fetch("http://localhost:3003/users") // GET
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        console.log(data)
        setUsers(data)
      })
      .catch((error) => {
        console.log(error)
      })
  } */

  const getUsers = async () => {
    try {
      const response = await fetch("http://localhost:3003/users")
      //console.log(response);
      const data = await response.json()
      //console.log(data);

      const usersData = [...data];

      data.forEach(async (user, index) => {
        //console.log(user)
        const response = await fetch(user.messages);
        const info = await response.json()

        usersData[index].messages = info
      })

      console.log(data)
      console.log(usersData)
      setUsers(usersData)


    } catch (error) {
      console.log(error)
    }
  }

  const getPosts = () => {
    fetch("http://localhost:3003/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data)
      })
      .catch((error) => {
        console.log(error)
      })
    console.log("hola")
  }

  async function getMessages() {
    try {
      const response = await fetch("http://localhost:3003/messages")
      //console.log(response);
      const data = await response.json()
      //console.log(data);

    } catch (error) {
      console.log(error)
    }
  }



  return (
    <>
      <div>App</div>
      <ul>
        {
          users.length > 0 &&
          users.map((user) => {
            return <li key={user.id}>{user.name}</li>
          })
        }
      </ul>
      <ul>
        {
          posts.length > 0 &&
          posts.map((post) => {
            return <li key={post.id}>{post.title}</li>
          })
        }
      </ul>
    </>
  )
}

export default App