import React, {Component} from 'react';
import {Row,Col,Card,CardTitle} from 'react-materialize';
class Produk extends Component {
	render(){
		return(
			<Row>
				<h6>Hot List</h6>
				<Col l={3} m={6} s={12}>
					<Card className='small' header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/8/15/25749302/25749302_274a89a6-ea41-4a3a-ac6b-ce2881016369.jpg">Audio</CardTitle>} >
					Audio Technica - Mulai dari <mark style={{backgroundColor:'red'}}>910K</mark>
					</Card>
				</Col>
				<Col l={3} m={6} s={12}>
					<Card className='small' header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2019/1/16/25287362/25287362_a79f0aa6-cf1f-484f-b1a8-83993245cd6f.jpg">Handphone</CardTitle>} >
					Handphone Samsung - Mulai dari <mark style={{backgroundColor:'red'}}>200K</mark>
					</Card>
				</Col>
				<Col l={3} m={6} s={12}>
					<Card className='small' header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/6/26/28201197/28201197_856195f2-b0ba-4711-8200-fd95beaf1df5.jpg">Squishy</CardTitle>} >
					Squishy - Mulai dari <mark style={{backgroundColor:'red'}}>55K</mark>
					</Card>
				</Col>
				<Col l={3} m={6} s={12}>
					<Card className='small' header={<CardTitle image="https://ecs7.tokopedia.net/img/cache/300/attachment/2018/4/23/28201197/28201197_0383072a-1766-453c-951a-8b53a719cff0.jpg">Action Figure</CardTitle>} >
					Action Figure - Mulai dari <mark style={{backgroundColor:'red'}}>100K</mark>
					</Card>
				</Col>
			</Row>
		);
	}
}

export default Produk;