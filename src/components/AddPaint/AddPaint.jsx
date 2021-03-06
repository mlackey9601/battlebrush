import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';
import './AddPaint.css';

class AddPaint extends Component {
    state = {
        formData: {
            colorName: '',
            paintType: '',
            isOwned: false,
        },
        displayColorPicker: false,
        color: {
            r: '255',
            g: '54',
            b: '54',
            a: '100'
        }
    };

    handleChange = (e) => {
        if(e.target.name === 'isOwned'){
            e.target.value = !this.state.formData.isOwned
        }this.setState({
            formData: {...this.state.formData,[e.target.name]:e.target.value}
        })
    };

    handleSubmit = (e) => {
        e.preventDefault()
        let allData = this.state.formData
        allData['color'] = this.state.color
        this.props.handleAddPaint(allData)
    };

    handleClick = () => {
        this.setState({ 
            displayColorPicker: !this.state.displayColorPicker
        })
    };
    
    handleClose = () => {
        this.setState({
            displayColorPicker: false
        })
    };

    handleColorChange = (color) => {
        this.setState({
            color: color.rgb
        })
    };

    render() {
        const styles = reactCSS({
            'default': {
                color: {
                    width: '8vmin',
                    height: '3.5vmin',
                    border: 'none',
                    borderRadius: '.5vmin',          
                    background: `rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`,
                },
                swatch: {
                    padding: '5px',
                    background: '#fff',
                    border: 'none',
                    borderRadius: '.5vmin',
                    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                    display: 'inline-block',
                    cursor: 'zoom-in',
                },
                popover: {
                    position: 'absolute',
                    zIndex: '2',
                },
                cover: {
                    position: 'fixed',
                    top: '0px',
                    right: '0px',
                    bottom: '0px',
                    left: '0px',
                },
            },
        });

        return (
            <>
                <center>
                <div className="title">
                    <h2>Add a Paint</h2>
                </div>
                <form
                    className="form"
                    onSubmit={this.handleSubmit}
                >
                    <span>Paint Name</span>
                    <input
                        className="input"
                        type="text"
                        name="colorName"
                        value={this.state.formData.colorName}
                        onChange={this.handleChange}
                        autoComplete="off"
                    />
                    <br></br>
                    <span>Color</span>
                    <div className="swatch">
                        <div
                            style={ styles.swatch }
                            onClick={ this.handleClick }
                        >
                        <div 
                            style={ styles.color }
                        />
                        </div>
                        { this.state.displayColorPicker ? 
                            <div
                                style={ styles.popover }
                            >
                            <div 
                                style={ styles.cover }
                                onClick={ this.handleClose }
                            />
                            <SketchPicker
                                color={ this.state.color } onChange={ this.handleColorChange }
                            />
                            </div> 
                        : 
                            null
                        }
                    </div>
                    <br></br>
                    <span>Type</span>
                    <select
                        className="select"
                        type="text"
                        name="paintType"
                        onChange={this.handleChange}
                    >
                        <option>-</option>
                        <option>Base</option>
                        <option>Shade</option>
                        <option>Layer</option>
                        <option>Edge</option>
                        <option>Glaze</option>
                        <option>Technical</option>
                        <option>Contrast</option>
                        <option>Primer</option>
                    </select>
                    <br></br>
                    <span>In Collection?&nbsp;&nbsp;
                    <input
                        className="check"
                        type="checkbox"
                        name="isOwned"
                        value={this.state.formData.isOwned}
                        onChange={this.handleChange}
                    />
                    </span>
                    <br></br>
                    <input
                        className="btn"
                        type="submit"
                        value="ADD"
                    />
                </form>
                </center>
            </>
        );
    };
};

export default AddPaint;
