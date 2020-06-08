import React, { useState } from 'react'
import getElephant from '../business/fifo_lifo.js'

function CreateItem(props) {
    
    function onGetRandom() {
        getElephant()
    }

    function focusElement(name) {
        const el = document.querySelector(`[id=${name}]`);
        el.focus();
        el.select();
    }

    function onLIFO() {
        const elephant = {}
        const inputs = document.getElementsByTagName('input')
        const aboutTxt = document.getElementById('about')

        for (let i = 0; i < inputs.length; i++){
            elephant[inputs[i].id] = inputs[i].value
        }

        elephant[aboutTxt.id] = aboutTxt.value

        try {
            if (!elephant.name) {
                focusElement('name')
                throw new Error('Please enter a name')
            }
            if (!elephant.species) {
                focusElement('species')
                throw new Error('Please enter a species')
            }
            if (!elephant.gender) {
                focusElement('gender')
                throw new Error('Please enter a gender')
            }
            if (!aboutTxt.value) {
                focusElement('about')
                throw new Error('Please enter some info')
            }
            props.addToLIFO(elephant)
            props.userMsg(`Added ${elephant.name} to LIFO`)
            props.LIFOMsg('')
            clear()
        } catch (e) {
            props.userMsg(e.message, 'error')
        }
    }

    function clear() {
        document.getElementById('name').value = ''
        document.getElementById('gender').value = ''
        document.getElementById('species').value = ''
        document.getElementById('about').value = ''
    }

    return (
        <div id='createBox'>
            <p>{props.message}</p>
            <label htmlFor='name'>Name: </label>
            <input id='name' type='text' placeholder='Enter name'></input>
            <br></br>
            <label htmlFor='species'>Species: </label>
            <input id='species' type='text' placeholder='Enter species'></input>
            <br></br>
            <label htmlFor='gender'>Gender: </label>
            <input id='gender' type='text' placeholder='Enter gender'></input>
            <br></br>
            <label htmlFor='about'>About: </label>
            <textarea id='about' type='text' placeholder='Enter about'></textarea>
            <br></br>
            <button onClick={onGetRandom}>Get Random</button>
            <button onClick={clear}>Reset</button>
            <br></br>
            <button>Add FIFO</button>
            <button onClick={onLIFO}>Add LIFO</button>
        </div>
    )
}

export default CreateItem