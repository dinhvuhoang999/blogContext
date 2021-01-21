import React from 'react'
import "./style.css"
import { useForm } from 'react-hook-form';
function Form() {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <div class="FormContact">
                <div class="container">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            name="sentMessage" id="contactForm" novalidate="">
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls">
                                    <label>Name</label>
                                    <input
                                        name="name"
                                        type="text" class="form-control" placeholder="Name" id="name" required="" data-validation-required-message="Please enter your name."
                                        ref={register({ required: true, minLength: { value: 5, message: "pls enter at least 5 character" } })}
                                    />
                                    {errors.name && <p class="character">{errors.name.message}</p>}

                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls">
                                    <label>Email Address</label>
                                    <input
                                        name="email"
                                        ref={register({
                                            required: "Required",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "pls enter rigth email"
                                            }
                                        })}
                                        type="email" class="form-control" placeholder="Email Address" id="email" required="" data-validation-required-message="Please enter your email address." />
                                    {errors.email && <p class="character">{errors.email.message}</p>}
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group col-xs-12 floating-label-form-group controls">
                                    <label>Phone Number</label>
                                    <input
                                        name='phone'
                                        ref={register({
                                            required: "Required",
                                            pattern: {
                                                value: /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,
                                                message: "pls enter number"
                                            }
                                        })}
                                        type="tel" class="form-control" placeholder="Phone Number" id="phone" required="" data-validation-required-message="Please enter your phone number." />
                                    {errors.phone && <p class="character">{errors.phone.message}</p>}
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <div class="form-group floating-label-form-group controls">
                                    <label>Message</label>
                                    <textarea
                                        name="Message"
                                        ref={register({
                                            required: "Required",
                                            pattern: {
                                                value: /^[a-z0-100_-]{3,16}$/,
                                                message: "pls dont endter special character"
                                            }
                                        })}
                                        rows="5" class="form-control" placeholder="Message" id="message" required="" data-validation-required-message="Please enter a message."></textarea>
                                    {errors.Message && <p class="character">{errors.Message.message}</p>}
                                    <p class="help-block text-danger"></p>
                                </div>
                            </div>
                            <div id="success"></div>
                            <div class="btnsend">
                                <div class="clearfix">
                                    <button type="submit" class="btn btn-primary" id="sendMessageButton">Send</button>
                                </div>
                                <hr class="hr-send" />
                            </div>


                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Form;