import React from 'react'
import getElephant from '../business/fifo_lifo.js'

function CreateItem(props) {

    async function onGetRandom() {
        await getElephant()
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

        for (let i = 0; i < inputs.length; i++) {
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

    function onFIFO() {
        const elephant = {}
        const inputs = document.getElementsByTagName('input')
        const aboutTxt = document.getElementById('about')

        for (let i = 0; i < inputs.length; i++) {
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
            props.addToFIFO(elephant)
            props.userMsg(`Added ${elephant.name} to FIFO`)
            props.FIFOMsg('')
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
            <label className='labelz' htmlFor='name'>Name: </label>
            <input className='inputz' id='name' type='text' placeholder='Enter name'></input>
            <br></br>
            <label className='labelz' htmlFor='species'>Species: </label>
            <input className='inputz' id='species' type='text' placeholder='Enter species'></input>
            <br></br>
            <label className='labelz' htmlFor='gender'>Gender: </label>
            <input className='inputz' id='gender' type='text' placeholder='Enter gender'></input>
            <br></br>
            <label className='labelz' htmlFor='about'>About: </label>
            <textarea className='textareaz' id='about' type='text' placeholder='Talk about your elephant!'></textarea>
            <br></br>
            <button className='buttonz' onClick={onGetRandom}>Get Random</button>
            <button className='buttonz' onClick={clear}>Reset</button>
            <br></br>
            <button className='buttonz' onClick={onLIFO}>Add LIFO</button>
            <button className='buttonz' onClick={onFIFO}>Add FIFO</button>
        </div>
    )
}

export default CreateItem