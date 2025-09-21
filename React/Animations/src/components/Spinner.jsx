import { useSpring, animated } from '@react-spring/web';

export function Spinner() {
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },   // <--- you missed "to"
        config: { duration: 1000 } // optional, for smoothness
    });

    return (
        <animated.div style={style}>
            Animated with react-spring!
        </animated.div>
    );
}
