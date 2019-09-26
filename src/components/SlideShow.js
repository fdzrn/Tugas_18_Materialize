import React, {Component} from 'react';
import {Slider,Slide,Caption} from 'react-materialize';
class SlideShow extends Component {
	render(){
		return(
			<Slider>
				<Slide image={<img src="https://s-ec.bstatic.com/images/hotel/max1024x768/106/106114417.jpg" alt="gambar1" />}>
					<Caption>
						<h3>
						Bali
						</h3>
						<h5 className="light grey-text text-lighten-3">
						Menangkan Kesempatan Untuk berkunjung ke Destinasi Wisata Pilihan
						</h5>
					</Caption>
				</Slide>
				<Slide image={<img src="https://cdn.pixabay.com/photo/2015/12/08/00/26/cityscape-1081704_960_720.jpg" alt="gambar2" />}>
					<Caption placement="left">
						<h3>
						Hongkong
						</h3>
						<h5 className="light grey-text text-lighten-3">
						Menangkan Kesempatan Untuk berkunjung ke Destinasi Wisata Pilihan
						</h5>
					</Caption>
				</Slide>
				<Slide image={<img src="https://photos.mandarinoriental.com/is/image/MandarinOriental/paris-2017-home?" alt="gambar3" />}>
					<Caption placement="right">
						<h3>
						Paris
						</h3>
						<h5 className="light grey-text text-lighten-3">
						Menangkan Kesempatan Untuk berkunjung ke Destinasi Wisata Pilihan
						</h5>
					</Caption>
				</Slide>
			</Slider>
		);
	}
}

export default SlideShow;