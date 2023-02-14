import React from "react";
import AboutHeader from "../Components/About/AboutHeader";
import AboutButton from "../Elements/About/AboutButton";
import AboutHeadline from "../Elements/About/AboutHeadline";
import AboutQuestionTitle from "../Elements/About/AboutQuestionTitle";
import AboutQuestionAnswer from "../Elements/About/AboutQuestionAnswer";
import AboutImg from "../Elements/About/AboutImg";
import { RiInstagramLine, RiLinkedinBoxFill, RiMailLine } from "react-icons/ri";

function About({ uiState, setUiState }) {
    let questionOne = "";
    let answerOne =
        "";
    let questionTwo = "Designed by Priyanshu Bharti";
    let answerTwo =
        "";

    return (
        <div className={`about ${uiState.aboutShown ? "" : "about--hidden"}`}>
            <AboutHeader uiState={uiState} setUiState={setUiState} />
            <div className="about__wrapper">
                {/* Need our headline */}
                <div className="about-group">
                    <p>Hey There,</p>
                    <AboutHeadline content="Welcome to ChillyPopper!" />
                </div>
                {/* Need img */}
                <AboutImg />
                {/* Need Questions */}
                <div className="about-group">
                    <AboutQuestionTitle content={questionOne} />
                    <AboutQuestionAnswer content={answerOne} />
                </div>
                <div className="about-group">
                    <AboutQuestionTitle content={questionTwo} />
                    <AboutQuestionAnswer content={answerTwo} />
                </div>

                <hr />

                {/* Second Headline */}
                <div className="about-group">
                    <p>Priyanshu's</p>
                    <AboutHeadline content="Socials" />
                </div>

                {/* Socials */}
                <div className="about-socials">
                    <div className="about-socials-group">
                        <RiInstagramLine className="about-socials-icon" />
                        <p className="about-socials-text">@_priyanshubharti</p>
                    </div>
                    <div className="about-socials-group">
                        <RiLinkedinBoxFill className="about-socials-icon" />
                        <p className="about-socials-text">
                            /in/priyanshubharti
                        </p>
                    </div>
                    <div className="about-socials-group">
                        <RiMailLine className="about-socials-icon" />
                        <p className="about-socials-text">
                            priyanshub25dev@gmail.com
                        </p>
                    </div>
                </div>

                <hr />
                {/* Third Headline */}
                <div className="about-group">
                    <p>Like what you saw?</p>
                    <AboutHeadline content="See his work!" />
                </div>
                {/* Portfolio Button */}
                <AboutButton />
            </div>
        </div>
    );
}

export default About;
