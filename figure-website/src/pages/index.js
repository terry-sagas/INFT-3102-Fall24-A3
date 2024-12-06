export default function Home() {
  return (
    <>
      <style jsx>{`
        body {
          font-family: 'Arial', sans-serif;
          line-height: 1.6;
          background-color: #121212;
          color: #e0e0e0;
          margin: 0;
        }

        h1, h3 {
          color: #ffffff;
        }

        h1 {
          font-size: 2.5em;
          text-align: center;
          margin-bottom: 20px;
        }

        h3 {
          font-size: 1.2em;
          margin: 20px 0;
          padding: 15px;
          background-color: #1e1e1e;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(255, 255, 255, 0.1);
        }

        p {
          margin: 10px 0;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          background-color: #1e1e1e;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }

        a {
          color: #bb86fc;
          text-decoration: none;
        }

        a:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="container">
        <h1>About Me</h1>
        <h3>
          My name is Terry Sagas, and video games are my passion. I love collecting many things, like games, amiibos skylanders game consoles and some other stuff, i wanted to create a website to track my collection of skylanders and amiibos for personal use. 
          <br />
          <br />
          Skylanders is one of my favourite games and loved the toys to life genre growing up, and although i dont play the games much anymore i still love the figures and love displaying them. amiibos are used and are based on my favourite games of all time. 
          <br />
          <br />
          
        </h3>
      </div>
    </>
  );
}
