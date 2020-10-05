import React from 'react';
import { Link } from 'gatsby'; // named import from gatsby
// arrow function is also cool

/* navigate from gatsby, allows for imperative {replace: true} adds to browser history */

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Logo</Link>
        </li>
        <li>
          <Link to="/">Hot Now</Link>
        </li>
        <li>
          <Link to="/pizzas/">Pizza Menu</Link>
        </li>
        <li>
          <Link to="/slicemasters/">Slicemasters</Link>
        </li>
        <li>
          <Link to="/order/">Order Ahead!</Link>
        </li>
      </ul>
    </nav>
  );
}

/* Link to => is a declarative pattern, 
imperative is writing out the logic for what will happen when something else happens, 
like form submit/onclick

button always needs a type */
