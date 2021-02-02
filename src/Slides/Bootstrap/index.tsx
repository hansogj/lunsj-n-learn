import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';

const ArbitraryContent = `Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris
condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis
euismod. Donec sed odio dui.`;

const Bootstrap = (): JSX.Element => {
  return (
    <div className="bg-white">
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a href="/" className="navbar-brand">
          Navbar
        </a>
      </nav>

      <main role="main">
        <div className="jumbotron">
          <div className="container">
            <h1 className="display-3">Hello, world!</h1>
            <p>
              This is a template for a simple marketing or informational website. It includes a large callout called a
              jumbotron and three supporting pieces of content. Use it as a starting point to create something more
              unique.
            </p>
            <p>
              <a href="/" className="btn btn-primary btn-lg" role="button">
                Learn more &raquo;
              </a>
            </p>
          </div>
        </div>
        <div className="container ">
          <div className="row">
            <div className="col-md-4">
              <h2>Heading</h2>
              <p>{ArbitraryContent}</p>
              <p>
                <a href="/" className="btn btn-secondary" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Heading</h2>
              <p>{ArbitraryContent}</p>
              <p>
                <a href="/" className="btn btn-secondary" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <h2>Heading</h2>
              <p>{ArbitraryContent}</p>
              <p>
                <a href="/" className="btn btn-secondary" role="button">
                  View details &raquo;
                </a>
              </p>
            </div>
          </div>
          <hr />
        </div>
      </main>
      <footer className="container">
        <p>&copy; Company 2017-2018</p>
      </footer>
    </div>
  );
};

export default Bootstrap;
