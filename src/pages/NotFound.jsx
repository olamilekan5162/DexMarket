import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <div className="container h-full flex flex-col items-center space-y-4 justify-center mt-16">
        <h1 className="text-6xl font-extrabold">404 Not Found</h1>
        <p>This Page does not exist!</p>
        <Link className="p-2 max-w-24 text-xs  bg-blue-700 rounded text-white hover:bg-blue-800" to="/">Go Home</Link>

    </div>
  )
}

export default NotFound