function Button({ shuffleColor, light }) {
    return <button onClick={shuffleColor}
        className={light ? 'light-button' : 'dark-button'}>
        Refresh
    </button>;
}
export default Button;
