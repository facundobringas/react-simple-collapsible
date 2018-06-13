import './style.css';
import React, { Component } from 'react';
import downArrow from 'assets/arrow_down.svg';
import newIdentifier from '../../utils/newid';
import documentService from '../../service/document';

class Collapsible extends Component{
	
	state = {
			collapsed:this.props.collapsed,
			identifier: newIdentifier()
		}
		
	toggle= (e) => {
		if(this.state.collapsed){
			let sheet = documentService.styleSheets[0];
			let tkns = e.target.id.split('_');
			let identifier = tkns[tkns.length-1];
			let id = tkns[0].concat('_').concat(identifier);
			let contentId = tkns[0].concat('_').concat('content').concat('_').concat(identifier);
			let scrollHeight = documentService.getElementById(contentId).scrollHeight;
			let rule = `#${id}.opened>.collapsible-content{
				height: ${scrollHeight}px;
				-webkit-transition:height, 0.4s ease-out;
				-moz-transition: height, 0.4s ease-out;
				-ms-transition: height, 0.4s ease-out;
				-o-transition: height, 0.4s ease-out;
				transition: height, 0.4s ease-out;
			}`;
			sheet.insertRule(rule, sheet.cssRules.length);
		}

		this.setState({collapsed:!this.state.collapsed});
	}

	render(){
		return (	
			<div id={`collapsible_${this.state.identifier}`}
				className={`collapsible ${this.state.collapsed ? 'collapsed' : 'opened' }`}
				onClick={this.toggle}>
				<div id={`collapsible_header_${this.state.identifier}`}
					className="collapsible-header">
					{this.props.headerTitle}
					<img id={`collapsible_header_arrow_${this.state.identifier}`}
						className="collapsible-header-arrow" src={downArrow}/>
				</div>
				<div id={`collapsible_content_${this.state.identifier}`} 
					className="collapsible-content">
					<div className="collapsible-content-wrapper">
						{this.props.children}
						</div>
				</div>
			</div>	
		);
	}
}

export default Collapsible;
