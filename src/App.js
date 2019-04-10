import React, { Component } from "react"
import Helmet from "react-helmet"
import $ from "jquery"

import "./App.scss"

const MouseEvents = ({
	onClick,
	onDoubleClick,
	onMouseUp,
	onMouseDown,
	onMouseEnter,
	onMouseLeaveEnter,
	onMouseOver,
	onMouseLeaveOver,
	onMouseMove
}) => (
	<div
		id="mouseEvents"
		className="d-flex flex-column justify-content-center align-items-center p-2 m-2"
	>
		<h5>Mouse Events</h5>
		<div
			id="clickAndDoubleclick"
			className="d-flex justify-content-center align-items-center m-2"
			onClick={onClick}
			onDoubleClick={onDoubleClick}
		>
			<span
				className="clicks small text-center"
			>
				click / double click here
			</span>
		</div>
		<div
			id="mouseUpDown"
			className="d-flex justify-content-center align-items-center m-2"
			onMouseUp={onMouseUp}
			onMouseDown={onMouseDown}
		>
			<span
				className="mouse-up-down small text-center"
			>
				click + hold here
			</span>
		</div>
		<div
			id="scroll"
			className="d-flex justify-content-center align-items-center m-2"
		>
			<span className="scrolls small text-center">
				scroll anywhere in page
			</span>
		</div>
		<div
			id="mouseEnterLeave"
			className="d-flex justify-content-center align-items-center m-2"
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeaveEnter}
		>
			<span
				className="mouse-enter-leave small text-center"
			>
				enter / leave here
			</span>
		</div>
		<div
			id="mouseOverLeave"
			className="d-flex justify-content-center align-items-center m-2"
			onMouseOver={onMouseOver}
			onMouseLeave={onMouseLeaveOver}
		>
			<span
				className="mouse-over-leave small text-center"
			>
				hover / leave here
			</span>
		</div>
		<div
			id="mouseMove"
			className="d-flex justify-content-center align-items-center m-2"
			onMouseMove={onMouseMove}
		>
			<span
				className="mouse-move small text-center"
			>
				move on here
			</span>
		</div>
	</div>
)

const KeyboardEvents = () => (
	<div
		id="keyboardEvents"
		className="d-flex flex-column justify-content-center align-items-center p-2 m-2"
	>
		<h5>Keyboard Events</h5>
		<div
			id="keyUpDown"
			className="d-flex justify-content-center align-items-center m-2"
		>
			<span className="key-up-down small text-center">
				press any key
			</span>
		</div>
		<div
			id="keyPressUp"
			className="d-flex justify-content-center align-items-center m-2"
		>
			<span className="key-press-up small text-center">
				press + hold any key
				<br /> (except 'shift', 'fn', and 'capslock')
			</span>
		</div>
	</div>
)

export default class App extends Component {
	constructor(props) {
		super(props)
		this.onClick = this.onClick.bind(this)
		this.onDoubleClick = this.onDoubleClick.bind(this)
		this.onMouseUp = this.onMouseUp.bind(this)
		this.onMouseDown = this.onMouseDown.bind(this)
		this.onMouseEnter = this.onMouseEnter.bind(this)
		this.onMouseLeaveEnter = this.onMouseLeaveEnter.bind(this)
		this.onMouseOver = this.onMouseOver.bind(this)
		this.onMouseLeaveOver = this.onMouseLeaveOver.bind(this)
		this.onMouseMove = this.onMouseMove.bind(this)
	}

	onClick() {
		// I like using jQuey instead of event.innerHTML since it's clearer of what it's doing,
		// innerHTML is also a bit dangerous as it's vulnerable from cross-site scripting (XSS)
		$(".clicks").html("clicked")
		$(".clicks").addClass("green")
		setTimeout(
			() => {
				$(".clicks").html("click / double click here")
				$(".clicks").removeClass("green")
			},
			800,
		)
	}

	onDoubleClick() {
		$(".clicks").html("double clicked")
		$(".clicks").addClass("green")
		setTimeout(
			() => {
				$(".clicks").html("click / double click here")
				$(".clicks").removeClass("green")
			},
			800,
		)
	}

	onMouseUp() {
		$(".mouse-up-down").html("mouseup")
		$(".mouse-up-down").addClass("red")
		setTimeout(
			() => {
				$(".mouse-up-down").html("click + hold here")
				$(".mouse-up-down").removeClass("red")
				$(".mouse-up-down").removeClass("green")
			},
			800,
		)
	}

	onMouseDown() {
		$(".mouse-up-down").html("mousedown")
		$(".mouse-up-down").addClass("green")
	}

	onMouseEnter() {
		clearTimeout(timeout)
		$(".mouse-enter-leave").html("mouseenter")
		$(".mouse-enter-leave").addClass("green")
		const timeout = setTimeout(
			() => {
				$(".mouse-enter-leave").html("enter / leave here")
				$(".mouse-enter-leave").removeClass("green")
			},
			800,
		)
		return timeout
	}

	onMouseLeaveEnter() {
		clearTimeout(timeout)
		$(".mouse-enter-leave").html("mouseleave")
		$(".mouse-enter-leave").addClass("red")
		const timeout = setTimeout(
			() => {
				$(".mouse-enter-leave").html("enter / leave here")
				$(".mouse-enter-leave").removeClass("red")
			},
			800,
		)
		return timeout
	}

	onMouseOver() {
		$(".mouse-over-leave").html("mouseover")
		$(".mouse-over-leave").addClass("green")
	}

	onMouseLeaveOver() {
		$(".mouse-over-leave").html("mouseleave")
		$(".mouse-over-leave").addClass("red")
		setTimeout(
			() => {
				$(".mouse-over-leave").html("hover / leave here")
				$(".mouse-over-leave").removeClass("red")
				$(".mouse-over-leave").removeClass("green")
			},
			800,
		)
	}

	onMouseMove() {
		clearTimeout(timeout)
		$(".mouse-move").html("mousemove")
		$(".mouse-move").addClass("green")
		const timeout = setTimeout(
			() => {
				$(".mouse-move").html("move on here")
				$(".mouse-move").removeClass("green")
			},
			800,
		)
		return timeout
	}

	render() {
		return (
			<div
				id="wrapper"
				className="d-flex flex-wrap justify-content-center align-items-start w-100"
			>
				<Helmet>
					<title>Mouse & Keyboard Event Detector</title>
					<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
				</Helmet>

				{/* Mouse Events */}
				<MouseEvents
					onClick={this.onClick}
					onDoubleClick={this.onDoubleClick}
					onMouseUp={this.onMouseUp}
					onMouseDown={this.onMouseDown}
					onMouseEnter={this.onMouseEnter}
					onMouseLeaveEnter={this.onMouseLeaveEnter}
					onMouseOver={this.onMouseOver}
					onMouseLeaveOver={this.onMouseLeaveOver}
					onMouseMove={this.onMouseMove}
				/>

				{/* Keyboard Events */}
				<KeyboardEvents />

				<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
				<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
				<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>
			</div>
		)
	}
}

// keyboard + scroll event listener
// I wrote them separately because it needs to target the whole element/ducument
$(() => {
	$(document).on("wheel", (e) => {
		(e.originalEvent.wheelDelta === 120) ?
			$(() => {
				$(".scrolls").html("scrolled up")
				$(".scrolls").addClass("green")
				setTimeout(
					() => {
						$(".scrolls").html("scroll anywhere in page")
						$(".scrolls").removeClass("green")
					},
					800,
				)
			})
			:
			$(() => {
				$(".scrolls").html("scrolled down")
				$(".scrolls").addClass("green")
				setTimeout(
					() => {
						$(".scrolls").html("scroll anywhere in page")
						$(".scrolls").removeClass("green")
					},
					800,
				)
			})
	})
	$(document).on("keyup", () => {
		$(".key-up-down, .key-press-up").html("keyup")
		$(".key-up-down, .key-press-up").addClass("red")
		setTimeout(
			() => {
				$(".key-up-down").html("press any key")
				$(".key-press-up").html("press + hold any key <br />(except 'shift', 'fn', and 'capslock')")
				$(".key-up-down, .key-press-up").removeClass("red")
				$(".key-up-down, .key-press-up").removeClass("green")
			},
			800,
		)
	})
	$(document).on("keydown", () => {
		$(".key-up-down").html("keydown")
		$(".key-up-down").addClass("green")
	})
	$(document).on("keypress", () => {
		$(".key-press-up").html("keypress")
		$(".key-press-up").addClass("green")
	})
})
