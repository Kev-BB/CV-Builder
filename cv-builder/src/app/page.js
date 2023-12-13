import Image from 'next/image'
import styles from './styles.css'

export default function Home() {
  return (
    <main>
      <div>
       <form>
        <h2>General Information</h2>
        <label for="name">Full Name:</label><br/>
        <input type='text' id='name' /><br/>
        <label for="email">Email:</label><br/>
        <input type='text' id='email' /><br/>
        <label for="phone">Phone:</label><br/>
        <input type='tel' id='phone' /><br/>
        <label for="address">Address:</label><br/>
        <input type='text' id='address' />
       </form>
      </div>
    </main>
  )
}
