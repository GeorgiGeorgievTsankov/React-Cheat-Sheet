// React has a special element called a fragment. It’s a special element that doesn’t actually render into the DOM, but can act as a parent to a group of elements.

import { Fragment } from 'react'

<Fragment>
	<h1> My H1 </h1>
	<p> My Paragraph </p>
</Fragment>
  
// If you don’t want to import Fragment from the React library, you can also use <> .

<>
	<h1> My H1 </h1>
	<p> My Paragraph </p>
</>

// Fragments are useful in components since components require us to return one parent level element, and if we don’t want to needlessly add HTML elements to our website, we can just use fragments.
