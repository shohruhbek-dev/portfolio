import React, { useState } from "react";
import clsx from "clsx";
import cn from "./style.module.scss"
import MessageCard from "../../components/section/messagePut";
import ShowMessage from "../../components/section/showMessage";
import Dropdown from "../../components/card/dropdown";


function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    return (
        <div className={clsx(cn["contact"])}>
            <div className={clsx(cn["contactLeftBAr"])}>
                <Dropdown mainText={<><i className="fa-solid fa-caret-down"></i> contacts</>} dropdownItems={[
                    <a href="#"><i className="fa-solid fa-envelope"></i> user@gmail.com</a>,
                    <a href="#"><i className="fa-solid fa-phone"></i> +3598246359</a>
                ]}></Dropdown>
                <Dropdown mainText={<><i className="fa-solid fa-caret-down"></i> find-me-also-in</>} dropdownItems={[
                    <a href="#"><i className="fa-solid fa-up-right-from-square"></i> YouTube channel</a>,
                    <a href="#"><i className="fa-solid fa-up-right-from-square"></i> GuruShots profile</a>,
                    <a href="#"><i className="fa-solid fa-up-right-from-square"></i> Instagram account</a>,
                    <a href="#"><i className="fa-solid fa-up-right-from-square"></i> Twitch profile</a>,
                ]}></Dropdown>
            </div>
            <div className={clsx(cn["contacttop"])}> <p>contacts</p></div>
            <div className={clsx(cn["contactCenter1"])}>
                <MessageCard formData={formData} setFormData={setFormData} />
            </div>
            <div className={clsx(cn["contactCenter2"])}>

                <ShowMessage formData={formData} />
            </div>
        </div>
    );
}

export default Contact;
