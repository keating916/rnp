import React, { Component } from 'react'
import axios from 'axios';

import styles from '../styles/ContactForm.module.css'

export default class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            contactEmail:"",
            contactPhone: "",
            comments: "",
            submitted: false,
            error: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            ...this.state,
            [evt.target.name]: evt.target.value
        })
    }

    handleSubmit(evt) {
        evt.preventDefault()
        let { fname, lname, contactEmail, contactPhone, comments } = this.state
        let params = {fname: fname, lname:lname, contactEmail:contactEmail, contactPhone:contactPhone, comments:comments }
        this.setState({
            ...this.state, 
            error: false
        })
        axios.post('/api/email', {params})
        .then(response => {
            if(response.data === 'OK') {
                this.setState({
                    ...this.state,
                    submitted: true,
                })
            }
        }).catch(error => {
            console.log(error);
            this.setState({
                ...this.state, 
                error: true
            })
        })
    }

    render() {
        let { fname, lname, contactEmail, contactPhone, address, pcm,  error } = this.state

        let d = (fname !== "" && lname !== "" && contactEmail !== "" && contactPhone !== "" && address !== "" && pcm !== "") ? false : true
        if(!this.state.submitted) {
            return (
                <div className={styles.main}>
                    <div className={styles.textCenter}>
                        <h3>Quick Contact</h3>
                            {error ? <p className={styles.error}>There has been an error, please try again later</p> : <p>&nbsp;</p>}
                            <form className={styles.formContainer} action='none'>
                                <input className={styles.formControl} type="text" name="fname" placeholder="First Name" value={this.state.fname} onChange={this.handleChange} required />
                                <input className={styles.formControl} type="text" name="lname" placeholder="Last Name"  value={this.state.lname} onChange={this.handleChange}  required />
                                <input className={styles.formControl} type="email" name="contactEmail" placeholder="Email: you@yourdomain.com"  value={this.state.contactEmail} onChange={this.handleChange}  required />
                                <input className={styles.formControl} type="tel" name="contactPhone" placeholder="Phone: 111-111-1111"  value={this.state.contactPhone}  required onChange={this.handleChange}  />
                                <textarea name="comments" className={`${styles.contactTextArea}`} placeholder="Comments" value={this.state.comments } onChange={this.handleChange}  ></textarea>
                                <button className={styles.submitButton} type="submit" disabled={d} onClick={evt => this.handleSubmit(evt)}>Submit</button>
                            </form>
                    </div>
                </div>
            )
        }else {
            return(
                <main className={styles.main}>
                    <div className={styles.textCenter}>
                        <div className={styles.formContainer}>
                            <h3>Quick Contact</h3>
                            <p>Thank you, your contact form has been submitted!</p>
                        </div>
                    </div>
                </main>
            )
        }
    }
}