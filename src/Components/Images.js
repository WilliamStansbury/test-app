// import React from "react";
import React, { Component } from 'react';
import londoneye2 from '../Images/londoneye2.jpg';
import kiev2 from '../Images/kiev2.jpg';
import train2 from '../Images/train2.jpg';
import PinkDress2 from '../Images/PinkDress2.jpg';
import NotreDame2 from '../Images/NotreDame2.jpg';
import Gallery from "./Images";
import ScrollUpButton from "react-scroll-up-button";
// import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from 'simple-react-lightbox';
// import { BrowserRouter as Router, Route } from "react-router-dom";


export class Images extends Component {
	render() {
		return (

			<div>
				<h1>Images</h1>
				<SRLWrapper>
					<div class="row">
						<div class="column">
							<img className="photo" src={londoneye2} />
						</div>
						<div class="column">
						<img className="photo" src={kiev2} />
						</div>
						<div class="column">
						<img className="photo" src={train2} />
						</div>
					</div>
					<div class="row">
					<div class="column">
						<img className="photo" src={PinkDress2} />
						</div>
						<div class="column">
							<img className="photo" src={NotreDame2} />
						</div>
					</div>
				</SRLWrapper>
				<ScrollUpButton />
			</div>
			);
	}
}
export default Images;



// function LightBox() {
//   return (
//     <SimpleReactLightbox>
//       <div className="LightBox">
//         <Router>
//           <Route path="/" exact component={Gallery} />
//           <Route path="/with-text/" component={GalleryWithText} />
//           <Route path="/with-thumbs/" component={GalleryWithThumbs} />
//           <Route path="/with-hook/" component={GalleryWithHook} />
//           <Route path="/with-callbacks/" component={GalleryWithCallbacks} />
//         </Router>
//       </div>
//     </SimpleReactLightbox>
//   );
// }

// export default LightBox;