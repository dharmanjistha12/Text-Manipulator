import React, { useState } from 'react'
export default function TextForm(props) {
	const handleUpClick = () => {
		let newText = text.toUpperCase();
		setText(newText);
		props.alertFunc('Converted to  upper case', 'Success')
	}
	const handleLowClick = () => {
		let newText = text.toLowerCase();
		setText(newText);
		props.alertFunc('Converted to lower case', 'Success')
	}
	const handleChange = (event) => {
		setText(event.target.value);
	}
	const handleFindChange = (event) => {
		setfw(event.target.value);
	}
	const handlereplaceChange = (event) => {
		setrw(event.target.value);
	}
	const handleRplc = () => {
		let newtext = text.toLowerCase().replaceAll(fw, rw);
		setText(newtext);
		props.alertFunc('Specified word has been replaced', 'Success')
	}
	const handleTrim = () => {
		let newText = text.split(/[ ]+/);
		setText(newText.join(" "));
		props.alertFunc('All extra spaces has been removed', 'Success')
	}
	const handleDelete = () => {
		let newText = '';
		setText(newText);
		props.alertFunc('Text cleared', 'Success')
	}
	const [text, setText] = useState('')
	const [fw, setfw] = useState('')
	const [rw, setrw] = useState('')
	return (
		<>
			<div className='myDiv'>
				<h5 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h5><div className="mb-3">
					<textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(63, 33, 33)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="6"></textarea>
				</div>
				<button type="button" className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to UpperCase</button>
				<button type="button" className="btn btn-secondary mx-1" onClick={handleLowClick}>Convert to LowerCase</button>
				<button type="button" className="btn btn-success mx-1" onClick={handleTrim}>Trim Extra Spaces</button>
				<button type="button" className="btn btn-warning mx-1" onClick={handleDelete}>Delete</button>
			</div>
			<div className='container my-3'>
				<h6 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Your text summary</h6>
				<p className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>{text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} and {text.length} characters	|	{0.008 * text.split(/\s+/).filter((ele)=>{return ele.length!==0}).length} minutes read</p>
				<h5 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Enter word to be replaced</h5>
				<div className="mb-3">
					<textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(63, 33, 33)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={fw} onChange={handleFindChange} id="exampleFormControlTextarea1" rows="1"></textarea>
					<h5 className={`text-${props.mode === 'light' ? 'dark' : 'light'}`}>Enter replaced word</h5>
					<div className="mb-3">
						<textarea className="form-control" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(63, 33, 33)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={rw} onChange={handlereplaceChange} id="exampleFormControlTextarea1" rows="1"></textarea>
						<button type="button" className="btn btn-danger my-4 rplcBtn" onClick={handleRplc}>Replace All</button>
					</div>
				</div>
			</div>
		</>
	);
}
