import React, {useState, useEffect, Suspense} from 'react';
import LoadingSkeleton from '../UI/LoadingSkeleton';
import Item from './Item';

const Items = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [users, setUsers] = useState([]);

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users/');

        if(!response.ok) {
            console.log('Something went wrong!');
        }

        try {
            const data = await response.json();
            console.log(data)

            let loadedUsers = [];

            for (const key in data) {
                loadedUsers.push({
                    id: key,
                    name: data[key].name,
                    email: data[key].email
                })
            }

            setUsers(loadedUsers)
            setIsLoading(false)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData();
    }, [])

    let content;

    if(isLoading) {
        content = <LoadingSkeleton />
    } else {
        content = <ul>
            {users.map(user => <Item key={user.id} id={user.id} name={user.name} email={user.email} />)}
        </ul>
    }

  return (
    <div className='items'>
        {content}
    </div>
  )
}

export default Items