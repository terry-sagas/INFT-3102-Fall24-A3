
export default function Header() {
    return (
      <>
        <style jsx>{`
          ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background-color: #333;
          }
  
          li {
            float: left;
          }
  
          li a {
            display: block;
            color: white;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
          }
  
          li a:hover {
            background-color: #111;
          }
        `}</style>
  
        <ul>
          <li><a className="active" href="/">Home</a></li>
          <li><a href="/amiibo">Amiibo List</a></li>
          <li><a href="/skylanders">Skylanders List</a></li>
        </ul>
      </>
    );
  }
  