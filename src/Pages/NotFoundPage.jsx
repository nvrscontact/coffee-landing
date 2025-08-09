import {Link} from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className='flex flex-col gap-2'>
      <p>Ups an error! Try Visit this:</p>
      <Link to='/'>HomePage</Link>
    </div>
  )
}

export default NotFoundPage