const Button = ({ buttonText, buttonAction }) => {
    return <button onClick={() => buttonAction()}>{buttonText}</button>;
};

export default Button;
