import React, { Component } from "react"

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery"
import "popper.js"
import "bootstrap/dist/js/bootstrap.min"

import $ from "jquery"

import "./App.scss"

export default class App extends Component {
	render() {
		return (
			<div
				className="d-flex flex-wrap justify-content-center align-items-start w-100"
				style={{
					background: "rgb(240,240,240)",
				}}
			>
				<div
					className="d-flex flex-column justify-content-center align-items-center p-2 m-2"
					style={{
						background: "#fff",
					}}
				>
					<h5>Mouse Events</h5>
					<div
						className="d-flex justify-content-center align-items-center m-2"
						style={{
							width: "150px",
							height: "150px",
							background: "rgb(210,210,210)",
						}}
						onClick={() => {
							$(".clicks").html("clicked")
							$(".clicks").addClass("green")
							setTimeout(
								() => {
									$(".clicks").html("click / double click this element")
									$(".clicks").removeClass("green")
								},
								800,
							)
						}}
						onDoubleClick={() => {
							$(".clicks").html("double clicked")
							$(".clicks").addClass("green")
							setTimeout(
								() => {
									$(".clicks").html("click / double click this element")
									$(".clicks").removeClass("green")
								},
								800,
							)
						}}
					>
						<span
							className="clicks small text-center"
						>
							click / double click this element
						</span>
					</div>
					<div
						className="d-flex justify-content-center align-items-center m-2"
						style={{
							width: "150px",
							height: "150px",
							background: "rgb(210,210,210)",
						}}
						onMouseUp={() => {
							$(".mouse-up-down").html("mouseup")
							$(".mouse-up-down").addClass("red")
							setTimeout(
								() => {
									$(".mouse-up-down").html("click & hold this element")
									$(".mouse-up-down").removeClass("red")
									$(".mouse-up-down").removeClass("green")
								},
								800,
							)
						}}
						onMouseDown={() => {
							$(".mouse-up-down").html("mousedown")
							$(".mouse-up-down").addClass("green")
						}}
					>
						<span
							className="mouse-up-down small text-center"
						>
							click & hold this element
						</span>
					</div>
					<div
						className="d-flex justify-content-center align-items-center m-2"
						style={{
							width: "150px",
							height: "150px",
							background: "rgb(210,210,210)",
						}}
						onMouseLeave={() => {
							clearTimeout(timeout)
							$(".mouse-enter-leave").html("mouseleave")
							$(".mouse-enter-leave").addClass("red")
							const timeout = setTimeout(
								() => {
									$(".mouse-enter-leave").html("enter / leave this element")
									$(".mouse-enter-leave").removeClass("red")
								},
								800,
							)
							timeout
						}}
						onMouseEnter={() => {
							clearTimeout(timeout)
							$(".mouse-enter-leave").html("mouseenter")
							$(".mouse-enter-leave").addClass("green")
							const timeout = setTimeout(
								() => {
									$(".mouse-enter-leave").html("enter / leave this element")
									$(".mouse-enter-leave").removeClass("green")
								},
								800,
							)
							timeout
						}}
					>
						<span
							className="mouse-enter-leave small text-center"
						>
							enter / leave this element
						</span>
					</div>
					<div
						className="d-flex justify-content-center align-items-center m-2"
						style={{
							width: "150px",
							height: "150px",
							background: "rgb(210,210,210)",
						}}
						onMouseOver={() => {
							$(".mouse-over-leave").html("mouseover")
							$(".mouse-over-leave").addClass("green")
						}}
						onMouseLeave={() => {
							$(".mouse-over-leave").html("mouseleave")
							$(".mouse-over-leave").addClass("red")
							setTimeout(
								() => {
									$(".mouse-over-leave").html("hover / leave this element")
									$(".mouse-over-leave").removeClass("red")
									$(".mouse-over-leave").removeClass("green")
								},
								800,
							)
						}}
					>
						<span
							className="mouse-over-leave small text-center"
						>
							hover / leave this element
						</span>
					</div>
					<div
						className="d-flex justify-content-center align-items-center m-2"
						style={{
							width: "150px",
							height: "150px",
							background: "rgb(210,210,210)",
						}}
						onMouseMove={() => {
							clearTimeout(timeout)
							$(".mouse-move").html("mousemove")
							$(".mouse-move").addClass("green")
							const timeout = setTimeout(
								() => {
									$(".mouse-move").html("move on this element")
									$(".mouse-move").removeClass("green")
								},
								800,
							)
							timeout
						}}
					>
						<span
							className="mouse-move small text-center"
						>
							move on this element
						</span>
					</div>
				</div>
				<div
					className="d-flex flex-column justify-content-center align-items-center p-2 m-2"
					style={{
						background: "#fff",
					}}
				>
					<h5>Keyboard Events</h5>
					<div
						className="d-flex justify-content-center align-items-center m-2"
						style={{
							width: "150px",
							height: "150px",
							background: "rgb(210,210,210)",
						}}
					>
						<span className="scrolls small text-center">
							scroll anywhere in page
						</span>
					</div>
					<div
						className="d-flex justify-content-center align-items-center m-2"
						style={{
							width: "150px",
							height: "150px",
							background: "rgb(210,210,210)",
						}}
					>
						<span className="key-up-down small text-center">
							press any key
						</span>
					</div>
					<div
						className="d-flex justify-content-center align-items-center m-2"
						style={{
							width: "150px",
							height: "150px",
							background: "rgb(210,210,210)",
						}}
					>
						<span className="key-press-up small text-center">
							press any key <br />
							(except 'shift', 'fn', 'capslock')
						</span>
					</div>
				</div>
			</div>
		)
	}
}

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
				$(".key-press-up").html("press any key <br />(except 'shift', 'fn', 'capslock')")
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
