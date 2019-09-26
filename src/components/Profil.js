import React, {Component} from 'react';
import {SideNav,SideNavItem,Button, Icon} from 'react-materialize';
class Profil extends Component {
	render(){
		return(
			<SideNav trigger={<Button> <Icon>account_box</Icon></Button>} options={{closeOnClick: true}}>
				<SideNavItem userView user={{
				    background: 'https://materializecss.com/images/office.jpg',
				    image: 'https://materializecss.com/images/yuna.jpg',
				    name: 'John Doe',
				    email: 'example1@gmail.com'
				  }} />
				<SideNavItem href="/" icon="perm_identity">Your Profile</SideNavItem>
				<SideNavItem href="/" icon="help">Contact Us</SideNavItem>
				<SideNavItem divider />
				<SideNavItem subheader>Product</SideNavItem>
				<SideNavItem href="/">Kesehatan</SideNavItem>
        <SideNavItem href="/">Komputer & Aksesoris</SideNavItem>
        <SideNavItem href="/">Gaming</SideNavItem>
        <SideNavItem href="/">Kamera</SideNavItem>
        <SideNavItem href="/">Olahraga</SideNavItem>
        <SideNavItem href="/">Fashion Pria</SideNavItem>
        <SideNavItem href="/">Fashion Wanita</SideNavItem>
			</SideNav>
		);
	}
}

export default Profil;